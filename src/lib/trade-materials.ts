export type TradeMaterial = {
  label: string;
  href: string | null;
  status?: string;
};

export type TradePageConfig = {
  brand: string;
  collectionLabel: string;
  description: string;
  catalogue: TradeMaterial;
  priceList: TradeMaterial;
  contactEmail: string;
};

export const amplifiedTradePage: TradePageConfig = {
  brand: "AMPLIFIED",
  collectionLabel: "Current Collection",
  description: "Download the latest Amplified collection materials.",
  catalogue: {
    label: "CATALOGUE",
    href: "/trade-assets/amplified/amplified-catalogue.pdf",
  },
  priceList: {
    label: "PRICE LIST",
    href: null,
    status: "COMING SOON",
  },
  contactEmail: "info@advancedstudio.eu",
};
