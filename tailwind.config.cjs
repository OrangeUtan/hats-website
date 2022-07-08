const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#ffa726',
          secondary: '#c62828',
          'primary-content': '#f8f8f8'
        },
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]']
        }
      }
    ]
  },

  plugins: [require('daisyui')]
};

module.exports = config;
