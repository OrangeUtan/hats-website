<script lang="ts">
	import type { Hat } from '$stores/hats';
	import { language } from '$stores/language';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import CopyButton from '$components/CopyButton.svelte';

	function showDetails() {
		areDetailsHidden = false;
	}

	function hideDetails() {
		areDetailsHidden = true;
	}

	function onFocusout(e: FocusEvent) {
		if (!cardEl.contains(e.relatedTarget as Node)) {
			hideDetails();
		}
	}

	export let hat: Hat;
	let areDetailsHidden = true;
	let cardEl: HTMLElement;

	onMount(() => {
		cardEl.addEventListener('focusout', onFocusout);

		return () => {
			cardEl.removeEventListener('focusout', onFocusout);
		};
	});
</script>

<a
	href={`/hat/${hat.type}`}
	class="card"
	on:mouseover={showDetails}
	on:mouseleave={hideDetails}
	on:focus={showDetails}
	bind:this={cardEl}
>
	<i class={`hat-icon h-${hat.type} drop-shadow-md`} />
	<div class="card-title">
		<h1 class="p-2">{$language[hat.name]}</h1>
		{#if !areDetailsHidden}
			<div class="card-details" in:slide={{ delay: 300, duration: 100 }} out:slide={{ duration: 100 }}>
				<CopyButton text="/give @s" />
			</div>
		{/if}
	</div>
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

	.card-title {
		@apply w-full text-center rounded-b bg-card-title;
	}

	// :global* {
	// 	outline: 1px solid yellow;
	// }
</style>
