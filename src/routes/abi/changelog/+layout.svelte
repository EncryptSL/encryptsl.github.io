<script>
  import "../../../lib/styles/changelog.css";
  import { browser } from '$app/environment';
  import Navbar from '$lib/components/navbar@abi.svelte';

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
      document.body.classList.add('day-background');
    } else if (path === '/links') {
      document.body.classList.add('linktree-background');
    } else {
      document.body.classList.add('clean-background');
    }
  }

</script>

<svelte:head>
  <title>EncryptSL - ABI Changelog</title>
  <link rel="canonical" href="https://encryptsl.github.io/abi/changelog" />
  <meta property="og:title" content="EncryptSL - Developer" />
</svelte:head>

<Navbar />
<slot />
