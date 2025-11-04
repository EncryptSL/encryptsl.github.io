<script>
  import { onMount } from "svelte";
  import "../../../app.css";

  onMount(() => {
    document.body.classList.add("linktree-background");

    return(() => {
        document.body.classList.remove("linktree-background");
    })

  })
</script>

<slot />
