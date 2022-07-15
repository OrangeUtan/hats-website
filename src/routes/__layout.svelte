<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';
  import { latestRelease } from '$data/repo';

  /** @type {import('@sveltejs/kit').Load} */
  export const load: Load = async ({ fetch }) => {
    await latestRelease.fetch_data(fetch);
    return {};
  };
</script>

<script lang="ts">
  import '../styles/app.scss';
  import AppBar from '$components/AppBar/AppBar.svelte';
  import { theme } from '$data/theme';

  $: if (typeof document !== 'undefined') {
    document.documentElement.dataset.theme = $theme;
  }
</script>

<svelte:head>
  <script>
    // Loads theme from local storage as fast as possible to prevent flicker
    document.documentElement.dataset.theme = localStorage.theme || 'auto';
  </script>
</svelte:head>

<div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <AppBar />
    <slot />
  </div>
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay" />
    <ul class="menu p-2 overflow-y-auto w-80 bg-base-100">
      <!-- Sidebar content here -->
      <li><a href="index">Index</a></li>
    </ul>
  </div>
</div>
