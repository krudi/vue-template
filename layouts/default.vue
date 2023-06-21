<template>
  <div class="container mx-auto">
    <Navigation />

    <Header />

    <main class="my-10 p-5 border-1 border-gray-300">
      <slot />
    </main>

    <Footer />
  </div>
</template>
