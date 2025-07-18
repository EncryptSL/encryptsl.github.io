import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [
		sveltekit(),
    	tailwindcss(),
	],
	resolve: {
    	alias: {
    	  '@assets': path.resolve('/assets')
    	}
  }
});
