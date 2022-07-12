<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import ThemeToggle from './ThemeToggle.svelte';
</script>

<Meta
  title="ThemeToggle"
  component={ThemeToggle}
  argTypes={{
    primary: { control: 'boolean' }
  }}
/>

<Template let:args>
  <ThemeToggle {...args} />
</Template>

<Story name="ThemeToggle" parameters={{ layout: 'centered' }} />
