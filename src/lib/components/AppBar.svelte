<script lang="ts">
  import Logo from '$components/Logo.svelte';
</script>

<div class="navbar bg-base-100">
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
    <div class="dropdown">
      <i tabindex="0" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          /></svg
        >
      </i>
    </div>
  </div>

  <div class="navbar-center">
    <!-- Logo mobile -->
    <a class="btn btn-ghost normal-case text-xl lg:hidden" href="/">
      <Logo cls="w-6 h-6" />
    </a>
  </div>

  <div class="navbar-end" />
</div>
