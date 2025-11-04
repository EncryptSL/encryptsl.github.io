import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { readdirSync } from 'fs';
import path from 'path';

function toSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

const changelogDir = 'src/lib/abi/changelog';

const changelogFiles = readdirSync(changelogDir)
  .filter((f) => f.endsWith('.md'))
  .map((filename) => {
    const filePath = path.join(changelogDir, filename);
    const raw = readFileSync(filePath, 'utf-8');
    const { data } = matter(raw);

    const date = filename.replace('.md', '');
    const slug = toSlug(data.title ?? 'untitled');

    return `/abi/changelog/${slug}?id=${date}`;
  });

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
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
            // nebo pro GitHub Pages URL s názvem repozitáře, např. 'https://encryptsl.github.io/my-repo/'
            // base: process.argv.includes('dev') ? '' : '/my-repo',
        },
		prerender: {
			entries: ['*', ...changelogFiles]
		}
	},
}

export default config;
