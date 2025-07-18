<script>
  import { base } from "$app/paths";
  import { year } from "$lib/age";
</script>

<svelte:head>
  <title>EncryptSL - Linktree</title>
  <meta name="description" content="Welcome on Linktree page" />
  <link rel="canonical" href="https://encryptsl.github.io/links" />
  <meta property="og:title" content="EncryptSL - Linktree" />
</svelte:head>

<container class="flex items-center justify-center font-inter min-h-screen p-4">
  <div
    class="linktree-card glass rounded-xl shadow-lg p-6 md:p-8 text-center text-white w-full max-w-md"
  >
    <img
      src="https://avatars.githubusercontent.com/u/9441083?v=4&size=500"
      alt="avatar"
      class="w-36 h-36 mx-auto rounded-full border-4 border-green-500 shadow-xl mb-6 object-cover"
    />

    <h1 class="text-3xl font-bold text-white mb-2">EncryptSL</h1>

    <p class="text-gray-300 text-md mb-8">
      Developer | Minecraft Plugins | Web Development (PHP, Java, Kotlin)
    </p>

    <div class="space-y-4">
      <a
        href="{base}/"
        class="block bg-green-700 hover:bg-green-800 active:bg-gray-900
                       transition duration-200 py-3 rounded-lg text-white font-semibold text-lg
                       shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-75"
      >
        HOME
      </a>

      <a
        href="https://discordapp.com/users/185744294865272832"
        target="_blank"
        class="block bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800
                       transition duration-200 py-3 rounded-lg text-white font-semibold text-lg
                       shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
      >
        DISCORD
      </a>

      <a
        href="https://github.com/EncryptSL"
        target="_blank"
        class="block bg-gray-700 hover:bg-gray-800 active:bg-gray-900
                       transition duration-200 py-3 rounded-lg text-white font-semibold text-lg
                       shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-75"
      >
        GITHUB
      </a>

      <a
        href="https://www.spigotmc.org/members/rydloscz.127028/"
        target="_blank"
        class="block bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800
                       transition duration-200 py-3 rounded-lg text-white font-semibold text-lg
                       shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75"
      >
        SPIGOTMC PROFILE
      </a>

      <a
        href="https://open.spotify.com/playlist/56NngZ2QAyFvHvm3fuXr7J?si=671035f6c14645a9"
        target="_blank"
        class="block bg-green-500 hover:bg-green-600 active:bg-green-700
                       transition duration-200 py-3 rounded-lg text-white font-semibold text-lg
                       shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
      >
        MY SPOTIFY PLAYLIST
      </a>

      <a
        href="https://ko-fi.com/encryptsl"
        target="_blank"
        class="block bg-pink-500 hover:bg-pink-600 active:bg-pink-700
                       transition duration-200 py-3 rounded-lg text-white font-semibold text-lg
                       shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-75"
      >
        SUPPORT ME ON KO-FI!
      </a>

      <a
        href="projects.html"
        class="block bg-blue-600 hover:bg-blue-700 active:bg-blue-800
                       transition duration-200 py-3 rounded-lg text-white font-semibold text-lg
                       shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
      >
        MY PROJECTS
      </a>
    </div>

    <p class="text-gray-500 text-sm mt-8">
      By <span class="text-yellow-300">EncryptSL</span> ©
      <span id="year">{$year}</span>
    </p>
  </div>
</container>
