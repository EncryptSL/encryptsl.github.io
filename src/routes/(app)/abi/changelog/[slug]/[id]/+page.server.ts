import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import matter from 'gray-matter';

const files = import.meta.glob('../../../../../../lib/abi/changelog/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
})

export function load({ params }) {
  const { slug, id } = params;
  const filename = `${id}.md`;

  const match = Object.entries(files).find(([path]) =>
    path.endsWith(filename)
  );

  if (!match) {
    console.warn(`Soubor ${filename} nenalezen`);
    throw error(404, 'Changelog nenalezen');
  }

  const raw = match[1] as string;
  const { content, data } = matter(raw);
  const html = marked.parse(content);

  return {
    html,
    slug,
    title: data.title ?? slug,
    date: data.date ?? null,
    tags: Array.isArray(data.tags) ? data.tags : []
  };
}