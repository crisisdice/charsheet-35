<script lang="ts">
	import { rollDice } from '../../../server'
	import Box from '../../common/Box.svelte'
	import { character } from '../../data/store.svelte'

	const { initiative: value }: { initiative: number } = $props()

	const short = 'Initiative'
	const long = 'Modifier'
	const width = '80%'

	const roll = async () => rollDice(character, 'initiative', 20, value)
</script>

<Box {short} {long} {value} {width} {roll} disabled />

<style lang="scss">
</style>
