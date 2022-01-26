<script lang="ts">
	import NavBar from '$components/NavBar.svelte';
	import { theme } from '$stores/theme';
	import { onMount } from 'svelte';

	onMount(() => {
		if ($theme) {
			document.documentElement.dataset.theme = $theme;
		}
	});
</script>

<svelte:head>
	<title>Hats Datapack</title>
	<link rel="icon" type="image/x-icon" href="/i/favicon.png" />
</svelte:head>

<header class="flex justify-center py-4 px-4">
	<NavBar />
</header>

<main class="flex flex-col items-center mx-4">
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

		@apply h-full;
		@apply bg-bg text-on-bg;
		@apply transition-colors duration-theme;
	}

	// :global* {
	// 	outline: 1px solid yellow;
	// }
</style>
