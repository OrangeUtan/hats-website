<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Wave from './Wave.svelte';
</script>

<Meta title="Wave" component={Wave} />

<Template let:args>
  <Wave {...args} />
</Template>

<Story name="Primary" args={{ cls: 'fill-primary' }} parameters={{ layout: 'fullscreen' }} />
<Story name="Secondary" args={{ cls: 'fill-secondary' }} parameters={{ layout: 'fullscreen' }} />
