import Link from "next/link";
import { shelf, type ShelfEntry } from "@/lib/shelf";
import { cn } from "@/lib/utils";

export function Shell({
  current,
  children,
}: {
  current?: ShelfEntry["href"];
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-full lg:grid lg:grid-cols-[16.5rem_minmax(0,1fr)]">
      <aside className="border-b border-border bg-secondary lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:overflow-y-auto lg:border-r lg:border-b-0">
        <div className="px-5 pt-5 pb-3 lg:px-5 lg:pt-7">
          <Link href="/" className="block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
            <span className="font-serif text-[2rem] leading-none tracking-tight text-foreground">
              Folio
            </span>
            <span className="mt-2 block font-sans text-[0.68rem] tracking-[0.18em] text-muted-foreground uppercase">
              Public record shelf
            </span>
          </Link>
        </div>
        <nav
          aria-label="Documents"
          className="flex gap-2 overflow-x-auto px-4 pb-4 lg:flex-1 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-3"
        >
          {shelf.map((item) => {
            const active = item.href === current;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "min-w-44 shrink-0 rounded-md border border-transparent px-3 py-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:min-w-0 lg:rounded-none lg:border-l-2 lg:py-3",
                  active
                    ? "border-foreground bg-background lg:border-l-stamp"
                    : "hover:bg-background/70",
                )}
              >
                <span className="block font-mono text-[0.62rem] tracking-[0.14em] text-muted-foreground uppercase">
                  {item.kicker}
                </span>
                <span className="mt-1 block font-serif text-[1.02rem] leading-snug text-foreground">
                  {item.nav}
                </span>
              </Link>
            );
          })}
        </nav>
        <p className="hidden px-5 pb-6 font-sans text-xs leading-5 text-muted-foreground lg:block">
          Five routes so far. Add the next page beside them.
        </p>
      </aside>
      <div className="min-w-0">{children}</div>
    </div>
  );
}
