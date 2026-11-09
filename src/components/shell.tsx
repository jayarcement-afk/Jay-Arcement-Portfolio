import Link from "next/link";
import { SectionNav } from "@/components/section-nav";
import type { ShelfEntry } from "@/lib/shelf";

export function Shell({
  current,
  children,
}: {
  current?: ShelfEntry["href"] | "/inventors/jay-arcement";
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-full">
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <span className="grid size-8 place-items-center rounded-md bg-primary font-serif text-sm text-primary-foreground">
              J
            </span>
            <span className="leading-tight">
              <span className="block font-serif text-base tracking-tight">Portfolio</span>
              <span className="block font-mono text-[0.62rem] tracking-[0.14em] text-muted-foreground uppercase">
                Jay Arcement
              </span>
            </span>
          </Link>
          <SectionNav current={current} />
        </div>
      </header>
      <div className="min-w-0">{children}</div>
    </div>
  );
}
