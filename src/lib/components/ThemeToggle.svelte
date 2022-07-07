<script lang="ts">
  import AutoIcon from 'svelte-material-icons/ThemeLightDark.svelte';
  import LightIcon from 'svelte-material-icons/WhiteBalanceSunny.svelte';
  import DarkIcon from 'svelte-material-icons/WeatherNight.svelte';
  import { slide, fly } from 'svelte/transition';

  enum Theme {
    AUTO,
    LIGHT,
    DARK
  }

  let size = '1.5em';
  let theme = Theme.AUTO;

  function toggle() {
    switch (theme) {
      case Theme.AUTO:
        theme = Theme.DARK;
        break;
      case Theme.DARK:
        theme = Theme.LIGHT;
        break;
      case Theme.LIGHT:
        theme = Theme.AUTO;
        break;
    }
  }
</script>

<div transition:fly={{ y: 200, duration: 2000 }} class="btn btn-ghost btn-square" on:click={toggle}>
  {#if theme === Theme.AUTO}
    <AutoIcon {size} />
  {:else if theme === Theme.LIGHT}
    <LightIcon {size} />
  {:else if theme === Theme.DARK}
    <DarkIcon {size} />
  {/if}
</div>
