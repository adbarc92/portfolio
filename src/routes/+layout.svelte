<script>
	import Header from './Header.svelte';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
</div>

<style>
	div main {
		display: flex;
		justify-content: center;
		max-width: 80ch;
	}
</style>
