<script lang="ts">
	import Box from '../../common/Box.svelte'

	const { baseAttack: value }: { baseAttack: number } = $props()

	const short = 'Base Attack Bonus'
	const disabled = true
	const width = '250px'
</script>

<Box {short} {value} {disabled} {width} />

<style lang="scss">
</style>
