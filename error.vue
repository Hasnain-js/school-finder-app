<template>
  <main class="h-screen w-full flex flex-col justify-center items-center dark:bg-[#1A2238]">
    <h1 class="text-9xl font-extrabold dark:text-white text-balticSea tracking-widest outline-2 outline-teal-400">404
    </h1>
    <div
      class="dark:bg-[#FF6A3D] bg-teal-600 px-2 dark:text-vampireGrey text-white text-sm font-semibold rounded rotate-12 absolute">
      Page Not Found
    </div>
    <button class="mt-5">
      <a
        class="relative inline-block text-sm font-medium dark:text-[#FF6A3D] bg-teal-600 group dark:active:text-orange-500 text-teal-500 focus:outline-none focus:ring">
        <span
          class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 dark:bg-[#FF6A3D] bg-teal-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>

        <span
          class="relative block px-8 py-3 dark:bg-[#1A2238] text-white border dark:border-orange-500 border-current">
          <NuxtLink to="/">Go Home</NuxtLink>
        </span>
      </a>
    </button>
  </main>
</template>
