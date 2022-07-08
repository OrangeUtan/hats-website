<script lang="ts">
  import LanguageIcon from 'svelte-material-icons/Translate.svelte';
  import ChevronDownIcon from 'svelte-material-icons/ChevronDown.svelte';
  import { language, languages, setLanguage } from '$stores/lang';
</script>

<div class="dropdown dropdown-end">
  <div tabindex="0" class="btn btn-ghost m1">
    <LanguageIcon size="1.5em" />
    <div class="hidden sm:inline-block">
      <ChevronDownIcon size="1.5em" />
    </div>
  </div>
  <ul
    tabindex="0"
    class="dropdown-content menu menu-compact p-3 shadow-2xl bg-base-100 rounded-box w-56 text-base-content"
  >
    {#each Object.values(languages) as { code, icon, name }}
      <li>
        <button class:active={$language.code === code} on:click={() => setLanguage(code)}>
          <p class="text-xl">{icon}</p>
          {name}
        </button>
      </li>
    {/each}
  </ul>
</div>
