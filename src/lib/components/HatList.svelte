<script lang="ts">
	import type { Hat } from '$lib/stores/hats';
	import Circle3 from 'svelte-loading-spinners/dist/ts/Circle3.svelte';
	import HatCard from './HatCard.svelte';

	export let categories: Record<string, Hat[]>;
</script>

<div class="max-w-4xl w-full">
	{#each Object.entries(categories) as [category, hats] (category)}
		<h1 class="category-heading">
			{category.trim().replace(/^\w/, (c) => c.toUpperCase())}
		</h1>
		<div class="grid gap-4 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 items-start">
			{#each hats as hat (hat.type)}
				<HatCard {hat} />
			{/each}
		</div>
	{:else}
		<div class="flex justify-center items-center p-8">
			<Circle3 />
		</div>
	{/each}
</div>

<style lang="scss">
	.category-heading {
		@apply text-2xl text-left;
		@apply pt-4 pb-4;
	}
</style>
