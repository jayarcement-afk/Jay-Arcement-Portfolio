"use server";

import { issueContactCheck, mailboxForHuman } from "@/lib/contact-gate";

export async function startContactCheck() {
  return issueContactCheck();
}

export async function openContact(answer: string, token: string, trap: string) {
  if (trap.trim() !== "") {
    return { ok: false as const, error: "That didn't go through. Try again." };
  }
  const href = mailboxForHuman(answer, token);
  if (!href) {
    return { ok: false as const, error: "That answer doesn't match." };
  }
  return { ok: true as const, href };
}
