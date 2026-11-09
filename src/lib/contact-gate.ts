import { createHmac, randomBytes, randomInt, timingSafeEqual } from "node:crypto";

const address = "jayarcement@gmail.com";
const secret = randomBytes(32);
const tenMinutes = 10 * 60 * 1000;

export function issueContactCheck() {
  const left = randomInt(2, 10);
  const right = randomInt(2, 10);
  const exp = Date.now() + tenMinutes;
  return {
    prompt: `What is ${left} + ${right}?`,
    token: sign(JSON.stringify({ sum: left + right, exp })),
  };
}

export function mailboxForHuman(answer: string, token: string) {
  const payload = read(token);
  if (!payload) return null;
  if (Date.now() > payload.exp) return null;
  if (answer.trim() !== String(payload.sum)) return null;
  return `mailto:${address}`;
}

function sign(payload: string) {
  const body = Buffer.from(payload).toString("base64url");
  const mac = createHmac("sha256", secret).update(body).digest("base64url");
  return `${body}.${mac}`;
}

function read(token: string): { sum: number; exp: number } | null {
  const [body, mac] = token.split(".");
  if (!body || !mac) return null;
  const expected = createHmac("sha256", secret).update(body).digest("base64url");
  const given = Buffer.from(mac);
  const check = Buffer.from(expected);
  if (given.length !== check.length || !timingSafeEqual(given, check)) return null;
  try {
    const payload = JSON.parse(Buffer.from(body, "base64url").toString()) as {
      sum?: number;
      exp?: number;
    };
    if (typeof payload.sum !== "number" || typeof payload.exp !== "number") return null;
    return { sum: payload.sum, exp: payload.exp };
  } catch {
    return null;
  }
}
