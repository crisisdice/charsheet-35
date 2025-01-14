<script lang="ts">
  import { enhance } from '$app/forms';
  import type { PageServerData } from './$types';

  let { data }: { data: PageServerData } = $props();

  const { characters, user } = data;
</script>

<main>
  <div class="flex-row" style="align-items: center;">
    <h1>Hello {user.discordUsername ?? user.email}</h1>
    <form method="post" action="?/logout" use:enhance style="margin-left: 20px;">
      <button>Sign out</button>
    </form>
  </div>
  <ul></ul>
  <table>
    <thead>
      <tr style="height: 50%;">
        <th class="main-header">Name</th>
        <th class="first-header">Level and Class</th>
      </tr>
    </thead>
    <tbody>
      {#each characters as { name, level, characterClass, id }}
        <tr
          ><td><a href={`/characters/${id}`}>{name}</a></td><td>Level {level} {characterClass}</td
          ></tr
        >
      {/each}
    </tbody>
  </table>
</main>

<style lang="scss">
  table {
    border-collapse: separate;
    border-spacing: 0px;
    font-weight: bold;
    letter-spacing: 1px;
    width: 100%;
  }

  th {
    background-color: black;
    color: white;
  }

  td {
    border-left: 1px solid black;
    border-bottom: 2px solid black;
    padding: 8px 10px;
    height: 18px;
    font-size: $font-large;
    text-align: center;
  }

  td:first-of-type {
    border-left: 2px solid black;
  }

  td:last-of-type {
    border-right: 2px solid black;
  }

  .main-header {
    border-top: 8px solid black;
    border-radius: 5px 5px 0px 0px;
    height: 15px;
  }

  .first-header {
    border-top: 8px solid white;
    border-left: 1px solid white;
    font-size: $font-mini;
  }
</style>
