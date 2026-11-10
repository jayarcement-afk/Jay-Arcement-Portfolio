export type ShelfDocument = {
  id: string;
  name: string;
  sizeBytes: number;
  href: string;
};

export const shelfDocuments: ShelfDocument[] = [
  {
    id: "11111111-1111-4111-8111-111111111111",
    name: "Press Release Halo Checkout Solution.pdf",
    sizeBytes: 319584,
    href: "/downloads/Press%20Release%20Halo%20Checkout%20Solution.pdf",
  },
  {
    id: "22222222-2222-4222-8222-222222222222",
    name: "Jay Arcement - Dir. of AI Product & GTM Strategy.docx",
    sizeBytes: 28212,
    href: "/downloads/Jay%20Arcement%20-%20Dir.%20of%20AI%20Product%20%26%20GTM%20Strategy.docx",
  },
];
