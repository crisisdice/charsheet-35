<script lang="ts" generics="T extends { key: string, name: string }">
	import type { EmphasisProps } from '../types'

	let { headers, options, binding = $bindable(), footers = [], roll }: EmphasisProps<T> = $props() // eslint-disable-line no-undef

	const { width, name } = headers[0]

	let selected = $derived(options.find(({ key }) => key === binding))
</script>

<div>
	<table>
		<thead>
			<tr>
				<th style={`width: ${width}%;`} class="main-header">
					{#if roll != null}
						<button onclick={roll}>{name}</button>
					{:else}
						{name}
					{/if}
				</th>
				{#each headers.slice(1) as { width, name }}
					<th style={`width: ${width}%;`} class="first-header">{name}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					<select bind:value={binding}>
						<option value={null}></option>
						{#each options as option}
							<option value={option.key}>
								{option.name}
							</option>
						{/each}
					</select>
				</td>
				{#each headers.slice(1) as { valueGetter }}
					<td>{selected ? valueGetter(selected) : ''}</td>
				{/each}
			</tr>
		</tbody>
	</table>
	<table>
		<thead>
			<tr>
				{#each footers as { width, name }}
					<th style={`width: ${width}%;`} class="second-header">{name}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			<tr>
				{#each footers as { valueGetter }}
					<td>{selected ? valueGetter(selected) : ''}</td>
				{/each}
			</tr>
		</tbody>
	</table>
</div>

<style lang="scss">
	div {
		margin-bottom: 10px;
	}

	select {
		width: 100%;
		height: 100%;
		border: none;
		background-color: white;
	}

	table {
		border-collapse: separate;
		border-spacing: 0px;
		font-weight: bold;
		letter-spacing: 1px;
		width: 100%;
	}

	th {
		background-color: black;
		color: white;
	}

	td {
		border-left: 1px solid black;
		border-bottom: 2px solid black;
		padding: 8px 10px;
		height: 18px;
		font-size: $font-small;
		text-align: center;
	}

	td:first-of-type {
		border-left: 2px solid black;
	}

	td:last-of-type {
		border-right: 2px solid black;
	}

	.main-header {
		border-top: 8px solid black;
		border-radius: 5px 5px 0px 0px;
		height: 15px;
	}

	.first-header {
		border-top: 8px solid white;
		border-left: 1px solid white;
		font-size: $font-mini;
	}

	.second-header {
		height: 10px;
		font-size: $font-mini;
		border-left: 1px solid white;
	}

	.second-header:first-of-type {
		border-left: 2px solid black;
	}

	button {
		font-size: $font-medium;
		width: 95%;
		margin-bottom: 2px;
	}
</style>
