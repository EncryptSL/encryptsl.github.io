<script>
  import "../../app.css";
  import { base } from "$app/paths";
  import { browser } from '$app/environment';
  import { age, year } from "$lib/age";

  import Navbar from "$lib/components/navbar@app.svelte"

  import { page } from '$app/state';

  $: if (browser) {
    const path = page.url.pathname;

    document.body.classList.remove(
      'abi',
      'clean-background',
      'day-background',
      'night-background',
      'linktree-background'
    );

    if (path.startsWith('/abi/changelog')) {
      document.body.classList.add('abi');
    } else if (path === '/') {
      document.body.classList.add('clean-background');
    } else if (path === '/links') {
      document.body.classList.add('linktree-background');
    } else {
      document.body.classList.add('clean-background');
    }
  }
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
      class="glass bg-slate-800/60 rounded-2xl shadow-2xl p-8 w-full text-white border border-transparent hover:border-blue-500 transition duration-200 flex flex-col gap-8"
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
