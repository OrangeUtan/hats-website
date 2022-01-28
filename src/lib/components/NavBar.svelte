<script lang="ts">
	import ThemeToggle from '$components/ThemeToggle.svelte';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
</script>

<nav class="flex justify-between w-full max-w-4xl">
	<div class="section">
		<a href="/" class="logo">
			<svg
				class="bg-accent rounded p-2 w-11 h-11"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
			>
				<path
					d="M0 15.8v3l1.4.7L9 17.6h1.6l-.7 3.7.2 2.7h3.4l.1-2.7-.4-3.8h3l6.2 1.8 1.5-.6v-3l-6.1-.9 4.9-5.3-2-1.8-4 4.6V4.9h-2.4V0H9.9v4.9H7.4V13l-4.6-2-.6.2-.7 2 4.5 2z"
				/>
			</svg>
		</a>
		<ul>
			<li>
				<a sveltekit:prefetch href="/index">Index</a>
			</li>
		</ul>
	</div>

	<div class="section">
		<LanguageSwitcher />
		<ThemeToggle />
	</div>
</nav>

<style lang="scss">
	.logo {
		@apply flex items-center;
	}

	.section {
		@apply flex items-center gap-4;
	}

	// :global* {
	// 	outline: 1px solid yellow;
	// }
</style>
