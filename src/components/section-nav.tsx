"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ContactLink } from "@/components/contact-link";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/#about", label: "About", id: "about" },
  { href: "/#releases", label: "Product Releases", id: "releases" },
  { href: "/#patents", label: "Patents & Projects", id: "patents" },
] as const;

const sectionIds = nav.map((item) => item.id);

function sectionFromRoute(current?: string) {
  if (!current) return "about";
  if (current.startsWith("/press") || current.startsWith("/products")) return "releases";
  if (current.startsWith("/patents") || current.startsWith("/projects")) return "patents";
  return null;
}

export function SectionNav({ current }: { current?: string }) {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [visible, setVisible] = useState<(typeof sectionIds)[number]>("about");
  const active = onHome ? visible : sectionFromRoute(current);

  useEffect(() => {
    if (!onHome) return;

    const update = () => {
      const line = 120;
      let next: (typeof sectionIds)[number] = "about";
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;
        if (section.getBoundingClientRect().top <= line) next = id;
      }
      setVisible(next);
    };

    update();
    const frame = requestAnimationFrame(update);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("hashchange", update);
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("hashchange", update);
      window.removeEventListener("resize", update);
    };
  }, [onHome]);

  return (
    <nav aria-label="Sections" className="flex min-w-0 flex-1 gap-1 overflow-x-auto">
      {nav.map((item) => {
        const on = item.id === active;
        return (
          <Link
            key={item.id}
            href={item.href}
            aria-current={on ? "true" : undefined}
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
  );
}
