import Link from "next/link";
import { Shell } from "@/components/shell";
import { profile } from "@/lib/profile";
import { shelf, workSections } from "@/lib/shelf";

export default function Home() {
  const releases = shelf.filter((entry) => entry.group === "releases");
  const patents = shelf.filter((entry) => entry.group === "patents");

  return (
    <Shell>
      <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
        <section id="about" className="scroll-mt-24">
          <p className="font-mono text-[0.68rem] tracking-[0.16em] text-stamp uppercase">
            {profile.place}
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight text-balance sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-xl leading-8">{profile.line}</p>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {profile.notes.map((note) => (
              <li key={note.label} className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[0.62rem] tracking-[0.14em] text-stamp uppercase">
                  {note.label}
                </p>
                <p className="mt-3 font-sans text-sm leading-6 text-muted-foreground">{note.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="releases" className="mt-20 scroll-mt-24">
          <SectionHeading
            index="01"
            title={workSections[0].title}
            lede={workSections[0].lede}
          />
          <ul className="mt-6 grid gap-4">
            {releases.map((entry) => (
              <li key={entry.href}>
                <Link
                  href={entry.href}
                  className="group block rounded-3xl bg-primary px-6 py-8 text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:px-8 sm:py-10"
                >
                  <p className="font-mono text-[0.68rem] tracking-[0.16em] text-accent uppercase">
                    {entry.kicker}
                  </p>
                  <h3 className="mt-3 max-w-3xl font-serif text-3xl leading-tight tracking-tight text-balance group-hover:underline group-hover:decoration-accent group-hover:underline-offset-4 sm:text-4xl">
                    {entry.title}
                  </h3>
                  <p className="mt-4 max-w-2xl font-sans text-sm leading-6 text-primary-foreground/75">
                    {entry.dek}
                  </p>
                  <p className="mt-6 font-mono text-[0.68rem] tracking-wide text-primary-foreground/70">
                    {entry.meta}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section id="patents" className="mt-20 scroll-mt-24">
          <SectionHeading
            index="02"
            title={workSections[1].title}
            lede={workSections[1].lede}
          />
          <ol className="mt-6 divide-y divide-border border-y border-border">
            {patents.map((entry, index) => (
              <li key={entry.href}>
                <Link
                  href={entry.href}
                  className="group grid gap-3 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-6"
                >
                  <span className="font-mono text-sm text-stamp">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <span className="font-mono text-[0.62rem] tracking-[0.14em] text-muted-foreground uppercase">
                        {entry.kicker}
                      </span>
                      <span className="font-mono text-[0.68rem] tracking-wide text-muted-foreground">
                        {entry.meta}
                      </span>
                    </span>
                    <span className="mt-1 block font-serif text-2xl leading-snug tracking-tight group-hover:underline group-hover:decoration-stamp group-hover:underline-offset-4">
                      {entry.title}
                    </span>
                    <span className="mt-2 block max-w-3xl font-sans text-sm leading-6 text-muted-foreground">
                      {entry.dek}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </Shell>
  );
}

function SectionHeading({
  index,
  title,
  lede,
}: {
  index: string;
  title: string;
  lede: string;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div>
        <p className="font-mono text-[0.68rem] tracking-[0.16em] text-stamp uppercase">{index}</p>
        <h2 className="mt-2 font-serif text-3xl tracking-tight sm:text-4xl">{title}</h2>
      </div>
      <p className="max-w-sm font-sans text-sm leading-6 text-muted-foreground">{lede}</p>
    </div>
  );
}
