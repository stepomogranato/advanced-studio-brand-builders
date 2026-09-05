import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

type TradeAssetObject = {
  body: ReadableStream;
  size: number;
  httpEtag?: string;
  range?: { offset: number; length: number };
  writeHttpMetadata: (headers: Headers) => void;
};

type TradeAssetBucket = {
  get: (key: string, options?: { range?: Headers }) => Promise<TradeAssetObject | null>;
  head: (key: string) => Promise<Omit<TradeAssetObject, "body"> | null>;
};

type AnalyticsEngineDataset = {
  writeDataPoint: (event: { blobs?: string[]; doubles?: number[]; indexes?: string[] }) => void;
};

type WorkerEnvironment = {
  TRADE_ASSETS?: TradeAssetBucket;
  TRADE_ANALYTICS?: AnalyticsEngineDataset;
};

const TRADE_ASSET_PREFIX = "/trade-assets/";
const TRADE_EVENT_PATH = "/api/trade-event";
const ALLOWED_TRADE_ACTIONS = new Set([
  "view-catalogue",
  "download-catalogue",
  "download-order-form",
]);

function cleanAnalyticsValue(value: unknown, fallback: string, maxLength = 80) {
  if (typeof value !== "string") return fallback;
  const cleaned = value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9._-]/g, "-");
  return cleaned.slice(0, maxLength) || fallback;
}

function recordTradeEvent(
  request: Request,
  env: WorkerEnvironment,
  event: { action: string; brand: string; campaign?: string; path?: string },
) {
  if (!env.TRADE_ANALYTICS) return;

  const requestWithCf = request as Request & { cf?: { country?: string } };
  const country = cleanAnalyticsValue(requestWithCf.cf?.country, "unknown", 2);
  const action = cleanAnalyticsValue(event.action, "unknown");
  const brand = cleanAnalyticsValue(event.brand, "unknown");
  const campaign = cleanAnalyticsValue(event.campaign, "direct");
  const path = cleanAnalyticsValue(event.path, "/trade/unknown", 160);

  env.TRADE_ANALYTICS.writeDataPoint({
    blobs: [action, brand, campaign, country, path],
    doubles: [1],
    indexes: [brand],
  });
}

async function handleTradeEvent(request: Request, env: WorkerEnvironment) {
  const url = new URL(request.url);
  if (url.pathname !== TRADE_EVENT_PATH) return;
  if (request.method !== "POST") return new Response("Method not allowed", { status: 405 });

  let payload: { action?: unknown; brand?: unknown; campaign?: unknown; path?: unknown };
  try {
    payload = (await request.json()) as typeof payload;
  } catch {
    return new Response("Invalid event", { status: 400 });
  }

  if (typeof payload.action !== "string" || !ALLOWED_TRADE_ACTIONS.has(payload.action)) {
    return new Response("Invalid event", { status: 400 });
  }

  recordTradeEvent(request, env, {
    action: payload.action,
    brand: cleanAnalyticsValue(payload.brand, "unknown"),
    campaign: cleanAnalyticsValue(payload.campaign, "direct"),
    path: cleanAnalyticsValue(payload.path, "/trade/unknown", 160),
  });

  return new Response(null, {
    status: 204,
    headers: { "Cache-Control": "no-store" },
  });
}

async function serveTradeAsset(request: Request, env: WorkerEnvironment) {
  const url = new URL(request.url);
  if (!url.pathname.startsWith(TRADE_ASSET_PREFIX) || !env.TRADE_ASSETS) return;

  const key = decodeURIComponent(url.pathname.slice(TRADE_ASSET_PREFIX.length));
  if (!key || key.split("/").includes("..")) return new Response("Not found", { status: 404 });

  const object =
    request.method === "HEAD"
      ? await env.TRADE_ASSETS.head(key)
      : await env.TRADE_ASSETS.get(key, { range: request.headers });

  if (!object) return;

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("Accept-Ranges", "bytes");
  headers.set("Cache-Control", "public, max-age=3600");
  if (object.httpEtag) headers.set("ETag", object.httpEtag);

  const isPartialResponse =
    request.method !== "HEAD" && request.headers.has("Range") && Boolean(object.range);

  if (isPartialResponse && object.range) {
    const { offset, length } = object.range;
    headers.set("Content-Length", String(length));
    headers.set("Content-Range", `bytes ${offset}-${offset + length - 1}/${object.size}`);
  } else {
    headers.set("Content-Length", String(object.size));
  }

  return new Response("body" in object ? object.body : null, {
    status: isPartialResponse ? 206 : 200,
    headers,
  });
}

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const workerEnv = env as WorkerEnvironment;
      const tradeEventResponse = await handleTradeEvent(request, workerEnv);
      if (tradeEventResponse) return tradeEventResponse;

      const tradeAssetResponse = await serveTradeAsset(request, workerEnv);
      if (tradeAssetResponse) return tradeAssetResponse;

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      const url = new URL(request.url);
      if (
        request.method === "GET" &&
        url.pathname === "/trade/amplified" &&
        response.status < 400
      ) {
        recordTradeEvent(request, workerEnv, {
          action: "page-view",
          brand: "amplified",
          campaign: url.searchParams.get("campaign") ?? "direct",
          path: url.pathname,
        });
      }
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
