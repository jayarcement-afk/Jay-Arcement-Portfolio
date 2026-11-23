import { listFiles } from "@/lib/files";
import { fileAccess, jsonError, privateHeaders } from "@/lib/site-viewer";

export async function GET(request: Request) {
  const access = await fileAccess(request);
  try {
    const files = await listFiles(access.stage);
    return Response.json({ files, canManage: false }, { headers: privateHeaders });
  } catch {
    return jsonError("Files could not be loaded.", 500);
  }
}

export function POST() {
  return jsonError("Uploads are closed.", 403);
}
