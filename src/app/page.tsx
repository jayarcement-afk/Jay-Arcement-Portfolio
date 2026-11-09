import Link from "next/link";
import { Shell } from "@/components/shell";
import { savedOn } from "@/lib/archive";
import { shelf } from "@/lib/shelf";

export default function Home() {
  return (
    <Shell>
      <main className="mx-auto w-full max-w-3xl px-5 py-8 sm:px-8 sm:py-12 lg:py-14">
        <p className="font-mono text-[0.68rem] tracking-[0.16em] text-stamp uppercase">
          Portfolio
        </p>
        <h1 className="mt-3 max-w-2xl font-serif text-4xl leading-[1.12] tracking-tight text-balance sm:text-5xl">
          Jay Arcement’s checkout record, kept in one place.
        </h1>
        <p className="mt-5 max-w-2xl font-serif text-xl leading-9">
          A Nasdaq release about Phillips 66, Mach 1, and NCR Voyix Halo checkout.
          Two granted patents on themed self-checkout and smart-cart auditing.
          The inventor listing. And the 2024 application on event-triggered item images.
        </p>
        <p className="mt-4 max-w-2xl font-sans text-sm leading-6 text-muted-foreground">
          Saved {savedOn}, so the work is still here if those sites change.
          The two grants are the official USPTO files, stored in this project, with
          the full text beside each PDF. The inventor page keeps all six listings.
          The 2024 application keeps the published specification. The press page
          keeps the headline, the launch facts, the companies, and the contacts,
          and links to Nasdaq and Business Wire for the published wording.
        </p>
        <div className="mt-6 h-px bg-foreground" />
        <div className="mt-px h-px bg-foreground/30" />

        <ol className="mt-8 divide-y divide-border border-y border-border">
          {shelf.map((entry, index) => (
            <li key={entry.href}>
              <Link
                href={entry.href}
                className="group grid gap-2 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-4"
              >
                <span className="font-mono text-sm text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-mono text-[0.62rem] tracking-[0.14em] text-muted-foreground uppercase">
                    {entry.kicker}
                  </span>
                  <span className="mt-1 block font-serif text-2xl leading-snug tracking-tight group-hover:underline group-hover:decoration-stamp group-hover:underline-offset-4">
                    {entry.title}
                  </span>
                  <span className="mt-2 block font-serif text-[1.05rem] leading-7 text-foreground/90">
                    {entry.dek}
                  </span>
                  <span className="mt-3 block font-sans text-sm text-muted-foreground">
                    {entry.meta}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </main>
    </Shell>
  );
}
