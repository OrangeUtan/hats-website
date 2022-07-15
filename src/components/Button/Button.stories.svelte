<script lang="ts">
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Button from './Button.svelte';
</script>

<Meta title="Button" component={Button} />

<Story name="Button" parameters={{ layout: 'centered' }}>
  <Button class="btn-primary">Button</Button>
</Story>
