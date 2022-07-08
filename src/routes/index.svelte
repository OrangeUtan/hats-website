<script lang="ts">
  import Logo from '$components/Icons/Logo.svelte';
  import Menu from 'svelte-material-icons/Menu.svelte';
  import Github from 'svelte-material-icons/Github.svelte';
  import ThemeToggle from '$components/ThemeToggle.svelte';
  import { splash_text } from '$stores/splash';
</script>

<div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <div class="navbar fixed text-primary-content">
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
          <Menu size="2em" />
        </label>
      </div>

      <div class="navbar-center">
        <!-- Logo mobile -->
        <a class="btn btn-ghost btn-square normal-case text-xl md:hidden -m-8" href="/">
          <Logo size="1.5em" />
        </a>
      </div>

      <div class="navbar-end">
        <ThemeToggle />
        <div class="flex justify-center items-center tooltip tooltip-bottom text" data-tip="GitHub">
          <a
            href="https://github.com/OrangeUtan/Hats"
            target="_blank"
            class="btn btn-ghost btn-square"
            data-tip="Github"
          >
            <Github size="1.5em" />
          </a>
        </div>
      </div>
    </div>
    <div
      class="w-full pt-16 bg-gradient-to-br from-primary to-secondary text-primary-content grid place-items-center items-end"
    >
      <div class="hero-content flex-col">
        <h1 class="text-4xl font-extrabold">Hats</h1>
        <h2 class="text-2xl font-extrabold">{$splash_text}</h2>
      </div>
      <svg class="fill-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          d="M0,192L48,197.3C96,203,192,213,288,224C384,235,480,245,576,234.7C672,224,768,192,864,186.7C960,181,1056,203,1152,192C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
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
