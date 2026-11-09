import Link from "next/link";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Shell>
      <main className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8">
        <p className="font-mono text-[0.68rem] tracking-[0.16em] text-stamp uppercase">
          Missing page
        </p>
        <h1 className="mt-3 font-serif text-4xl tracking-tight">That page is not in Folio.</h1>
        <p className="mt-4 max-w-xl font-sans text-lg leading-8">
          Home holds the Phillips 66 release, the two grants, and the 2024 application.
        </p>
        <Button className="mt-8" nativeButton={false} render={<Link href="/" />}>
          Back home
        </Button>
      </main>
    </Shell>
  );
}
