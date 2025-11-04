<script lang="ts">
  import Seo from '$lib/components/Seo.svelte';
  import { formatDate } from '$lib/utils/date.js';
  export let data;
</script>

<Seo
  title="EncryptSL - ABI changelog | {data.title}"
  description="{data.title}"
  image="https://i.imgur.com/wWKKMoJ.jpeg"
  url="https://encryptsl.github.io/abi/changelog/"
/>

<div class="flex flex-col gap-6 w-full text-white">
  <button
    on:click={() => history.back()}
    class="self-start text-yellow-300 border border-yellow-300 px-4 py-2 rounded-md text-sm font-semibold hover:bg-yellow-300 hover:text-slate-900 transition duration-200"
  >
    ← Zpět
  </button>

  <h1 class="text-2xl font-bold uppercase tracking-wide text-yellow-300 border-b border-white/20 pb-2">
    {data.title}
  </h1>

  {#if data.date}
    <p class="text-white/70 text-sm">
      <span class="font-semibold text-white">📅 Date:</span> {formatDate(data.date)}
    </p>
  {/if}

  {#if data.tags.length}
    <div class="flex flex-wrap gap-2 text-sm">
      <span class="font-semibold text-white">🏷️ Tags:</span>
      {#each data.tags as tag}
        <span class="bg-slate-700 text-yellow-300 px-2 py-1 rounded-full text-xs font-medium">
          {tag}
        </span>
      {/each}
    </div>
  {/if}

  <div class="prose prose-invert prose-sm sm:prose-base max-w-none markdown">
    {@html data.html}
  </div>
</div>