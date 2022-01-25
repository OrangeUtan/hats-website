<script lang="ts">
	import { categories } from '$stores/hats';
	import type { Hat } from '$stores/hats';
	import { language } from '$stores/language';
	import HatList from '$lib/components/HatList.svelte';

	let searchTerm = '';
	let filteredCategories = $categories;

	function hatMatchesSearchTerm(searchTerm: string, hat: Hat) {
		return (
			$language[hat.name]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
			hat.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
			String(hat.cmd).includes(searchTerm)
		);
	}

	$: if (searchTerm) {
		filteredCategories = Object.fromEntries(
			Object.entries($categories)
				.map(([category, hats]) => {
					return [category, hats.filter((hat) => hatMatchesSearchTerm(searchTerm, hat))];
				})
				.filter(([_, hats]) => {
					return Object.keys(hats).length > 0;
				})
		);
	} else {
		filteredCategories = $categories;
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="/i/hatIcons.css" />
</svelte:head>

<HatList categories={filteredCategories} />
