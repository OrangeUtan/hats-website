const { mergeConfig } = require('vite');
const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|svelte|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
    '@storybook/addon-svelte-csf'
  ],
  framework: '@storybook/svelte',
  core: {
    builder: '@storybook/builder-vite'
  },
  svelteOptions: {
    preprocess: mergeConfig(
      import('../svelte.config.js').preprocess,
      sveltePreprocess({
        presets: [
          '@babel/preset-env',
          {
            loose: true,
            modules: false,
            targets: {
              esmodules: true
            }
          }
        ]
      })
    )
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: (await import('../vite.config.js')).default.resolve
    });
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },
  features: {
    storyStoreV7: false
  }
};
