import { createFileRoute } from "@tanstack/react-router";

import { TradeLandingPage } from "../components/trade/TradeLandingPage";
import { furtherTradePage } from "../lib/trade-materials";

export const Route = createFileRoute("/trade/further")({
  head: () => ({
    meta: [
      { title: "FURTHER Trade Area | Advanced Studio" },
      { name: "robots", content: "noindex, nofollow, noarchive" },
      { name: "googlebot", content: "noindex, nofollow, noarchive" },
    ],
  }),
  component: FurtherTradePage,
});

function FurtherTradePage() {
  return <TradeLandingPage config={furtherTradePage} />;
}
