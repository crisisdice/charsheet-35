import { fail, redirect } from '@sveltejs/kit';

import { invalidateSession, deleteSessionTokenCookie } from '$lib/server/auth';
import { LOGIN } from '$lib/routes-index';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  if (!event.locals.user) {
    return redirect(302, LOGIN);
  }

  return { user: event.locals.user };
};

export const actions: Actions = {
  logout: async (event) => {
    if (!event.locals.session) {
      return fail(401);
    }

    await invalidateSession(event.locals.session.id);

    deleteSessionTokenCookie(event);

    return redirect(302, LOGIN);
  }
};
