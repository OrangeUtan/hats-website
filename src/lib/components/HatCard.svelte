<script lang="ts">
	import type { Hat } from '$stores/hats';
	import { language } from '$stores/language';

	export let hat: Hat;
</script>

<a href={`/hat/${hat.type}`} class="card">
	<i class={`hat-icon h-${hat.type} drop-shadow-md`} />
	<h1 class="title">{$language[hat.name]}</h1>
</a>

<style lang="scss">
	.card {
		@apply rounded;
		@apply bg-secondary text-txt-primary;
		@apply flex flex-col items-center;
		@apply shadow-md;

		.title {
			@apply px-2 pb-3 w-full text-center rounded-b bg-secondary;
		}

		&:hover {
			@apply shadow-lg;
		}
	}

	// :global* {
	// 	outline: 1px solid yellow;
	// }
</style>
