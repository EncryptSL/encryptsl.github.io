import matter from "gray-matter";
import { toSlug } from "./slug";

const files = import.meta.glob('../abi/changelog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
});

export function loadChangelogList() {
  const changelogs = Object.entries(files).map(([path, raw]) => {
    const { data } = matter(raw as string);
    const slug = path.split('/').pop()?.replace('.md', '');

    return {
      slug: data.slug ?? toSlug(data.title ?? slug) + `/${slug}`,
      title: data.title ?? slug,
      date: data.date ? new Date(data.date).toISOString() : null,
      tags: Array.isArray(data.tags) ? data.tags : []
    };
  });

  changelogs.sort((a, b) => {
    return new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime();
  });

  return changelogs;
}