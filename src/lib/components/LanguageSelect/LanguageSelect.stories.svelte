<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import LanguageSelect from './LanguageSelect.svelte';
</script>

<Meta title="LanguageSelect" component={LanguageSelect} />

<Template let:args>
  <LanguageSelect {...args} />
</Template>

<Story name="Default" parameters={{ layout: 'centered' }} />
