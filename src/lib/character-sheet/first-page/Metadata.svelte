<script lang="ts">
	import type { CharacterMetadata } from '../../types.ts'
	import { character, sheetIsLocked } from '../data/store.svelte'

	function getKeyText(key: keyof CharacterMetadata) {
		return key === 'name' ? 'Character Name' : key
	}

	const keys: (keyof CharacterMetadata)[] = [
		'name',
		'player',
		'class',
		'level',
		'race',
		'alignment',
		'deity',
		'size',
		'age',
		'gender',
		'height',
		'weight',
		'eyes',
		'hair',
		'skin'
	]

	const disabled = $derived(sheetIsLocked())
</script>

<div class="flex-row">
	<div class="container">
		{#each keys as key}
			<input
				type={key === 'level' ? 'number' : 'text'}
				id={key}
				bind:value={character.metadata[key]}
				style={`grid-area: ${key};`}
				{disabled}
			/>
			<label for={key} style={`grid-area: ${key}-label;`}>{getKeyText(key)}</label>
		{/each}
	</div>
	<img src="/logo.png" alt="logo" />
</div>

<style lang="scss">
	.container {
		width: 70%;
		margin-bottom: 20px;
		display: grid;
		column-gap: 0.5%;
		grid-template-columns: repeat(8, 12%);
		grid-template-areas:
			'name         name        name          name          player        player      player           player'
			'name-label   name-label  .             .             player-label  .           .                .'
			'class        class       class         level         race          race        alignment        deity'
			'class-label  .           .             level-label   race-label    .           alignment-label  deity-label'
			'size         age         gender        height        weight        eyes        hair             skin'
			'size-label   age-label   gender-label  height-label  weight-label  eyes-label  hair-label       skin-label';
	}

	label {
		font-size: $font-medium;
		margin-top: 5px;
		font-size: 10px;
	}

	input {
		border: none;
		border-bottom: 1px solid;
		font-size: 16px;
		outline: none;
		text-align: left;
		width: auto;
	}

	img {
		width: 30%;
	}

	/* input:focus { */
	/*   border-bottom-color: #0077cc; */
	/* } */
</style>
