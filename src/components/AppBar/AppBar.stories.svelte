<script lang="ts">
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import AppBar from './AppBar.svelte';
  import { latestRelease } from '$data/repo';

  latestRelease.set({
    tag_name: 'v1.0.0'
  });
</script>

<Meta title="AppBar" component={AppBar} />

<Template>
  <AppBar />
</Template>

<Story name="AppBar" parameters={{ layout: 'fullscreen' }} />
