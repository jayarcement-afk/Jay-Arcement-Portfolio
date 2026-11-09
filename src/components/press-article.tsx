import { KeptRecord } from "@/components/kept-record";
import { Shell } from "@/components/shell";
import { SourceLinks } from "@/components/source-links";
import { press } from "@/lib/press";

export function PressArticle() {
  return (
    <Shell current={press.href}>
      <article className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="max-w-3xl">
          <KeptRecord
            sourceLabel="the Nasdaq release"
            sourceHref={press.sources[0].href}
            kept="The headline, date, launch facts, companies, contacts, and links from that page are stored here. Nasdaq and Business Wire still hold the published wording."
          />
        </div>

        <header className="overflow-hidden rounded-3xl bg-primary text-primary-foreground">
          <div className="grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)] lg:items-end">
            <div>
              <p className="font-mono text-[0.68rem] tracking-[0.16em] text-accent uppercase">
                {press.kicker}
              </p>
              <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl">
                {press.title}
              </h1>
              <p className="mt-5 font-sans text-sm text-primary-foreground/75">
                {press.dateline} · {press.published}
              </p>
              <p className="mt-1 font-sans text-sm text-primary-foreground/75">{press.distributor}</p>
            </div>
            <dl className="grid gap-3">
              {press.facts.map((fact) => (
                <div key={fact.label} className="rounded-2xl bg-white/8 px-4 py-3">
                  <dt className="font-mono text-[0.62rem] tracking-[0.14em] text-accent uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 font-serif text-lg">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        <p className="mt-8 max-w-3xl font-sans text-lg leading-8 text-foreground">{press.summary}</p>

        <div className="mt-8 grid max-w-3xl gap-5">
          {press.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="font-sans text-base leading-7">
              {paragraph}
            </p>
          ))}
        </div>

        <section className="mt-12" aria-labelledby="what-halo-does">
          <h2 id="what-halo-does" className="font-serif text-2xl tracking-tight">
            What the release said Halo does
          </h2>
          <ol className="mt-5 grid gap-4 md:grid-cols-2">
            {press.points.map((point, index) => (
              <li key={point.title} className="rounded-2xl border border-border bg-card p-5">
                <span className="font-mono text-xs tracking-[0.14em] text-stamp uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-serif text-xl">{point.title}</h3>
                <p className="mt-2 font-sans text-sm leading-6 text-muted-foreground">{point.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4 max-w-3xl rounded-2xl bg-accent px-5 py-4 font-sans text-sm leading-6 text-accent-foreground">
            {press.timing}
          </p>
        </section>

        <section className="mt-12" aria-labelledby="companies">
          <h2 id="companies" className="font-serif text-2xl tracking-tight">
            The companies named
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {press.companies.map((company) => (
              <section key={company.name} className="rounded-2xl border border-border bg-card px-5 py-4">
                <h3 className="font-serif text-xl">{company.name}</h3>
                <p className="mt-2 font-sans text-sm leading-6 text-muted-foreground">{company.body}</p>
              </section>
            ))}
          </div>
        </section>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <section aria-labelledby="printed-links">
            <h2 id="printed-links" className="font-serif text-2xl tracking-tight">
              Links printed on the release
            </h2>
            <ul className="mt-4 space-y-2 font-sans">
              {press.printedLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-border underline-offset-4 hover:decoration-stamp"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="contacts">
            <h2 id="contacts" className="font-serif text-2xl tracking-tight">
              Contacts published with the release
            </h2>
            <dl className="mt-4 space-y-4">
              {press.contacts.map((contact) => (
                <div key={contact.role}>
                  <dt className="font-mono text-[0.62rem] tracking-[0.14em] text-muted-foreground uppercase">
                    {contact.role}
                  </dt>
                  <dd className="mt-1 font-sans">{contact.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        <SourceLinks
          links={press.sources}
          note="This page is a reading of the January 10, 2025 announcement. The release as published by Business Wire and carried by Nasdaq is linked here. Source named on the release: NCR Voyix Corporation."
        />
      </article>
    </Shell>
  );
}
