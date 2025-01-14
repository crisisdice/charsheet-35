<script lang="ts">
	import Box from '../../common/Box.svelte'

	const { touchAc: value }: { touchAc: number } = $props()

	const short = 'Touch'
	const long = 'Armor Class'
	const width = '80%'
</script>

<Box {short} {long} {value} {width} disabled />

<style lang="scss">
</style>
