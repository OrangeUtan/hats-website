<script context="module" lang="ts">
	export async function load({ params }) {
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
