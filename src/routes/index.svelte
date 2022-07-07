<script lang="ts">
  import Logo from '$components/Logo.svelte';
</script>

<div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <div class="navbar">
      <div class="navbar-start">
        <!-- Logo desktop -->
        <a class="btn btn-ghost normal-case text-xl hidden lg:flex" href="/">
          <Logo cls="w-6 h-6" />
          <p class="ml-2">Hats</p>
        </a>

        <!-- Menu desktop -->
        <ul class="menu menu-horizontal p-0 hidden lg:flex">
          <li><a href="/index">Index</a></li>
        </ul>

        <!-- Menu mobile -->
        <label for="my-drawer-3" class="btn btn-square btn-ghost lg:hidden">
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-6 w-6 stroke-current"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg></label
        >
      </div>

      <div class="navbar-center">
        <!-- Logo mobile -->
        <a class="btn btn-ghost normal-case text-xl lg:hidden" href="/">
          <Logo cls="w-6 h-6" />
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
