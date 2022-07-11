<script lang="ts">
  import { splash_text, next_splash } from '$data/splash';
  import Typewriter from 'svelte-typewriter/src/Typewriter.svelte';

  export let cls = '';
</script>

<!-- Ensures component doesn't change size in the first frame  -->
<div>
  <Typewriter cursor={false} interval={40}>
    <p class={`select-none cursor-pointer ${cls}`} on:click={next_splash}>
      {$splash_text}
    </p>
  </Typewriter>
</div>

<style>
  div {
    min-height: 2.3rem;
  }
</style>
