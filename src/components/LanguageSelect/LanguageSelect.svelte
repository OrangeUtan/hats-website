<script lang="ts">
  import LanguageIcon from 'svelte-material-icons/Translate.svelte';
  import ChevronDownIcon from 'svelte-material-icons/ChevronDown.svelte';
  import { language_code, languages } from '$data/lang';
</script>

<div class="dropdown dropdown-end">
  <div tabindex="0" class="btn btn-ghost btn-square">
    <LanguageIcon size="1.5em" />
    <div class="hidden sm:inline-block">
      <ChevronDownIcon size="1.5em" />
    </div>
  </div>
  <ul
    tabindex="0"
    class="dropdown-content menu menu-compact p-3 shadow-2xl bg-base-100 rounded-box w-56 text-base-content"
  >
    {#each Object.values(languages) as { code, icon, native_name }}
      <li>
        <button class:active={$language_code === code} on:click={() => language_code.set(code)}>
          <p class="text-xl">{icon}</p>
          {native_name}
        </button>
      </li>
    {/each}
  </ul>
</div>
