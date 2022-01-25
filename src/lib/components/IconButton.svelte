<script lang="ts">
	import type { ActionList } from 'svelte-useactions';
	import { useActions } from 'svelte-useactions';

	export let use: ActionList<HTMLElement> = [];
</script>

<button on:click use:useActions={use} on:mouseenter on:mouseleave>
	<slot />
</button>

<style lang="scss">
	button {
		// WCAG 2.1: Minimal target size of 44x44 pixel
		@apply relative p-2 w-11 h-11;

		&::before {
			@apply bg-white rounded-3xl opacity-0;
			@apply w-full h-full;
			@apply absolute left-0 top-0;
			content: '';
		}

		&:hover::before {
			@apply opacity-5;
		}
	}

	button::before {
		&:hover {
			@apply bg-white rounded-3xl opacity-5;
			@apply w-full h-full;
			@apply absolute left-0 top-0;
			content: '';
		}
	}

	// :global* {
	// 	outline: 1px solid yellow;
	// }
</style>
