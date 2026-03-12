import { fileURLToPath } from 'node:url';

import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
    compatibilityDate: '2024-10-06',
    devtools: {
        enabled: true,
    },
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
        },
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
        '@utils': fileURLToPath(new URL('./utils', import.meta.url)),
        '@models': fileURLToPath(new URL('./types', import.meta.url)),
    },
    app: {
        head: {
            link: [
                {
                    rel: 'shortcut icon',
                    href: '/favicons/favicon.ico',
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '57x57',
                    href: '/favicons/apple-icon-57x57.png',
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '60x60',
                    href: '/favicons/apple-icon-60x60.png',
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '72x72',
                    href: '/favicons/apple-icon-72x72.png',
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '76x76',
                    href: '/favicons/apple-icon-76x76.png',
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '114x114',
                    href: '/favicons/apple-icon-114x114.png',
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '120x120',
                    href: '/favicons/apple-icon-120x120.png',
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '144x144',
                    href: '/favicons/apple-icon-144x144.png',
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '152x152',
                    href: '/favicons/apple-icon-152x152.png',
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/favicons/apple-icon-180x180.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '512x512',
                    href: '/favicons/favicon-512x512.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '192x192',
                    href: '/favicons/android-icon-192x192.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '144x144',
                    href: '/favicons/favicon-144x144.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '96x96',
                    href: '/favicons/favicon-96x96.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '72x72',
                    href: '/favicons/favicon-72x72.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '48x48',
                    href: '/favicons/favicon-48x48.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '36x36',
                    href: '/favicons/favicon-36x36.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/favicons/favicon-32x32.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: '/favicons/favicon-16x16.png',
                },
                {
                    rel: 'manifest',
                    href: '/manifest.json',
                },
            ],
            meta: [
                {
                    name: 'msapplication-config',
                    content: 'browserconfig.xml',
                },
                {
                    name: 'msapplication-TileImage',
                    content: '/favicons/ms-icon-144x144.png',
                },
                {
                    name: 'msapplication-TileColor',
                    content: '#ffffff',
                },
                {
                    name: 'theme-color',
                    content: '#ffffff',
                },
            ],
        },
    },
    modules: ['@nuxt/eslint', '@nuxt/devtools'],
});
