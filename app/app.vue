<template>
    <UApp>
        <NuxtLoadingIndicator />

        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </UApp>
</template>

<script setup lang="ts">
const route = useRoute();
const { siteUrl, googleSiteVerification } = useRuntimeConfig().public;
const canonicalUrl = computed(() => new URL(route.path, siteUrl).href);

useHead({
    titleTemplate: (title) => (title ? `${title} | vue-template` : 'vue-template'),
    link: [
        {
            rel: 'canonical',
            href: canonicalUrl,
        },
    ],
    meta: [
        {
            name: 'googlebot',
            content: 'noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1',
        },
    ],
});

useSeoMeta({
    applicationName: 'vue-template',
    author: 'Patryk Kudlik',
    creator: 'vue-template',
    publisher: 'vue-template',
    referrer: 'origin-when-cross-origin',
    description: 'A template with Nuxt 4 built on Vue 3 with focus on performance and best practices.',
    ogTitle: 'vue-template',
    ogDescription: 'A template with Nuxt 4 built on Vue 3 with focus on performance and best practices.',
    themeColor: [
        {
            content: '#ffffff',
            media: '(prefers-color-scheme: light)',
        },
        {
            content: '#000000',
            media: '(prefers-color-scheme: dark)',
        },
    ],
    ogType: 'website',
    twitterCard: 'summary_large_image',
    ogSiteName: 'vue-template',
    ogLocale: 'en_US',
    ogUrl: canonicalUrl,
    ogImage: {
        url: new URL('/images/meta-tags/page-view.png', siteUrl).href,
        width: 1200,
        height: 630,
        alt: 'Page preview',
        type: 'image/png',
    },
    twitterSite: '@twitter',
    twitterCreator: '@twitter',
    twitterTitle: 'vue-template',
    twitterDescription: 'A template with Nuxt 4 built on Vue 3 with focus on performance and best practices.',
    twitterImage: {
        url: new URL('/images/meta-tags/page-view.png', siteUrl).href,
        width: 1200,
        height: 630,
        alt: 'Page preview',
        type: 'image/png',
    },
    googleSiteVerification: googleSiteVerification || undefined,
});

useSeoMeta(
    {
        robots: {
            index: true,
            follow: true,
        },
    },
    {
        tagPriority: 'low',
    }
);
</script>
