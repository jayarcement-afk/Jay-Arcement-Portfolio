import { FileText } from "lucide-react";
import { KeptRecord } from "@/components/kept-record";
import { People } from "@/components/people";
import { Shell } from "@/components/shell";
import { SourceLinks } from "@/components/source-links";
import { Button } from "@/components/ui/button";
import type { PatentDoc } from "@/lib/patents";

export function PatentDocument({ doc }: { doc: PatentDoc }) {
  const contents = [
    ...(doc.pdf ? [{ id: "official-pdf", label: "Official PDF" }] : []),
    { id: "abstract", label: "Abstract" },
    { id: "claims", label: "Claims" },
    ...doc.text.sections.map((section) => ({
      id: section.id,
      label: section.heading,
    })),
    ...(doc.events ? [{ id: "file-events", label: "File events" }] : []),
  ];

  return (
    <Shell current={doc.href}>
      <article className="mx-auto w-full max-w-3xl px-5 py-8 sm:px-8 sm:py-12 lg:py-14">
        <KeptRecord
          sourceLabel={doc.archive.sourceLabel}
          sourceHref={doc.archive.sourceHref}
          kept={doc.archive.kept}
        />
        <header>
          <p
            className={
              doc.kind === "Grant"
                ? "font-mono text-[0.68rem] tracking-[0.16em] text-grant uppercase"
                : "font-mono text-[0.68rem] tracking-[0.16em] text-stamp uppercase"
            }
          >
            {doc.kind === "Grant" ? "United States patent" : "United States patent application"}
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-[1.12] tracking-tight text-balance sm:text-5xl">
            {doc.title}
          </h1>
          <p className="mt-4 font-mono text-sm tracking-wide text-foreground">{doc.identifier}</p>
        </header>

        <dl className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {doc.facts.map((fact) => (
            <div key={fact.label} className={fact.label === "CPC" ? "sm:col-span-2" : undefined}>
              <dt className="font-sans text-[0.68rem] tracking-[0.14em] text-muted-foreground uppercase">
                {fact.label}
              </dt>
              <dd className="mt-1 font-serif text-[1.02rem] leading-7 text-foreground">
                {fact.label === "Inventors" ? <People value={fact.value} /> : fact.value}
              </dd>
            </div>
          ))}
        </dl>

        <nav aria-label="On this page" className="sticky top-16 z-20 mt-8 -mx-5 border-y border-border bg-background/95 px-5 py-3 backdrop-blur sm:mx-0 sm:px-0">
          <ul className="flex gap-x-4 gap-y-2 overflow-x-auto font-sans text-sm whitespace-nowrap">
            {contents.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {doc.pdf ? (
          <section id="official-pdf" className="scroll-mt-28 pt-10">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="font-serif text-2xl tracking-tight">Official PDF</h2>
                <p className="mt-1 font-sans text-sm text-muted-foreground">
                  The USPTO document, {doc.pdf.pages} pages. Drawings are in this file.
                </p>
              </div>
              <Button
                nativeButton={false}
                render={<a href={doc.pdf.href} download />}
              >
                <FileText />
                Download
              </Button>
            </div>
            <object
              data={doc.pdf.href}
              type="application/pdf"
              aria-label={`${doc.identifier} official PDF`}
              className="mt-4 h-[78vh] min-h-[32rem] w-full border border-border bg-white"
            >
              <p className="p-6 font-sans text-sm leading-6">
                This browser did not open the PDF in the page.{" "}
                <a className="underline" href={doc.pdf.href}>
                  Open {doc.identifier}
                </a>
                .
              </p>
            </object>
          </section>
        ) : null}

        <section id="abstract" className="scroll-mt-28 pt-12">
          <h2 className="font-serif text-2xl tracking-tight">Abstract</h2>
          <p className="mt-4 border border-border bg-card px-5 py-4 font-serif text-[1.05rem] leading-8">
            {doc.text.abstract}
          </p>
        </section>

        <section id="claims" className="scroll-mt-28 pt-12">
          <h2 className="font-serif text-2xl tracking-tight">Claims</h2>
          <p className="mt-2 font-sans text-sm text-muted-foreground">
            {doc.text.claims.length} claims.
          </p>
          <ol className="mt-6 space-y-6">
            {doc.text.claims.map((claim) => (
              <li key={claim.number} id={`claim-${claim.number}`} className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-3 scroll-mt-28">
                <span className="pt-1 font-mono text-sm text-muted-foreground">{claim.number}.</span>
                <div className="font-serif text-[1.05rem] leading-8">
                  <p>{claim.preamble}</p>
                  {claim.steps.length > 0 ? (
                    <ul className="mt-3 space-y-2 border-l border-border pl-4">
                      {claim.steps.map((step, index) => (
                        <li key={`${claim.number}-${index}`}>{step}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {doc.text.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-28 pt-12">
            <h2 className="font-serif text-2xl tracking-tight">{section.heading}</h2>
            <div className="mt-4 space-y-5">
              {section.paragraphs.map((paragraph, index) => (
                <p key={`${section.id}-${index}`} className="font-serif text-[1.05rem] leading-8 text-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}

        {doc.events ? (
          <section id="file-events" className="scroll-mt-28 pt-12">
            <h2 className="font-serif text-2xl tracking-tight">File events</h2>
            <p className="mt-2 font-sans text-sm leading-6 text-muted-foreground">
              Events reported on the public patent record for application 18/217,459.
            </p>
            <ul className="mt-4 space-y-3">
              {doc.events.map((event) => (
                <li key={event} className="border-l-2 border-stamp pl-4 font-serif text-[1.05rem] leading-8">
                  {event}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <SourceLinks
          links={doc.sources}
          note={
            doc.pdf
              ? "The PDF above is the USPTO publication of this patent. The reading copy is the same public text, set for the screen. Justia and Google Patents list the same grant."
              : "This is the published application text. Justia and Google Patents carry the same public specification."
          }
        />
      </article>
    </Shell>
  );
}
