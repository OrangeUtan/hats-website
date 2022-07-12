<script lang="ts">
  import { splash_text, next_splash } from '$data/splash';
  import Typewriter from 'svelte-typewriter';

  export let cls = '';
</script>

<!-- Ensures component doesn't change size in the first frame  -->
<div class={cls}>
  <Typewriter cursor={false} interval={40}>
    <p class="cursor-pointer" on:click={next_splash}>
      {$splash_text}
    </p>
  </Typewriter>
</div>

<style>
  div {
    min-height: 2.3rem;
  }
</style>
