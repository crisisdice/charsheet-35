<script lang="ts">
	import Money from './Money.svelte'

	import { character } from '../data/store.svelte'
	import { totalWeight } from '../data/derived.svelte'
	import Encumberance from './Encumberance.svelte'

	const weight = $derived(totalWeight(character))

	const focusHelp = (e: { currentTarget: HTMLTableCellElement }) =>
		(e.currentTarget.firstChild as HTMLInputElement).focus()
</script>

<div>
	<div class="header">Other Possessions</div>
	<table>
		<thead>
			<tr>
				<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
				{#each { length: 2 } as _}
					<th style="width: 40%;">Item</th>
					<th>PG.</th>
					<th>WT.</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
			{#each { length: 16 } as _, row}
				<tr>
					<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
					{#each { length: 2 } as _, column}
						<td onclick={focusHelp}
							><input
								type="text"
								bind:value={character.gear.inventory[row + column * 17].name}
							/></td
						>
						<td onclick={focusHelp}
							><input
								type="text"
								bind:value={character.gear.inventory[row + column * 17].page}
							/></td
						>
						<td onclick={focusHelp}
							><input
								type="number"
								bind:value={character.gear.inventory[row + column * 17].weight}
							/></td
						>
					{/each}
				</tr>
			{/each}
			<tr>
				<td onclick={focusHelp}
					><input type="text" bind:value={character.gear.inventory[16].name} /></td
				>
				<td onclick={focusHelp}
					><input type="text" bind:value={character.gear.inventory[16].page} /></td
				>
				<td onclick={focusHelp}
					><input type="number" bind:value={character.gear.inventory[16].weight} /></td
				>
				<td>Total Weight Carried</td><td colspan="2">{`${weight} lbs.`}</td>
			</tr>
		</tbody>
	</table>
	<div style="height: 150px; border-left: 2px solid black; border-right: 2px solid black;">
		<Encumberance />
	</div>
	<div class="header">Money</div>
	<div style="height: 150px; border: 2px solid black; ">
		<Money />
	</div>
</div>

<style lang="scss">
	.header {
		height: 20px;
		background-color: black;
		color: white;
		font-size: $font-medium;
		text-align: center;
		font-weight: bold;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0px;
		border: 2px solid black;
		width: 100%;
	}

	th,
	td {
		border: 1px solid black;
		height: 30px;
	}

	input {
		border: none;
		width: 100%;
		padding: 0;
	}

	/* Chrome, Safari, Edge, Opera */
	input[type='number']::-webkit-outer-spin-button,
	input[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
		appearance: textfield;
	}
</style>
