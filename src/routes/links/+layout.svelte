<script>
    import "./links.css";
    import { onMount } from "svelte";
    import { year } from "$lib/age";
    function updateAge() {
        year.set(new Date().getFullYear());
    }

    onMount(() => {
        const now = new Date();
        const hours = now.getHours();
        if (hours > 18 || hours < 5) {
            document.body.style.backgroundImage =
                "url('assets/background_night_press.webp')";
        }

        updateAge();
        const interval = setInterval(updateAge, 1000);
        return () => clearInterval(interval);
    });
</script>

<slot />
