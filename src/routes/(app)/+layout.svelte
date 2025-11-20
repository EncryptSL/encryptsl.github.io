<script>
  import "../../app.css";
  import { base } from "$app/paths";
  import { year } from "$lib/age";

  import Navbar from "$lib/components/navbar@app.svelte"
  import { onMount } from "svelte";

  onMount(() => {
    document.body.classList.add("clean-background");
  })

</script>

<svelte:head>
  <title>EncryptSL - Developer</title>
  <link rel="canonical" href="https://encryptsl.github.io/" />
  <meta property="og:title" content="EncryptSL - Developer" />
</svelte:head>

<container class="flex items-center justify-center font-mono">
  <div
    class="flex flex-col items-start justify-start min-h-screen px-4 py-10 gap-6 max-w-[950px] w-full"
  >
    <!-- JEDEN VELKÝ WRAPPER -->
    <div
      class="bg-slate-800/60 p-8 w-full text-white border-2 border-blue-500 flex flex-col gap-8"
    >
      <Navbar />
      <slot />
      <footer
        class="bg-white/5 rounded-xl shadow-lg text-white/80 text-center text-sm p-4 w-full"
      >
        © <span id="year">{$year}</span>
        <a href="{base}/" class="text-yellow-300">EncryptSL</a> • Built with ❤️ using
        SvelteKit & TailwindCSS
      </footer>
    </div>
  </div>
</container>
