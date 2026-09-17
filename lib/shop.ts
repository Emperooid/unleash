// Mock catalogue — front-end only. No backend/payments wired up yet;
// swap this for real product + order data when that's ready.

export type ProductCategory = "Books" | "Apparel" | "Accessories" | "Stationery";

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "Books",
  "Apparel",
  "Accessories",
  "Stationery",
];

export const PRODUCTS = [
  {
    slug: "unleash-hardcover",
    name: "UNLEASH — Hardcover",
    category: "Books" as ProductCategory,
    price: 12000,
    blurb: "The original blueprint, hardcover edition.",
    icon: "book-open",
  },
  {
    slug: "unleash-paperback",
    name: "UNLEASH — Paperback",
    category: "Books" as ProductCategory,
    price: 8000,
    blurb: "Same blueprint, lighter on the bag.",
    icon: "book-open",
  },
  {
    slug: "hub-hoodie",
    name: "Hub Hoodie",
    category: "Apparel" as ProductCategory,
    price: 25000,
    blurb: "Heavyweight cotton, embroidered wordmark.",
    icon: "shirt",
  },
  {
    slug: "hub-tee",
    name: "Hub Tee",
    category: "Apparel" as ProductCategory,
    price: 12000,
    blurb: "Everyday tee with the UNLEASH mark.",
    icon: "shirt",
  },
  {
    slug: "principle-cap",
    name: "Principle Cap",
    category: "Apparel" as ProductCategory,
    price: 9000,
    blurb: "Structured cap, one principle stitched inside.",
    icon: "hard-hat",
  },
  {
    slug: "tote-bag",
    name: "Everyday Tote",
    category: "Accessories" as ProductCategory,
    price: 7000,
    blurb: "Canvas tote, big enough for the book and then some.",
    icon: "shopping-bag",
  },
  {
    slug: "enamel-mug",
    name: "Enamel Mug",
    category: "Accessories" as ProductCategory,
    price: 6000,
    blurb: "For the daily reflection ritual.",
    icon: "coffee",
  },
  {
    slug: "water-bottle",
    name: "Steel Water Bottle",
    category: "Accessories" as ProductCategory,
    price: 8500,
    blurb: "Insulated steel, keeps you going.",
    icon: "cup-soda",
  },
  {
    slug: "reflection-journal",
    name: "Reflection Journal",
    category: "Stationery" as ProductCategory,
    price: 6500,
    blurb: "Guided prompts for the 12 principles.",
    icon: "notebook-pen",
  },
  {
    slug: "principle-card-deck",
    name: "Principle Card Deck",
    category: "Stationery" as ProductCategory,
    price: 5000,
    blurb: "One card per principle, for daily draw.",
    icon: "layers",
  },
];
