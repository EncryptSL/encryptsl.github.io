<script lang="ts">
  import { resolve } from "$app/paths";
  import Blogsidebar from "$lib/components/blogsidebar.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import { formatDate } from "$lib/utils/date.js";
  export let data;
</script>

<Seo
  title="EncryptSL - Blog"
  description="My personal blog"
  image="https://i.imgur.com/wWKKMoJ.jpeg"
  url="https://encryptsl.github.io/abi/changelog"
/>

<div class="flex flex-col md:flex-row gap-10 w-full">
  <main class="flex-1 flex flex-col gap-8">
    <h1
      class="text-2xl font-bold uppercase tracking-wide text-yellow-300 border-b border-white/20 pb-2"
    >
      Blog
    </h1>

    <ul class="flex flex-col gap-6">
      {#each data.posts as post}
        <li
          class="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-yellow-300 transition duration-200 shadow-md"
        >
          <a
            href="{resolve("/")}{post.path}"
            class="text-yellow-300 text-lg font-semibold hover:underline"
          >
            {post.title}
          </a>

          {#if post.date}
            <div class="text-sm text-white/60 mt-1">
              📅 {formatDate(post.date)}
            </div>
          {/if}

          {#if post.tags.length}
            <div class="mt-3 flex flex-wrap gap-2">
              {#each post.tags as tag}
                <span
                  class="bg-slate-700 text-yellow-300 text-xs px-2 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              {/each}
            </div>
          {/if}
        </li>
      {:else}
<li class="flex flex-col items-center justify-center text-center p-8 rounded-2xl border border-dashed border-blue-500/20 bg-blue-500/[0.10]">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="w-8 h-8 text-blue-400/50 mb-3">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
  </svg>
  <p class="text-blue-200 italic text-sm md:text-base">
    No posts are available for this selection or blog is empty.
  </p>
</li>
      {/each}
    </ul>
  </main>

  <Blogsidebar allYears={data.availableYears} />
</div>
