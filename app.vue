<template>
    <div>
        <NuxtLoadingIndicator />

        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
import '~/assets/styles/styles.css';

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
            media: '(prefers-color-scheme: light)'
        },
        {
            content: 'black',
            media: '(prefers-color-scheme: dark)'
        }
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
        type: 'image/png'
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
        type: 'image/png'
    },
    robots: {
        nofollow: false,
        noindex: false
    },
    // @ts-expect-error: Concatenating googlebot directives into a single string due to library limitations on input type.
    googlebot:
        'noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1'
});

useHead({
    link: [
        {
            rel: 'shortcut icon',
            href: '/favicons/nuxt3-favicon.svg',
            type: 'image/svg+xml'
        },
        {
            rel: 'icon',
            href: '/favicons/nuxt3-favicon.svg',
            type: 'image/svg+xml'
        },
        {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/favicons/nuxt3-apple-touch.svg'
        },
        {
            rel: 'manifest',
            href: '/manifest.json'
        }
    ]
});
</script>
