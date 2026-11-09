import Link from "next/link";
import { Shell } from "@/components/shell";
import { savedOn } from "@/lib/archive";
import { shelf } from "@/lib/shelf";

export default function Home() {
  return (
    <Shell>
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="max-w-3xl">
          <p className="font-mono text-[0.68rem] tracking-[0.16em] text-stamp uppercase">
            Portfolio
          </p>
          <h1 className="mt-3 max-w-2xl font-serif text-4xl leading-[1.08] tracking-tight text-balance sm:text-5xl">
            Jay Arcement’s checkout record, kept in one place.
          </h1>
          <p className="mt-5 max-w-2xl font-sans text-lg leading-8">
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
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {shelf.map((entry, index) => (
            <li key={entry.href}>
              <Link
                href={entry.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                <span className="font-mono text-xs tracking-[0.14em] text-stamp uppercase">
                  {String(index + 1).padStart(2, "0")} · {entry.kicker}
                </span>
                <span className="mt-3 block font-serif text-2xl leading-snug tracking-tight group-hover:underline group-hover:decoration-stamp group-hover:underline-offset-4">
                  {entry.title}
                </span>
                <span className="mt-3 block font-sans text-sm leading-6 text-muted-foreground">
                  {entry.dek}
                </span>
                <span className="mt-4 block font-mono text-[0.68rem] tracking-wide text-muted-foreground">
                  {entry.meta}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </main>
    </Shell>
  );
}
