import { env as privateEnv } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';

import { OAUTH_CALLBACK } from './routes-index';

const DISCORD_OAUTH_ENDPOINT = 'https://discord.com/api/v10/oauth2/token';
const DISCORD_ME_ENDPOINT = 'https://discord.com/api/v10/oauth2/@me';

async function validateAuthCodeDiscord(code: string) {
  const data = new FormData();

  data.append('grant_type', 'authorization_code');
  data.append('redirect_uri', `${publicEnv.PUBLIC_DISCORD_REDIRECT_URL}${OAUTH_CALLBACK}`);
  data.append('code', code);
  data.append('client_id', publicEnv.PUBLIC_DISCORD_CLIENT_ID);
  data.append('client_secret', privateEnv.DISCORD_CLIENT_SECRET);

  console.log([...data.entries()]);

  return await fetch(DISCORD_OAUTH_ENDPOINT, {
    method: 'POST',
    body: data
  });
}

export async function getDiscordUsername(code: string): Promise<string> {
  try {
    const response = await validateAuthCodeDiscord(code);

    console.log({ response });

    const { access_token } = (await response.json()) as { access_token: string };

    console.log({ access_token });

    const data = await fetch(DISCORD_ME_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });

    const {
      user: { username }
    } = (await data.json()) as { user: { username: string } };

    console.log({ username });

    return username;
  } catch (e) {
    console.log({ error: `${e}` });
    return '';
  }
}
