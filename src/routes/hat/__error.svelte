<script lang="ts" context="module">
	/**
	 * @type {import('@sveltejs/kit').ErrorLoad}
	 */
	export async function load({ error, status }) {
		return {
			props: {
				msg: error.message
			}
		};
	}
</script>

<script lang="ts">
	export let msg: string;
</script>

<div class="flex flex-col">
	<p class="self-center text-2xl">Error: {msg}</p>
	<a
		class="self-center text-2xl mt-4 border border-solid border-gray-200 rounded-md p-2 bg-gray-100"
		href="/">Back</a
	>
</div>
