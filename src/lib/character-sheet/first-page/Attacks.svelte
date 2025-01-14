<script lang="ts">
	import AttackBlock from './AttackBlock.svelte'

	import { character } from '../data/store.svelte'
</script>

<div>
	{#each character.gear.attacks as attack}
		<AttackBlock bind:attack />
	{/each}
</div>

<style lang="scss">
</style>
