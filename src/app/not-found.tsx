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
        <h1 className="mt-3 font-serif text-4xl tracking-tight">That page is not on the shelf.</h1>
        <p className="mt-4 max-w-xl font-serif text-xl leading-8">
          The five records are the press release, the two grants, the inventor listing, and the 2024 application.
        </p>
        <Button className="mt-8" nativeButton={false} render={<Link href="/" />}>
          Back to the shelf
        </Button>
      </main>
    </Shell>
  );
}
