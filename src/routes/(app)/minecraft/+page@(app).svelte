<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import history from "$lib/data/minecraft_experience.yml";

  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  let visibleIndices = new Set();

  function observer(node: any, index: any) {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleIndices = new Set(visibleIndices.add(index));
            intersectionObserver.unobserve(node);
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    intersectionObserver.observe(node);

    return {
      destroy() {
        intersectionObserver.disconnect();
      },
    };
  }
</script>

<Seo
  title="EncryptSL - Minecraft Experience"
  description="I'm a Software Developer focused on robust back-end systems using Kotlin and PHP."
  image="https://avatars.githubusercontent.com/u/9441083?v=4&size=500"
  url="https://encryptsl.github.io/projects"
/>

<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
  <h2 class="text-4xl font-extrabold text-white text-center mb-12">
    My Minecraft Experience ⛏️
  </h2>

  <!-- Přidali jsme prpl-6 md:pl-10, aby byl text odsazený od linky -->
  <div class="relative pl-6 md:pl-10">
    <!-- Svislá linka fixovaná vlevo na "left-4" -->
    <div class="absolute left-4 h-full w-1 bg-gray-700"></div>

    {#each history.minecraft_history as item, i}
      <div
        use:observer={i}
        class="min-h-[120px] relative mb-8 flex items-center w-full"
      >
        {#if visibleIndices.has(i)}
          <div
            class="flex items-center w-full"
            transition:fly={{
              x: 100,
              duration: 1000,
              easing: quintOut,
            }}
          >
            <!-- Samotná karta (přidán lehký ml-4, aby karta nezačínala hned na kruhu) -->
            <div class="w-full ml-4 p-5 rounded-xl shadow-lg bg-gray-800 text-gray-200 border-l-4 border-blue-500 hover:shadow-blue-500/20 transition duration-300">
              <h3 class="text-xl font-bold mb-1 text-blue-400">{item.title}</h3>
              <p class="text-sm italic text-gray-400 mb-2">{item.year}</p>
              <p class="text-base">{item.description}</p>
              <span class="inline-block mt-3 px-3 py-1 bg-blue-600 rounded-full text-xs font-semibold uppercase">
                {item.role}
              </span>
            </div>

            <!-- OPRAVENÝ ČÍSELNÝ BOD: Nyní dokonale sedí na lince -->
            <div class="absolute left-4 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-500 shadow-xl border-4 border-gray-900 z-10 flex items-center justify-center">
              <span class="text-xs font-bold text-white">{i + 1}</span>
            </div>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>