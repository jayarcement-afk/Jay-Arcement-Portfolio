export type ShelfEntry = {
  href:
    | "/press/phillips-66-mach-1-halo"
    | "/patents/us-12725481"
    | "/patents/us-12711285"
    | "/patents/us-20240005750";
  group: "releases" | "patents";
  kicker: string;
  title: string;
  dek: string;
  meta: string;
};

export const shelf: ShelfEntry[] = [
  {
    href: "/press/phillips-66-mach-1-halo",
    group: "releases",
    kicker: "Press release",
    title:
      "Phillips 66 and Mach 1 revolutionize their checkout experience with NCR Voyix Halo and Everseen",
    dek: "NCR Voyix said Halo, using Everseen vision AI, had been checking out baskets at a Phillips 66-branded Mach 1 station since November 2024. The announcement is dated January 10, 2025.",
    meta: "January 10, 2025 · Nasdaq",
  },
  {
    href: "/patents/us-12725481",
    group: "patents",
    kicker: "US 12,725,481 B2",
    title: "Personalized and themed transaction interface",
    dek: "A loyalty profile becomes a cached checkout theme. The terminal applies it when the shopper is recognized, then asks for a thumbs-up or thumbs-down.",
    meta: "Granted September 1, 2026 · NCR Voyix",
  },
  {
    href: "/patents/us-12711285",
    group: "patents",
    kicker: "US 12,711,285 B2",
    title: "Smart cart security with auditing",
    dek: "Cameras on the cart check high-value items against the scan. Audit points decide whether an attendant has to clear the basket before self-checkout finishes.",
    meta: "Granted August 18, 2026 · NCR Voyix",
  },
  {
    href: "/patents/us-20240005750",
    group: "patents",
    kicker: "US 2024/0005750 A1",
    title:
      "Event-triggered capture of item image data and generation and storage of enhanced item identification data",
    dek: "A scan or another item-identifying event at self-checkout triggers a photo. The image is stored with the item’s identity so the vision model can be retrained.",
    meta: "Published January 4, 2024 · NCR Voyix",
  },
];

export const workSections = [
  {
    id: "releases" as const,
    title: "Product Releases",
    lede: "Products that have been announced in public.",
  },
  {
    id: "patents" as const,
    title: "Patents and Projects",
    lede: "Granted patents and the published application. Later projects can sit in this list.",
  },
];
