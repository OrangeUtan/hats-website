<script lang="ts">
	import type { Hat } from '$stores/hats';
	import { language } from '$stores/language';

	export let hat: Hat;
</script>

<a href={`/hat/${hat.type}`} class="card">
	<i class={`hat-icon h-${hat.type} drop-shadow-md`} />
	<h1 class="p-1 w-full text-center rounded-b bg-card-title">{$language[hat.name]}</h1>
</a>

<style lang="scss">
	.card {
		@apply border border-solid border-border-card rounded;
		@apply bg-card text-on-card;
		@apply flex flex-col items-center;
		@apply transition-colors duration-theme;

		box-shadow: 0 0.18rem 0.06rem -0.12rem rgba(0, 0, 0, 0.2), 0 0.12rem 0.12rem 0 rgba(0, 0, 0, 0.14),
			0 0.06rem 0.28rem 0 rgba(0, 0, 0, 0.12);
	}

	// :global* {
	// 	outline: 1px solid yellow;
	// }
</style>
