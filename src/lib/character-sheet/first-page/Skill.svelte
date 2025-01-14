<script lang="ts">
  import Checkbox from './Checkbox.svelte';

  import type { SkillEntry } from '../skills';
  import { getCharacter, sheetIsLocked } from '../data/store.svelte';
  import { skillModifier } from '../data/derived.svelte';
  import { rollDice } from '../../client-calls';

  const character = getCharacter();

  const { skill }: { skill: SkillEntry } = $props();

  const { key, untrained: checked, armorCheckPenalty, ability, name } = skill;
  const { value, abilityScore } = $derived(skillModifier(skill, character));

  const disabled = $derived(sheetIsLocked());

  const roll = async () => rollDice(character, `their ${skill.name} check`, 20, value);
</script>

<tr>
  <td>
    <Checkbox />
  </td>
  <td>
    <button onclick={roll}>
      <div class="flex-row" style="gap: 5px;">
        {name}
        {#if checked}
          <Checkbox {checked} disabled />
        {/if}
      </div>
    </button>
  </td>
  <td>{ability.slice(0, 3)}{armorCheckPenalty ? '*' : ''}</td>
  <td style="white-space: pre;"><input type="text" disabled {value} /> =</td>
  <td
    ><input
      type="text"
      style="text-align: center;"
      class="bottom-line"
      value={abilityScore}
      disabled
    /></td
  >
  <td style="white-space: pre;"
    >+ <input
      type={disabled ? 'text' : 'number'}
      {disabled}
      class="bottom-line"
      bind:value={character.skills[key].ranks}
      min="0"
    /> +</td
  >
  <!-- TODO is it possible to have misc modifier be both user set and also calculated ? -->
  <td
    ><input
      type={disabled ? 'text' : 'number'}
      {disabled}
      class="bottom-line"
      bind:value={character.skills[key].miscModifier}
    /></td
  >
</tr>

<style lang="scss">
  input {
    height: 18px;
    width: 65%;
  }

  td {
    text-align: center;
  }

  .bottom-line {
    padding: 5px;
    border: none;
    border-bottom: 1px solid;
    font-size: 16px;
    outline: none;
    text-align: center;
  }

  button {
    color: black;
    background-color: white;
  }

  button:hover {
    background-color: gray;
  }
</style>
