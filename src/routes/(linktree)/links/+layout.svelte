<script>
  import "../../../app.css";
  import { onMount } from "svelte";

  onMount(() => {
    document.body.classList.add("linktree-background");

    return () => {
      document.body.classList.remove("linktree-background");
    };
  });
</script>

<slot />
