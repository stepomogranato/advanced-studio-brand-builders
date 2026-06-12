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
  description: string;
  origin: string;
  statement: string;
  overview: string;
  editorial: {
    label: string;
    title: string;
    body: string;
  }[];
};

export const brands: Brand[] = [
  {
    slug: "berghaus",
    name: "Berghaus",
    category: "Outdoor Performance",
    image: berghaus,
    imageAlt: "Hiker wearing a technical shell on a rocky mountain ridge",
    origin: "United Kingdom",
    description:
      "Placeholder introduction for Berghaus and its outdoor performance positioning.",
    statement: "BUILT FOR THE OUTSIDE.",
    overview:
      "Placeholder copy for the Berghaus partnership, market direction and future brand story.",
    editorial: [
      { label: "Positioning", title: "Mountain utility", body: "Placeholder copy for product positioning and brand expression." },
      { label: "Market", title: "Outdoor culture", body: "Placeholder copy for retail, audience and market development." },
      { label: "Activation", title: "In the field", body: "Placeholder copy for community, events and campaign activity." },
    ],
  },
  {
    slug: "katin",
    name: "Katin",
    category: "California Lifestyle",
    image: katin,
    imageAlt: "Surfer walking along the shoreline with a surfboard",
    origin: "California, USA",
    description:
      "Placeholder introduction for Katin and its California lifestyle positioning.",
    statement: "CALIFORNIA, EVERY DAY.",
    overview:
      "Placeholder copy for the Katin partnership, market direction and future brand story.",
    editorial: [
      { label: "Positioning", title: "Coastal heritage", body: "Placeholder copy for product positioning and brand expression." },
      { label: "Market", title: "Life by the water", body: "Placeholder copy for retail, audience and market development." },
      { label: "Activation", title: "Community first", body: "Placeholder copy for community, events and campaign activity." },
    ],
  },
  {
    slug: "nalgene",
    name: "Nalgene",
    category: "Hydration & Outdoor",
    image: nalgene,
    imageAlt: "Reusable Nalgene bottle beside outdoor hiking gear",
    origin: "New York, USA",
    description:
      "Placeholder introduction for Nalgene and its hydration and outdoor positioning.",
    statement: "MADE TO GO ANYWHERE.",
    overview:
      "Placeholder copy for the Nalgene partnership, market direction and future brand story.",
    editorial: [
      { label: "Positioning", title: "Everyday utility", body: "Placeholder copy for product positioning and brand expression." },
      { label: "Market", title: "Beyond the trail", body: "Placeholder copy for retail, audience and market development." },
      { label: "Activation", title: "Refill culture", body: "Placeholder copy for community, events and campaign activity." },
    ],
  },
  {
    slug: "premivm-caps",
    name: "PREMIVM CAPS",
    category: "Custom Headwear",
    image: premivm,
    imageAlt: "Premium custom caps arranged for an outdoor lifestyle shoot",
    origin: "Europe",
    description:
      "Placeholder introduction for PREMIVM CAPS and its custom headwear positioning.",
    statement: "HEADWEAR, MADE PERSONAL.",
    overview:
      "Placeholder copy for the PREMIVM CAPS partnership, market direction and future brand story.",
    editorial: [
      { label: "Positioning", title: "Custom by design", body: "Placeholder copy for product positioning and brand expression." },
      { label: "Market", title: "Teams and culture", body: "Placeholder copy for retail, audience and market development." },
      { label: "Activation", title: "Made to represent", body: "Placeholder copy for community, events and campaign activity." },
    ],
  },
  {
    slug: "salomon-snowboards",
    name: "Salomon Snowboards",
    category: "Snowboard Equipment",
    image: salomon,
    imageAlt: "Snowboarder riding through deep mountain snow",
    origin: "France",
    description:
      "Placeholder introduction for Salomon Snowboards and its snowboard performance positioning.",
    statement: "RIDE THE WHOLE MOUNTAIN.",
    overview:
      "Placeholder copy for the Salomon Snowboards partnership, market direction and future brand story.",
    editorial: [
      { label: "Positioning", title: "Rider driven", body: "Placeholder copy for product positioning and brand expression." },
      { label: "Market", title: "Mountain community", body: "Placeholder copy for retail, audience and market development." },
      { label: "Activation", title: "On snow", body: "Placeholder copy for community, events and campaign activity." },
    ],
  },
  {
    slug: "mcdavid",
    name: "McDavid",
    category: "Sports Protection",
    image: mcdavid,
    imageAlt: "Athlete wearing protective sports equipment during training",
    origin: "Illinois, USA",
    description:
      "Placeholder introduction for McDavid and its sports protection positioning.",
    statement: "PROTECTION IN MOTION.",
    overview:
      "Placeholder copy for the McDavid partnership, market direction and future brand story.",
    editorial: [
      { label: "Positioning", title: "Ready to perform", body: "Placeholder copy for product positioning and brand expression." },
      { label: "Market", title: "Across sport", body: "Placeholder copy for retail, audience and market development." },
      { label: "Activation", title: "Athlete tested", body: "Placeholder copy for community, events and campaign activity." },
    ],
  },
];

export const getBrand = (slug: string) => brands.find((b) => b.slug === slug);
