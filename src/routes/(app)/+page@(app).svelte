<script>
  import { base } from "$app/paths";
  import { age, year } from "$lib/age";
  import Seo from "$lib/components/Seo.svelte";

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
        "Bloody Sport Series Mouse",
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

<!-- JEDEN VELKÝ WRAPPER -->
<!-- SEKCE: 2 karty vedle sebe -->
<!-- LEVÁ KARTA -->
<div
  class="card-container mx-auto max-w-4xl flex flex-col md:flex-row bg-white/5 rounded-xl shadow-2xl overflow-hidden"
>
  <div class="w-full md:w-80 p-6 bg-black/10 text-center flex-shrink-0">
    <img
      src="https://avatars.githubusercontent.com/u/9441083?v=4&size=500"
      alt="avatar"
      class="w-40 h-40 mx-auto rounded-xl border border-gray-500 mb-4 shadow-md object-cover"
    />
    <h2 class="text-2xl font-semibold text-white">EncryptSL</h2>

    <p id="age" class="text-white/80 text-base mt-1">
      <strong>{$age}</strong> years old
    </p>

    <div class="text-center mt-6">
      <a
        href="https://discordapp.com/users/185744294865272832"
        class="flex w-full justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition px-4 py-2 rounded text-base font-medium text-white shadow-lg"
      >
        <i class="fa-brands fa-discord"></i> DISCORD
      </a>
    </div>
  </div>

  <div class="p-8 flex-grow">
    <h1 class="text-3xl font-bold text-white mb-4 text-center md:text-left">
      Hi, I'm EncryptSL 👋
    </h1>

    <p class="text-gray-300 leading-relaxed text-lg">
      I'm a <strong class="text-blue-400 font-extrabold"
        >Software Developer</strong
      >
      focused on
      <strong class="text-yellow-400 font-extrabold">Kotlin</strong>,
      <strong class="text-yellow-400 font-extrabold">PHP</strong>, and the
      <strong class="text-indigo-400 font-extrabold">Nette framework</strong>. I
      created a PaperMC plugin that is actively used by over
      <strong class="text-green-400 font-extrabold">100 servers</strong> to
      date, with
      <strong class="text-green-400 font-extrabold">27,899 downloads</strong>.
    </p>

    <p class="text-gray-300 leading-relaxed text-lg mt-4">
      In addition to development, I have experience managing Minecraft servers
      as an
      <strong class="text-orange-400 font-semibold">administrator</strong>,
      <strong class="text-orange-400 font-semibold">moderator</strong>, and
      <strong class="text-orange-400 font-semibold">plugin developer</strong>
      <a
        href="{base}/minecraft"
        class="text-white hover:text-blue-400 font-semibold transition underline"
        >[Minecraft Experience]</a
      >. My core expertise includes
      <strong class="text-pink-400 font-semibold"
        >code and project optimization</strong
      >, and I am an expert in
      <strong class="text-purple-400">analytics and copywriting</strong>.
    </p>

    <p class="text-gray-300 leading-relaxed text-lg mt-4">
      I love creating
      <strong class="text-red-400 font-extrabold">open source ❤️</strong>. If
      you want to know more, feel free
      <a
        href="https://discordapp.com/users/185744294865272832"
        class="text-white hover:text-blue-400 font-semibold transition underline"
        target="_blank"
        title="DISCORD">contact me</a
      > !
    </p>

    <hr class="my-6 border-gray-700" />

    <div class="mt-6">
      <h2
        class="text-xl font-semibold text-white mb-3 text-center md:text-left"
      >
        Spoken Languages 🗣️
      </h2>
      <div
        class="flex flex-wrap items-center justify-center md:justify-start gap-2"
      >
        <span
          class="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full shadow-sm"
        >
          Czech - Native
        </span>
        <span
          class="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full shadow-sm"
        >
          English - B2
        </span>
        <span
          class="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full shadow-sm"
        >
          Russian - A2
        </span>
      </div>
    </div>
  </div>
</div>

<div class="bg-white/5 rounded-xl shadow-lg p-6 w-full">
  <h2 class="text-2xl font-bold mb-4 text-center">Current Setup and Stack</h2>
  <div class="columns-1 sm:columns-2 gap-4 w-full">
    {#each stack as category}
      <div class="bg-white/10 p-4 rounded-lg break-inside-avoid mb-4">
        <h3 class="text-sky-400 font-semibold mb-2">{category.title}</h3>
        <ul class="list-disc ml-5 space-y-1">
          {#each category.items as item}
            <li>{item}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</div>
