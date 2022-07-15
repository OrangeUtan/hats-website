<script lang="ts">
  export let href = '';
</script>

{#if href}
  <a {href} {...$$restProps} class={`btn ${$$restProps.class || ''}`}>
    <slot />
  </a>
{:else}
  <button {...$$restProps} class={`btn ${$$restProps.class || ''}`}>
    <slot />
  </button>
{/if}
