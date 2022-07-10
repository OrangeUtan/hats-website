const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/svelte',
  core: {
    builder: '@storybook/builder-vite'
  },
  svelteOptions: {
    preprocess: import('../svelte.config.js').preprocess
  },
  async viteFinal(config) {
    config.resolve.alias = {
      $components: path.resolve('src/lib/components'),
      $data: path.resolve('src/lib/data'),
      $func: path.resolve('src/lib/functions')
    };

    return config;
  }
};
