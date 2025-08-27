<script>
  import { base } from "$app/paths";
  import { age, year } from "$lib/age";
  import { SquareLibrary } from "@lucide/svelte";
  import menu from "$lib/data/menu.yml";
</script>

<container class="flex items-center justify-center font-mono">
  <div
    class="flex flex-col items-start justify-start min-h-screen px-4 py-10 gap-6 max-w-[950px] w-full"
  >
    <!-- JEDEN VELKÝ WRAPPER -->
    <div
      class="glass bg-slate-800/60 rounded-2xl shadow-2xl p-8 w-full text-white border border-transparent hover:border-blue-500 transition duration-200 flex flex-col gap-8"
    >
      <!-- SEKCE: 2 karty vedle sebe -->
      <div class="flex flex-col md:flex-row gap-6 w-full">
        <!-- LEVÁ KARTA -->
        <div
          class="bg-white/5 rounded-xl shadow-lg p-6 w-full md:w-80 text-center"
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
        <div class="bg-white/5 rounded-xl shadow-lg p-6 w-full">
          <h1 class="text-2xl font-semibold text-center">Hi, I'm EncryptSL</h1>
          <p class="pt-2 text-center">
            I'm a passionate developer of Minecraft plugins and PHP websites,
            primarily focusing on the <span
              class="bg-blue-200 text-black px-1 rounded-sm"
              >Nette Framework</span
            >,
            <span class="bg-yellow-200 text-black px-1 rounded-sm">Java</span>,
            and
            <span class="bg-purple-200 text-black px-1 rounded-sm">Kotlin</span
            >.<br />
            My main programming languages are
            <span class="bg-blue-200 text-black px-1 rounded-sm">PHP</span>,
            <span class="bg-yellow-200 text-black px-1 rounded-sm">Java</span>,
            and
            <span class="bg-purple-200 text-black px-1 rounded-sm">Kotlin</span
            >.<br />
            I also sometimes focus on
            <span class="bg-green-200 text-black px-1 rounded-sm">Python</span>,
            using it to write simple bots that help make my life with Discord
            easier.<br />
            I enjoy sharing my creations as open-source on GitHub.
          </p>

          <!-- Jazyky -->
          <div class="max-w-sm rounded p-3 mx-auto mt-4">
            <h2 class="text-1xl font-semibold text-center">Spoken Languages</h2>
            <div class="flex flex-wrap items-center justify-center gap-2">
              <span
                class="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded"
                >Czech</span
              >
              <span
                class="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded"
                >English</span
              >
              <span
                class="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded"
                >Russian</span
              >
            </div>
          </div>

          <!-- Ikonky -->
          <div class="mt-4 w-full border-t border-white/20 pt-4">
            <div
              class="flex flex-wrap justify-center gap-3 pt-4 text-sm text-white"
            >
              <!-- ZDE nechávám původní ikonky (Projects, Linktree, GitHub, SpigotMC, Spotify, Ko-Fi) -->

              <div
                class="relative group inline-flex justify-center items-center"
              >
                <a
                  href="{base}/projects"
                  class="rounded bg-blue-500 p-3 hover:bg-blue-600 cursor-pointer flex justify-center items-center"
                >
                  <i class="fa-solid fa-folder"></i>
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
                  href="{base}/links"
                  class="rounded bg-green-500 p-3 hover:bg-green-600 cursor-pointer flex justify-center items-center"
                >
                  <i class="fa-brands fa-linktree"></i>
                </a>
                <div
                  class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
          px-3 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-opacity duration-300 whitespace-nowrap z-10"
                >
                  LINKTREE
                </div>
              </div>

              {#each menu.links as link}
                <div
                  class="relative group inline-flex justify-center items-center"
                >
                  <a
                    href={link.link}
                    target="_blank"
                    class="rounded {link.background} p-3 cursor-pointer flex justify-center items-center"
                  >
                    <i class={link.icon}></i>
                  </a>
                  <div
                    class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
          px-3 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-opacity duration-300 whitespace-nowrap z-10"
                  >
                    {link.title}
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>

      <!-- SEKCE: Třetí karta (Setup a Stack) -->
      <div class="bg-white/5 rounded-xl shadow-lg p-6 w-full">
        <h2 class="text-2xl font-bold mb-4 text-center">
          Current Setup and Stack
        </h2>
        <div class="columns-1 sm:columns-2 gap-4 w-full">
          <!-- PC build -->
          <div class="bg-white/10 p-4 rounded-lg break-inside-avoid mb-4">
            <h3 class="text-sky-400 font-semibold mb-2">🧠 PC Build</h3>
            <ul class="list-disc ml-5 space-y-1">
              <li>Ryzen 5 5600 - 4.4 MHz</li>
              <li>XFX Radeon RX 6600 Speedster SWIFT210 CORE 8GB</li>
              <li>32GB DDR4 RAM</li>
              <li>MSI B450 Tomahawk Max</li>
            </ul>
          </div>

          <!-- Software / další bloky zůstávají... -->
          <div class="bg-white/10 p-4 rounded-lg break-inside-avoid mb-4">
            <h3 class="text-sky-400 font-semibold mb-2">💽 Other components</h3>
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
              <span class="bg-blue-200 text-black px-1 rounded-sm">PHP</span>
              <span class="bg-yellow-200 text-black px-1 rounded-sm">Java</span>
              <span class="bg-purple-200 text-black px-1 rounded-sm"
                >Kotlin</span
              >
              <span class="bg-green-200 text-black px-1 rounded-sm">Python</span
              >
              <span class="bg-red-200 text-black px-1 rounded-sm"
                >JavaScript</span
              >
              <span class="bg-gray-200 text-black px-1 rounded-sm">SQL</span>
              <span class="bg-indigo-200 text-black px-1 rounded-sm"
                >I hate CSS xD</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- FOOTER uvnitř wrapperu -->
      <footer
        class="bg-white/5 rounded-xl shadow-lg text-white/80 text-center text-sm p-4 w-full"
      >
        By <a href="{base}/" class="text-yellow-300">EncryptSL</a> ©
        <span id="year">{$year}</span>
      </footer>
    </div>
  </div>
</container>
