import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import matter from 'gray-matter';

const files = import.meta.glob('../../../../lib/abi/changelog/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
})

export function load({ params, url }) {
	const slug = params.slug
	const id = url.searchParams.get('id');

	const match = Object.entries(files).find(([path]) =>
		path.includes(`${id}.md`)
	)

	if (!match) throw error(404, 'Changelog nenalezen')

	// teď už raw je přímo string, ne async import
	const raw = match[1] as string

	const { content, data } = matter(raw)
	const html = marked.parse(content)

	return {
		html,
		slug,
		title: data.title ?? slug,
		date: data.date ? new Date(data.date).toISOString() : null,
		tags: Array.isArray(data.tags) ? data.tags : []
	}
}