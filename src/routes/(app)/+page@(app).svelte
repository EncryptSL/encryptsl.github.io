<script lang="ts">
    import { resolve } from "$app/paths";
    import { age, year } from "$lib/age";
    import Seo from "$lib/components/Seo.svelte";
    import { fade, fly, scale } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import { onMount } from "svelte";

    let visibleIndices = new Set();
    export let visible = false;

    onMount(() => {
        visible = true;
    });

    function observer(node: any, index: any) {
        const intersectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        visibleIndices = new Set(visibleIndices.add(index));
                        intersectionObserver.unobserve(node);
                    }
                });
            },
            { threshold: 0.1 }
        );

        intersectionObserver.observe(node);

        return {
            destroy() {
                intersectionObserver.disconnect();
            },
        };
    }

    const stack = [
        {
            title: "🧠 PC Build",
            items: [
                "Ryzen 5 5600 - 4.4 GHz",
                "Radeon RX 6600 8GB",
                "32GB DDR4 RAM",
                "MSI B450 Tomahawk Max",
            ],
        },
        {
            title: "💽 Components",
            items: [
                "CZC.Gaming Reaper Keyboard",
                "Logitech G203 Lightsync",
                '23.8" MSI PRO MP243XW',
            ],
        },
        {
            title: "🛠️ Software",
            items: ["DaVinci Resolve", "IntelliJ IDEA", "VSCode", "FileZilla"],
        },
        {
            title: "🖥️ OS",
            items: ["Windows 11 Pro", "Linux - Ubuntu Server"],
        },
        {
            title: "💻 Languages",
            items: [
                "PHP",
                "Java",
                "Kotlin",
                "Python",
                "JavaScript",
                "SQL",
                "CSS (reluctantly 😄)",
            ],
        },
    ];
</script>

<Seo
    title="EncryptSL - Developer"
    description="I'm a Software Developer focused on robust back-end systems using Kotlin and PHP."
    image="https://avatars.githubusercontent.com/u/9441083?v=4&size=500"
    url="https://encryptsl.github.io/"
/>

<!-- HLAVNÍ WRAPPER PRO CELÉ TĚLO STRÁNKY -->
<div class="max-w-4xl mx-auto flex flex-col gap-8 pb-12">

    <!-- SEKCE: Profilová karta -->
    <div use:observer={"profile"}>
        {#if visibleIndices.has("profile")}
            <div
                in:fly={{ y: 30, duration: 800, easing: quintOut }}
                class="flex flex-col md:flex-row bg-white/5 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md"
            >
                <!-- Levá část: Avatar a sociální sítě -->
                <div
                    in:fly={{ x: -40, duration: 900, delay: 200, easing: quintOut }}
                    class="w-full md:w-80 p-6 bg-black/20 text-center flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10 shrink-0"
                >
                    <img
                        src="https://avatars.githubusercontent.com/u/9441083?v=4&size=500"
                        alt="avatar"
                        class="w-36 h-36 mx-auto rounded-2xl border border-white/20 mb-4 shadow-xl object-cover ring-2 ring-sky-500/20"
                    />
                    <h2 class="text-2xl font-bold text-white tracking-tight">EncryptSL</h2>

                    <p id="age" class="text-gray-400 text-sm mt-1">
                        <strong class="text-white">{$age}</strong> years old
                    </p>

                    <div class="flex flex-col gap-2.5 w-full mt-6">
                        <a
                            href="https://discordapp.com/users/185744294865272832"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex w-full justify-center items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] transition px-4 py-2.5 rounded-xl text-sm font-semibold text-white shadow-lg shadow-indigo-900/30"
                        >
                            <i class="fa-brands fa-discord text-lg"></i> Discord
                        </a>
                        <a
                            href="https://github.com/encryptsl"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex w-full justify-center items-center gap-2 bg-white/10 hover:bg-white/20 transition px-4 py-2.5 rounded-xl text-sm font-semibold text-white border border-white/10"
                        >
                            <i class="fa-brands fa-github text-lg"></i> GitHub
                        </a>
                    </div>
                </div>

                <!-- Pravá část: Bio a jazyky -->
                <div
                    in:fly={{ x: 40, duration: 900, delay: 300, easing: quintOut }}
                    class="p-8 grow flex flex-col justify-center"
                >
                    <h1 class="text-3xl md:text-4xl font-extrabold text-white mb-4 text-center md:text-left tracking-tight">
                        Hi, I'm EncryptSL 👋
                    </h1>

                    <p class="text-gray-300 leading-relaxed text-base md:text-lg">
                        I am a <strong class="text-blue-400 font-bold">Software Developer</strong>
                        specializing in
                        <strong class="text-yellow-400 font-bold">PHP</strong>,
                        <strong class="text-yellow-400 font-bold">Kotlin</strong>,
                        and the author of the
                        <strong class="text-green-400 font-bold">LiteEco</strong> minecraft plugin.
                    </p>

                    <p class="text-gray-300 leading-relaxed text-base md:text-lg mt-4">
                        My hobbies are
                        <strong class="text-purple-400 font-bold">mountain climbing</strong>,
                        <strong class="text-purple-400 font-bold">gym</strong>,
                        <strong class="text-purple-400 font-bold">via ferratas</strong>, and
                        <strong class="text-purple-400 font-bold">alpinism</strong>.
                    </p>

                    <hr class="my-6 border-white/10" />

                    <div>
                        <h2 class="text-lg font-semibold text-white mb-3 text-center md:text-left">
                            Spoken Languages 🗣️
                        </h2>
                        <div class="flex flex-wrap items-center justify-center md:justify-start gap-2">
                            {#each [{ name: "Czech - Native", delay: 700 }, { name: "English - B2", delay: 800 }, { name: "Russian - A2", delay: 900 }] as lang}
                                <span
                                    in:scale={{
                                        delay: lang.delay,
                                        duration: 400,
                                        start: 0.8,
                                        easing: quintOut,
                                    }}
                                    class="bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm"
                                >
                                    {lang.name}
                                </span>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    </div>

    <!-- SEKCE: Current Setup and Stack -->
    <div class="bg-white/5 border border-white/10 rounded-2xl shadow-xl p-6 md:p-8 backdrop-blur-md">
        <h2 class="text-2xl font-bold mb-6 text-center text-white tracking-tight">
            Current Setup & Stack
        </h2>

        <div class="columns-1 sm:columns-2 gap-4 w-full">
            {#each stack as category, i}
                <div use:observer={i} class="break-inside-avoid mb-4 min-h-22.5">
                    {#if visibleIndices.has(i)}
                        <div
                            in:scale={{
                                duration: 500,
                                start: 0.96,
                                easing: quintOut,
                            }}
                            out:fade={{ duration: 200 }}
                            class="bg-white/[0.07] hover:bg-white/10 transition-colors p-5 rounded-xl shadow-inner border border-white/5"
                        >
                            <h3 class="text-sky-400 font-semibold mb-3 flex items-center gap-2 text-base">
                                <span class="w-2 h-2 bg-sky-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
                                {category.title}
                            </h3>
                            <ul class="space-y-1.5 text-gray-300 text-sm ml-4 list-disc">
                                {#each category.items as item}
                                    <li class="hover:text-white transition-colors">{item}</li>
                                {/each}
                            </ul>
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</div>
