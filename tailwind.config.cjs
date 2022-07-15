/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      title: ['Minecrafter', 'sans-serif'],
      'title-alt': ['Minecrafter Alt', 'sans-serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'Courier New', 'monospace']
    }
  },
  daisyui: {
    themes: []
  },
  plugins: [require('daisyui')]
};
