import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true
    })
  ],

  kit: {
    adapter: adapter({
      // Create a Netlify Edge Function rather than using standard Node-based functions
      edge: false,

      // Split your app into multiple functions instead of creating a single one for the entire app.
      // if `edge` is true, this option cannot be used
      split: false
    }),
    files: {
      assets: 'src/assets'
    }
  }
};

export default config;
