<script lang="ts">
  import AutoIcon from 'svelte-material-icons/ThemeLightDark.svelte';
  import LightIcon from 'svelte-material-icons/WhiteBalanceSunny.svelte';
  import DarkIcon from 'svelte-material-icons/WeatherNight.svelte';
  import { fly } from 'svelte/transition';

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

  let duration = 300;
  let offset = 15;
</script>

<div class="btn btn-ghost btn-square" on:click={toggle}>
  {#if theme === Theme.AUTO}
    <div in:fly={{ y: -offset, duration }} out:fly={{ y: offset, duration }} class="absolute">
      <AutoIcon {size} />
    </div>
  {:else if theme === Theme.LIGHT}
    <div in:fly={{ y: -offset, duration }} out:fly={{ y: offset, duration }} class="absolute">
      <LightIcon {size} />
    </div>
  {:else if theme === Theme.DARK}
    <div in:fly={{ y: -offset, duration }} out:fly={{ y: offset, duration }} class="absolute">
      <DarkIcon {size} />
    </div>
  {/if}
</div>
