import { env as privateEnv } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';

import type { RequestHandler } from './$types';

export const POST: RequestHandler = async (event) => {
  console.log(`POST ${event.url.pathname}`);

  const discordChannelId = publicEnv.PUBLIC_DISCORD_CHANNEL_ID;
  const discordAppToken = privateEnv.DISCORD_APP_TOKEN;

  const url = `https://discord.com/api/channels/${discordChannelId}/messages`;

  const { content } = (await event.request.json()) as { content: string };

  const body = JSON.stringify({
    content,
    tts: false
  });

  const response = await fetch(url, {
    headers: {
      Authorization: `Bot ${discordAppToken}`,
      'Content-Type': 'application/json'
    },
    body,
    method: 'POST'
  });

  console.log({ content, responseOk: response.ok, body: await response.json() });

  return new Response();
};
