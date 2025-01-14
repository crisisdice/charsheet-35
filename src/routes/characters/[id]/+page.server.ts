import { error, redirect } from '@sveltejs/kit';

import { getPrisma } from '$lib/db';
import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types';
import { LOGIN } from '$lib/routes-index';
import type { Character } from '$lib/types';

export const load: PageServerLoad = async (event) => {
  const user = event.locals.user;

  if (!user) {
    return redirect(302, LOGIN);
  }

  const id = parseInt(event.params.id);

  if (Number.isNaN(id)) {
    return error(400, { message: 'Id must be a number' });
  }

  const prisma = getPrisma(env);

  const character = await prisma.character.findFirst({ where: { id } });

  if (character == null) {
    return error(404, { message: 'Character not found' });
  }

  if (character.userId != user.id) {
    return error(403, { message: 'Forbidden' });
  }

  // TODO json character payload validation
  const { payload } = character as unknown as { payload: Character };

  return { character: payload };
};
