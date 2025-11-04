<script>
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
<div class="flex flex-col md:flex-row gap-6 w-full">
  <!-- LEVÁ KARTA -->
  <div class="bg-white/5 rounded-xl shadow-lg p-6 w-full md:w-80 text-center">
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
    <p class="text-gray-300 leading-relaxed text-center">
      I'm a <strong class="text-blue-400 dark:text-blue-300 font-extrabold"
        >Software Developer</strong
      >
      focused on
      <strong class="text-gray-200 dark:text-gray-50"
        >robust back-end systems</strong
      >
      using
      <strong class="text-yellow-400 dark:text-yellow-300 font-extrabold"
        >Kotlin</strong
      >
      and
      <strong class="text-yellow-400 dark:text-yellow-300 font-extrabold"
        >PHP</strong
      >. While I work in an industrial setting, my passion lies in developing
      <strong class="text-purple-400 dark:text-purple-300 font-extrabold"
        >large-scale Open Source projects</strong
      >
      like
      <strong class="text-green-400 dark:text-green-300 font-extrabold"
        >LiteEco</strong
      >. I love building
      <strong class="text-blue-400 dark:text-blue-300"
        >new programs and plugins</strong
      >
      from scratch, constantly seeking ways to
      <strong class="text-pink-400 dark:text-pink-300 font-extrabold"
        >optimize performance</strong
      >
      and
      <strong class="text-pink-400 dark:text-pink-300 font-extrabold"
        >improve existing codebases</strong
      >. If you're looking for a more in-depth view of my contributions,
      especially within the
      <strong class="text-gray-200 dark:text-gray-50"
        >developer community</strong
      >, check out my projects below!
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
