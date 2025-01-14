<script lang="ts">
	import Equation from './Equation.svelte'
	import ArmorClassBox from './boxes/ArmorClassBox.svelte'

	import { armorClasses } from '../data/derived.svelte'
	import { character } from '../data/store.svelte'

	const { operands, armorClass } = $derived(armorClasses(character))

	const renderEquals = false
	const maxWidth = '50px'
</script>

<Equation {operands} {renderEquals} {maxWidth}>
	<div class="flex-row">
		<ArmorClassBox {armorClass} />
		<div class="addition">
			= <span>10 + </span>
		</div>
	</div>
</Equation>

<style lang="scss">
	.addition {
		font-size: $font-medium;
		white-space: nowrap;
		padding-left: 10px;
		padding-right: 10px;
		padding-top: 10px;
	}

	.addition span {
		font-weight: bold;
	}
</style>
