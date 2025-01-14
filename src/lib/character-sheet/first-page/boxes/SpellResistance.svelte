<script lang="ts">
	import Box from '../../common/Box.svelte'

	const { spellResistance: value }: { spellResistance: number } = $props()

	const short = 'Spell Resistance'
	const width = '80px'
	const fontSize = 'small'
</script>

<Box {short} {value} {width} {fontSize} />

<style lang="scss">
</style>
