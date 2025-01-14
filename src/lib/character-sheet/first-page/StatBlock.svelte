<script lang="ts">
	import Box from '../common/Box.svelte'
	import ArmorClass from './ArmorClass.svelte'

	import { character, sheetIsLocked } from '../data/store.svelte'
	import CurrentHealth from './CurrentHealth.svelte'
	import NonlethalDamage from './NonlethalDamage.svelte'

	const headers = [
		{
			header: 'Total',
			className: 'total'
		},
		{
			header: 'Wounds / Current HP'
		},
		{
			header: 'Nonlethal Damage'
		},
		{
			header: 'Speed',
			className: 'speed'
		}
	]

	const max = $derived(character.stats.hp)
	const disabled = $derived(sheetIsLocked())
</script>

<div class="flex-column container" style="padding: 20px;">
	<div class="flex-row" style="justify-content: space-around; margin-left: -20px;">
		{#each headers as { header, className }}
			<span class={className}>{header}</span>
		{/each}
	</div>
	<div class="flex-row hit-points container">
		<Box short={'HP'} long={'Hit Points'} bind:value={character.stats.hp} width="80px" {disabled} />
		<div style="width: 40%">
			<CurrentHealth bind:value={character.stats.currentHp} {max} />
		</div>
		<div style="width: 40%">
			<NonlethalDamage bind:value={character.stats.nonleathalDamage} {max} />
		</div>
		<input
			style="width: 20%;"
			type={disabled ? 'text' : 'number'}
			bind:value={character.stats.speed}
			{disabled}
		/>
	</div>
	<div class="flex-row container" style="justify-content: space-between;">
		<ArmorClass />
		<div class="flex-column damage-reduction">
			<span> Damage Reduction </span>
			<input
				type={disabled ? 'text' : 'number'}
				bind:value={character.stats.damageReduction}
				{disabled}
			/>
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		gap: 10px;
	}

	.total {
		font-size: $font-medium;
		font-weight: bold;
		padding-right: 15px;
	}

	.speed {
		font-size: $font-medium;
		font-weight: bold;
	}

	.hit-points {
		gap: 10px;
	}

	.hit-points input:nth-of-type(1) {
		width: 600px;
	}

	.hit-points input:nth-of-type(2) {
		width: 200px;
	}

	.hit-points input:nth-of-type(3) {
		width: 300px;
	}

	.damage-reduction {
		justify-content: center;
	}

	.damage-reduction span {
		white-space: nowrap;
		font-size: $font-small;
	}

	.damage-reduction input {
		width: 100px;
	}

	span {
		text-align: center;
		font-size: $font-mini;
	}
</style>
