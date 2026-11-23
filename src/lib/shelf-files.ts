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
  {
    id: "33333333-3333-4333-8333-333333333333",
    name: "In Regulated Industries, AI Without Certainty Is Just Risk.png",
    sizeBytes: 2988584,
    href: "/downloads/In%20Regulated%20Industries%2C%20AI%20Without%20Certainty%20Is%20Just%20Risk.png",
  },
  {
    id: "44444444-4444-4444-8444-444444444444",
    name: "ULTRUS AI - New era. Same trust.png",
    sizeBytes: 5580320,
    href: "/downloads/ULTRUS%20AI%20-%20New%20era.%20Same%20trust.png",
  },
];
