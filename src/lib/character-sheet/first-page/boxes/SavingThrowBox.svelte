<script lang="ts">
  import Box from '../../common/Box.svelte';

  import { rollDice } from '../../../client-calls';
  import { getCharacter } from '../../data/store.svelte';

  const character = getCharacter();

  const { save, ability, value }: { save: string; ability: string; value: number } = $props();

  const short = `${save}`;
  const long = `(${ability})`;
  const width = '130px';

  const roll = async () => rollDice(character, `their ${save} save`, 20, value);
</script>

<Box {short} {long} {value} {width} {roll} disabled />

<style lang="scss">
</style>
