<script lang="ts">
  import { page } from '$app/state';
  import { resolve } from '$app/paths';

  // Svelte 5 props
  let { allYears = [] } = $props<{ allYears: string[] }>();

  const blog = resolve("/blog");

  // Reaktivní odvozená hodnota pro aktuální cestu
  const currentPath = $derived(page.url.pathname.replace(/\/$/, ''));
</script>

<aside class="w-full md:w-48 flex flex-col gap-4 md:sticky md:top-8 self-start">
  <h3 class="text-lg font-bold uppercase tracking-widest text-white/40 border-b border-white/10 pb-2">
    Archive
  </h3>
  <nav>
    <ul class="flex flex-row md:flex-col gap-2 flex-wrap">
      <li>
        <a 
          href="{blog}"
          class="block w-full text-left px-3 py-2 rounded-lg transition duration-200"
          class:bg-yellow-300={currentPath === `${blog}`}
          class:text-black={currentPath === `${blog}`}
          class:font-bold={currentPath === `${blog}`}
          class:text-white={currentPath !== `${blog}`}
          class:hover:bg-white={currentPath !== `${blog}`}
        >
          All Years
        </a>
      </li>

      {#each allYears as year}
        {@const linkPath = resolve(`/blog/${year}`)}
        <li>
          <a 
            href={linkPath}
            class="block w-full text-left px-3 py-2 rounded-lg transition duration-200"
            class:bg-yellow-300={currentPath === linkPath}
            class:text-black={currentPath === linkPath}
            class:font-bold={currentPath === linkPath}
            class:text-white={currentPath !== linkPath}
            class:hover:bg-white={currentPath !== linkPath}
          >
            {year}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</aside>