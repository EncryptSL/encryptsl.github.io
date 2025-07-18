<script>
    import "../layout.css";
    import { onMount } from "svelte";
    import { age, year } from "$lib/age";
    function updateAge() {
        const diff = new Date().getTime() - 923198400000;
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        age.set(`${years} y/o`);   // Důležité: měníme hodnotu store
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
