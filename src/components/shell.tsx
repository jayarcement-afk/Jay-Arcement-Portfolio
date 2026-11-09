import Link from "next/link";
import { savedOn } from "@/lib/archive";
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
    <div className="min-h-full">
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <span className="grid size-8 place-items-center rounded-md bg-primary font-serif text-sm text-primary-foreground">
              F
            </span>
            <span className="leading-tight">
              <span className="block font-serif text-base tracking-tight">Folio</span>
              <span className="block font-mono text-[0.62rem] tracking-[0.14em] text-muted-foreground uppercase">
                Jay Arcement
              </span>
            </span>
          </Link>
          <nav
            aria-label="Documents"
            className="flex min-w-0 flex-1 gap-1 overflow-x-auto"
          >
            {shelf.map((item) => {
              const active = item.href === current;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "shrink-0 rounded-full px-3 py-1.5 font-sans text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                    active
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                  )}
                >
                  {item.nav}
                </Link>
              );
            })}
          </nav>
          <p className="hidden shrink-0 font-mono text-[0.62rem] tracking-[0.12em] text-muted-foreground uppercase lg:block">
            Saved {savedOn}
          </p>
        </div>
      </header>
      <div className="min-w-0">{children}</div>
    </div>
  );
}
