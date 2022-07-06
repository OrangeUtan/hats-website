<script lang="ts">
  import '../app.css';
</script>

<header class="flex justify-center">
  <div class="navbar bg-base-100 max-w-3xl">
    <div class="navbar-start">
      <!-- Logo desktop -->
      <a class="btn btn-ghost normal-case text-xl hidden md:flex" href="/">
        <div class="logo w-6 h-6" />
      </a>

      <!-- Menu mobile -->
      <div class="dropdown">
        <i tabindex="0" class="btn btn-ghost md:hidden">
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
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a href="/index">Index</a></li>
        </ul>
      </div>

      <!-- Menu desktop -->
      <ul class="menu menu-horizontal p-0 hidden md:flex">
        <li><a href="/index">Index</a></li>
      </ul>
    </div>

    <div class="navbar-center">
      <!-- Logo mobile -->
      <a class="btn btn-ghost normal-case text-xl md:hidden -ml-8" href="/">
        <div class="logo w-6 h-6" />
      </a>
    </div>
  </div>
</header>

<main>
  <slot />
</main>

<style>
  .logo {
    background-color: currentColor;
    -webkit-mask: url(favicon.svg) no-repeat center;
    mask: url(favicon.svg) no-repeat center;
  }
</style>
