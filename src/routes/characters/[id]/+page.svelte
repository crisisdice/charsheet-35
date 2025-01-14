<script lang="ts">
  import { setContext } from 'svelte';

  import type { PageServerData } from './$types';
  import { page } from '$app/state';

  import { toggleLevelUpMode, backup } from '$lib/character-sheet/data/store.svelte';

  import FirstPage from '$lib/character-sheet/FirstPage.svelte';
  import SecondPage from '$lib/character-sheet/SecondPage.svelte';

  import { copy, syncChanges } from '$lib/client-calls';

  let { data }: { data: PageServerData } = $props();

  let character = $state(data.character);

  setContext('character', character);

  // TODO pretty nav bar
  // TODO fix state chaching issue (always reverts to same character)

  let open = $state(false);
  let currentPage = $state(0);

  function toggle() {
    open = !open;
  }

  const changes = $derived(copy(character));

  const id = page.params.id;

  $effect(() => {
    console.log(changes);

    const timer = setTimeout(() => {
      syncChanges(id, changes, $backup);
      backup.set(changes);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });
</script>

<main>
  <button
    onclick={toggle}
    style={`z-index: 5; width: 50px; height: 40px; font-size: 20px; display: ${open ? 'relative' : 'none'};`}
  >
    >{open ? '<' : '>'}</button
  >
  <nav style={`width: ${open ? '200px' : '0'}; padding: ${open ? '10px' : ''}`} class="flex-column">
    <button
      onclick={toggle}
      style=" z-index: 5; width: 50px; height: 40px; font-size: 20px; position: fixed; margin-left: 10px; margin-top: 10px;"
      >{open ? '<' : '>'}</button
    >
    <button
      style="margin-top: 50px;"
      onclick={() => {
        currentPage = 0;
      }}>First Page</button
    >
    <button
      onclick={() => {
        currentPage = 1;
      }}>Second Page</button
    >
    <button onclick={toggleLevelUpMode}>Level Up Mode</button>
    <a href="/characters" style="text-decoration: none;"><button>My Characters</button></a>
  </nav>

  <div style={`margin-left: ${open ? '190px' : ''}; margin-top:60px;`}>
    {#if currentPage === 0}
      <FirstPage />
    {:else}
      <SecondPage />
    {/if}
  </div>
</main>

<style lang="scss">
  nav {
    gap: 10px;
    height: 100%;
    width: 0;
    position: fixed;
    /* z-index: 1; */
    top: 0;
    left: 0;
    background-color: black;
    overflow-x: hidden;
    transition: 0.3s;
  }

  nav button {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    /* font-size: 25px; */
    color: #818181;
    display: block;
    transition: 0.3s;
    white-space: nowrap;
  }

  nav button:hover {
    color: #f1f1f1;
  }

  @media screen and (max-height: 450px) {
    nav {
      padding-top: 15px;
    }
    nav button {
      font-size: 18px;
    }
  }
</style>
