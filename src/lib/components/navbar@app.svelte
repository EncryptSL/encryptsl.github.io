<script>
  import { base } from "$app/paths";
  import { page } from '$app/stores';
  import menu from "$lib/data/menu.yml";
</script>

<div class="w-full border-b border-indigo-500">
  <div class="flex flex-wrap justify-end gap-3 text-sm text-white mb-5">

    {#if !$page.url.pathname.endsWith(`${base}/`)}
        <div class="relative group inline-flex justify-center items-center">
          <a
            href="{base}/"
            class="rounded bg-blue-500 p-1 hover:bg-blue-600 cursor-pointer flex justify-center items-center"
            aria-label="Home"
          >
            <span><i class="fa-solid fa-home"></i> Home</span>
          </a>
        </div>
    {/if}

    {#if !$page.url.pathname.endsWith(`${base}/projects`)}
        <div class="relative group inline-flex justify-center items-center">
          <a
            href="{base}/projects"
            class="rounded bg-blue-500 p-1 hover:bg-blue-600 cursor-pointer flex justify-center items-center"
            aria-label="Home"
          >
            <span><i class="fa-solid fa-folder"></i> Projects</span>
          </a>
        </div>
    {/if}

    <div class="relative group inline-flex justify-center items-center">
      <a
        href="{base}/abi/changelog"
        class="rounded bg-yellow-500 p-1 hover:bg-yellow-600 cursor-pointer flex justify-center items-center"
        aria-label="changelog"
      >
        <span><i class="fa-brands fa-list"></i> ABI Changelog</span>
      </a>
    </div>

    <div class="relative group inline-flex justify-center items-center">
      <a
        href="{base}/links"
        class="rounded bg-green-500 p-1 hover:bg-green-600 cursor-pointer flex justify-center items-center"
        aria-label="links"
      >
        <span><i class="fa-brands fa-linktree"></i> Linktree</span>
      </a>
    </div>

    {#each menu.links as link}
      <div class="relative group inline-flex justify-center items-center">
        <a
          href={link.link}
          target="_blank"
          class="rounded {link.background} p-1 cursor-pointer flex justify-center items-center"
          aria-label={link.link}
        >
          <span><i class={link.icon}></i> {link.title}</span>
        </a>
      </div>
    {/each}
  </div>
</div>
