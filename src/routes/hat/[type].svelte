<script context="module" lang="ts">
	import { hats, fetchHats } from '$stores/hats';

	export async function load({ params }) {
		const hats = await fetchHats();

		console.log('get', hats);

		return {
			props: {
				hatType: params.type
			}
		};
	}
</script>

<script lang="ts">
	export let hatType: string;

	$: console.log('hat', $hats);
</script>

<h1>{hatType}</h1>
