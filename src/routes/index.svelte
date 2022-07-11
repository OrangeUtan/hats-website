<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';
  import { fetchLatestRelease, latestRelease } from '$data/repo';

  /** @type {import('@sveltejs/kit').Load} */
  export const load: Load = async ({ fetch }) => {
    latestRelease.set(await fetchLatestRelease(fetch));

    return {};
  };
</script>

<script lang="ts">
  import Splash from '$components/Splash/Splash.svelte';
  import Wave from '$components/Wave/Wave.svelte';
  import AppBar from '$components/AppBar/AppBar.svelte';
  import FeaturesList from '$components/FeaturesList/FeaturesList.svelte';
</script>

<div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <AppBar />
    <div
      id="hero"
      class="w-full h-full pt-16 grid items-start bg-gradient-to-br from-primary to-secondary text-primary-content"
    >
      <div id="hero-content" class="p-16 grid items-start gap-8 flex-col">
        <div>
          <h1 class="text-8xl font-title">hats</h1>
          <Splash cls="text-3xl font-extrabold" />
        </div>
        <FeaturesList />
      </div>
      <Wave cls="fill-secondary self-end" />
    </div>
  </div>
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay" />
    <ul class="menu p-2 overflow-y-auto w-80 bg-base-100">
      <!-- Sidebar content here -->
      <li><a href="index">Index</a></li>
    </ul>
  </div>
</div>
