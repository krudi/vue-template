import { fileURLToPath } from 'node:url';

import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
    compatibilityDate: '2024-10-06',
    devtools: {
        enabled: true,
    },
    alias: {
        '@': fileURLToPath(new URL('.', import.meta.url)),
        '@composables': fileURLToPath(new URL('./composables', import.meta.url)),
        '@components': fileURLToPath(new URL('./components', import.meta.url)),
        '@layouts': fileURLToPath(new URL('./layouts', import.meta.url)),
        '@middleware': fileURLToPath(new URL('./middleware', import.meta.url)),
        '@pages': fileURLToPath(new URL('./pages', import.meta.url)),
        '@plugins': fileURLToPath(new URL('./plugins', import.meta.url)),
        '@server': fileURLToPath(new URL('./server', import.meta.url)),
        '@assets': fileURLToPath(new URL('./assets', import.meta.url)),
        '@types': fileURLToPath(new URL('./types', import.meta.url)),
    },
    modules: ['@nuxt/eslint', '@nuxt/devtools'],
});
