<script lang="ts">
  import Equation from './Equation.svelte';
  import SavingThrowBox from './boxes/SavingThrowBox.svelte';

  import type { Abilities, Saves } from '../../types';

  import { savingThrow } from '../data/derived.svelte';
  import { getCharacter } from '../data/store.svelte';

  const character = getCharacter();

  const {
    save,
    ability,
    headers
  }: { save: keyof Saves; ability: keyof Abilities; headers: [string, string, string, string] } =
    $props();

  const { operands, value } = $derived(savingThrow(save, ability, headers, character));

  const labels = 'none';
  const extraPadding = false;
</script>

<div class="container flex-row" style="flex-wrap: wrap;">
  <Equation {operands} {labels} {extraPadding}>
    <SavingThrowBox {save} {ability} {value} />
  </Equation>
  <div class="plus">+</div>
  <input type="number" bind:value={character.saves[save].temporary} />
</div>

<style lang="scss">
  .container {
    align-items: center;
  }

  input {
    border-style: solid;
    margin-bottom: -2px;
    border-width: 6px 8px;
    border-color: lightgrey;
    width: 60%;
    max-width: 45px;
  }

  .plus {
    font-size: $font-medium;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 8px;
    text-align: center;
  }
</style>
