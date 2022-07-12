<script>
  export let size = '1em';
  export let width = size;
  export let height = size;
  export let color = 'currentColor';
  export let viewBox = '0 0 24 24';
  export let cls = '';
</script>

<svg
  {width}
  {height}
  {viewBox}
  xmlns="http://www.w3.org/2000/svg"
  class={cls}
  fill="none"
  stroke={color}
  ><path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  /></svg
>
