import { attachmentDisposition, readFile } from "@/lib/files";
import { fileAccess, jsonError, privateHeaders } from "@/lib/site-viewer";

const fileIdPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(request: Request, context: RouteContext) {
  const access = await fileAccess(request);
  const { id } = await context.params;
  if (!fileIdPattern.test(id)) return jsonError("That file is not on the shelf.", 404);
  try {
    const file = await readFile(id, access.stage);
    if (!file) return jsonError("That file is not on the shelf.", 404);
    return new Response(Buffer.from(file.bytes), {
      headers: {
        ...privateHeaders,
        "content-type": file.contentType,
        "content-disposition": attachmentDisposition(file.name),
        "content-length": String(file.bytes.byteLength),
        "x-content-type-options": "nosniff",
      },
    });
  } catch {
    return jsonError("That file could not be downloaded.", 500);
  }
}

export function DELETE() {
  return jsonError("Removing files is closed.", 403);
}
