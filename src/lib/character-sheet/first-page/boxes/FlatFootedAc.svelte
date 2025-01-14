<script lang="ts">
  import Box from '../../common/Box.svelte';

  const { flatFootedAc: value }: { flatFootedAc: number } = $props();

  const short = 'Flat-Footed';
  const long = 'Armor Class';
  const width = '80%';
</script>

<Box {short} {long} {value} {width} disabled />

<style lang="scss">
</style>
