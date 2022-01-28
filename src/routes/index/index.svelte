<script lang="ts" context="module">
	import { Hat, hats, updateHats } from '$stores/hats';
	import { setLanguage } from '$stores/language';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ params, url, fetch, session, context }) {
		try {
			await updateHats(fetch);
			await setLanguage(fetch, 'en_us');
		} catch (e) {
			return { error: e };
		}

		return {};
	}
</script>

<script lang="ts">
	import HatList from '$components/HatList.svelte';
	import Search from '$components/FilterSearch.svelte';
	let groupBy = 'category';

	function groupByProperty(hats: Record<string, Hat>, prop: string) {
		return Object.entries(hats).reduce((prev, [type, hat]) => {
			let keys: string[] = hat[prop];
			keys = Array.isArray(keys) ? keys : [keys];

			keys.forEach((key) => {
				if (!prev[key]) prev[key] = [];
				prev[key].push(hat);
			});

			return prev;
		}, {});
	}

	let groups: Record<string, Hat[]> = {};
	$: groups = groupByProperty($hats, groupBy);

	let showFilters = false;
</script>

<svelte:head>
	<link rel="stylesheet" href="/i/hatIcons.css" />
	<title>Hat Index</title>
</svelte:head>

<div class="max-w-4xl w-full mt-8">
	<Search bind:showFilters />
	{#if showFilters}
		<div />
	{/if}
</div>
<HatList {groups} />
