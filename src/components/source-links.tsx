import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SourceLink } from "@/lib/text";

export function SourceLinks({
  links,
  note,
}: {
  links: SourceLink[];
  note?: string;
}) {
  return (
    <div className="mt-10 border-t border-border pt-6">
      {note ? (
        <p className="max-w-2xl font-sans text-sm leading-6 text-muted-foreground">{note}</p>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-2">
        {links.map((link) => {
          const opensAway = link.href.startsWith("http") || link.href.endsWith(".pdf");
          return (
            <Button
              key={link.href + link.label}
              variant="outline"
              nativeButton={false}
              render={
                <a
                  href={link.href}
                  {...(opensAway ? { target: "_blank", rel: "noreferrer" } : {})}
                />
              }
            >
              {link.label}
              {opensAway ? <ArrowUpRight /> : null}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
