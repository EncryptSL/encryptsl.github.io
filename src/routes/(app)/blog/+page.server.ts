import { fetchPosts } from "$lib/utils/posts";

export const prerender = true;

export async function load() {
    const posts = await fetchPosts();

    const availableYears = [...new Set(posts.map(post => post.year))].sort().reverse();

    return {
        posts,
        availableYears
    };
}