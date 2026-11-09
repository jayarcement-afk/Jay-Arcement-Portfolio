import { KeptRecord } from "@/components/kept-record";
import { Shell } from "@/components/shell";
import { SourceLinks } from "@/components/source-links";
import { press } from "@/lib/press";

export function PressArticle() {
  return (
    <Shell current={press.href}>
      <article className="mx-auto w-full max-w-3xl px-5 py-8 sm:px-8 sm:py-12 lg:py-14">
        <KeptRecord
          sourceLabel="the Nasdaq release"
          sourceHref={press.sources[0].href}
          kept="The headline, date, launch facts, companies, contacts, and links from that page are stored here. Nasdaq and Business Wire still hold the published wording."
        />
        <header>
          <p className="font-mono text-[0.68rem] tracking-[0.16em] text-stamp uppercase">
            {press.kicker}
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-[1.12] tracking-tight text-balance sm:text-5xl">
            {press.title}
          </h1>
          <p className="mt-5 font-sans text-sm text-muted-foreground">
            {press.dateline} · {press.published}
          </p>
          <p className="mt-1 font-sans text-sm text-muted-foreground">{press.distributor}</p>
          <div className="mt-5 h-px bg-foreground" />
          <div className="mt-px h-px bg-foreground/30" />
        </header>

        <p className="mt-8 font-serif text-xl leading-9 text-foreground">{press.summary}</p>

        <div className="mt-8 space-y-5">
          {press.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="font-serif text-[1.05rem] leading-8">
              {paragraph}
            </p>
          ))}
        </div>

        <section className="mt-12" aria-labelledby="what-halo-does">
          <h2 id="what-halo-does" className="font-serif text-2xl tracking-tight">
            What the release said Halo does
          </h2>
          <ol className="mt-5 space-y-5">
            {press.points.map((point, index) => (
              <li key={point.title} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3">
                <span className="font-mono text-sm text-muted-foreground">{index + 1}</span>
                <div>
                  <h3 className="font-serif text-xl">{point.title}</h3>
                  <p className="mt-1 font-serif text-[1.05rem] leading-8">{point.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 border-l-2 border-stamp pl-4 font-serif text-[1.02rem] leading-8 text-muted-foreground">
            {press.timing}
          </p>
        </section>

        <section className="mt-12" aria-labelledby="companies">
          <h2 id="companies" className="font-serif text-2xl tracking-tight">
            The companies named
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {press.companies.map((company) => (
              <section key={company.name} className="border border-border bg-card px-4 py-4">
                <h3 className="font-serif text-xl">{company.name}</h3>
                <p className="mt-2 font-serif text-[1.02rem] leading-7">{company.body}</p>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="printed-links">
          <h2 id="printed-links" className="font-serif text-2xl tracking-tight">
            Links printed on the release
          </h2>
          <ul className="mt-4 space-y-2 font-serif text-[1.05rem]">
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

        <section className="mt-12" aria-labelledby="contacts">
          <h2 id="contacts" className="font-serif text-2xl tracking-tight">
            Contacts published with the release
          </h2>
          <dl className="mt-4 space-y-3">
            {press.contacts.map((contact) => (
              <div key={contact.role}>
                <dt className="font-sans text-[0.68rem] tracking-[0.14em] text-muted-foreground uppercase">
                  {contact.role}
                </dt>
                <dd className="mt-1 font-serif text-[1.05rem]">{contact.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <SourceLinks
          links={press.sources}
          note="This page is a reading of the January 10, 2025 announcement. The release as published by Business Wire and carried by Nasdaq is linked here. Source named on the release: NCR Voyix Corporation."
        />
      </article>
    </Shell>
  );
}
