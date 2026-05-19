<script lang="ts">
  import { base } from "$app/paths";
  import { formatDate } from "$lib/utils/date.js";
  import Blogsidebar from "$lib/components/blogsidebar.svelte";

  export let data;
</script>

<div class="flex flex-col md:flex-row gap-10 w-full">
  <main class="flex-1 flex flex-col gap-8">
    <h1
      class="text-2xl font-bold uppercase tracking-wide text-yellow-300 border-b border-white/20 pb-2"
    >
      Blog
    </h1>

    <h2 class="text-xl uppercase tracking-wide text-yellow-300 pb-2">
        Archive: {data.year}
    </h2>

    <ul class="flex flex-col gap-6">
      {#each data.posts as post}
        <li
          class="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-yellow-300 transition duration-200 shadow-md"
        >
          <a
            href="{base}/{post.path}"
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
        <li class="text-white/60 italic">
          No posts are available for this selection.
        </li>
      {/each}
    </ul>
  </main>

  <Blogsidebar allYears={data.availableYears} />
</div>
