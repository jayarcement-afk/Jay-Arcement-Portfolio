import type { Metadata } from "next";
import Image from "next/image";
import { Shell } from "@/components/shell";
import { hazard } from "@/lib/hazard";

export const metadata: Metadata = {
  title: hazard.title,
  description: hazard.dek,
};

export default function HazardClassificationPage() {
  return (
    <Shell current={hazard.href}>
      <article className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="font-mono text-[0.68rem] tracking-[0.16em] text-stamp uppercase">
          {hazard.kicker}
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-6xl">
          {hazard.title}
        </h1>
        <p className="mt-4 max-w-2xl font-sans text-lg leading-8 text-muted-foreground">
          UL’s first agentic customer solution.
        </p>
        <aside className="mt-8 grid items-center gap-6 rounded-3xl border border-border bg-card p-4 sm:p-6 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-8">
          <Image
            src={hazard.award.image}
            alt="2025 CEO Mark of Excellence Award Winner, UL Solutions."
            width={800}
            height={800}
            className="h-auto w-full rounded-2xl"
          />
          <div>
            <p className="font-mono text-[0.68rem] tracking-[0.16em] text-stamp uppercase">
              {hazard.award.label}
            </p>
            <div className="mt-4 grid gap-4">
              {hazard.award.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="font-sans text-base leading-7">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </aside>
        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12">
          <ul className="grid grid-cols-2 gap-3 lg:grid-cols-1">
            {hazard.metrics.map((metric) => (
              <li key={metric.label} className="rounded-2xl border border-border bg-card px-4 py-3">
                <p className="font-mono text-[0.62rem] tracking-[0.14em] text-stamp uppercase">
                  {metric.label}
                </p>
                <p className="mt-1 font-serif text-2xl tracking-tight">{metric.value}</p>
              </li>
            ))}
            <li className="rounded-2xl bg-accent px-4 py-3 text-accent-foreground">
              <p className="font-mono text-[0.62rem] tracking-[0.14em] uppercase">
                {hazard.retailers.label}
              </p>
              <p className="mt-1 font-serif text-2xl tracking-tight">{hazard.retailers.value}</p>
            </li>
          </ul>
          <div className="grid max-w-3xl gap-8">
            {hazard.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="font-sans text-base leading-7">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </Shell>
  );
}
