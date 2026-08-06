import berghaus from "@/assets/brand-berghaus.jpg";
import katin from "@/assets/brand-katin.jpg";
import nalgene from "@/assets/brand-nalgene.jpg";
import premivm from "@/assets/brand-premivm.jpg";
import salomon from "@/assets/brand-salomon.jpg";
import mcdavid from "@/assets/brand-mcdavid.jpg";

export type Brand = {
  slug: string;
  name: string;
  category: string;
  image: string;
  imageAlt: string;
  origin: string;
};

export const brands: Brand[] = [
  {
    slug: "berghaus",
    name: "Berghaus",
    category: "Outdoor Performance",
    image: berghaus,
    imageAlt: "Hiker wearing a technical shell on a rocky mountain ridge",
    origin: "United Kingdom",
  },
  {
    slug: "katin",
    name: "Katin",
    category: "California Lifestyle",
    image: katin,
    imageAlt: "Surfer walking along the shoreline with a surfboard",
    origin: "California, USA",
  },
  {
    slug: "nalgene",
    name: "Nalgene",
    category: "Hydration & Outdoor",
    image: nalgene,
    imageAlt: "Reusable Nalgene bottle beside outdoor hiking gear",
    origin: "New York, USA",
  },
  {
    slug: "premivm-caps",
    name: "PREMIVM CAPS",
    category: "Custom Headwear",
    image: premivm,
    imageAlt: "Premium custom caps arranged for an outdoor lifestyle shoot",
    origin: "Europe",
  },
  {
    slug: "salomon-snowboards",
    name: "Salomon Snowboards",
    category: "Snowboard Equipment",
    image: salomon,
    imageAlt: "Snowboarder riding through deep mountain snow",
    origin: "France",
  },
  {
    slug: "mcdavid",
    name: "McDavid",
    category: "Sports Protection",
    image: mcdavid,
    imageAlt: "Athlete wearing protective sports equipment during training",
    origin: "Illinois, USA",
  },
];
