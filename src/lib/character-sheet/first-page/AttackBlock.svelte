<script lang="ts">
	import type { Attack } from '../../types'
	import EmphasisBox from '../common/EmphasisBox.svelte'
	import Checkbox from './Checkbox.svelte'

	import { AMMUNITION, WEAPONS as options } from '../system/gear'

	let { attack: binding = $bindable() }: { attack: string | null } = $props()

	import { character } from '../data/store.svelte'
	import { attackBonus, attackBonusString, damageBonus } from '../data/derived.svelte'
	import { rollDiceContent, rollDiceRequest } from '../../server'

	const headers = $derived([
		{ width: 40, name: 'Attack', valueGetter: ({ name }: Attack) => name },
		{ width: 30, name: 'Attack Bonus', valueGetter: attackBonusString(character) },
		{ width: 15, name: 'Damage', valueGetter: ({ damage }: Attack) => damage },
		{ width: 15, name: 'Critical', valueGetter: ({ critical }: Attack) => `x${critical}` }
	])

	const footers = [
		{
			width: 10,
			name: 'Range',
			valueGetter: ({ range }: Attack) => (range ? `${range}ft.` : '--')
		},
		{ width: 10, name: 'Type', valueGetter: ({ type }: Attack) => type },
		// TODO who should be able to set the notes
		{ width: 80, name: 'Notes', valueGetter: ({ notes }: Attack) => notes }
	]

	// TODO decrement ammo on ranged attack roll
	const ammo = AMMUNITION
	const roll = async () => {
		const attack = options.find(({ key }) => key === binding)

		if (attack == null) {
			return
		}

		const attackModifier = attackBonus(character)(attack)
		const damageModifier = damageBonus(character)(attack)

		const content = `🎲 ${rollDiceContent(
			character.metadata.name,
			'their attack',
			20,
			attackModifier
		)}. ${rollDiceContent(
			'Assuming they hit, they',
			'damage',
			attack.damageDice,
			damageModifier
		)} 🎲`

		await rollDiceRequest(content)

		// TODO handle critical hits, etc.
	}
</script>

<div style="margin-bottom: 10px; margin-right: 10px;">
	<EmphasisBox {headers} {options} bind:binding {footers} {roll} />
	<div class="flex-row ammunition" style="flex-wrap: wrap;">
		Ammunition
		<select>
			<option value={null}></option>
			{#each ammo as option}
				<option value={option}>
					{option.name}
				</option>
			{/each}
		</select>

		<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
		{#each { length: 6 } as _}
			<div class="flex-row">
				<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
				{#each { length: 5 } as _}
					<Checkbox />
				{/each}
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.ammunition {
		caption-side: bottom;
		padding: 10px;
		font-weight: bold;
		font-size: $font-small;
		white-space: nowrap;
		gap: 5px;
	}

	select {
		text-align: center;
		border: none;
		width: 30%;
		border-bottom: 1px solid black;
		background-color: white;
	}
</style>
