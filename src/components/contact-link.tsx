"use client";

import { useId, useRef, useState } from "react";
import { openContact, startContactCheck } from "@/app/contact-actions";
import { Button } from "@/components/ui/button";

export function ContactLink() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [prompt, setPrompt] = useState("");
  const [token, setToken] = useState("");
  const [answer, setAnswer] = useState("");
  const [trap, setTrap] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function open() {
    setAnswer("");
    setTrap("");
    setError("");
    setPrompt("");
    setToken("");
    dialogRef.current?.showModal();
    try {
      const check = await startContactCheck();
      setPrompt(check.prompt);
      setToken(check.token);
    } catch {
      setError("The check didn't load. Close this and try again.");
    }
  }

  function close() {
    dialogRef.current?.close();
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!token || pending) return;
    setPending(true);
    setError("");
    try {
      const result = await openContact(answer, token, trap);
      if (!result.ok) {
        setError(result.error);
        setAnswer("");
        return;
      }
      window.location.assign(result.href);
      close();
    } catch {
      setError("That didn't go through. Try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="shrink-0 rounded-full px-3 py-1.5 font-sans text-sm text-muted-foreground hover:bg-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        Contact
      </button>
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="w-[min(24rem,calc(100%-2rem))] rounded-2xl border border-border bg-card p-0 text-foreground shadow-lg backdrop:bg-foreground/30"
        onClose={() => {
          setPending(false);
          setError("");
        }}
      >
        <form onSubmit={submit} className="p-5">
          <h2 id={titleId} className="font-serif text-2xl tracking-tight">
            Contact
          </h2>
          <p className="mt-2 font-sans text-sm leading-6 text-muted-foreground">
            Answer this, and your mail app opens. The address stays off this page.
          </p>
          <p className="mt-5 font-sans text-sm">{prompt || "One moment."}</p>
          <label className="mt-3 block">
            <span className="sr-only">Answer</span>
            <input
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
              inputMode="numeric"
              autoComplete="off"
              required
              disabled={!prompt || pending}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 font-sans text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
            />
          </label>
          <label className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
            Company website
            <input
              tabIndex={-1}
              autoComplete="off"
              value={trap}
              onChange={(event) => setTrap(event.target.value)}
            />
          </label>
          {error ? (
            <p className="mt-3 font-sans text-sm text-destructive" role="alert">
              {error}
            </p>
          ) : null}
          <div className="mt-5 flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={close}>
              Cancel
            </Button>
            <Button type="submit" disabled={!prompt || pending}>
              {pending ? "Checking" : "Open email"}
            </Button>
          </div>
        </form>
      </dialog>
    </>
  );
}
