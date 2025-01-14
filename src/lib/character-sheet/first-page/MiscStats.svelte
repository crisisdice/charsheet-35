<script lang="ts">
  import Equation from './Equation.svelte';
  import TouchAc from './boxes/TouchAc.svelte';
  import FlatFootedAc from './boxes/FlatFootedAc.svelte';
  import Initiative from './boxes/Initiative.svelte';

  import { getCharacter } from '../data/store.svelte';
  import { armorClasses, initiativeOperands, initiativeSum } from '../data/derived.svelte';

  const character = getCharacter();

  const { touchArmorClass: touchAc, flatFootedArmorClass: flatFootedAc } = $derived(
    armorClasses(character)
  );

  const { operands } = $derived(initiativeOperands(character));
  const initiative = $derived(initiativeSum(operands));
</script>

<div class="flex-column container">
  <div class="flex-row armor-classes">
    <TouchAc {touchAc} />
    <FlatFootedAc {flatFootedAc} />
  </div>
  <Equation {operands}>
    <Initiative {initiative} />
  </Equation>
</div>

<style lang="scss">
  .container {
    gap: 10px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .armor-classes {
    gap: 15px;
    justify-content: space-between;
  }
</style>
