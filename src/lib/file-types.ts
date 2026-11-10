export const MAX_FILE_BYTES = 10 * 1024 * 1024;
export const MAX_FILE_COUNT = 40;

const contentTypes: Record<string, string> = {
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ppt: "application/vnd.ms-powerpoint",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  txt: "text/plain; charset=utf-8",
  csv: "text/csv; charset=utf-8",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  gif: "image/gif",
  webp: "image/webp",
  zip: "application/zip",
};

export const acceptedExtensions = Object.keys(contentTypes);

export function cleanFileName(raw: string): { name: string; contentType: string } | null {
  const base = raw.split(/[/\\]/).pop()?.replace(/[\u0000-\u001f"]/g, "").trim() ?? "";
  if (!base || base === "." || base === ".." || base.length > 180 || !base.includes(".")) {
    return null;
  }
  const extension = base.slice(base.lastIndexOf(".") + 1).toLowerCase();
  const contentType = contentTypes[extension];
  if (!contentType) return null;
  return { name: base, contentType };
}

export function attachmentDisposition(name: string) {
  const ascii = name.replace(/[^\w.\- ()]+/g, "_").slice(0, 180) || "download";
  return `attachment; filename="${ascii}"; filename*=UTF-8''${encodeURIComponent(name)}`;
}
