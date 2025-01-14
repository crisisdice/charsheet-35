<script lang="ts">
  import Armor from './Armor.svelte';
  import Inventory from './Inventory.svelte';
  import Misc from './Misc.svelte';
  import ProtectiveItem from './ProtectiveItem.svelte';
  import Shield from './Shield.svelte';

  import { getCharacter } from '../data/store.svelte';

  const character = getCharacter();
</script>

<div class="flex-column" style="gap: 10px; justify-content: space-between; height: 100%;">
  <Misc />
  <div class="header">Gear</div>
  <Armor />
  <Shield bind:shield={character.gear.shield} />
  <ProtectiveItem bind:item={character.gear.protectiveItemOne} />
  <ProtectiveItem bind:item={character.gear.protectiveItemTwo} />
  <Inventory />
</div>

<style lang="scss">
  .header {
    height: 20px;
    background-color: black;
    color: white;
    font-size: $font-medium;
    text-align: center;
    font-weight: bold;
  }
</style>
