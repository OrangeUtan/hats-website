<script lang="ts">
	import { fade } from 'svelte/transition';
	export let popperAction;
	export let popperOptions = {};
</script>

<div
	class="tooltip"
	role="tooltip"
	use:popperAction={popperOptions}
	in:fade={{ duration: 100, delay: 400 }}
	out:fade={{ duration: 100 }}
>
	<slot />
	<div class="arrow" data-popper-arrow />
</div>

<style lang="scss">
	.tooltip {
		@apply bg-secondary text-txt-primary;
		@apply border border-solid border-border-secondary shadow-md;

		font-weight: bold;
		padding: 4px 8px;
		font-size: 13px;
		border-radius: 4px;
		height: fit-content;
		width: fit-content;
		z-index: 1;
	}

	.arrow,
	.arrow::before {
		position: absolute;
		width: 8px;
		height: 8px;
		background: inherit;
	}

	.arrow {
		visibility: hidden;

		&::before {
			visibility: visible;
			content: '';
			transform: rotate(45deg);
		}
	}

	:global(.tooltip[data-popper-placement^='top']) > .arrow {
		bottom: -4px;
	}

	:global(.tooltip[data-popper-placement^='bottom']) > .arrow {
		top: -4px;
	}

	:global(.tooltip[data-popper-placement^='left']) > .arrow {
		right: -4px;
	}

	:global(.tooltip[data-popper-placement^='right']) > .arrow {
		left: -4px;
	}
</style>
