<script lang="ts" context="module">
  import { fetchLatestRelease, latestRelease } from '$data/repo';

  /** @type {import('./__types/[slug]').Load} */
  export async function load({ params, fetch, session, stuff }) {
    latestRelease.set(await fetchLatestRelease(fetch));
    return {};
  }
</script>

<script lang="ts">
  import Splash from '$components/Splash/Splash.svelte';
  import Wave from '$components/Wave/Wave.svelte';
  import AppBar from '$components/AppBar/AppBar.svelte';
</script>

<div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <div
      class="w-full h-full pt-16 bg-gradient-to-br from-primary to-secondary text-primary-content grid items-end"
    >
      <AppBar />
      <div class="hero-content flex-col w-full pb-40">
        <h1 class="text-4xl font-extrabold">Hats</h1>
        <Splash />
      </div>
      <Wave cls="fill-secondary" />
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
