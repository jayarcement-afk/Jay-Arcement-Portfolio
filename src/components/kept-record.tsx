import { savedOn } from "@/lib/archive";

export function KeptRecord({
  sourceLabel,
  sourceHref,
  kept,
}: {
  sourceLabel: string;
  sourceHref: string;
  kept: string;
}) {
  return (
    <aside className="mb-8 rounded-2xl border border-border bg-card px-4 py-3 sm:px-5">
      <p className="font-mono text-[0.62rem] tracking-[0.14em] text-stamp uppercase">
        Portfolio record · saved {savedOn}
      </p>
      <p className="mt-1.5 font-sans text-sm leading-6 text-muted-foreground">
        Kept from{" "}
        <a
          href={sourceHref}
          target="_blank"
          rel="noreferrer"
          className="text-foreground underline decoration-border underline-offset-4 hover:decoration-stamp"
        >
          {sourceLabel}
        </a>
        . {kept}
      </p>
    </aside>
  );
}
