<script>
  import "../../app.css";
  import { onMount } from "svelte";
  import { age, year } from "$lib/age";
  function updateAge() {
    const diff = new Date().getTime() - 923198400000;
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    age.set(`${years} y/o`); // Důležité: měníme hodnotu store
    year.set(new Date().getFullYear());
  }

  onMount(() => {
    const now = new Date();
    const hours = now.getHours();
    if (hours > 18 || hours < 5) {
      document.body.classList.add("night-background");
    } else {
      document.body.classList.add("day-background");
    }

    updateAge();
    const interval = setInterval(updateAge, 1000);
    return () => {
      clearInterval(interval);
      document.body.classList.remove("night-background");
    };
  });
</script>

<svelte:head>
  <title>EncryptSL - Developer</title>
  <link rel="canonical" href="https://encryptsl.github.io/" />
  <meta property="og:title" content="EncryptSL - Developer" />
</svelte:head>

<slot />
