<template>
  <nav class="w-full min-h-[5em] mb-5 flex justify-between items-center">
    <h1 class="px-4 py-2 bg-sky-800">
      <NuxtLink
        to="/"
        class="text-white font-semibold"
      >
        vue-template
      </NuxtLink>
    </h1>
    <ul class="m-0 p-0 inline-flex gap-7">
      <li>
        <NuxtLink
          to="/"
          class="text-gray-500 hover:text-gray-700"
        >
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="404"
          class="text-gray-500 hover:text-gray-700"
        >
          Not Found
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
