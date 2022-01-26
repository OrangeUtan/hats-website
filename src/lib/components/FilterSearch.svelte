<script lang="ts">
	import { createPopperActions } from 'svelte-popperjs';
	import Tooltip from './Tooltip.svelte';

	export let showFilters;
	export let placeholder = 'Search...';

	let inputEl: HTMLInputElement;

	const [tooltipRef, tooltipContent] = createPopperActions();
	let showTooltip = false;

	let filterToggleText;
	$: filterToggleText = showFilters ? 'Hide filters' : 'Show filters';

	function onInputKeyDown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			e.preventDefault();
			inputEl.value = '';
		}
	}
</script>

<div class="w-full relative">
	<input
		class={`bg-black py-2 px-3 rounded w-full bg-bg-search ${$$props.class}`}
		type="text"
		role="searchbox"
		autocomplete="on"
		{placeholder}
		bind:this={inputEl}
		on:keydown={onInputKeyDown}
	/>
	<button
		use:tooltipRef
		on:mouseenter={() => (showTooltip = true)}
		on:mouseleave={() => (showTooltip = false)}
		on:click={() => (showFilters = !showFilters)}
		class="w-11 h-11 p-2 absolute right-0 top-0"
	>
		{#if showFilters}
			<svg viewBox="0 0 24 24">
				<path
					fill="currentColor"
					d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z"
				/>
			</svg>
		{:else}
			<svg viewBox="0 0 24 24">
				<path
					fill="currentColor"
					d="M 11,11 16.76,3.62 C 17.098063,3.1860137 17.022103,2.5604661 16.59,2.22 16.422155,2.0850457 16.215226,2.0078857 16,2 H 2 C 1.7744358,2.0013084 1.5559393,2.0788394 1.38,2.22 0.94789668,2.5604661 0.87193732,3.1860137 1.21,3.62 L 7,11 v 5.87 c -0.036664,0.306602 0.070372,0.612946 0.29,0.83 l 2,2 c 0.3900375,0.387724 1.019963,0.387724 1.41,0 0.223281,-0.215187 0.334099,-0.521784 0.3,-0.83 V 11 m 12,10 -5,-5 -5,5 z"
				/>
			</svg>
		{/if}
	</button>
	{#if showTooltip}
		<Tooltip
			popperAction={tooltipContent}
			popperOptions={{
				placement: 'bottom',
				modifiers: [{ name: 'offset', options: { offset: [0, 4] } }]
			}}>{filterToggleText}</Tooltip
		>
	{/if}
</div>
