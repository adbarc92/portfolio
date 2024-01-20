<script>
	import logo from '$lib/images/adb-icon.svg';
</script>

<header>
	<nav>
		<a href="/">
			<img class="icon" src={logo} alt="ADB Logo" />
		</a>
		<div>
			<a href="/about">About</a>
			<a href="/thoughts">Thoughts</a>
			<a href="/projects">Projects</a>
			<a href="/contact">Contact</a>
		</div>
	</nav>
</header>

<style>
	header {
		padding-top: 1.5em;
		padding-bottom: 1.5em;
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
		text-transform: uppercase;
	}

	nav {
		display: flex;
		justify-content: space-between;
		padding-left: 1em;
		padding-right: 1em;
	}

	div {
		display: flex;
		align-items: center;
		row-gap: 2em;
		column-gap: 2em;
	}

	a {
		color: black;
		text-decoration: none;
	}

	.icon {
		width: 3em;
		height: 3em;
	}
</style>
