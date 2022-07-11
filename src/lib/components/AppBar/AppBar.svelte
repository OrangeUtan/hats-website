<script lang="ts">
  import Logo from '$components/Logo/Logo.svelte';
  import MenuIcon from 'svelte-material-icons/Menu.svelte';
  import GithubIcon from 'svelte-material-icons/Github.svelte';
  import LanguageSelect from '$components/LanguageSelect/LanguageSelect.svelte';
  import ThemeToggle from '$components/ThemeToggle/ThemeToggle.svelte';
  import { latestRelease } from '$data/repo';
</script>

<div class="navbar fixed z-50 text-primary-content">
  <div class="navbar-start">
    <!-- Logo desktop -->
    <a class="btn btn-ghost normal-case text-xl hidden md:flex" href="/">
      <Logo size="1.5em" />
      <p class="ml-2">Hats</p>
    </a>
    <a
      class="link link-hover text-xs tooltip tooltip-bottom hidden md:block"
      data-tip="Changelog"
      href="https://github.com/OrangeUtan/Hats/releases"
      target="_blank"
    >
      {$latestRelease.tag_name}
    </a>

    <!-- Menu mobile -->
    <label for="my-drawer-3" class="btn btn-square btn-ghost md:hidden">
      <MenuIcon size="2em" />
    </label>
  </div>

  <div class="navbar-center">
    <!-- Menu desktop -->
    <ul class="menu menu-horizontal p-0 hidden md:flex">
      <li><a href="/index">Index</a></li>
    </ul>

    <!-- Logo mobile -->
    <a class="btn btn-ghost btn-square normal-case text-xl md:hidden -m-8" href="/">
      <Logo size="1.5em" />
    </a>
  </div>

  <div class="navbar-end">
    <LanguageSelect />
    <ThemeToggle />
    <div class="flex justify-center items-center tooltip tooltip-bottom text" data-tip="GitHub">
      <a
        href="https://github.com/OrangeUtan/Hats"
        target="_blank"
        class="btn btn-ghost btn-square"
        data-tip="Github"
      >
        <GithubIcon size="1.5em" />
      </a>
    </div>
  </div>
</div>
