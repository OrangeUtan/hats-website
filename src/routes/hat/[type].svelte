<script context="module" lang="ts">
	import { hats, fetchHats } from '$stores/hats';

	export async function load({ params }) {
		const hats = await fetchHats();

		return {
			props: {
				hatType: params.type
			}
		};
	}
</script>

<script lang="ts">
	export let hatType: string;
</script>

<h1>{hatType}</h1>
