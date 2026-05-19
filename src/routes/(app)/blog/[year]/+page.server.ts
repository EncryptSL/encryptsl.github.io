import { fetchPosts } from '$lib/utils/posts';


export async function load({ params }: { params: { year: string }} ) {
    const allPosts = await fetchPosts();
    const { year } = params;

    const filteredPosts = allPosts.filter(post => {
        return post.date.startsWith(year);
    });

    const availableYears = [...new Set(allPosts.map(post => post.year))].sort().reverse();


    return {
        posts: filteredPosts,
        availableYears,
        year
    };
}