<script lang="ts" context="module">
	import { Hat, hats, updateHats } from '$stores/hats';
	import { setLanguage, language } from '$stores/language';

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

	function filterHats(hats: Record<string, Hat>, value: string) {
		let entries = Object.entries(hats);

		// Filter by type and translated name
		entries = entries.filter(([_, hat]) => {
			return hat.type.toLowerCase().includes(value) || $language[hat.name].toLowerCase().includes(value);
		});

		return Object.fromEntries(entries);
	}

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

	let showFilters = false;
	let searchString = '';

	let filteredHats: Record<string, Hat>;
	$: filteredHats = filterHats($hats, searchString.toLowerCase());

	let groups: Record<string, Hat[]>;
	$: groups = groupByProperty(filteredHats, groupBy);
</script>

<svelte:head>
	<link rel="stylesheet" href="/i/hatIcons.css" />
	<title>Hat Index</title>
</svelte:head>

<div>
	<Search bind:value={searchString} bind:showFilters />
	{#if showFilters}
		<div />
	{/if}
	<HatList {groups} />
</div>
