<script lang="ts">
	import { character } from '../data/store.svelte'
	import { encumberance } from '../data/derived.svelte'

	const headers = $derived(encumberance(character))
</script>

<div class="flex-row">
	{#each headers as { key, value }}
		<div class="flex-column">
			<input type="text" {value} id={key} disabled />
			<label for={key}>{key}</label>
		</div>
	{/each}
</div>

<style lang="scss">
	input {
		max-width: 45px;
	}

	label {
		font-size: $font-medium;
		font-weight: bold;
	}

	.flex-column {
		align-items: center;
		text-align: center;
	}

	.flex-row {
		padding: 20px;
	}
</style>
