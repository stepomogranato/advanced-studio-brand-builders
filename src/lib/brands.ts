import berghaus from "@/assets/brand-berghaus-new.jpg";
import katin from "@/assets/brand-katin-new.jpg";
import nalgene from "@/assets/brand-nalgene-new.jpg";
import premivm from "@/assets/brand-premivm-new.jpg";
import salomon from "@/assets/brand-salomon-new.jpg";
import amplified from "@/assets/brand-amplified-new.jpg";

export type Brand = {
  slug: string;
  name: string;
  category: string;
  image: string;
  imageAlt: string;
  titleLines: string[];
  titleClassName: string;
  titleLineClassNames?: string[];
};

export const brands: Brand[] = [
  {
    slug: "berghaus",
    name: "Berghaus",
    category: "Outdoor Performance",
    image: berghaus,
    imageAlt: "Hiker wearing a technical shell on a rocky mountain ridge",
    titleLines: ["Berghaus"],
    titleClassName: "text-[3.45rem] md:text-[4.35rem] lg:text-[4.85rem]",
  },
  {
    slug: "katin",
    name: "Katin",
    category: "California Lifestyle",
    image: katin,
    imageAlt: "Surfer walking along the shoreline with a surfboard",
    titleLines: ["Katin"],
    titleClassName: "text-[4.2rem] md:text-[5.25rem] lg:text-[5.85rem]",
  },
  {
    slug: "nalgene",
    name: "Nalgene",
    category: "Hydration & Outdoor",
    image: nalgene,
    imageAlt: "Reusable Nalgene bottle beside outdoor hiking gear",
    titleLines: ["Nalgene"],
    titleClassName: "text-[3.65rem] md:text-[4.55rem] lg:text-[5.05rem]",
  },
  {
    slug: "premivm-caps",
    name: "PREMIVM CUSTOM HEADWEAR",
    category: "CUSTOM HEADWEAR",
    image: premivm,
    imageAlt: "Premium custom cap photographed on a warm wood tabletop",
    titleLines: ["PREMIVM", "Custom Headwear"],
    titleClassName: "text-[3.25rem] md:text-[4.1rem] lg:text-[4.6rem]",
    titleLineClassNames: ["", "mt-1 text-[0.42em] tracking-[-0.02em]"],
  },
  {
    slug: "salomon-snowboards",
    name: "Salomon Snowboards",
    category: "Snowboard Equipment",
    image: salomon,
    imageAlt: "Snowboarder riding through deep mountain snow",
    titleLines: ["Salomon", "Snowboards"],
    titleClassName: "text-[3.15rem] md:text-[3.95rem] lg:text-[4.35rem]",
  },
  {
    slug: "amplified",
    name: "Amplified",
    category: "Sports Protection",
    image: amplified,
    imageAlt: "Athlete wearing performance gear during training",
    titleLines: ["Amplified"],
    titleClassName: "text-[3.35rem] md:text-[4.25rem] lg:text-[4.75rem]",
  },
];
