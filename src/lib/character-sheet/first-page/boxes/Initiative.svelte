<script lang="ts">
  import { rollDice } from '../../../client-calls';
  import Box from '../../common/Box.svelte';
  import { getCharacter } from '../../data/store.svelte';

  const character = getCharacter();

  const { initiative: value }: { initiative: number } = $props();

  const short = 'Initiative';
  const long = 'Modifier';
  const width = '80%';

  const roll = async () => rollDice(character, 'initiative', 20, value);
</script>

<Box {short} {long} {value} {width} {roll} disabled />

<style lang="scss">
</style>
