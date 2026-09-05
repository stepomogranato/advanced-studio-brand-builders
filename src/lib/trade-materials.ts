import amplifiedCatalogueCover from "../assets/trade-amplified-catalogue-cover.jpg";

export type TradeMaterial = {
  label: string;
  href: string | null;
  status?: string;
};

export type TradePageConfig = {
  brand: string;
  collectionLabel: string;
  description: string;
  coverImage?: {
    src: string;
    alt: string;
  };
  catalogue: TradeMaterial;
  additionalMaterial: TradeMaterial;
  contactEmail: string;
};

export const amplifiedTradePage: TradePageConfig = {
  brand: "AMPLIFIED",
  collectionLabel: "Current Collection",
  description: "Download the latest Amplified collection materials.",
  coverImage: {
    src: amplifiedCatalogueCover,
    alt: "Cover of the Amplified Clothing Q1 2027 catalogue",
  },
  catalogue: {
    label: "CATALOGUE",
    href: "/trade-assets/amplified/amplified-catalogue.pdf",
  },
  additionalMaterial: {
    label: "ORDER FORM",
    href: "/trade-assets/amplified/amplified-order-form.xlsx",
  },
  contactEmail: "info@advancedstudio.eu",
};
