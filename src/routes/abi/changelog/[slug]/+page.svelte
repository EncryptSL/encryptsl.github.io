<script lang="ts">
  import { formatDate } from '$lib/utils/date.js';

  export let data;
</script>

<svelte:head>
  <title>EncryptSL - ABI Changelog | {data.title}</title>
  <link rel="canonical" href="https://encryptsl.github.io/" />
  <meta property="og:title" content="EncryptSL - Developer" />
</svelte:head>

<div class="changelog-detail">
  <button on:click={() => history.back()} class="back-button">← Zpět</button>

  <h1>{data.title}</h1>
  {#if data.date}
    <p><strong>Datum:</strong> {formatDate(data.date)}</p>
  {/if}
  {#if data.tags.length}
    <p><strong>Tagy:</strong> {data.tags.join(', ')}</p>
  {/if}

  <div class="markdown">
    {@html data.html}
  </div>
</div>