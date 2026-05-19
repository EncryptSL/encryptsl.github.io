import { error } from "@sveltejs/kit";
import matter from 'gray-matter';
import { marked } from 'marked';

export async function load({ params }: { params: { year: string, slug: string } }) {
    const { year, slug } = params;

    try {
        const modules = import.meta.glob('/src/lib/blog/**/*.md', { query: '?raw', import: 'default' });
        
        const expectedPath = `/src/lib/blog/${year}/${slug}.md`;

        if (!modules[expectedPath]) {
            throw error(404, `Soubor ${expectedPath} neexistuje.`);
        }

        const rawContent = await modules[expectedPath]() as string;

        const { data, content } = matter(rawContent);

        const html = await marked.parse(content);

        return {
            meta: data,
            content: html,
            year,
            slug
        };
    } catch (e) {
        console.error(e);
        throw error(404, `Článek ${slug} v roce ${year} nebyl nalezen.`);
    }
}