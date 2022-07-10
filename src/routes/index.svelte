<script lang="ts">
  import Logo from '$components/Logo/Logo.svelte';
  import MenuIcon from 'svelte-material-icons/Menu.svelte';
  import GithubIcon from 'svelte-material-icons/Github.svelte';
  import LanguageSelect from '$components/LanguageSelect/LanguageSelect.svelte';
  import ThemeToggle from '$components/ThemeToggle.svelte';
  import Splash from '$components/Splash/Splash.svelte';
  import Wave from '$components/Wave/Wave.svelte';
</script>

<div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <div class="navbar fixed z-50 text-primary-content">
      <div class="navbar-start">
        <!-- Logo desktop -->
        <a class="btn btn-ghost normal-case text-xl hidden md:flex" href="/">
          <Logo size="1.5em" />
          <p class="ml-2">Hats</p>
        </a>

        <!-- Menu desktop -->
        <ul class="menu menu-horizontal p-0 hidden md:flex">
          <li><a href="/index">Index</a></li>
        </ul>

        <!-- Menu mobile -->
        <label for="my-drawer-3" class="btn btn-square btn-ghost md:hidden">
          <MenuIcon size="2em" />
        </label>
      </div>

      <div class="navbar-center">
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
    <div
      class="w-full h-full pt-16 bg-gradient-to-br from-primary to-secondary text-primary-content grid items-end"
    >
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
