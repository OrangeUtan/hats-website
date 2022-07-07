<script lang="ts">
  export let cls: string;
</script>

<div class={`${cls}`} />

<style>
  div {
    background-color: currentColor;
    -webkit-mask: url(favicon.svg) no-repeat center;
    mask: url(favicon.svg) no-repeat center;
  }
</style>
