<script lang="ts">
  import Box from '../common/Box.svelte';

  const { arcaneSpellFailure: value }: { arcaneSpellFailure: number } = $props();

  const short = 'Arcane Spell Failure';
  const disabled = true;
  const width = '200px';
</script>

<Box {short} {value} {disabled} {width} />

<style lang="scss">
</style>
