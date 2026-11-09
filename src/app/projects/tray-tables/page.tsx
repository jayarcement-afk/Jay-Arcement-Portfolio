import type { Metadata } from "next";
import Image from "next/image";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { trayTables } from "@/lib/projects";

export const metadata: Metadata = {
  title: trayTables.title,
  description: trayTables.dek,
};

export default function TrayTablesPage() {
  return (
    <Shell current={trayTables.href}>
      <article className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="font-mono text-[0.68rem] tracking-[0.16em] text-stamp uppercase">
          {trayTables.kicker}
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-6xl">
          {trayTables.title}
        </h1>
        <p className="mt-4 max-w-2xl font-sans text-lg leading-8 text-muted-foreground">
          Eat like a local, anywhere.
        </p>
        <figure className="mt-8">
          <Image
            src="/images/tray-tables.jpg"
            alt="The Tray Tables homepage. A beach dinner table behind the line Eat like a local—anywhere."
            width={1440}
            height={1000}
            priority
            className="h-auto w-full rounded-3xl border border-border"
          />
          <figcaption className="mt-3 font-mono text-[0.68rem] tracking-wide text-muted-foreground">
            The first page of the live site.
          </figcaption>
        </figure>
        <div className="mt-8 grid max-w-3xl gap-5">
          {trayTables.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="font-sans text-base leading-7">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-8">
          <Button
            nativeButton={false}
            render={
              <a href={trayTables.external} target="_blank" rel="noreferrer">
                traytablesdining.com
              </a>
            }
          />
        </div>
      </article>
    </Shell>
  );
}
