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

  let theme = Theme.AUTO;
  let tooltip = '';
  updateTooltip(theme);

  let size = '1.5em';
  let duration = 300;
  let offset = 15;

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
    updateTooltip(theme);
  }

  function updateTooltip(theme: Theme) {
    switch (theme) {
      case Theme.AUTO:
        tooltip = 'Change Theme: Dark';
        break;
      case Theme.DARK:
        tooltip = 'Change Theme: Light';
        break;
      case Theme.LIGHT:
        tooltip = 'Change Theme: Auto';
        break;
    }
  }
</script>

<div class="flex justify-center items-center tooltip tooltip-bottom text" data-tip={tooltip}>
  <div class="btn btn-ghost btn-square" on:click={toggle}>
    {#if theme === Theme.AUTO}
      <div class="absolute" in:fly={{ y: -offset, duration }} out:fly={{ y: offset, duration }}>
        <AutoIcon {size} />
      </div>
    {:else if theme === Theme.LIGHT}
      <div class="absolute" in:fly={{ y: -offset, duration }} out:fly={{ y: offset, duration }}>
        <LightIcon {size} />
      </div>
    {:else if theme === Theme.DARK}
      <div class="absolute" in:fly={{ y: -offset, duration }} out:fly={{ y: offset, duration }}>
        <DarkIcon {size} />
      </div>
    {/if}
  </div>
</div>
