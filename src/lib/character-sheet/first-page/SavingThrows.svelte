<script lang="ts">
	import SavingThrowBlock from './SavingThrowBlock.svelte'
	import SavingThrowHeaders from './SavingThrowHeaders.svelte'

	const headers: [string, string, string, string] = [
		'Base Save',
		'Ability Modifier',
		'Magic Modifier',
		'Misc Modifier'
	]
</script>

<div class="flex-column">
	<SavingThrowHeaders {headers} />
	<SavingThrowBlock save={'fortitude'} ability={'constitution'} {headers} />
	<SavingThrowBlock save={'reflex'} ability={'dexterity'} {headers} />
	<SavingThrowBlock save={'will'} ability={'wisdom'} {headers} />
</div>

<style lang="scss">
</style>
