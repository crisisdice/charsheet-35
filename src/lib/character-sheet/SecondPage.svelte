<script lang="ts">
	import Gear from './second-page/Gear.svelte'
	import List from './second-page/List.svelte'
	import Spells from './second-page/Spells.svelte'

	import { character } from './data/store.svelte'

	$inspect(character)
</script>

<div>
	<div class="parent">
		<div style="grid-area: gear;">
			<Gear />
		</div>
		<div style="grid-area: feats;">
			<List header="Feats" bind:items={character.feats} />
		</div>
		<div style="grid-area: special;">
			<List header="Special Abilities" bind:items={character.specialAbilities} />
		</div>
		<div style="grid-area: languages;">
			<List header="Languages" bind:items={character.languages} />
		</div>
		<div style="grid-area: spells;">
			<Spells />
		</div>
	</div>
</div>

<style lang="scss">
	.parent {
		height: 1000px;
		margin: 20px 30px;
		display: grid;
		row-gap: 10px;
		column-gap: 10px;
		grid-template-columns: 0.5fr 0.2fr 0.3fr;
		grid-template-areas:
			'gear   feats      spells'
			'gear   feats      spells'
			'gear   special    spells'
			'gear   special    spells'
			'gear   special    spells'
			'gear   languages  spells';
	}
</style>
