<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';

  /** @type {import('@sveltejs/kit').Load} */
  export const load: Load = ({ error, status }) => {
    return {
      props: {
        message: `${status}: ${error?.message}`
      }
    };
  };
</script>

<script lang="ts">
  export let message: string;
</script>

<div class="w-full h-full flex justify-center items-center bg-primary">
  <h1 class="text-secondary-content text-4xl">{message}</h1>
</div>
