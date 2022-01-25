<script lang="ts">
	import type { Hat } from '$lib/stores/hats';
	import Circle3 from 'svelte-loading-spinners/dist/ts/Circle3.svelte';
	import HatCard from './HatCard.svelte';
	export let groups: Record<string, Hat[]>;
</script>

<div class="max-w-4xl w-full">
	{#each Object.entries(groups) as [groupName, hats]}
		<h1 class="category-heading">
			{groupName.trim().replace(/^\w/, (c) => c.toUpperCase())}
		</h1>
		<div class="grid gap-4 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 items-start">
			{#each hats as hat}
				<HatCard {hat} />
			{/each}
		</div>
	{:else}
		{#each [[10, 8], [20, 5], [15, 5], [30, 10]] as group}
			<div class="mt-4 mb-4 h-5 w-{group[0]} rounded bg-skeleton" style={`width: ${group[0]}rem`} />
			<div class="grid gap-4 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 items-start">
				{#each Array(group[1]) as i}
					<div class="w-30 h-24 rounded bg-skeleton" />
				{/each}
			</div>
		{/each}
	{/each}
</div>

<style lang="scss">
	.category-heading {
		@apply text-2xl text-left;
		@apply pt-4 pb-4;
	}
</style>
