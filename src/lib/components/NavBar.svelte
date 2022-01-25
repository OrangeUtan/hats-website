<script lang="ts">
	import ThemeToggle from '$components/ThemeToggle.svelte';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
</script>

<nav>
	<div class="left">
		<a href="/" class="brand">
			<img
				class="inline-block align-text-top bg-brand rounded-lg p-1"
				src="/i/favicon.png"
				alt=""
				width="35"
				height="35"
			/>
		</a>
		<div class="links">
			<a href="/index">Index</a>
		</div>
	</div>
	<div class="right">
		<LanguageSwitcher />
		<ThemeToggle />
	</div>
</nav>

<style lang="scss">
	nav {
		@apply flex justify-between w-full;
		@apply max-w-4xl;

		.left {
			@apply flex flex-row items-center;

			.brand {
				@apply text-xl flex items-center mr-4;
			}

			.links {
				@apply uppercase;
			}
		}

		.right {
			@apply flex gap-2;
			@apply text-center;
		}
	}

	// :global* {
	// 	outline: 1px solid yellow;
	// }
</style>
