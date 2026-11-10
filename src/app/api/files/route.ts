import {
  MAX_FILE_BYTES,
  MAX_FILE_COUNT,
  cleanFileName,
  countFiles,
  insertFile,
  listFiles,
} from "@/lib/files";
import { fileAccess, isPerson, jsonError, privateHeaders, rejectsCrossSiteWrite, stageOf, viewer } from "@/lib/site-viewer";

const fileIdPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export async function GET(request: Request) {
  const access = await fileAccess(request);
  try {
    const files = await listFiles(access.stage);
    return Response.json(
      { files, canManage: access.canManage },
      { headers: privateHeaders },
    );
  } catch {
    return jsonError("Files could not be loaded.", 500);
  }
}

export async function POST(request: Request) {
  if (rejectsCrossSiteWrite(request)) return jsonError("Upload was refused.", 403);
  const identity = await viewer(request);
  if (identity instanceof Response) return identity;
  if (!isPerson(identity)) return jsonError("Only a signed-in person can upload.", 403);

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return jsonError("That upload could not be read.", 400);
  }
  const entry = form.get("file");
  if (!(entry instanceof File)) return jsonError("Choose a file first.", 400);

  const named = cleanFileName(entry.name);
  if (!named) {
    return jsonError("Use a PDF, Office document, text file, image, or zip.", 400);
  }

  const bytes = new Uint8Array(await entry.arrayBuffer());
  if (bytes.byteLength === 0) return jsonError("That file is empty.", 400);
  if (bytes.byteLength > MAX_FILE_BYTES) return jsonError("That file is larger than 10 MB.", 400);

  const stage = stageOf(identity);
  try {
    if ((await countFiles(stage)) >= MAX_FILE_COUNT) {
      return jsonError("Remove a file before adding another. The shelf holds 40.", 400);
    }
    const id = crypto.randomUUID();
    if (!fileIdPattern.test(id)) return jsonError("Could not store that file.", 500);
    await insertFile({
      id,
      stage,
      name: named.name,
      contentType: named.contentType,
      bytes,
    });
    return Response.json({ id }, { status: 201, headers: privateHeaders });
  } catch {
    return jsonError("Could not store that file.", 500);
  }
}
