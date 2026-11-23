"use client";

import { useEffect, useState } from "react";
import { shelfDocuments } from "@/lib/shelf-files";

type ShelfFile = {
  id: string;
  name: string;
  sizeBytes: number;
  uploadedAt?: string;
  href: string;
};

export function FilesSection() {
  const [files, setFiles] = useState<ShelfFile[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let ignore = false;
    fetch("/api/files", { cache: "no-store" })
      .then(async (response) => {
        const body = (await response.json().catch(() => null)) as {
          files?: Array<{ id: string; name: string; sizeBytes: number; uploadedAt: string }>;
        } | null;
        if (ignore) return;
        if (!response.ok || !body?.files) {
          setStatus("ready");
          return;
        }
        setFiles(
          body.files.map((file) => ({
            ...file,
            href: `/api/files/${file.id}`,
          })),
        );
        setStatus("ready");
      })
      .catch(() => {
        if (ignore) return;
        setStatus("error");
      });
    return () => {
      ignore = true;
    };
  }, []);

  const listed = [...shelfDocuments, ...files];

  return (
    <div className="mt-6">
      {status === "loading" && listed.length === 0 ? (
        <p className="mt-6 font-sans text-sm text-muted-foreground">Loading files.</p>
      ) : null}

      {status === "error" && listed.length === 0 ? (
        <p className="mt-6 font-sans text-sm text-muted-foreground">Files could not be loaded.</p>
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
              <a
                href={file.href}
                download={file.name}
                className="inline-flex h-8 shrink-0 items-center rounded-lg bg-primary px-2.5 font-sans text-sm text-primary-foreground hover:bg-primary/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Download
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
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
