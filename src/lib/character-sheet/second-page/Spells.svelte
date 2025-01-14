<script lang="ts">
  import ArcaneSpellFailure from './ArcaneSpellFailure.svelte';
  import Slots from './Slots.svelte';
  import SpellSave from './SpellSave.svelte';
  import SpellsList from './SpellsList.svelte';

  import { spellStatistics } from '../data/derived.svelte';
  import { getCharacter } from '../data/store.svelte';

  const character = getCharacter();

  const { spellSave, arcaneSpellFailure } = $derived(spellStatistics(character));
</script>

<div class="flex-column" style="gap: 10px;">
  <div class="header">Spells</div>
  <SpellsList />
  <div class="center">
    <SpellSave {spellSave} />
  </div>
  <div class="center">
    <ArcaneSpellFailure {arcaneSpellFailure} />
  </div>
  <div class="center">
    <div class="modifiers"><div>Conditional Modifiers</div></div>
  </div>
  <Slots />
</div>

<style lang="scss">
  .center {
    display: flex;
    justify-content: center;
  }

  .modifiers {
    border: 1px solid black;
    height: 100px;
    width: 90%;
    font-size: $font-small;
  }

  .header {
    height: 20px;
    background-color: black;
    color: white;
    font-size: $font-medium;
    text-align: center;
    font-weight: bold;
  }
</style>
