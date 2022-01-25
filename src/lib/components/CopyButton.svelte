<script lang="ts">
	export let text = '';
</script>

<button class="p-2 mb-2 text-sm w-5/6 rounded bg-code" on:click|preventDefault={() => console.log('hi')}>{text}</button>
