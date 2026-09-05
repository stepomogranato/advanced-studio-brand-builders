import { createFileRoute } from "@tanstack/react-router";

import { TradeLandingPage } from "../components/trade/TradeLandingPage";
import { amplifiedTradePage } from "../lib/trade-materials";

export const Route = createFileRoute("/trade/amplified")({
  head: () => ({
    meta: [
      { title: "Amplified Trade Area | Advanced Studio" },
      { name: "robots", content: "noindex, nofollow, noarchive" },
      { name: "googlebot", content: "noindex, nofollow, noarchive" },
    ],
  }),
  component: AmplifiedTradePage,
});

function AmplifiedTradePage() {
  return <TradeLandingPage config={amplifiedTradePage} />;
}
