<script lang="ts">
  import type { PageServerData } from './$types';

  let { data }: { data: PageServerData } = $props();
</script>

<h1>Character</h1>
<code style="white-space: pre;">
  {JSON.stringify(data.character.metadata, null, 2)}
</code>
