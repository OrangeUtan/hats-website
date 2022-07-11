<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Logo from './Logo.svelte';
</script>

<Meta title="Logo" component={Logo} />

<Template let:args>
  <Logo {...args} />
</Template>

<Story name="Default" args={{ size: '1rem' }} parameters={{ layout: 'centered' }} />
