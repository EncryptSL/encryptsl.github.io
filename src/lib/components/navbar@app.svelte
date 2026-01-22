<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import menu from "$lib/data/menu.yml";

  let nameDay = "";

  onMount(async () => {
    try {
      const response = await fetch('https://svatkyapi.cz/api/day');
      const data = await response.json();
      nameDay = data.name;
    } catch (e) {
      nameDay = "";
    }
  });
</script>

<div class="w-full border-b border-indigo-500 mb-5">
  <div class="flex flex-wrap items-end justify-between gap-3 text-sm text-white mb-2">
    
    <div class="flex flex-col justify-center leading-tight pb-1">
      <span class="text-[9px] uppercase tracking-tighter text-gray-500 font-bold">
        Dnes má svátek
      </span>
      {#if nameDay}
        <span in:fade class="text-sky-400 text-sm font-extrabold leading-none">
          {nameDay}
        </span>
      {:else}
        <span class="text-gray-700 text-xs animate-pulse">Loading...</span>
      {/if}
    </div>

    <div class="flex flex-wrap justify-end gap-3 pb-1">
      {#if !$page.url.pathname.endsWith(`${base}/`)}
        <div class="relative group inline-flex justify-center items-center">
          <a href="{base}/" class="rounded bg-blue-500 px-2 py-1 hover:bg-blue-600 transition flex items-center gap-2">
            <i class="fa-solid fa-home"></i> <span>Home</span>
          </a>
        </div>
      {/if}

      {#if !$page.url.pathname.endsWith(`${base}/projects`)}
        <div class="relative group inline-flex justify-center items-center">
          <a href="{base}/projects" class="rounded bg-blue-500 px-2 py-1 hover:bg-blue-600 transition flex items-center gap-2">
            <i class="fa-solid fa-folder"></i> <span>Projects</span>
          </a>
        </div>
      {/if}

      <div class="relative group inline-flex justify-center items-center">
        <a href="{base}/abi/changelog" class="rounded bg-yellow-600/80 px-2 py-1 hover:bg-yellow-600 transition flex items-center gap-2">
          <i class="fa-solid fa-eye"></i> <span>ABI Changelog</span>
        </a>
      </div>

      <div class="relative group inline-flex justify-center items-center">
        <a href="{base}/links" class="rounded bg-green-600/80 px-2 py-1 hover:bg-green-600 transition flex items-center gap-2">
          <i class="fa-brands fa-linktree"></i> <span>Linktree</span>
        </a>
      </div>

      {#each menu.links as link}
        <div class="relative group inline-flex justify-center items-center">
          <a
            href={link.link}
            target="_blank"
            class="rounded {link.background} px-2 py-1 hover:brightness-110 transition flex items-center gap-2"
          >
            <i class={link.icon}></i> <span>{link.title}</span>
          </a>
        </div>
      {/each}
    </div>
  </div>
</div>
