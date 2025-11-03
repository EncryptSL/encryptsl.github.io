<script lang="ts">
  import { base } from "$app/paths";
  import { formatDate } from "$lib/utils/date.js";
  export let data;
</script>

<svelte:head>
  <title>EncryptSL - ABI Changelog</title>
  <meta name="description" content="Welcome on ABI Changelog" />
  <link rel="canonical" href="https://encryptsl.github.io/abi/changelog" />
  <meta property="og:title" content="EncryptSL - Linktree" />
</svelte:head>

<div class="changelog-list">
  <h1>Changelog</h1>

  <ul>
    {#each data.changelogs as log}
      <li>
        <a href={base}{`/abi/changelog/${log.slug}`}>{log.title}</a>
        {#if log.date}
          <div class="meta">📅 {formatDate(log.date)}</div>
        {/if}
        {#if log.tags.length}
          <div class="tags">
            {#each log.tags as tag}
              <span class="tag">{tag}</span>
            {/each}
          </div>
        {/if}
      </li>
    {:else}
      <li>Žádné changelogy zatím nejsou k dispozici.</li>
    {/each}
  </ul>
</div>