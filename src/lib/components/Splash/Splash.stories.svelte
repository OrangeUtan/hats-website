<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Splash from './Splash.svelte';
</script>

<Meta title="Splash" component={Splash} />

<Template let:args>
  <Splash {...args} />
</Template>

<Story name="Default" parameters={{ layout: 'centered' }} />
