const config = {
  mode: 'jit',
  purge: ['./src/**/*.svelte'],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: ['[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-content': 'var(--primary-content)',
        secondary: 'var(--secondary)',
        'secondary-content': 'var(--secondary-content)',
        accent: 'var(--accent)',
        'accent-content': 'var(--accent-content)',
        neutral: 'var(--neutral)',
        'neutral-content': 'var(--neutral-content)',
        'base-100': 'var(--base-100)',
        'base-200': 'var(--base-200)',
        'base-300': 'var(--base-300)',
        info: 'var(--info)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        error: 'var(--error)'
      }
    },
    fontFamily: {
      title: ['Minecrafter', 'sans-serif'],
      'title-alt': ['Minecrafter Alt', 'sans-serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'Courier New', 'monospace']
    }
  },
  plugins: [require('daisyui')]
};

module.exports = config;
