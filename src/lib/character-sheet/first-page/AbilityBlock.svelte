<script lang="ts">
  import Box from '../common/Box.svelte';

  import type { AbilityName } from '../../types.ts';

  import { rollDice } from '../../client-calls';
  import { toAbilityScore, toAbilityScoreNumerical } from '../../utilities';
  import { getCharacter, sheetIsLocked } from '../data/store.svelte';

  const character = getCharacter();

  const keys = [
    'Ability Name',
    'Ability Score',
    'Ability Modifier',
    'Temporary Score',
    'Temporary Modifier'
  ];

  const abilities: AbilityName[] = [
    'strength',
    'dexterity',
    'constitution',
    'intelligence',
    'wisdom',
    'charisma'
  ];
</script>

<div class="flex-column">
  <div class="flex-row" style="justify-content: space-around; width: 100%;">
    {#each keys as key}
      <div class="headers">{key}</div>
    {/each}
  </div>
  <div class="flex-row" style="gap: 8px;">
    <div class="flex-column">
      {#each abilities as long}
        <div class="flex-row" style="gap: 15px;">
          <Box
            short={long.slice(0, 3)}
            {long}
            width="80px"
            bind:value={character.abilities[long]}
            roll={async () =>
              rollDice(character, long, 20, toAbilityScoreNumerical(character.abilities[long]))}
            disabled={sheetIsLocked()}
          />
          <input type="text" value={toAbilityScore(character.abilities[long])} disabled />
        </div>
      {/each}
    </div>
    <div class="flex-column" style="background-color: lightgrey;">
      <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
      {#each abilities as _}
        <div class="flex-row">
          <input class="temporary" type="text" />
          <input class="temporary" type="text" />
        </div>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .headers {
    text-align: center;
    font-size: $font-mini;
    width: 15%;
  }

  .flex-column {
    gap: 2px;
  }

  .temporary {
    border-style: solid;
    border-width: 6px 6px;
    border-color: lightgrey;
  }

  input {
    width: 80%;
    max-width: 45px;
  }
</style>
