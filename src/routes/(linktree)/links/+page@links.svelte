<script>
  import { base } from "$app/paths";
  import { year } from "$lib/age";
  import linksData from "$lib/data/social.yml";
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
      {#each linksData.links as link}
      <a
        href="{link.link}"
        target="_blank"
        class="block {link.background}
                       transition duration-200 py-3 rounded-lg text-white font-semibold text-lg
                       shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-75"
      >
        <i class="{link.icon}"></i> {link.title.toUpperCase()}
      </a>
      {/each}
      <a
        href="{base}/"
        class="block bg-green-700 hover:bg-green-800 active:bg-gray-900
                       transition duration-200 py-3 rounded-lg text-white font-semibold text-lg
                       shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-75"
      >
        <i class="fab fa-readme"></i> VISIT HOMEPAGE
      </a>
    </div>

    <p class="text-gray-500 text-sm mt-8">
      By <span class="text-yellow-300">EncryptSL</span> ©
      <span id="year">{$year}</span>
    </p>
  </div>
</container>
