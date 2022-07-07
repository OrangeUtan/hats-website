<script lang="ts">
  import AppBar from '$components/AppBar.svelte';
  import '../app.css';
</script>

<header>
  <AppBar />
</header>

<main>
  <slot />
</main>
