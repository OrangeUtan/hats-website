const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      title: ['Minecrafter', 'sans-serif'],
      'title-alt': ['Minecrafter Alt', 'sans-serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'Courier New', 'monospace']
    }
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#ffa726',
          'primary-content': '#ffffff',
          secondary: '#eb460a',
          'secondary-content': '#ffffff',
          accent: '#7572cb',
          'accent-content': '#ffffff'
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
