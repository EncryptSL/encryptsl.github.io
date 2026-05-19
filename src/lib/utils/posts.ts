import matter from 'gray-matter';

export async function fetchPosts() {
    // Přidáme ?raw, aby Vite načetl obsah souboru jako string
    const allPostFiles = import.meta.glob('../blog/**/*.md', { query: '?raw', import: 'default' });
    const iterablePostFiles = Object.entries(allPostFiles);

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            // resolver() nyní vrátí string (obsah .md souboru)
            const content = await resolver() as string;
            
            // Parsujeme frontmatter a samotný obsah (content) pomocí gray-matter
            const { data, content: bodyContent } = matter(content);
            
            const parts = path.split('/');
            // Bezpečné dohledání roku a slugu v poli (poslední a předposlední prvek)
            const slug = parts[parts.length - 1]?.replace('.md', '') || '';
            const extractedYear = parts[parts.length - 2] || '';

            // Pokud rok v cestě chybí, vezmeme ho z data.date, jinak dosadíme fallback
            const finalYear = extractedYear && extractedYear !== 'blog' 
                ? extractedYear 
                : (data.date ? new Date(data.date).getFullYear().toString() : 'noneyear');

            return {
                title: data.title || 'Untitled',
                date: data.date,
                tags: Array.isArray(data.tags) ? data.tags : [], // Jistota, že to bude VŽDY pole (fixuje .length error)
                description: data.description || data.excerpt || '',
                year: finalYear, // OPRAVA: Vracíme finalYear, ne prázdný/špatný year
                slug: slug,
                content: bodyContent, // DŮLEŽITÉ: Musíš poslat dál samotný text článku!
                path: `blog/${finalYear}/${slug}`
            };
        })
    );

    // Seřadit od nejnovějšího
    return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}