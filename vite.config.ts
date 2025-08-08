import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import ViteYaml from '@modyfi/vite-plugin-yaml';
import path from 'path';

export default defineConfig({
	plugins: [
		sveltekit(),
    	tailwindcss(),
		ViteYaml(),
	],
	resolve: {
    	alias: {
    	  	'@assets': path.resolve('/assets'),
    	}
  }
});
