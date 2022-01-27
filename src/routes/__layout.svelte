<script lang="ts">
	import NavBar from '$components/NavBar.svelte';
</script>

<svelte:head>
	<title>Hats Datapack</title>
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="mask-icon" href="/i/favicon.svg" color="blue" />

	<script>
		// Prevent theme change flicker by setting it here early
		if ('theme' in localStorage) {
			document.documentElement.dataset.theme = localStorage.theme;
		} else {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.dataset.theme = 'dark';
				localStorage.theme = 'dark';
			} else {
				document.documentElement.dataset.theme = 'light';
			}
		}
	</script>
</svelte:head>

<header class="flex justify-center">
	<NavBar />
</header>

<main class="flex flex-col items-center">
	<slot />
</main>

<style lang="scss">
	@use 'src/styles/themes';

	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	@font-face {
		font-family: 'Roboto', sans-serif;
		src: url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
	}

	:global body {
		--duration-theme: 150ms;

		@apply h-full m-4;
		@apply bg-bg text-on-bg;
		@apply transition-colors duration-theme;
	}

	// :global* {
	// 	outline: 1px solid yellow;
	// }
</style>
