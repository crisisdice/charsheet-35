<script lang="ts">
	import { getCharacter } from '../data/store.svelte'

	const character = getCharacter()
</script>

<table>
	<tbody>
		<tr>
			<td style="width: 10%;">CP-</td><td
				><input type="number" style="width: 90%;" bind:value={character.gear.money.copper} /></td
			>
		</tr>
		<tr>
			<td style="width: 10%;">SP-</td><td
				><input type="number" style="width: 90%;" bind:value={character.gear.money.silver} /></td
			>
		</tr>
		<tr>
			<td style="width: 10%;">GP-</td><td
				><input type="number" style="width: 90%;" bind:value={character.gear.money.gold} /></td
			>
		</tr>
		<tr>
			<td style="width: 10%;">PP-</td><td
				><input type="number" style="width: 90%;" bind:value={character.gear.money.platinum} /></td
			>
		</tr>
	</tbody>
</table>

<style lang="scss">
	input {
		border: none;
		width: 100%;
		padding: 0;
	}
</style>
