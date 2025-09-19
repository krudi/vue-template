<template>
    <div>
        <NuxtLoadingIndicator />

        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
import '@/assets/styles/styles.css';

useSeoMeta({
    charset: 'utf-8',
    title: 'vue-boilerplate',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=3',
    applicationName: 'vue-boilerplate',
    description:
        'A template with Nuxt3 built on Vue3 with focus on performance and best practices.',
    keywords: 'template',
    referrer: 'origin-when-cross-origin',
    themeColor: [
        {
            content: 'white',
            media: '(prefers-color-scheme: light)',
        },
        {
            content: 'black',
            media: '(prefers-color-scheme: dark)',
        },
    ],
    ogTitle: 'My Amazing Site',
    ogDescription:
        'A template with Nuxt3 built on Vue3 with focus on performance and best practices.',
    ogUrl: 'http://127.0.0.1:3000',
    ogSiteName: 'vue-boilerplate',
    ogLocale: 'en-US',
    ogImage: {
        url: 'https://example.com/image.png',
        width: '1800',
        height: '1600',
        alt: 'Alternative description',
        type: 'image/png',
    },
    twitterSite: '@twitter',
    twitterCreator: '@twitter',
    twitterCreatorId: '1467726470533754880',
    twitterTitle: 'vue-templat',
    twitterDescription:
        'A template with Nuxt3 built on Vue3 with focus on performance and best practices.',
    twitterCard: 'app',
    twitterImage: {
        url: 'https://example.com/image.png',
        width: '1800',
        height: '1600',
        alt: 'Alternative description',
        type: 'image/png',
    },
    robots: {
        nofollow: false,
        noindex: false,
    },
    // @ts-expect-error: Concatenating googlebot directives into a single string due to library limitations on input type.
    googlebot:
        'noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1',
});

useHead({
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
});
</script>
