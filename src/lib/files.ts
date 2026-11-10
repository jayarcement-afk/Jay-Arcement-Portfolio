import { sql } from "@/lib/db";

export { attachmentDisposition, cleanFileName, MAX_FILE_BYTES, MAX_FILE_COUNT } from "@/lib/file-types";

export type StoredFile = {
  id: string;
  name: string;
  contentType: string;
  sizeBytes: number;
  uploadedAt: string;
};

type FileRow = {
  id: string;
  name: string;
  content_type: string;
  size_bytes: number | string;
  uploaded_at: Date | string;
};

function asFile(row: FileRow): StoredFile {
  const uploaded = row.uploaded_at instanceof Date ? row.uploaded_at : new Date(row.uploaded_at);
  return {
    id: row.id,
    name: row.name,
    contentType: row.content_type,
    sizeBytes: Number(row.size_bytes),
    uploadedAt: uploaded.toISOString(),
  };
}

export async function listFiles(stage: string): Promise<StoredFile[]> {
  const rows = await sql<FileRow>(
    `select id, name, content_type, size_bytes, uploaded_at
     from portfolio_files
     where stage = $1
     order by uploaded_at desc`,
    [stage],
  );
  return rows.map(asFile);
}

export async function countFiles(stage: string): Promise<number> {
  const rows = await sql<{ count: number | string }>(
    "select count(*)::int as count from portfolio_files where stage = $1",
    [stage],
  );
  return Number(rows[0]?.count ?? 0);
}

export async function insertFile(input: {
  id: string;
  stage: string;
  name: string;
  contentType: string;
  bytes: Uint8Array;
}) {
  await sql(
    `insert into portfolio_files (id, stage, name, content_type, size_bytes, bytes)
     values ($1, $2, $3, $4, $5, $6)`,
    [input.id, input.stage, input.name, input.contentType, input.bytes.byteLength, input.bytes],
  );
}

export async function readFile(id: string, stage: string) {
  const rows = await sql<{ name: string; content_type: string; bytes: unknown }>(
    "select name, content_type, bytes from portfolio_files where id = $1 and stage = $2",
    [id, stage],
  );
  const row = rows[0];
  if (!row) return null;
  const bytes = toBytes(row.bytes);
  if (!bytes) return null;
  return { name: row.name, contentType: row.content_type, bytes };
}

export async function deleteFile(id: string, stage: string): Promise<boolean> {
  const rows = await sql<{ id: string }>(
    "delete from portfolio_files where id = $1 and stage = $2 returning id",
    [id, stage],
  );
  return rows.length > 0;
}

function toBytes(value: unknown): Uint8Array | null {
  if (value instanceof Uint8Array) return value;
  if (typeof value === "string" && value.startsWith("\\x")) {
    const hex = value.slice(2);
    if (hex.length % 2 !== 0 || !/^[\da-f]*$/i.test(hex)) return null;
    return Buffer.from(hex, "hex");
  }
  return null;
}
