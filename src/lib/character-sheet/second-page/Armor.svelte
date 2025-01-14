<script lang="ts">
	import EmphasisBox from '../common/EmphasisBox.svelte'

	import { ARMOR as options } from '../system/gear'

	import type { Armor } from '../../types'
	import { getCharacter } from '../data/store.svelte'

	const character = getCharacter()

	const headers = [
		{ width: 44, name: 'Armor/Protective Item', valueGetter: ({ name }: Armor) => name },
		{ width: 30, name: 'Type', valueGetter: ({ type }: Armor) => type },
		{ width: 15, name: 'AC Bonus', valueGetter: ({ bonus }: Armor) => `+ ${bonus}` },
		{ width: 10, name: 'Max Dex', valueGetter: ({ maxDexterity }: Armor) => `+ ${maxDexterity}` }
	]

	const footers = [
		{
			width: 20,
			name: 'Check Penalty',
			valueGetter: ({ checkPenalty }: Armor) => `- ${checkPenalty}`
		},
		{
			width: 20,
			name: 'Spell Failure',
			valueGetter: ({ spellFailure }: Armor) => `${spellFailure}%`
		},
		{ width: 20, name: 'Speed', valueGetter: ({ speed }: Armor) => `${speed}ft.` },
		{ width: 20, name: 'Weight', valueGetter: ({ weight }: Armor) => `${weight} lbs.` },
		{
			width: 20,
			name: 'Special Properties',
			valueGetter: ({ specialProperties }: Armor) => specialProperties
		}
	]
</script>

<EmphasisBox {headers} {options} bind:binding={character.gear.armor} {footers} />

<style lang="scss">
</style>
