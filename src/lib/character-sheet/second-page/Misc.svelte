<script lang="ts">
  import { getCharacter } from '../data/store.svelte';

  const character = getCharacter();
</script>

<div>
  <input type="text" id="campaign" bind:value={character.campaign} />
  <label for="campaign">Campaign</label>
  <input type="number" id="xp" bind:value={character.xp} />
  <label for="xp">Experience Points</label>
</div>

<style lang="scss">
  #campaign {
    border: none;
    width: 100%;
    border-bottom: 1px solid black;
  }

  #xp {
    width: 100%;
    border: 1px solid black;
  }

  label {
    font-size: $font-small;
  }

  input {
    padding: 0;
  }
</style>
