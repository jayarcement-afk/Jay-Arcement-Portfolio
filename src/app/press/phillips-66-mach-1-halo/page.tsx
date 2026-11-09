import type { Metadata } from "next";
import { PressArticle } from "@/components/press-article";
import { press } from "@/lib/press";

export const metadata: Metadata = {
  title: "Phillips 66, Mach 1, and NCR Voyix Halo",
  description: press.summary,
};

export default function Page() {
  return <PressArticle />;
}
