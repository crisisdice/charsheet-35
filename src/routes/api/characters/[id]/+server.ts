import { env } from '$env/dynamic/private';
import { getPrisma } from '$lib/db';
import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

function recursiveObjectAssign(target: object, source: object) {
  const valueType = typeof Object.values(source).at(0);

  if (valueType === 'string' || valueType === 'number' || Array.isArray(source)) {
    return Object.assign(target, source);
  }

  const key = Object.keys(source).at(0);

  if (key == null || !(key in target)) {
    return target;
  }

  return recursiveObjectAssign(
    target[key as keyof typeof target],
    source[key as keyof typeof source]
  );
}

export const POST: RequestHandler = async (event) => {
  console.log(`POST ${event.url.pathname}`);

  const body = await event.request.json();

  console.log({ body });

  if (typeof body !== 'object' || body == null) {
    return error(400);
  }

  const id = parseInt(event.params.id);

  const where = { id };

  const prisma = getPrisma(env);

  const existing = await prisma.character.findFirst({ where });

  if (existing == null) {
    return error(404);
  }

  const { payload } = existing as { payload: object };

  // TODO make recursiveObjectAssign return new payload
  recursiveObjectAssign(payload, body);

  const data = { payload };

  await prisma.character.update({ where, data });

  return new Response();
};
