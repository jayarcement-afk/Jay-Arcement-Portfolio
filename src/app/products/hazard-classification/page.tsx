import type { Metadata } from "next";
import { Shell } from "@/components/shell";
import { hazard } from "@/lib/hazard";

export const metadata: Metadata = {
  title: hazard.title,
  description: hazard.dek,
};

export default function HazardClassificationPage() {
  return (
    <Shell current={hazard.href}>
      <article className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="font-mono text-[0.68rem] tracking-[0.16em] text-stamp uppercase">
          {hazard.kicker}
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-6xl">
          {hazard.title}
        </h1>
        <p className="mt-4 max-w-2xl font-sans text-lg leading-8 text-muted-foreground">
          UL’s first agentic customer solution.
        </p>
        <div className="mt-8 grid max-w-3xl gap-5">
          {hazard.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="font-sans text-base leading-7">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </Shell>
  );
}
