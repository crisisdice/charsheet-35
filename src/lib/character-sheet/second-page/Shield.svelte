<script lang="ts">
  import EmphasisBox from '../common/EmphasisBox.svelte';

  import type { Shield } from '../../types';

  let { shield: binding = $bindable() }: { shield: string | null } = $props();

  const headers = [
    { width: 44, name: 'Shield/Protective Item', valueGetter: () => '' },
    { width: 20, name: 'AC Bonus', valueGetter: () => '' },
    { width: 15, name: 'Weight', valueGetter: () => '' },
    { width: 20, name: 'Check Penalty', valueGetter: () => '' }
  ];

  const footers = [
    { width: 20, name: 'Spell Failure', valueGetter: () => '' },
    { width: 80, name: 'Special Properties', valueGetter: () => '' }
  ];

  const options: Shield[] = [];
</script>

<EmphasisBox {headers} {options} bind:binding {footers} />

<style lang="scss">
</style>
