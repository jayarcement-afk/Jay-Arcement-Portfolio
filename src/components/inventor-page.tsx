import Link from "next/link";
import { People } from "@/components/people";
import { Shell } from "@/components/shell";
import { SourceLinks } from "@/components/source-links";
import { inventor } from "@/lib/inventor";

export function InventorPage() {
  return (
    <Shell current={inventor.href}>
      <article className="mx-auto w-full max-w-3xl px-5 py-8 sm:px-8 sm:py-12 lg:py-14">
        <header>
          <p className="font-mono text-[0.68rem] tracking-[0.16em] text-stamp uppercase">
            Inventor
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl">
            Patents by inventor {inventor.name}
          </h1>
          <p className="mt-5 max-w-2xl font-serif text-xl leading-9">{inventor.intro}</p>
          <div className="mt-5 h-px bg-foreground" />
          <div className="mt-px h-px bg-foreground/30" />
        </header>

        <ol className="mt-10 space-y-10">
          {inventor.records.map((record, index) => (
            <li key={`${record.number}-${record.kind}`} className="border-t border-border pt-8">
              <p className="font-mono text-[0.68rem] tracking-[0.16em] text-muted-foreground uppercase">
                {String(index + 1).padStart(2, "0")} · {record.kind}
              </p>
              <h2 className="mt-2 font-serif text-3xl leading-tight tracking-tight">
                <Link
                  href={record.href}
                  className="underline decoration-border underline-offset-4 hover:decoration-stamp"
                >
                  {record.title}
                </Link>
              </h2>
              <dl className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                <div>
                  <dt className="font-sans text-[0.68rem] tracking-[0.14em] text-muted-foreground uppercase">
                    {record.numberLabel}
                  </dt>
                  <dd className="mt-1 font-mono text-sm">{record.number}</dd>
                </div>
                <div>
                  <dt className="font-sans text-[0.68rem] tracking-[0.14em] text-muted-foreground uppercase">
                    Filed
                  </dt>
                  <dd className="mt-1 font-serif">{record.filed}</dd>
                </div>
                <div>
                  <dt className="font-sans text-[0.68rem] tracking-[0.14em] text-muted-foreground uppercase">
                    {record.datedLabel}
                  </dt>
                  <dd className="mt-1 font-serif">{record.dated}</dd>
                </div>
                {record.assignee ? (
                  <div>
                    <dt className="font-sans text-[0.68rem] tracking-[0.14em] text-muted-foreground uppercase">
                      Assignee
                    </dt>
                    <dd className="mt-1 font-serif">{record.assignee}</dd>
                  </div>
                ) : null}
                <div className="sm:col-span-2">
                  <dt className="font-sans text-[0.68rem] tracking-[0.14em] text-muted-foreground uppercase">
                    Inventors
                  </dt>
                  <dd className="mt-1 font-serif leading-7">
                    <People value={record.inventors} />
                  </dd>
                </div>
              </dl>
              <p className="mt-4 font-serif text-[1.05rem] leading-8">{record.abstract}</p>
              <p className="mt-4 flex flex-wrap gap-x-4 gap-y-2 font-sans text-sm">
                <Link href={record.href} className="underline underline-offset-4 hover:decoration-stamp">
                  Open on this shelf
                </Link>
                <a
                  href={record.external.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:decoration-stamp"
                >
                  {record.external.label}
                </a>
              </p>
              {record.note ? (
                <p className="mt-3 font-sans text-sm leading-6 text-muted-foreground">{record.note}</p>
              ) : null}
            </li>
          ))}
        </ol>

        <SourceLinks
          links={[inventor.source]}
          note="Titles, numbers, dates, inventors, and abstracts follow the public inventor listing. Grants and the 2024 application also open as full pages on this shelf."
        />
      </article>
    </Shell>
  );
}
