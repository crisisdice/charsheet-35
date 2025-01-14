<script lang="ts">
  import Box from '../../common/Box.svelte';

  const { grappleModifier: value }: { grappleModifier: number } = $props();

  const short = 'Grapple';
  const long = 'Modifier';
  const width = '100px';
</script>

<Box {short} {long} {value} {width} disabled />

<style lang="scss">
</style>
