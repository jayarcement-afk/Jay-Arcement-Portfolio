"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { acceptedExtensions } from "@/lib/file-types";
import { shelfDocuments } from "@/lib/shelf-files";

type ShelfFile = {
  id: string;
  name: string;
  sizeBytes: number;
  uploadedAt?: string;
  href: string;
  removable: boolean;
};

const accept = acceptedExtensions.map((extension) => `.${extension}`).join(",");

export function FilesSection() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<ShelfFile[]>([]);
  const [canManage, setCanManage] = useState(false);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState<"upload" | "remove" | null>(null);

  async function load() {
    const response = await fetch("/api/files", { cache: "no-store" });
    const body = (await response.json().catch(() => null)) as {
      files?: Array<{ id: string; name: string; sizeBytes: number; uploadedAt: string }>;
      canManage?: boolean;
      error?: string;
    } | null;
    if (!response.ok || !body?.files) {
      setFiles([]);
      setCanManage(false);
      setStatus("ready");
      setMessage(response.status === 401 ? "" : body?.error || "Added files could not be loaded.");
      return;
    }
    setFiles(body.files.map(asUpload));
    setCanManage(Boolean(body.canManage));
    setStatus("ready");
    setMessage("");
  }

  useEffect(() => {
    let ignore = false;
    fetch("/api/files", { cache: "no-store" })
      .then(async (response) => {
        const body = (await response.json().catch(() => null)) as {
          files?: Array<{ id: string; name: string; sizeBytes: number; uploadedAt: string }>;
          canManage?: boolean;
          error?: string;
        } | null;
        if (ignore) return;
        if (!response.ok || !body?.files) {
          setFiles([]);
          setCanManage(false);
          setStatus("ready");
          if (response.status !== 401) setMessage(body?.error || "Added files could not be loaded.");
          return;
        }
        setFiles(body.files.map(asUpload));
        setCanManage(Boolean(body.canManage));
        setStatus("ready");
      })
      .catch(() => {
        if (ignore) return;
        setStatus("error");
        setMessage("Files could not be loaded.");
      });
    return () => {
      ignore = true;
    };
  }, []);

  async function onUpload(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const file = inputRef.current?.files?.[0];
    if (!file) {
      setMessage("Choose a file first.");
      return;
    }
    setPending("upload");
    setMessage("");
    const form = new FormData();
    form.set("file", file);
    try {
      const response = await fetch("/api/files", { method: "POST", body: form });
      const body = (await response.json().catch(() => null)) as { error?: string } | null;
      if (!response.ok) {
        setMessage(body?.error || "Could not store that file.");
        return;
      }
      if (inputRef.current) inputRef.current.value = "";
      await load();
    } catch {
      setMessage("Could not store that file.");
    } finally {
      setPending(null);
    }
  }

  async function onRemove(id: string) {
    if (!window.confirm("Remove this file? People will no longer be able to download it.")) return;
    setPending("remove");
    setMessage("");
    try {
      const response = await fetch(`/api/files/${id}`, { method: "DELETE" });
      if (!response.ok && response.status !== 204) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        setMessage(body?.error || "That file could not be removed.");
        return;
      }
      await load();
    } catch {
      setMessage("That file could not be removed.");
    } finally {
      setPending(null);
    }
  }

  const listed = [...shelfDocuments.map(asDocument), ...files];

  return (
    <div className="mt-6">
      {canManage ? (
        <form
          onSubmit={onUpload}
          className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
        >
          <label className="min-w-0 flex-1">
            <span className="font-sans text-sm">Add a file</span>
            <input
              ref={inputRef}
              name="file"
              type="file"
              accept={accept}
              className="mt-2 block w-full font-sans text-sm text-muted-foreground file:mr-3 file:rounded-lg file:border-0 file:bg-secondary file:px-3 file:py-1.5 file:font-sans file:text-sm file:text-foreground"
            />
            <span className="mt-2 block font-mono text-[0.68rem] tracking-wide text-muted-foreground">
              PDF, Word, PowerPoint, Excel, text, images, or zip. 10 MB max.
            </span>
          </label>
          <Button type="submit" disabled={pending !== null} className="sm:self-start">
            {pending === "upload" ? "Uploading" : "Upload"}
          </Button>
        </form>
      ) : null}

      {message ? (
        <p role="alert" className="mt-4 font-sans text-sm text-destructive">
          {message}
        </p>
      ) : null}

      {status === "loading" && listed.length === 0 ? (
        <p className="mt-6 font-sans text-sm text-muted-foreground">Loading files.</p>
      ) : null}

      {status === "ready" && listed.length === 0 ? (
        <p className="mt-6 border-y border-border py-6 font-sans text-sm text-muted-foreground">
          No files yet.
        </p>
      ) : null}

      {listed.length > 0 ? (
        <ul className="mt-6 divide-y divide-border border-y border-border">
          {listed.map((file) => (
            <li
              key={file.id}
              className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <p className="font-serif text-xl tracking-tight break-words">{file.name}</p>
                <p className="mt-1 font-mono text-[0.68rem] tracking-wide text-muted-foreground">
                  {formatSize(file.sizeBytes)}
                  {file.uploadedAt ? ` · ${formatDate(file.uploadedAt)}` : ""}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={file.href}
                  download={file.name}
                  className="inline-flex h-8 items-center rounded-lg bg-primary px-2.5 font-sans text-sm text-primary-foreground hover:bg-primary/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  Download
                </a>
                {canManage && file.removable ? (
                  <Button
                    type="button"
                    variant="outline"
                    disabled={pending !== null}
                    onClick={() => onRemove(file.id)}
                  >
                    Remove
                  </Button>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function asDocument(file: (typeof shelfDocuments)[number]): ShelfFile {
  return { ...file, removable: false };
}

function asUpload(file: { id: string; name: string; sizeBytes: number; uploadedAt: string }): ShelfFile {
  return { ...file, href: `/api/files/${file.id}`, removable: true };
}

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatDate(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
