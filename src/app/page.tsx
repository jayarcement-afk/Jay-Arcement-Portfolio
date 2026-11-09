import Image from "next/image";
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
          <Image
            src="/images/atlanta-banner.jpg"
            alt="Atlanta skyline. Jay Arcement, AI product and strategy executive. Transforming technology into business value."
            width={1584}
            height={396}
            priority
            className="h-auto w-full rounded-3xl"
          />
          <div className="mt-8 grid grid-cols-[7.5rem_minmax(0,1fr)] items-end gap-x-4 sm:grid-cols-[12rem_minmax(0,1fr)] lg:mt-10 lg:grid-cols-[17rem_minmax(0,1fr)] lg:items-start lg:gap-x-12">
            <Image
              src="/images/jay-arcement.jpg"
              alt="Portrait of Jay Arcement"
              width={1200}
              height={1500}
              priority
              className="aspect-[4/5] w-full rounded-2xl object-cover lg:row-span-2 lg:rounded-3xl"
            />
            <div>
              <p className="font-mono text-[0.68rem] tracking-[0.16em] text-stamp uppercase">
                {profile.place}
              </p>
              <h1 className="mt-2 max-w-4xl font-serif text-4xl leading-[0.95] tracking-tight text-balance sm:text-5xl lg:mt-3 lg:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-4 hidden font-sans text-lg text-muted-foreground lg:block">{profile.role}</p>
            </div>
            <div className="col-span-2 mt-8 lg:col-span-1">
              <p className="mb-6 font-sans text-base text-muted-foreground lg:hidden">{profile.role}</p>
              <div className="max-w-3xl">
                {profile.lines.map((line) => (
                  <p key={line} className="font-serif text-2xl leading-snug tracking-tight sm:text-3xl">
                    {line}
                  </p>
                ))}
              </div>
              <div className="mt-8 max-w-2xl space-y-4 border-t border-border pt-8">
                {profile.summary.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="font-sans text-base leading-7">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {profile.focus.map((item) => (
              <li key={item.title} className="rounded-2xl border border-border bg-card p-5">
                <h2 className="font-serif text-xl tracking-tight">{item.title}</h2>
                <p className="mt-3 font-sans text-sm leading-6 text-muted-foreground">{item.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="releases" className="mt-20 scroll-mt-24">
          <SectionHeading index="01" title={workSections[0].title} />
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
          <SectionHeading index="02" title={workSections[1].title} />
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

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="grid size-11 shrink-0 place-items-center rounded-md bg-primary font-serif text-sm text-primary-foreground">
        {index}
      </span>
      <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}
