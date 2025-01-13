import type { RequestEvent } from '@sveltejs/kit';
import { sha256 } from '@oslojs/crypto/sha2';
import { encodeBase64url, encodeHexLowerCase } from '@oslojs/encoding';

import { getPrisma } from '$lib/db';
import { env } from '$env/dynamic/private';

const DAY_IN_MS = 1000 * 60 * 60 * 24;

export const sessionCookieName = 'auth-session';

function generateSessionToken() {
  const bytes = crypto.getRandomValues(new Uint8Array(18));
  const token = encodeBase64url(bytes);
  return encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
}

export async function createSession(userId: number, prisma = getPrisma(env)) {
  const id = generateSessionToken();

  return await prisma.session.create({
    data: { id, userId, expiresAt: new Date(Date.now() + DAY_IN_MS * 30) }
  });
}

export async function validateSessionToken(token: string) {
  const prisma = getPrisma(env);

  const result = await prisma.session.findFirst({
    where: { id: token },
    include: { user: true }
  });

  if (!result) {
    return { session: null, user: null };
  }

  const { user, ...session } = result;

  const sessionExpired = Date.now() >= session.expiresAt.getTime();

  if (sessionExpired) {
    await prisma.session.delete({ where: { id: token } });
    return { session: null, user: null };
  }

  const renewSession = Date.now() >= session.expiresAt.getTime() - DAY_IN_MS * 15;

  if (renewSession) {
    session.expiresAt = new Date(Date.now() + DAY_IN_MS * 30);
    await prisma.session.update({
      where: { id: token },
      data: { expiresAt: session.expiresAt }
    });
  }

  return { session, user };
}

export async function invalidateSession(sessionId: string) {
  const prisma = getPrisma(env);

  await prisma.session.delete({ where: { id: sessionId } });
}

export function setSessionTokenCookie(event: RequestEvent, token: string, expiresAt: Date) {
  event.cookies.set(sessionCookieName, token, {
    expires: expiresAt,
    path: '/'
  });
}

export function deleteSessionTokenCookie(event: RequestEvent) {
  event.cookies.delete(sessionCookieName, {
    path: '/'
  });
}

export type SessionValidationResult = Awaited<ReturnType<typeof validateSessionToken>>;
