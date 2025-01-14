<script lang="ts">
	import Metadata from './first-page/Metadata.svelte'
	import AbilityBlock from './first-page/AbilityBlock.svelte'
	import StatBlock from './first-page/StatBlock.svelte'
	import SavingThrows from './first-page/SavingThrows.svelte'
	import AttackStats from './first-page/AttackStats.svelte'
	import Attacks from './first-page/Attacks.svelte'
	import Skills from './first-page/Skills.svelte'
	import MiscStats from './first-page/MiscStats.svelte'
</script>

<div>
	<div class="parent">
		<div style="grid-area: metadata">
			<Metadata />
		</div>
		<div style="grid-area: abilities;">
			<AbilityBlock />
		</div>
		<div style="grid-area: stats;">
			<StatBlock />
		</div>
		<div style="grid-area: misc;">
			<MiscStats />
		</div>
		<div style="grid-area: savesAndAttacks;">
			<div class="flex-column" style="justify-content: space-between; height: 100%; gap: 10px;">
				<SavingThrows />
				<AttackStats />
				<Attacks />
			</div>
		</div>
		<div style="grid-area: skills;">
			<Skills />
		</div>
	</div>
</div>

<style lang="scss">
	.parent {
		margin: 20px 30px;
		display: grid;
		row-gap: 0;
		grid-template-columns: 25% 30% 45%;
		grid-template-areas:
			'metadata        metadata        metadata'
			'abilities       stats           stats'
			'abilities       misc            skills'
			'savesAndAttacks savesAndAttacks skills';
	}
</style>
