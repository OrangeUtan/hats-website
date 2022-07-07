<script lang="ts">
  import Logo from '$components/Icons/Logo.svelte';
  import Menu from 'svelte-material-icons/Menu.svelte';
</script>

<div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <div class="navbar">
      <div class="navbar-start">
        <!-- Logo desktop -->
        <a class="btn btn-ghost normal-case text-xl hidden lg:flex" href="/">
          <Logo size="1.5em" />
          <p class="ml-2">Hats</p>
        </a>

        <!-- Menu desktop -->
        <ul class="menu menu-horizontal p-0 hidden lg:flex">
          <li><a href="/index">Index</a></li>
        </ul>

        <!-- Menu mobile -->
        <label for="my-drawer-3" class="btn btn-square btn-ghost lg:hidden">
          <Menu size="2em" />
        </label>
      </div>

      <div class="navbar-center">
        <!-- Logo mobile -->
        <a class="btn btn-ghost normal-case text-xl lg:hidden" href="/">
          <Logo size="1.5em" />
        </a>
      </div>

      <div class="navbar-end" />
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
