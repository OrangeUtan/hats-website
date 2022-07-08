<script lang="ts">
  import { splash_text, next_splash } from '$stores/splash';
  import Typewriter from 'svelte-typewriter';
</script>

<!-- Ensures component doesn't change size in the first frame  -->
<div class="h-8">
  <Typewriter cursor={false} interval={20}>
    <h2 class="text-2xl font-extrabold select-none cursor-pointer" on:click={next_splash}>
      {$splash_text}
    </h2>
  </Typewriter>
</div>
