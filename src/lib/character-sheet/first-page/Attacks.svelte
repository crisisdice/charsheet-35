<script lang="ts">
  import AttackBlock from './AttackBlock.svelte';

  import { getCharacter } from '../data/store.svelte';

  const character = getCharacter();
</script>

<div>
  {#each character.gear.attacks as attack}
    <AttackBlock bind:attack />
  {/each}
</div>

<style lang="scss">
</style>
