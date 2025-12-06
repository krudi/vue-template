import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
    compatibilityDate: '2024-10-06',
    devtools: {
        enabled: true,
    },
    modules: ['@nuxt/eslint', '@nuxt/devtools'],
});
