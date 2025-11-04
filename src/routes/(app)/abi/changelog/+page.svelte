<script lang="ts">
  import { base } from "$app/paths";
  import { formatDate } from "$lib/utils/date.js";
  export let data;
</script>

<div class="flex flex-col gap-8 w-full">
  <h1 class="text-2xl font-bold uppercase tracking-wide text-yellow-300 border-b border-white/20 pb-2">
    Arena Breakout Infinite
  </h1>

  <h2 class="text-2xl uppercase tracking-wide text-yellow-300 pb-2">
    Changelog [CZ/SK]
  </h2>

  <ul class="flex flex-col gap-6">
    {#each data.changelogs as log}
      <li
        class="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-yellow-300 transition duration-200 shadow-md"
      >
        <a
          href={base}{`/abi/changelog/${log.slug}`}
          class="text-yellow-300 text-lg font-semibold hover:underline"
        >
          {log.title}
        </a>

        {#if log.date}
          <div class="text-sm text-white/60 mt-1">📅 {formatDate(log.date)}</div>
        {/if}

        {#if log.tags.length}
          <div class="mt-3 flex flex-wrap gap-2">
            {#each log.tags as tag}
              <span class="bg-slate-700 text-yellow-300 text-xs px-2 py-1 rounded-full font-medium">
                {tag}
              </span>
            {/each}
          </div>
        {/if}
      </li>
    {:else}
      <li class="text-white/60 italic">No changelogs are available yet.</li>
    {/each}
  </ul>
</div>