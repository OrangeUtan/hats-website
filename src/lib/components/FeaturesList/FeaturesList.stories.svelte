<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import FeaturesList from './FeaturesList.svelte';
</script>

<Meta title="FeaturesList" component={FeaturesList} />

<Template let:args>
  <FeaturesList {...args} />
</Template>

<Story name="FeaturesList" parameters={{ layout: 'fullscreen' }} />
