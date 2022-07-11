<script lang="ts">
  import CheckCircleOutline from '$components/Icons/CheckCircleOutline.svelte';
  export let cls = '';
  const features = [
    '63 Hats to choose from',
    'Minecraft Java Edition 1.16',
    'Datapack + Resourcepack',
    'Get by Crafting, Looting, etc.'
  ];
</script>

<ul class={cls}>
  {#each features as feature}
    <li class="text-xl">
      <CheckCircleOutline cls="inline-block" size="1.5em" />
      {feature}
    </li>
  {/each}
</ul>
