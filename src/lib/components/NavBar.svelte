<script lang="ts">
	import ThemeToggle from '$components/ThemeToggle.svelte';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
</script>

<nav class="flex justify-between w-full max-w-4xl">
	<div class="flex flex-row items-center">
		<a href="/" class="text-xl flex items-center mr-4">
			<img
				class="inline-block align-text-top bg-brand rounded p-2 w-11 h-11"
				src="/i/favicon.png"
				alt=""
				width="35"
				height="35"
			/>
		</a>
		<div class="uppercase">
			<a href="/index">Index</a>
		</div>
	</div>
	<div class="flex gap-2 text-center">
		<LanguageSwitcher />
		<ThemeToggle />
	</div>
</nav>

<style lang="scss">
	// :global* {
	// 	outline: 1px solid yellow;
	// }
</style>
