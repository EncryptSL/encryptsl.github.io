<script>
  import "../../../lib/styles/changelog.css";
  import Navbar from '$lib/components/navbar@abi.svelte';
  import { onMount } from "svelte";

  onMount(() => {
    document.body.classList.add("abi");
    return () => {
      document.body.classList.remove("abi");
    };
  });

</script>

<svelte:head>
  <title>EncryptSL - ABI Changelog</title>
  <link rel="canonical" href="https://encryptsl.github.io/abi/changelog" />
  <meta property="og:title" content="EncryptSL - Developer" />
</svelte:head>

<Navbar />
<slot />
