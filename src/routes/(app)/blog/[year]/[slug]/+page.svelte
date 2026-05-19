<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import { formatDate } from "$lib/utils/date.js";
  export let data;
</script>

<!-- Přidána obranná podmínka i do SEO pro případ, že by meta chybělo úplně -->
<Seo
  title="EncryptSL - Blog | {data.meta?.title || 'Article'}"
  description={data.meta?.title || ''}
  image="https://i.imgur.com/wWKKMoJ.jpeg"
  url="https://encryptsl.github.io/blog/{data.year}/{data.slug}"
/>

<div class="flex flex-col gap-6 w-full text-white">
  <button
    on:click={() => history.back()}
    class="self-start text-yellow-300 border border-yellow-300 px-4 py-2 rounded-md text-sm font-semibold hover:bg-yellow-300 hover:text-slate-900 transition duration-200"
  >
    ← Back
  </button>

  <h1
    class="text-2xl font-bold uppercase tracking-wide text-yellow-300 border-b border-white/20 pb-2"
  >
    {data.meta?.title || 'Untitled'}
  </h1>

  {#if data.meta?.date}
    <p class="text-white/70 text-sm">
      <span class="font-semibold text-white">📅 Date:</span>
      {formatDate(data.meta.date)}
    </p>
  {/if}

  <!-- OPRAVA: Bezpečné ověření, zda tagy existují a jsou polem -->
  {#if data.meta?.tags && Array.isArray(data.meta.tags) && data.meta.tags.length > 0}
    <div class="flex flex-wrap gap-2 text-sm">
      <span class="font-semibold text-white">🏷️ Tags:</span>
      {#each data.meta.tags as tag}
        <span
          class="bg-slate-700 text-yellow-300 px-2 py-1 rounded-full text-xs font-medium"
        >
          {tag}
        </span>
      {/each}
    </div>
  {/if}

  <div class="prose prose-invert prose-sm sm:prose-base max-w-none markdown">
    {@html data.content}
  </div>

  <!-- Pokud je to prázdný modrý box na konci, nechal jsem ho, jen opravil drobné formátování -->
  <div class="p-4 rounded-md border-l-4 border-blue-500 bg-blue-950/40 text-blue-300">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg
          class="h-5 w-5 text-blue-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2h1a1 1 0 100-2H9z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  </div>
</div>