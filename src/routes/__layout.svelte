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

<header class="flex justify-center mx-4 my-4">
	<NavBar />
</header>

<main class="flex justify-center mx-4">
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
		@apply bg-bg text-on-bg border-border;
		@apply transition-colors duration-theme;
	}
</style>
