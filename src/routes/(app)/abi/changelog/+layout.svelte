<script>
  import { onMount } from "svelte";

  onMount(() => {
    document.body.classList.add("clean-background");
  })
</script>

<svelte:head>
  <title>EncryptSL - ABI Changelog</title>
  <link rel="canonical" href="https://encryptsl.github.io/abi/changelog" />
  <meta property="og:title" content="EncryptSL - Developer" />
</svelte:head>

<slot />
