import { redirect } from '@sveltejs/kit';

import { getPrisma } from '$lib/db';
import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types';
import type { Character } from '../../types';
import { LOGIN } from '$lib/routes-index';

export const load: PageServerLoad = async (event) => {
  const user = event.locals.user;

  if (!user) {
    return redirect(302, LOGIN);
  }

  const prisma = getPrisma(env);

  const charactersDb = (await prisma.character.findMany({
    where: { userId: user.id }
  })) as unknown as { payload: Character; id: number }[];
  // TODO json character payload validation

  const characters = charactersDb.map(
    ({
      payload: {
        metadata: { name, level, class: characterClass }
      },
      id
    }) => ({ id, name, level, characterClass })
  );

  return { characters };
};
