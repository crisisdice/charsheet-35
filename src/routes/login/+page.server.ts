import { encodeHexLowerCase } from '@oslojs/encoding';
import { fail, redirect } from '@sveltejs/kit';
import { sha256 } from '@oslojs/crypto/sha2';

import { createSession, setSessionTokenCookie } from '$lib/server/auth';
import { getPrisma } from '$lib/db';
import { env } from '$env/dynamic/private';
import type { Actions } from './$types';
import { ROOT } from '$lib/routes-index';

export const actions: Actions = {
  login: async (event) => {
    const formData = await event.request.formData();

    const email = formData.get('email');
    const password = formData.get('password');

    console.log({ action: 'login', email });

    if (!validateUsername(email)) {
      return fail(400, {
        message: 'Invalid username (min 3, max 31 characters, alphanumeric only)'
      });
    }

    if (!validatePassword(password)) {
      return fail(400, { message: 'Invalid password (min 6, max 255 characters)' });
    }

    const prisma = getPrisma(env);

    const existingUser = await prisma.user.findFirst({ where: { email } });

    if (existingUser == null) {
      return fail(400, { message: 'Incorrect username or password' });
    }

    const passwordHash = encodeHexLowerCase(sha256(new TextEncoder().encode(password)));
    const validPassword = existingUser.passwordHash === passwordHash;

    if (!validPassword) {
      return fail(400, { message: 'Incorrect username or password' });
    }

    const session = await createSession(existingUser.id);

    setSessionTokenCookie(event, session.id, session.expiresAt);

    return redirect(307, ROOT);
  },
  register: async (event) => {
    const formData = await event.request.formData();

    const email = formData.get('email');
    const password = formData.get('password');

    console.log({ action: 'register', email });

    if (!validateUsername(email)) {
      return fail(400, { message: 'Invalid username' });
    }
    if (!validatePassword(password)) {
      return fail(400, { message: 'Invalid password' });
    }

    const passwordHash = encodeHexLowerCase(sha256(new TextEncoder().encode(password)));

    try {
      const prisma = getPrisma(env);

      const user = await prisma.user.create({ data: { email, passwordHash } });

      const session = await createSession(user.id);

      setSessionTokenCookie(event, session.id, session.expiresAt);
    } catch (e) {
      console.log({ error: `${e}` });

      return fail(500, { message: 'An error has occurred' });
    }

    return redirect(307, ROOT);
  }
};

function validateUsername(username: unknown): username is string {
  return typeof username === 'string';
}

function validatePassword(password: unknown): password is string {
  return typeof password === 'string' && password.length >= 6 && password.length <= 255;
}
