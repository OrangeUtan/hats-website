<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import LanguageSelect from './LanguageSelect.svelte';
</script>

<Meta title="LanguageSelect" component={LanguageSelect} />

<Template let:args>
  <div class="flex w-full justify-center">
    <LanguageSelect {...args} />
  </div>
</Template>

<Story name="Default" />
