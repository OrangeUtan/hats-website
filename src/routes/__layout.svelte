<script lang="ts">
	import NavBar from '$components/NavBar.svelte';
</script>

<svelte:head>
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

<div class="bg-primary max-w-4xl min-h-full px-6 py-2 mx-auto">
	<header class="w-full">
		<NavBar />
	</header>

	<main class="w-full mt-8">
		<slot />
	</main>
</div>

<style lang="scss">
	@use 'src/styles/themes';

	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	@font-face {
		font-family: 'Roboto', sans-serif;
		src: url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
	}

	:global html {
		--duration-theme: 100ms;

		@apply h-full bg-bg text-txt-primary;

		body {
			height: 100%;
		}

		* {
			@apply transition-colors ease-linear duration-theme;
			// outline: 1px solid yellow;
		}
	}
</style>
