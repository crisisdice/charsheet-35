<script lang="ts">
  import type { Character } from '../../types';

  import { ordinalIndicator } from '$lib/utilities';

  import { getCharacter } from '../data/store.svelte';

  const character = getCharacter();

  const levels = Object.keys(character.spells) as (keyof Character['spells'])[];
</script>

<div class="flex-column" style="gap: 10px;">
  {#each levels as level, index}
    <div>
      <div class="flex-row">
        {ordinalIndicator(index)}: <input type="text" bind:value={character.spells[level][0]} />
      </div>
      <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
      {#each character.spells[level].slice(1) as _, spellIndex}
        <input type="text" bind:value={character.spells[level][spellIndex + 1]} />
      {/each}
    </div>
  {/each}
</div>

<style lang="scss">
  input {
    border: none;
    width: 100%;
    border-bottom: 1px solid black;
    height: 10px;
  }
</style>
