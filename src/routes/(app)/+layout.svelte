<script>
  import "../../app.css";
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import { age, year } from "$lib/age";

  import Navbar from "$lib/components/navbar@app.svelte"

  function updateAge() {
    const diff = new Date().getTime() - 923198400000;
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    age.set(`${years} y/o`); // Důležité: měníme hodnotu store
    year.set(new Date().getFullYear());
  }

  onMount(() => {
    const now = new Date();
    const hours = now.getHours();
    /**
    if (hours > 18 || hours < 5) {
      document.body.classList.add("night-background");
    } else {
      document.body.classList.add("day-background");
    }**/

    updateAge();
    const interval = setInterval(updateAge, 1000);
    document.body.classList.add("clean-background");
    return () => {
      clearInterval(interval);
      ///document.body.classList.remove("night-background");
    };
  });
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
