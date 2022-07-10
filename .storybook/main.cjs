const { mergeConfig } = require('vite');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|svelte|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs'
  ],
  framework: '@storybook/svelte',
  core: {
    builder: '@storybook/builder-vite'
  },
  svelteOptions: {
    preprocess: import('../svelte.config.js').preprocess
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: (await import('../vite.config.js')).default.resolve.alias
      }
    });
  }
};
