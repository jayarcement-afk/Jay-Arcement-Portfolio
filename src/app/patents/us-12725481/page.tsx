import type { Metadata } from "next";
import { PatentDocument } from "@/components/patent-document";
import { patents } from "@/lib/patents";

const doc = patents["/patents/us-12725481"];

export const metadata: Metadata = {
  title: `${doc.identifier} · ${doc.title}`,
  description: doc.description,
};

export default function Page() {
  return <PatentDocument doc={doc} />;
}
