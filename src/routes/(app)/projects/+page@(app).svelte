<script>
  import Seo from "$lib/components/Seo.svelte";
  import projects from "$lib/data/projects.yml";
</script>

<Seo
  title="EncryptSL - Projects"
  description="I'm a Software Developer focused on robust back-end systems using Kotlin and PHP."
  image="https://avatars.githubusercontent.com/u/9441083?v=4&size=500"
  url="https://encryptsl.github.io/projects"
/>

<h1 class="text-3xl font-bold">Projects</h1>
<div class="bg-white/5 rounded-xl shadow-lg p-6 w-full">
  <div class="grid sm:grid-cols-2 gap-6 text-sm">
    {#each projects.projects as project}
      <div class="transition transform hover:scale-105">
        <a
          href={project.url}
          target="_blank"
          class="font-semibold underline text-sky-400">{project.name}</a
        >
        <p>{project.description}</p>
      </div>
    {/each}
  </div>
</div>
