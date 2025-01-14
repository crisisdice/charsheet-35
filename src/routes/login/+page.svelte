<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ActionData } from './$types';

  import { env } from '$env/dynamic/public';
  import { OAUTH_CALLBACK } from '$lib/routes-index';

  let { form }: { form: ActionData } = $props();

  const redirectUrl = `${env.PUBLIC_DISCORD_REDIRECT_URL}${OAUTH_CALLBACK}`;

  const href = `https://discord.com/oauth2/authorize?client_id=${env.PUBLIC_DISCORD_CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(redirectUrl)}&scope=identify`;
</script>

<main>
  <div class="flex-row" style="justify-content: space-around;">
    <h1>Character Sheet App</h1>
    <img src="/logo.png" alt="logo" style="width: 30%;" />
  </div>
  <div class="flex-column" style="justify-content: center; width: 50%; margin: auto;">
    <form method="post" action="?/login" use:enhance>
      <div class="flex-column">
        <label>
          <input name="email" />
          Email
        </label>
        <label>
          <input type="password" name="password" />
          Password
        </label>
      </div>
      <div class="flex-row" style="justify-content: space-around;">
        <button>Login</button>
        <button formaction="?/register" disabled>Register</button>
      </div>
    </form>
  </div>
  <hr />
  <div class="flex-row" style="justify-content: center;">OR</div>
  <hr />

  <div style="width: 20%; justify-content: center; margin: auto;" class="flex-column">
    <!-- TODO state variable -->
    <a {href} style="text-decoration: none;">
      <button>
        <div class="flex-row" style="justify-content: space-around; align-items: center;">
          <img src="/discord.ico" alt="discord" style="height: 30px; margin: 5px;" />
          <div>Login With Discord</div>
        </div>
      </button></a
    >
  </div>
  <p style="color: red">{form?.message ?? ''}</p>
</main>

<style>
  hr {
    width: 50%;
  }
  input {
    width: 100%;
  }
</style>
