import Link from "next/link";
import { ContactLink } from "@/components/contact-link";
import type { ShelfEntry } from "@/lib/shelf";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/#about", label: "About", id: "about" },
  { href: "/#releases", label: "Releases", id: "releases" },
  { href: "/#patents", label: "Patents", id: "patents" },
] as const;

function activeSection(current?: string) {
  if (!current) return "about";
  if (current.startsWith("/press")) return "releases";
  if (current.startsWith("/patents") || current.startsWith("/projects")) return "patents";
  return null;
}

export function Shell({
  current,
  children,
}: {
  current?: ShelfEntry["href"] | "/inventors/jay-arcement";
  children: React.ReactNode;
}) {
  const active = activeSection(current);

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
          <nav aria-label="Sections" className="flex min-w-0 flex-1 gap-1 overflow-x-auto">
            {nav.map((item) => {
              const on = item.id === active;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  aria-current={on ? "page" : undefined}
                  className={cn(
                    "shrink-0 rounded-full px-3 py-1.5 font-sans text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                    on
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <ContactLink />
          </nav>
        </div>
      </header>
      <div className="min-w-0">{children}</div>
    </div>
  );
}
