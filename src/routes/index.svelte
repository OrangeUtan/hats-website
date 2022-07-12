<script lang="ts">
  import Splash from '$components/Splash/Splash.svelte';
  import Wave from '$components/Wave/Wave.svelte';
  import FeaturesList from '$components/FeaturesList/FeaturesList.svelte';
</script>

<div
  id="hero"
  class="w-full h-full pt-8 grid items-start bg-gradient-to-br from-primary to-secondary text-primary-content"
>
  <div id="hero-content" class="p-16 grid items-start gap-8 flex-col z-10">
    <div>
      <h1 class="text-8xl font-title">hats</h1>
      <Splash cls="text-3xl font-extrabold w-fit" />
    </div>
    <FeaturesList />
    <div class="flex gap-4">
      <a class="btn btn-accent" href="/install">Install</a>
    </div>
  </div>
  <Wave cls="fill-secondary self-end" />
</div>
