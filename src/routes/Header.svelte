<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/adb-icon.svg';
</script>

<header>
	<nav>
		<a href="/">
			<img class="icon" src={logo} alt="ADB Logo" />
		</a>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : ''}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : ''}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname === '/thoughts' ? 'page' : ''}>
				<a href="/thoughts">Thoughts</a>
			</li>
			<li aria-current={$page.url.pathname === '/projects' ? 'page' : ''}>
				<a href="/projects">Projects</a>
			</li>
			<li aria-current={$page.url.pathname === '/connect' ? 'page' : ''}>
				<a href="/connect">Connect</a>
			</li>
		</ul>
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

	ul {
		display: flex;
		align-items: center;
		row-gap: 2em;
		column-gap: 2em;
		list-style-type: none;
	}

	a {
		color: black;
		text-decoration: none;
		line-height: 1.25em;
	}

	li[aria-current='page'] {
		text-decoration: underline overline;
		text-decoration-style: solid;
		text-underline-offset: 0.2em;
	}

	.icon {
		width: 3em;
		height: 3em;
	}
</style>
