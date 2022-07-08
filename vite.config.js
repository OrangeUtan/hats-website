import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $components: path.resolve('src/lib/components'),
      $data: path.resolve('src/lib/data'),
      $func: path.resolve('src/lib/functions')
    }
  }
};

export default config;
