import { getIdentity, type IdentityStage, type VerifiedIdentity } from "../../cursor/identity";

const privateHeaders = { "cache-control": "private, no-store" };

export async function viewer(request: Request): Promise<VerifiedIdentity | Response> {
  const identity = await getIdentity(request);
  if (!identity.verified) {
    return Response.json({ error: "Sign in to use files." }, { status: 401, headers: privateHeaders });
  }
  return identity;
}

export function isPerson(identity: VerifiedIdentity) {
  return identity.kind === "person";
}

export function stageOf(identity: VerifiedIdentity): IdentityStage {
  return identity.stage;
}

export function rejectsCrossSiteWrite(request: Request) {
  const site = request.headers.get("sec-fetch-site");
  if (site === "same-origin") return false;
  if (site === "cross-site" || site === "same-site") return true;
  const origin = request.headers.get("origin");
  const host = (request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "")
    .split(",")[0]
    ?.trim();
  if (!origin || !host) return true;
  try {
    return new URL(origin).host !== host;
  } catch {
    return true;
  }
}

export function jsonError(error: string, status: number) {
  return Response.json({ error }, { status, headers: privateHeaders });
}

export { privateHeaders };
