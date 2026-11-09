import Link from "next/link";

export function People({ value }: { value: string }) {
  const parts = value.split(/(Jay Arcement)/g);
  return (
    <>
      {parts.map((part, index) =>
        part === "Jay Arcement" ? (
          <Link
            key={`${part}-${index}`}
            href="/inventors/jay-arcement"
            className="underline decoration-border underline-offset-4 hover:decoration-stamp"
          >
            {part}
          </Link>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        ),
      )}
    </>
  );
}
