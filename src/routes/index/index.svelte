<script lang="ts">
	import { Hat, hats } from '$stores/hats';
	import HatList from '$lib/components/HatList.svelte';

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
</script>

<svelte:head>
	<link rel="stylesheet" href="/i/hatIcons.css" />
</svelte:head>

<HatList {groups} />
