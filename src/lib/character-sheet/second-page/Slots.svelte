<script lang="ts">
	import { ordinalIndicator } from '$lib/utilities'
</script>

<table>
	<thead>
		<tr>
			<th>Spells Known</th>
			<th>Spell Save DC</th>
			<th class="level">Level</th>
			<th>Spells Per Day</th>
			<th>Bonus Spells</th>
		</tr>
	</thead>
	<tbody>
		<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
		{#each { length: 10 } as _, index}
			<tr>
				<td><input type="text" /></td>
				<td><input type="text" /></td>
				<td class="bold">{ordinalIndicator(index)}</td>
				<td><input type="text" /></td>
				<td>
					{#if index !== 0}
						<input type="text" />
					{:else}
						<div class="bold">0</div>
					{/if}</td
				>
			</tr>
		{/each}
	</tbody>
</table>

<style lang="scss">
	.bold {
		font-weight: bold;
	}

	.level {
		font-weight: bold;
		font-size: $font-medium;
	}

	td {
		text-align: center;
	}

	th {
		font-size: $font-small;
	}

	input {
		max-width: 45px;
	}
</style>
