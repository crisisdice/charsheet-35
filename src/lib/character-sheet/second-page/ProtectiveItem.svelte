<script lang="ts">
	import EmphasisBox from '../common/EmphasisBox.svelte'

	import type { ProtectiveItem } from '../../types'

	let { item: binding = $bindable() }: { item: string | null } = $props()

	const headers = [
		{ width: 44, name: 'Protective Item', valueGetter: () => '' },
		{ width: 20, name: 'AC Bonus', valueGetter: () => '' },
		{ width: 15, name: 'Weight', valueGetter: () => '' },
		{ width: 20, name: 'Special Properties', valueGetter: () => '' }
	]

	const options: ProtectiveItem[] = []
</script>

<EmphasisBox {headers} {options} bind:binding />

<style lang="scss">
</style>
