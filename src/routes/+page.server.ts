import { redirect } from '@sveltejs/kit';

import { CHARACTERS, LOGIN } from '$lib/routes-index';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  if (!event.locals.user) {
    return redirect(302, LOGIN);
  }

  return redirect(302, CHARACTERS);
};
