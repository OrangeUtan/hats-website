<script lang="ts">
	import { language } from '$stores/language';
	import type { Hat } from '$lib/stores/hats';
	import HatCard from './HatCard.svelte';
	import Skeleton from './Skeleton.svelte';
	import { isEmptyObject } from '$lib/utils';

	export let groups: Record<string, Hat[]>;
</script>

<div>
	{#if !isEmptyObject($language) && !isEmptyObject(groups)}
		{#each Object.entries(groups) as [groupName, hats]}
			<h1 class="text-xl text-left py-4">
				{groupName.trim().replace(/^\w/, (c) => c.toUpperCase())}
			</h1>
			<div class="grid gap-4 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 items-start">
				{#each hats as hat}
					<HatCard {hat} />
				{/each}
			</div>
		{/each}
	{:else}
		{#each [[10, 8], [20, 5], [15, 5], [30, 10]] as group}
			<Skeleton class="my-4 h-7" style={`width: ${group[0]}rem`} />
			<div class="grid gap-4 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 items-start">
				{#each Array(group[1]) as i}
					<Skeleton class="w-30 h-28" />
				{/each}
			</div>
		{/each}
	{/if}
</div>

<style lang="scss">
	// :global* {
	// 	outline: 1px solid yellow;
	// }
</style>
