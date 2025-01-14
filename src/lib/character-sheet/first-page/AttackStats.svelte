<script lang="ts">
  import Equation from './Equation.svelte';
  import BaseAttackBonus from './boxes/BaseAttackBonus.svelte';
  import GrappleBox from './boxes/GrappleBox.svelte';
  import SpellResistance from './boxes/SpellResistance.svelte';

  import { baseAttackBonus, grappleOperands, grappleSum } from '../data/derived.svelte';
  import { getCharacter } from '../data/store.svelte';

  const character = getCharacter();

  const baseAttack = $derived(baseAttackBonus(character));
  const { operands } = $derived(grappleOperands(character));
  const grappleModifier = $derived(grappleSum(operands));
</script>

<div class="flex-column container">
  <div class="flex-row">
    <BaseAttackBonus {baseAttack} />
    <div style="margin-left: 30px;">
      <SpellResistance spellResistance={character.stats.spellResistance} />
    </div>
  </div>
  <Equation {operands}>
    <GrappleBox {grappleModifier} />
  </Equation>
</div>

<style lang="scss">
  .container {
    gap: 10px;
  }
</style>
