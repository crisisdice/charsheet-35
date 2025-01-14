<script lang="ts">
	import variables from '../../variables.module.scss'

	const { fontMedium, fontSmall } = variables

	let {
		short,
		long,
		value = $bindable(),
		width = '60px',
		disabled = false,
		fontSize = 'medium',
		roll
	}: {
		short: string
		long?: string
		value: number
		width?: string
		disabled?: boolean
		fontSize?: 'medium' | 'small'
		roll?: () => void
	} = $props()
</script>

<div class="flex-row" style={`gap: 10px;`}>
	{#if roll != null}
		<div class="description" style={`width: ${width};`}>
			<button onclick={roll}>
				<div class="short" style={`font-size: ${fontSize === 'medium' ? fontMedium : fontSmall};`}>
					{short}
				</div>
				{#if long != null}
					<div class="long">{long}</div>
				{/if}
			</button>
		</div>
	{:else}
		<div class="description" style={`width: ${width};`}>
			<div class="short" style={`font-size: ${fontSize === 'medium' ? fontMedium : fontSmall};`}>
				{short}
			</div>
			{#if long != null}
				<div class="long">{long}</div>
			{/if}
		</div>
	{/if}

	<input type={disabled ? 'text' : 'number'} bind:value {disabled} />
</div>

<style lang="scss">
	.description {
		vertical-align: middle;
		text-align: center;
		color: white;
		background-color: black;
		grid-column: 1;
		display: flex;
		flex-direction: column;
		gap: 0;
		padding: 4px 6px;
		white-space: nowrap;
	}

	.short {
		font-weight: bold;
		white-space: pre-wrap;
	}

	.long {
		font-size: $font-mini;
	}

	input {
		max-width: 45px;
	}
</style>
