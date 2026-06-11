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
  description: string;
  origin: string;
};

export const brands: Brand[] = [
  {
    slug: "berghaus",
    name: "Berghaus",
    category: "Outdoor Performance",
    image: berghaus,
    origin: "United Kingdom",
    description:
      "Technical outdoor apparel and equipment engineered for mountain athletes and serious adventurers since 1966.",
  },
  {
    slug: "katin",
    name: "Katin",
    category: "California Lifestyle",
    image: katin,
    origin: "California, USA",
    description:
      "An authentic Southern California surf brand crafting boardshorts and lifestyle apparel since 1954.",
  },
  {
    slug: "nalgene",
    name: "Nalgene",
    category: "Hydration & Outdoor",
    image: nalgene,
    origin: "New York, USA",
    description:
      "Iconic, virtually indestructible bottles trusted by hikers, climbers and travelers worldwide.",
  },
  {
    slug: "premivm-caps",
    name: "PREMIVM CAPS",
    category: "Custom Headwear",
    image: premivm,
    origin: "Europe",
    description:
      "Premium custom headwear built for teams, brands and culture. Quality first. Built to last.",
  },
  {
    slug: "salomon-snowboards",
    name: "Salomon Snowboards",
    category: "Snowboard Equipment",
    image: salomon,
    origin: "France",
    description:
      "Boards, boots and bindings engineered by riders, for riders. Performance in every condition.",
  },
  {
    slug: "mcdavid",
    name: "McDavid",
    category: "Sports Protection",
    image: mcdavid,
    origin: "Illinois, USA",
    description:
      "Protective sports equipment trusted by professional athletes for nearly six decades.",
  },
];

export const getBrand = (slug: string) => brands.find((b) => b.slug === slug);
