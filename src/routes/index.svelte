<script lang="ts">
  import Logo from '$components/Icons/Logo.svelte';
  import Menu from 'svelte-material-icons/Menu.svelte';
  import Github from 'svelte-material-icons/Github.svelte';
  import ThemeIcon from 'svelte-material-icons/ThemeLightDark.svelte';
  import ThemeToggle from '$components/ThemeToggle.svelte';
</script>

<div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <div class="navbar">
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

    <!-- Page content here -->
    Content
  </div>
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay" />
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
      <!-- Sidebar content here -->
      <li><a href="index">Index</a></li>
    </ul>
  </div>
</div>
