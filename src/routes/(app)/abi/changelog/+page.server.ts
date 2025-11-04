import { loadChangelogList } from '$lib/utils/loadAbiChangelog';

export const prerender = true;

export function load() {
  const changelogs = loadChangelogList();
  return { changelogs };
}