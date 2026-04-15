export type ProductStatus = "live" | "building";

export interface Product {
  name: string;
  tagline: string;
  description: string;
  accent: string;
  status: ProductStatus;
  url?: string;
  stack: string[];
}

export const products: Product[] = [
  {
    name: "KASHITE",
    tagline: "Track who borrowed what. Get it back.",
    description: "A dead-simple lending tracker for everyday life.",
    accent: "#E85D3A",
    status: "live",
    url: "https://kashite.kyren.app",
    stack: ["Next.js", "Supabase", "Stripe"],
  },
  {
    name: "YOMU",
    tagline: "AI reading assistant.",
    description: "Upload a book, ask questions, get insights powered by AI.",
    accent: "#5B8DEF",
    status: "live",
    url: "https://yomu.kyren.app",
    stack: ["Next.js", "Supabase", "Claude API"],
  },
  {
    name: "Phrasely",
    tagline: "Write better English.",
    description:
      "Context-aware writing suggestions. Learn why they work.",
    accent: "#4CAF82",
    status: "live",
    url: "https://phrasely.kyren.app",
    stack: ["Next.js", "Supabase", "Claude API"],
  },
  {
    name: "SABAKU",
    tagline: "ATC-inspired task management.",
    description:
      "Visual, spatial, decisive. Task strips like air traffic control.",
    accent: "#D4A853",
    status: "building",
    stack: ["Next.js", "Supabase", "DnD Kit"],
  },
];
