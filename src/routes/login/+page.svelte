<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ActionData } from './$types';

  import { env } from '$env/dynamic/public';
  import { OAUTH_CALLBACK } from '$lib/routes-index';

  let { form }: { form: ActionData } = $props();

  const redirectUrl = `${env.PUBLIC_DISCORD_REDIRECT_URL}${OAUTH_CALLBACK}`;

  const href = `https://discord.com/oauth2/authorize?client_id=${env.PUBLIC_DISCORD_CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(redirectUrl)}&scope=identify`;
</script>

<h1>Login/Register</h1>
<form method="post" action="?/login" use:enhance>
  <label>
    Email
    <input name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button>Login</button>
  <button formaction="?/register">Register</button>
  <!-- TODO state variable -->
  <a {href}>Login With Discord</a>
</form>
<p style="color: red">{form?.message ?? ''}</p>
