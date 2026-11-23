import type { Metadata } from "next";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { urbanForager } from "@/lib/projects";

export const metadata: Metadata = {
  title: urbanForager.title,
  description: urbanForager.dek,
};

export default function UrbanForagerPage() {
  return (
    <Shell current={urbanForager.href}>
      <article className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="font-mono text-[0.68rem] tracking-[0.16em] text-stamp uppercase">
          {urbanForager.kicker}
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-6xl">
          {urbanForager.title}
        </h1>
        <p className="mt-4 max-w-2xl font-sans text-lg leading-8 text-muted-foreground">
          Know the tree. Return when it is ripe.
        </p>
        <div className="mt-8 grid max-w-3xl gap-5">
          {urbanForager.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="font-sans text-base leading-7">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-8">
          <Button
            nativeButton={false}
            render={
              <a href={urbanForager.external} target="_blank" rel="noreferrer">
                urban-forager.apps.grok.bot
              </a>
            }
          />
        </div>
      </article>
    </Shell>
  );
}
