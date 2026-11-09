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
    <aside className="mb-8 border border-border bg-card px-4 py-3">
      <p className="font-mono text-[0.62rem] tracking-[0.14em] text-stamp uppercase">
        Portfolio copy · saved {savedOn}
      </p>
      <p className="mt-2 font-sans text-sm leading-6">
        Kept from{" "}
        <a
          href={sourceHref}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-border underline-offset-4 hover:decoration-stamp"
        >
          {sourceLabel}
        </a>
        . {kept}
      </p>
    </aside>
  );
}
