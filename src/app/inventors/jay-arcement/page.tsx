import type { Metadata } from "next";
import { InventorPage } from "@/components/inventor-page";
import { inventor } from "@/lib/inventor";

export const metadata: Metadata = {
  title: "Jay Arcement, inventor",
  description: inventor.intro,
};

export default function Page() {
  return <InventorPage />;
}
