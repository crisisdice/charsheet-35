import type { Handle, RequestEvent } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

import {
  deleteSessionTokenCookie,
  setSessionTokenCookie,
  validateSessionToken,
  sessionCookieName,
  generateOauthSession
} from '$lib/server/auth.js';
import { LOGIN, OAUTH_CALLBACK, ROOT } from '$lib/routes-index';
import { getDiscordUsername } from '$lib/oauth';
import type { Session, User } from '@prisma/client';

type NullableUserAndSession = { user: User; session: Session } | { user: null; session: null };

async function getUserAndSession(event: RequestEvent): Promise<NullableUserAndSession> {
  const sessionToken = event.cookies.get(sessionCookieName);
  const isOAuthCallback = event.url.pathname === OAUTH_CALLBACK;
  const code = event.url.searchParams.get('code');

  if (sessionToken != null) {
    return validateSessionToken(sessionToken);
  }

  if (isOAuthCallback && code != null) {
    const discordUsername = await getDiscordUsername(code);

    return generateOauthSession(discordUsername);
  }

  return { user: null, session: null };
}

export const handle: Handle = async ({ event, resolve }) => {
  const { user, session } = await getUserAndSession(event);

  event.locals.user = user;
  event.locals.session = session;

  if (event.url.pathname === LOGIN) {
    // TODO redirect to original content on good login
    return resolve(event);
  }

  if (session != null) {
    setSessionTokenCookie(event, session.id, session.expiresAt);

    const shouldRedirect = [LOGIN, OAUTH_CALLBACK].includes(event.url.pathname);

    return shouldRedirect ? redirect(302, ROOT) : resolve(event);
  }

  deleteSessionTokenCookie(event);

  return redirect(307, LOGIN);
};
