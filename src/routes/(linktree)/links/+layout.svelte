<script>
  import "../../../app.css";
  import { browser } from '$app/environment';
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

<slot />
