<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import projects from "$lib/data/projects.yml";
  import { slide, fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  let openProject: number | null = null;

  function toggleProject(index: number): void {
    openProject = openProject === index ? null : index;
  }

  function getTechColor(description: string) {
    const d = description.toLowerCase();
    if (d.includes("kotlin"))
      return "bg-indigo-500/20 text-indigo-300 border-indigo-500/30";
    if (d.includes("php") || d.includes("nette"))
      return "bg-blue-500/20 text-blue-300 border-blue-500/30";
    if (d.includes("java") && !d.includes("kotlin"))
      return "bg-orange-500/20 text-orange-300 border-orange-500/30";
    if (d.includes("pc case") || d.includes("youtube"))
      return "bg-red-500/20 text-red-300 border-red-500/30";
    return "bg-gray-500/20 text-gray-300 border-gray-500/30";
  }
</script>

<Seo
  title="EncryptSL - Projects"
  description="I'm a Software Developer focused on robust back-end systems using Kotlin and PHP."
  image="https://avatars.githubusercontent.com/u/9441083?v=4&size=500"
  url="https://encryptsl.github.io/projects"
/>

<div class="max-w-4xl px">
  <h1 class="text-4xl font-extrabold text-white mb-2 text-left">Projects</h1>
  <p class="text-gray-400 mb-8 text-left">
    Click on a project to see more details.
  </p>

  <div class="flex flex-col gap-3 w-full">
    {#each projects.projects as project, i}
      <div
        class="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 {openProject ===
        i
          ? 'ring-2 ring-sky-500/40 bg-white/10'
          : 'hover:bg-white/10'}"
      >
        <button
          on:click={() => toggleProject(i)}
          class="w-full flex items-center justify-between p-4 text-left focus:outline-none"
        >
          <div class="flex flex-wrap items-center gap-3">
            <span class="text-white text-lg font-bold tracking-tight"
              >{project.name}</span
            >

            <span
              class="px-2 py-0.5 text-[10px] font-bold uppercase rounded border {getTechColor(
                project.description,
              )}"
            >
              {project.description.includes("Kotlin")
                ? "Kotlin"
                : project.description.includes("PHP")
                  ? "PHP / Nette"
                  : project.description.includes("Java")
                    ? "Java"
                    : "Other"}
            </span>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-500 transition-transform duration-300 {openProject ===
            i
              ? 'rotate-180 text-sky-400'
              : ''}"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {#if openProject === i}
          <div
            transition:slide={{ duration: 350, easing: quintOut }}
            class="px-4 pb-5 border-t border-white/5 bg-black/20"
          >
            <div in:fade={{ delay: 100 }} class="pt-4 text-left">
              <p class="text-gray-300 leading-relaxed mb-6 text-base">
                {project.description}
              </p>

              <div class="flex flex-wrap gap-3 items-center">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-lg font-bold text-sm transition shadow-lg shadow-sky-900/40"
                >
                  {#if project.url.includes("github.com")}
                    <i class="fa-brands fa-github"></i> GitHub Repository
                  {:else if project.url.includes("youtube.com")}
                    <i class="fa-brands fa-youtube"></i> Watch Showcase
                  {:else}
                    <i class="fa-solid fa-globe"></i> Visit Website
                  {/if}
                </a>

                {#if project.wiki}
                  <a
                    href={project.wiki}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-bold text-sm transition border border-white/10"
                  >
                    <i class="fa-solid fa-book"></i> Documentation
                  </a>
                {/if}

                {#if project.metrics}
                  <img src="{project.metrics}" title="LiteEco - Metrics" alt="metrics"/>
                {/if}

                {#if project.url.includes("spigotmc.org")}
                  <span class="text-xs text-gray-500 italic"
                    >Official Plugin Page</span
                  >
                {/if}
              </div>
            </div>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>
