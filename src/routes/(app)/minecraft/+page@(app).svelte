<script>
  import Seo from "$lib/components/Seo.svelte";
  import history from "$lib/data/minecraft_experience.yml";
</script>


<Seo
  title="EncryptSL - Minecraft Experience"
  description="I'm a Software Developer focused on robust back-end systems using Kotlin and PHP."
  image="https://avatars.githubusercontent.com/u/9441083?v=4&size=500"
  url="https://encryptsl.github.io/projects"
/>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-4xl font-extrabold text-white text-center mb-12">
        My Minecraft Experience ⛏️
    </h2>

    <div class="relative">
        
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>

        {#each history.minecraft_history as item, i}
            
            <div class="relative mb-8 flex justify-between items-center w-full {i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}">
                
                <div class="w-full md:w-5/12 p-4 rounded-xl shadow-lg bg-gray-800 text-gray-200 border-l-4 {i % 2 === 0 ? 'md:border-l-0 md:border-r-4' : 'border-l-4'} border-blue-500 hover:shadow-blue-500/30 transition duration-300">
                    <h3 class="text-xl font-bold mb-1 text-blue-400">{item.title}</h3>
                    <p class="text-sm italic text-gray-400 mb-2">{item.year}</p>
                    <p class="text-base">{item.description}</p>
                    <span class="inline-block mt-3 px-3 py-1 bg-blue-600 rounded-full text-xs font-semibold uppercase">{item.role}</span>
                </div>

                <div class="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-500 shadow-xl border-4 border-gray-900 z-10 flex items-center justify-center">
                    <span class="text-xs font-bold text-white">{i + 1}</span>
                </div>

                <div class="hidden md:block w-5/12"></div>
            </div>
        {/each}
    </div>
</div>