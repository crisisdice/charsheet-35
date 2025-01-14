<script lang="ts">
  import Box from '../../common/Box.svelte';

  const { armorClass: value }: { armorClass: number } = $props();

  const short = 'AC';
  const long = 'Armor Class';
  const width = '80px';
</script>

<Box {short} {long} {value} {width} disabled />

<style lang="scss">
</style>
