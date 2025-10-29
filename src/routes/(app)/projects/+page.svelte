<script>
  import { base } from "$app/paths";
  import { year } from "$lib/age";
  import menu from "$lib/data/menu.yml";
  import projects from "$lib/data/projects.yml";
</script>

<container class="flex items-center justify-center">
  <!-- WRAPPER (šířka zachována) -->
  <div
    class="flex flex-col items-start justify-start min-h-screen px-4 py-10 gap-6 max-w-[950px] w-full text-white"
  >
    <!-- JEDEN VELKÝ ELEMENT (obsah + odkazy + footer) -->
    <main
      class="glass bg-slate-800/60 rounded-xl shadow-lg p-8 w-full border border-transparent hover:border-blue-500 transition duration-200"
    >

      <!-- LINKS -->
      <div class="w-full border-b border-indigo-500">
        <div class="flex flex-wrap justify-end gap-3 text-sm text-white mb-5">
          <div class="relative group inline-flex justify-center items-center">
            <a
              href="{base}/"
              class="rounded bg-blue-500 p-1 hover:bg-blue-600 cursor-pointer flex justify-center items-center"
              aria-label="Home"
            >
              <span><i class="fa-solid fa-home"></i> Home</span>
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

      <h1 class="text-3xl font-bold mb-8">Projects</h1>
      <div class="bg-white/5 rounded-xl shadow-lg p-6 w-full">
        <div class="grid sm:grid-cols-2 gap-6 text-sm">
          {#each projects.projects as project}
          <div class="transition transform hover:scale-105">
            <a
              href="{project.url}"
              target="_blank"
              class="font-semibold underline text-sky-400">{project.name}</a
            >
            <p>{project.description}</p>
          </div>
          {/each}
        </div>
      </div>
      <!-- FOOTER (uvnitř stejného elementu) -->
      <footer
        class="bg-white/5 rounded-xl shadow-lg text-white/80 text-center text-sm p-4 w-full mt-10"
      >
        © <span id="year">{$year}</span>
        <a href="{base}/" class="text-yellow-300">EncryptSL</a> • Built with ❤️ using
        SvelteKit & TailwindCSS
      </footer>
    </main>
  </div>
</container>
