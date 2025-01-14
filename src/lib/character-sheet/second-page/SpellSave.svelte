<script lang="ts">
	import Box from '../common/Box.svelte'

	const { spellSave: value }: { spellSave: number } = $props()

	const short = 'Spell Save'
	const disabled = true
	const width = '200px'
</script>

<Box {short} {value} {disabled} {width} />

<style lang="scss">
</style>
