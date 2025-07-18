<script>
    import { base } from '$app/paths';
    import { age, year } from "$lib/age";
    import { PuzzleIcon } from "@lucide/svelte";
</script>

<container
    class="flex items-center justify-center font-mono"
>
    <div
        class="flex flex-col items-start justify-start min-h-screen px-4 py-10 gap-6 max-w-[900px]"
    >
        <!-- OBSAH (2 karty vedle sebe) -->
        <div class="flex flex-col md:flex-row gap-6">
            <!-- LEVÁ KARTA -->
            <div
                class="glass bg-slate-800/60 rounded-xl shadow-lg text-white p-6 w-full md:w-80 text-center border border-transparent hover:border-blue-500 transition duration-200"
            >
                <img
                    src="https://avatars.githubusercontent.com/u/9441083?v=4&size=500"
                    alt="avatar"
                    class="w-40 h-40 mx-auto rounded-xl border border-white mb-4"
                />
                <h2 class="text-xl font-semibold">EncryptSL</h2>
                <p id="age" class="text-white/80 text-sm mt-1">{$age}</p>
                <div class="text-center mt-4">
                    <a
                        href="https://discordapp.com/users/185744294865272832"
                        class="flex w-full justify-center bg-indigo-500 hover:bg-indigo-600 transition px-4 py-2 rounded text-sm font-medium text-white"
                    >
                        DISCORD
                    </a>
                </div>
            </div>
            <!-- PRAVÁ KARTA -->
            <div
                class="glass bg-slate-800/60 rounded-xl shadow-lg p-6 w-full text-white text-center border border-transparent hover:border-blue-500 transition duration-200"
            >
                <h1 class="text-2xl font-semibold text-center">
                    Hi, I'm EncryptSL
                </h1>
                <p class="pt-2 text-center">
                    I'm a passionate developer of Minecraft plugins and PHP
                    websites, primarily focusing on the <span
                        class="bg-blue-200 text-black px-1 rounded-sm"
                        >Nette Framework</span
                    >,
                    <span class="bg-yellow-200 text-black px-1 rounded-sm"
                        >Java</span
                    >, and
                    <span class="bg-purple-200 text-black px-1 rounded-sm"
                        >Kotlin</span
                    >.<br />
                    My main programming languages are
                    <span class="bg-blue-200 text-black px-1 rounded-sm"
                        >PHP</span
                    >,
                    <span class="bg-yellow-200 text-black px-1 rounded-sm"
                        >Java</span
                    >, and
                    <span class="bg-purple-200 text-black px-1 rounded-sm"
                        >Kotlin</span
                    >.<br />
                    I also sometimes focus on
                    <span class="bg-green-200 text-black px-1 rounded-sm"
                        >Python</span
                    >, using it to write simple bots that help make my life with
                    Discord easier.<br />
                    I enjoy sharing my creations as open-source on GitHub.
                </p>
                <div class="max-w-sm rounded shadow-lg p-3 mx-auto">
                    <h2 class="text-1xl font-semibold text-center">
                        Spooken Languages
                    </h2>
                    <div
                        class="flex flex-wrap items-center justify-center gap-2"
                    >
                        <div class="relative group">
                            <span
                                class="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded cursor-default"
                            >
                                Czech
                            </span>
                            <div
                                class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 text-xs text-white bg-gray-800 rounded-md whitespace-nowrap
          opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
                            >
                                Native
                            </div>
                        </div>
                        <div class="relative group">
                            <span
                                class="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded cursor-default"
                            >
                                English
                            </span>
                            <div
                                class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 text-xs text-white bg-gray-800 rounded-md whitespace-nowrap
          opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
                            >
                                Fluent
                            </div>
                        </div>
                        <div class="relative group">
                            <span
                                class="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded cursor-default"
                            >
                                Russian
                            </span>
                            <div
                                class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 text-xs text-white bg-gray-800 rounded-md whitespace-nowrap
            opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
                            >
                                Basics
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-4 w-full border-t border-white/20 pt-4">
                    <div
                        class="flex flex-wrap justify-center gap-3 pt-4 text-sm text-white"
                    >
                        <div
                            class="relative group inline-flex justify-center items-center"
                        >
                            <a
                                href="{base}/projects"
                                class="rounded bg-blue-600 p-2 hover:bg-blue-700 cursor-pointer flex justify-center items-center"
                            >
                                <PuzzleIcon class="h-5 w-5 text-white" />
                            </a>
                            <div
                                class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
          px-3 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-opacity duration-300 whitespace-nowrap z-10"
                            >
                                PROJECTS
                            </div>
                        </div>
                        <div
                            class="relative group inline-flex justify-center items-center"
                        >
                            <a
                                href="https://github.com/EncryptSL"
                                target="_blank"
                                class="rounded bg-gray-800 p-2 hover:bg-gray-900 cursor-pointer flex justify-center items-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="h-6 w-6 text-white"
                                >
                                    <path
                                        d="M12 .5C5.7.5.6 5.6.6 11.9c0 5 3.3 9.2 7.8 10.7.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.6-3.9-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 .1.6 1.6 2.6 1.2.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.4 1.3a11.6 11.6 0 0 1 6.2 0c2.3-1.6 3.3-1.3 3.3-1.3.6 1.6.2 2.8.1 3.1.7.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v2.9c0 .3.2.7.8.6a11.4 11.4 0 0 0 7.7-10.6C23.4 5.6 18.3.5 12 .5Z"
                                    />
                                </svg>
                            </a>
                            <div
                                class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
          px-3 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-opacity duration-300 whitespace-nowrap z-10"
                            >
                                GITHUB
                            </div>
                        </div>
                        <div
                            class="relative group inline-flex justify-center items-center"
                        >
                            <a
                                href="https://www.spigotmc.org/members/rydloscz.127028/"
                                target="_blank"
                                class="rounded bg-yellow-600 p-2 hover:bg-yellow-700 cursor-pointer flex justify-center items-center"
                            >
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6 text-white"
                                >
                                    <path
                                        d="M12.644 2.44c-.179.033-.456.182-.603.331-.245.2-.588.232-2.023.133l-1.713-.116.049.713.049.713h.652c.36-.016 1.207-.05 1.876-.083l1.224-.083v3.317l-.44.05c-.425.05-.457.1-.457.862 0 .713-.05.813-.36.863-.26.033-.39.182-.44.464-.016.232-.114.448-.18.497-.08.05-.228.597-.326 1.211-.228 1.526-.375 1.708-1.37 1.84-1.436.167-2.056.134-2.056-.148 0-.2-.244-.25-1.158-.25-1.012 0-1.158-.032-1.24-.33-.065-.25-.228-.333-.62-.333s-.555.083-.62.332c-.082.299-.228.332-1.224.332-1.011 0-1.158.033-1.256.332-.049.182-.18.331-.26.331-.082 0-.148.863-.148 1.99 0 1.609.05 1.99.229 1.99.13 0 .293.15.342.332.082.282.245.332 1.175.332.914 0 1.077.05 1.142.331.13.465 1.11.465 1.24 0 .065-.282.228-.331 1.158-.331.849 0 1.077-.05 1.077-.25 0-.397 2.121-.33 3.426.117 1.583.53 5.14.53 6.82 0 .653-.199 1.256-.332 1.338-.282.359.232.163.896-.343 1.178-.587.298-.587.563 0 1.956l.343.797 1.599-.067c1.73-.083 2.822-.48 3.915-1.41l.539-.464-.31-.912c-.327-.962-.734-1.327-1.518-1.327-.342 0-.473-.149-.766-.796-.506-1.144-1.224-1.758-2.758-2.355-.799-.315-1.582-.746-1.99-1.127-.604-.548-.685-.73-.832-1.775-.098-.63-.245-1.194-.326-1.244-.066-.05-.164-.265-.18-.497-.049-.282-.18-.431-.424-.464-.326-.05-.375-.15-.375-.863 0-.763-.033-.812-.44-.862-.458-.05-.458-.05-.507-1.526-.032-.929.017-1.542.13-1.658.115-.116.93-.183 2.09-.183h1.908l.05-.564c.032-.298-.017-.63-.099-.713-.098-.1-.816-.083-1.909.05-1.256.15-1.778.15-1.86.017-.146-.25-.848-.481-1.24-.398z"
                                    />
                                </svg>
                            </a>
                            <div
                                class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
          px-3 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-opacity duration-300 whitespace-nowrap z-10"
                            >
                                MY SPIGOTMC PROFILE
                            </div>
                        </div>
                        <div
                            class="relative group inline-flex justify-center items-center"
                        >
                            <a
                                href="https://open.spotify.com/playlist/56NngZ2QAyFvHvm3fuXr7J?si=671035f6c14645a9"
                                target="_blank"
                                class="rounded bg-green-500 p-2 hover:bg-green-600 cursor-pointer flex justify-center items-center"
                            >
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6 text-white"
                                >
                                    <path
                                        d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
                                    />
                                </svg>
                            </a>
                            <div
                                class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
          px-3 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-opacity duration-300 whitespace-nowrap z-10"
                            >
                                MY SPOTIFY PLAYLIST
                            </div>
                        </div>
                        <div
                            class="relative group inline-flex justify-center items-center"
                        >
                            <a
                                href="https://ko-fi.com/encryptsl"
                                target="_blank"
                                class="rounded bg-pink-500 p-2 hover:bg-pink-600 cursor-pointer flex justify-center items-center"
                            >
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6 text-white"
                                >
                                    <path
                                        d="M11.351 2.715c-2.7 0-4.986.025-6.83.26C2.078 3.285 0 5.154 0 8.61c0 3.506.182 6.13 1.585 8.493 1.584 2.701 4.233 4.182 7.662 4.182h.83c4.209 0 6.494-2.234 7.637-4a9.5 9.5 0 0 0 1.091-2.338C21.792 14.688 24 12.22 24 9.208v-.415c0-3.247-2.13-5.507-5.792-5.87-1.558-.156-2.65-.208-6.857-.208m0 1.947c4.208 0 5.09.052 6.571.182 2.624.311 4.13 1.584 4.13 4v.39c0 2.156-1.792 3.844-3.87 3.844h-.935l-.156.649c-.208 1.013-.597 1.818-1.039 2.546-.909 1.428-2.545 3.064-5.922 3.064h-.805c-2.571 0-4.831-.883-6.078-3.195-1.09-2-1.298-4.155-1.298-7.506 0-2.181.857-3.402 3.012-3.714 1.533-.233 3.559-.26 6.39-.26m6.547 2.287c-.416 0-.65.234-.65.546v2.935c0 .311.234.545.65.545 1.324 0 2.051-.754 2.051-2s-.727-2.026-2.052-2.026m-10.39.182c-1.818 0-3.013 1.48-3.013 3.142 0 1.533.858 2.857 1.949 3.897.727.701 1.87 1.429 2.649 1.896a1.47 1.47 0 0 0 1.507 0c.78-.467 1.922-1.195 2.623-1.896 1.117-1.039 1.974-2.364 1.974-3.897 0-1.662-1.247-3.142-3.039-3.142-1.065 0-1.792.545-2.338 1.298-.493-.753-1.246-1.298-2.312-1.298"
                                    />
                                </svg>
                            </a>
                            <div
                                class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
          px-3 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-opacity duration-300 whitespace-nowrap z-10"
                            >
                                SUPPORT ME ON KO-FI!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Třetí karta -->
        <div
            class="glass bg-slate-800/60 rounded-xl p-6 shadow-xl flex flex-col items-center justify-center text-white w-full border border-transparent hover:border-blue-500 transition duration-200"
        >
            <h2 class="text-2xl font-bold mb-4">Current Setup and Stack</h2>
            <div class="columns-1 sm:columns-2 md:columns-2 gap-4 w-full">
                <div class="bg-white/10 p-4 rounded-lg break-inside-avoid mb-4">
                    <h3 class="text-sky-400 font-semibold mb-2">🧠 PC Build</h3>
                    <ul class="list-disc ml-5 space-y-1">
                        <li>Ryzen 5 5600 - 4.4 MHz</li>
                        <li>XFX Radeon RX 6600 Speedster SWIFT210 CORE 8GB</li>
                        <li>32GB DDR4 RAM</li>
                        <li>MSI B450 Tomahawk Max</li>
                        <li>1TB NVMe SSD + 1TB HDD</li>
                        <li>Endorfy Fera 5</li>
                        <li>Be quiet! Pure Power 12 M 750W</li>
                        <li>GameMax Revolt</li>
                    </ul>
                </div>
                <div class="bg-white/10 p-4 rounded-lg break-inside-avoid mb-4">
                    <h3 class="text-sky-400 font-semibold mb-2">
                        💽 Other components
                    </h3>
                    <ul class="list-disc ml-5 space-y-1">
                        <li>CZC.Gaming Reaper Keyboard</li>
                        <li>Bloody Sport Series... Mouse</li>
                        <li>23,8" MSI PRO MP243XW</li>
                    </ul>
                </div>
                <div class="bg-white/10 p-4 rounded-lg break-inside-avoid mb-4">
                    <h3 class="text-sky-400 font-semibold mb-2">🛠️ Software</h3>
                    <ul class="list-disc ml-5 space-y-1">
                        <li>DaVinci Resolve</li>
                        <li>IntelliJ IDEA Community Edition</li>
                        <li>VSCode</li>
                        <li>FileZilla</li>
                    </ul>
                </div>
                <div class="bg-white/10 p-4 rounded-lg break-inside-avoid mb-4">
                    <h3 class="text-sky-400 font-semibold mb-2">🛠️ OS</h3>
                    <ul class="list-disc ml-5 space-y-1">
                        <li>Windows 11 Pro</li>
                        <li>Linux - Ubuntu Server</li>
                    </ul>
                </div>
                <div class="bg-white/10 p-4 rounded-lg break-inside-avoid mb-4">
                    <h3 class="text-sky-400 font-semibold mb-2">
                        🛠️ Programming Languages
                    </h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-blue-200 text-black px-1 rounded-sm"
                            >PHP</span
                        >
                        <span class="bg-yellow-200 text-black px-1 rounded-sm"
                            >Java</span
                        >
                        <span class="bg-purple-200 text-black px-1 rounded-sm"
                            >Kotlin</span
                        >
                        <span class="bg-green-200 text-black px-1 rounded-sm"
                            >Python</span
                        >
                        <span class="bg-red-200 text-black px-1 rounded-sm"
                            >JavaScript</span
                        >
                        <span class="bg-gray-200 text-black px-1 rounded-sm"
                            >SQL</span
                        >
                        <span class="bg-indigo-200 text-black px-1 rounded-sm"
                            >I hate CSS xD</span
                        >
                    </div>
                </div>
            </div>
        </div>

        <footer
            class="glass rounded-xl shadow-lg text-white/80 text-center text-sm p-4 w-full max-w-5xl mx-auto"
        >
            By <a href="#" class="text-yellow-300">EncryptSL</a> ©
            <span id="year">{$year}</span>
        </footer>
    </div>
</container>
