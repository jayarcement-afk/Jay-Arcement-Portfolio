import { attachmentDisposition, deleteFile, readFile } from "@/lib/files";
import { isPerson, jsonError, privateHeaders, rejectsCrossSiteWrite, stageOf, viewer } from "@/lib/site-viewer";

const fileIdPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(request: Request, context: RouteContext) {
  const identity = await viewer(request);
  if (identity instanceof Response) return identity;
  const { id } = await context.params;
  if (!fileIdPattern.test(id)) return jsonError("That file is not on the shelf.", 404);
  try {
    const file = await readFile(id, stageOf(identity));
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

export async function DELETE(request: Request, context: RouteContext) {
  if (rejectsCrossSiteWrite(request)) return jsonError("Removal was refused.", 403);
  const identity = await viewer(request);
  if (identity instanceof Response) return identity;
  if (!isPerson(identity)) return jsonError("Only a signed-in person can remove a file.", 403);
  const { id } = await context.params;
  if (!fileIdPattern.test(id)) return jsonError("That file is not on the shelf.", 404);
  try {
    const removed = await deleteFile(id, stageOf(identity));
    if (!removed) return jsonError("That file is not on the shelf.", 404);
    return new Response(null, { status: 204, headers: privateHeaders });
  } catch {
    return jsonError("That file could not be removed.", 500);
  }
}
