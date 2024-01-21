<script>
	import Header from '../components/Header.svelte';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
</div>

<style>
	div main {
		max-width: 80ch;
		margin-left: auto;
		margin-right: auto;
	}
</style>
