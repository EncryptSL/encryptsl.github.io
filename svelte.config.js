import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
        paths: {
            // Zde je klíčová změna:
            // Předpokládejme, že vaše aplikace je dostupná na https://encryptsl.github.io/
            // V takovém případě by base měla být buď '' nebo '/'
            base: process.argv.includes('dev') ? '' : '/',
            // nebo pro GitHub Pages URL s názvem repozitáře, např. 'https://encryptsl.github.io/my-repo/'
            // base: process.argv.includes('dev') ? '' : '/my-repo',
        },
	},
}

export default config;
