<script>
  import { base } from "$app/paths";
  import { year } from "$lib/age";
</script>

<container class="flex items-center justify-center">
  <!-- WRAPPER -->
  <div
    class="w-full max-w-3xl space-y-6 min-h-screen flex flex-col items-center justify-center px-4 bg-cover bg-no-repeat text-white"
  >
    <!-- PROJECTS CARD -->
    <main
      class="glass bg-slate-800/60 rounded-xl shadow-lg p-8 w-full border border-none hover:border-blue-500 transition duration-200"
    >
      <h1 class="text-3xl font-bold text-center mb-8">My Projects</h1>

      <div class="grid sm:grid-cols-2 gap-6 text-sm">
        <div class="transition transform hover:scale-105">
          <a
            href="https://github.com/encryptsl/echelon"
            target="_blank"
            class="font-semibold underline text-sky-400">Echelon</a
          >
          <p>Kotlin Private Discord Bot</p>
        </div>
        <div class="transition transform hover:scale-105">
          <a
            href="#"
            target="_blank"
            class="font-semibold underline text-sky-400">ZenBeat</a
          >
          <p>Kotlin Private Discord Music Bot</p>
        </div>
        <div class="transition transform hover:scale-105">
          <a
            href="https://github.com/encryptsl/liteeco"
            target="_blank"
            class="font-semibold underline text-sky-400">LiteEco</a
          >
          <p>Paper Economy Plugin with Vault support</p>
        </div>
        <div class="transition transform hover:scale-105">
          <a
            href="https://panda.cekuj.net/"
            target="_blank"
            class="font-semibold underline text-sky-400">PandaProject</a
          >
          <p>Nette app with REST API for image fetching</p>
        </div>
        <div class="transition transform hover:scale-105">
          <a
            href="https://www.spigotmc.org/resources/censor-reloaded-advanced-chat-filter.14752"
            target="_blank"
            class="font-semibold underline text-sky-400">CensorReloaded</a
          >
          <p>Java Bukkit Chat Plugin</p>
        </div>
        <div class="transition transform hover:scale-105">
          <a
            href="https://www.youtube.com/shorts/062Igi5guz0"
            target="_blank"
            class="font-semibold underline text-sky-400"
            >GameMax Revolt Showcase</a
          >
          <p>My current PC case</p>
        </div>
      </div>

      <!-- LINKS -->
      <div class="flex flex-wrap justify-center gap-4 mt-8">
        <a
          href="{base}/"
          class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm transition
            flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-5 w-5"
          >
            <path
              d="M10.875 1.515L1.687 9.247a1.125 1.125 0 00-.472 1.054l1.354 7.026c.097.502.528.854 1.031.854h14.004c.503 0 .934-.352 1.031-.854l1.354-7.026a1.125 1.125 0 00-.472-1.054L13.125 1.515a1.125 1.125 0 00-2.25 0z"
            />
            <path
              fill-rule="evenodd"
              d="M15.375 16.082a.75.75 0 01.405.082l2.487.97a.75.75 0 01.405.082 1.5 1.5 0 00.724-.925l.311-1.608a.75.75 0 01.472-.705c.034-.015.067-.03.101-.046l2.12-.977a.75.75 0 01.993.896l-.168.73a.75.75 0 01-.112.181l-1.354 1.354a.75.75 0 00-.212.53l.354 1.769c.046.23.033.473-.038.694a.75.75 0 01-.58.461l-1.896.271a.75.75 0 00-.512.212l-1.47 1.47a.75.75 0 01-.53.212h-3.623a.75.75 0 01-.53-.212l-1.47-1.47a.75.75 0 00-.512-.212l-1.896-.271a.75.75 0 01-.58-.461 1.5 1.5 0 00-.038-.694l.354-1.769a.75.75 0 00-.212-.53l-1.354-1.354a.75.75 0 01-.112-.182l-.168-.729a.75.75 0 01.993-.896l2.12.977c.034.016.067.031.101.046a.75.75 0 01.472.705l.311 1.608a1.5 1.5 0 00.724.925.75.75 0 01.405-.082l2.487-.97a.75.75 0 01.405-.082c.163-.023.328-.035.493-.035h3.623z"
              clip-rule="evenodd"
            />
          </svg>
          HOME
        </a>

        <a
          href="https://github.com/EncryptSL"
          target="_blank"
          class="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm transition
            flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-5 w-5"
          >
            <path
              d="M12 .5C5.7.5.6 5.6.6 11.9c0 5 3.3 9.2 7.8 10.7.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.6-3.9-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 .1.6 1.6 2.6 1.2.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.4 1.3a11.6 11.6 0 0 1 6.2 0c2.3-1.6 3.3-1.3 3.3-1.3.6 1.6.2 2.8.1 3.1.7.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v2.9c0 .3.2.7.8.6a11.4 11.4 0 0 0 7.7-10.6C23.4 5.6 18.3.5 12 .5Z"
            />
          </svg>
          GITHUB
        </a>

        <a
          href="https://www.spigotmc.org/members/rydloscz.127028/"
          target="_blank"
          class="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm transition
            flex items-center justify-center gap-2"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
          >
            <path
              d="M12.644 2.44c-.179.033-.456.182-.603.331-.245.2-.588.232-2.023.133l-1.713-.116.049.713.049.713h.652c.36-.016 1.207-.05 1.876-.083l1.224-.083v3.317l-.44.05c-.425.05-.457.1-.457.862 0 .713-.05.813-.36.863-.26.033-.39.182-.44.464-.016.232-.114.448-.18.497-.08.05-.228.597-.326 1.211-.228 1.526-.375 1.708-1.37 1.84-1.436.167-2.056.134-2.056-.148 0-.2-.244-.25-1.158-.25-1.012 0-1.158-.032-1.24-.33-.065-.25-.228-.333-.62-.333s-.555.083-.62.332c-.082.299-.228.332-1.224.332-1.011 0-1.158.033-1.256.332-.049.182-.18.331-.26.331-.082 0-.148.863-.148 1.99 0 1.609.05 1.99.229 1.99.13 0 .293.15.342.332.082.282.245.332 1.175.332.914 0 1.077.05 1.142.331.13.465 1.11.465 1.24 0 .065-.282.228-.331 1.158-.331.849 0 1.077-.05 1.077-.25 0-.397 2.121-.33 3.426.117 1.583.53 5.14.53 6.82 0 .653-.199 1.256-.332 1.338-.282.359.232.163.896-.343 1.178-.587.298-.587.563 0 1.956l.343.797 1.599-.067c1.73-.083 2.822-.48 3.915-1.41l.539-.464-.31-.912c-.327-.962-.734-1.327-1.518-1.327-.342 0-.473-.149-.766-.796-.506-1.144-1.224-1.758-2.758-2.355-.799-.315-1.582-.746-1.99-1.127-.604-.548-.685-.73-.832-1.775-.098-.63-.245-1.194-.326-1.244-.066-.05-.164-.265-.18-.497-.049-.282-.18-.431-.424-.464-.326-.05-.375-.15-.375-.863 0-.763-.033-.812-.44-.862-.458-.05-.458-.05-.507-1.526-.032-.929.017-1.542.13-1.658.115-.116.93-.183 2.09-.183h1.908l.05-.564c.032-.298-.017-.63-.099-.713-.098-.1-.816-.083-1.909.05-1.256.15-1.778.15-1.86.017-.146-.25-.848-.481-1.24-.398z"
            />
          </svg>
          SPIGOTMC
        </a>

        <a
          href="https://ko-fi.com/encryptsl"
          target="_blank"
          class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition
            flex items-center justify-center gap-2"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
          >
            <path
              d="M11.351 2.715c-2.7 0-4.986.025-6.83.26C2.078 3.285 0 5.154 0 8.61c0 3.506.182 6.13 1.585 8.493 1.584 2.701 4.233 4.182 7.662 4.182h.83c4.209 0 6.494-2.234 7.637-4a9.5 9.5 0 0 0 1.091-2.338C21.792 14.688 24 12.22 24 9.208v-.415c0-3.247-2.13-5.507-5.792-5.87-1.558-.156-2.65-.208-6.857-.208m0 1.947c4.208 0 5.09.052 6.571.182 2.624.311 4.13 1.584 4.13 4v.39c0 2.156-1.792 3.844-3.87 3.844h-.935l-.156.649c-.208 1.013-.597 1.818-1.039 2.546-.909 1.428-2.545 3.064-5.922 3.064h-.805c-2.571 0-4.831-.883-6.078-3.195-1.09-2-1.298-4.155-1.298-7.506 0-2.181.857-3.402 3.012-3.714 1.533-.233 3.559-.26 6.39-.26m6.547 2.287c-.416 0-.65.234-.65.546v2.935c0 .311.234.545.65.545 1.324 0 2.051-.754 2.051-2s-.727-2.026-2.052-2.026m-10.39.182c-1.818 0-3.013 1.48-3.013 3.142 0 1.533.858 2.857 1.949 3.897.727.701 1.87 1.429 2.649 1.896a1.47 1.47 0 0 0 1.507 0c.78-.467 1.922-1.195 2.623-1.896 1.117-1.039 1.974-2.364 1.974-3.897 0-1.662-1.247-3.142-3.039-3.142-1.065 0-1.792.545-2.338 1.298-.493-.753-1.246-1.298-2.312-1.298"
            />
          </svg>
          BUY KOFI
        </a>
      </div>
    </main>

    <!-- FOOTER (ODDĚLENÝ) -->
    <footer
      class="glass rounded-xl shadow-lg text-white/80 text-center text-sm p-4 w-full max-w-5xl mx-auto"
    >
      By <a href="#" class="text-yellow-300">EncryptSL</a> ©
      <span id="year">{$year}</span>
    </footer>
  </div>
</container>
