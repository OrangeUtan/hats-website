import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $components: path.resolve('src/components'),
      $data: path.resolve('src/data'),
      $utils: path.resolve('src/utils')
    }
  }
};

export default config;
