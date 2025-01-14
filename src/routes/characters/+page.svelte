<script lang="ts">
  import type { PageServerData } from './$types';

  let { data }: { data: PageServerData } = $props();
</script>

<h1>Characters</h1>
<ul>
  {#each data.characters as { name, level, characterClass, id }}
    <li><a href={`/characters/${id}`}>{name} (Level {level} {characterClass})</a></li>
  {/each}
</ul>
