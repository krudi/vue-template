<template>
  <div>
    <NuxtLoadingIndicator />
    <VitePwaManifest />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
onMounted(() => {
    // eslint-disable-next-line no-console
    console.log('vue-template')
})
</script>
