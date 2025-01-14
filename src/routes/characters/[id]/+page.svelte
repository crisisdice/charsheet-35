<script lang="ts">
	import FirstPage from './lib/FirstPage.svelte'
	import SecondPage from './lib/SecondPage.svelte'

	import { character, backup, toggleLevelUpMode } from './lib/data/store.svelte'
	import { copy, syncChanges } from './server'

	// TODO pretty nav bar

	let open = $state(false)
	let currentPage = $state(0)

	function toggle() {
		open = !open
	}

	// TODO initial fetch / mapping to server type

	const changes = $derived(copy(character))

	$effect(() => {
		console.log(changes)

		const timer = setTimeout(() => {
			syncChanges(changes, $backup)
			backup.set(changes)
		}, 1000)

		return () => {
			clearTimeout(timer)
		}
	})
</script>

<main>
	<button
		onclick={toggle}
		style={`z-index: 5; width: 50px; height: 40px; font-size: 20px; display: ${open ? 'relative' : 'none'};`}
	>
		>{open ? '<' : '>'}</button
	>
	<nav style={`width: ${open ? '200px' : '0'}; padding: ${open ? '10px' : ''}`} class="flex-column">
		<button
			onclick={toggle}
			style=" z-index: 5; width: 50px; height: 40px; font-size: 20px; position: fixed; margin-left: 10px; margin-top: 10px;"
			>{open ? '<' : '>'}</button
		>
		<button
			style="margin-top: 50px;"
			onclick={() => {
				currentPage = 0
			}}>First Page</button
		>
		<button
			onclick={() => {
				currentPage = 1
			}}>Second Page</button
		>
		<button onclick={toggleLevelUpMode}>Level Up Mode</button>
	</nav>

	<div style={`margin-left: ${open ? '190px' : ''}; margin-top:60px;`}>
		{#if currentPage === 0}
			<FirstPage />
		{:else}
			<SecondPage />
		{/if}
	</div>
</main>

<style lang="scss">
	nav {
		gap: 10px;
		height: 100%;
		width: 0;
		position: fixed;
		/* z-index: 1; */
		top: 0;
		left: 0;
		background-color: black;
		overflow-x: hidden;
		transition: 0.3s;
	}

	nav button {
		padding: 8px 8px 8px 32px;
		text-decoration: none;
		/* font-size: 25px; */
		color: #818181;
		display: block;
		transition: 0.3s;
		white-space: nowrap;
	}

	nav button:hover {
		color: #f1f1f1;
	}

	@media screen and (max-height: 450px) {
		nav {
			padding-top: 15px;
		}
		nav button {
			font-size: 18px;
		}
	}
</style>
