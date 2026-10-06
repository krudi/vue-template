<template>
    <UApp>
        <NuxtLoadingIndicator />

        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </UApp>
</template>

<script setup lang="ts">
const siteUrl = useSiteUrl();
const resolvedSiteMetadata = buildSiteMetadata(siteUrl);
const googleSiteVerification = useRuntimeConfig().public.googleSiteVerification;

useSeoMeta({
    charset: 'utf-8',
    title: resolvedSiteMetadata.title,
    viewport: 'width=device-width, initial-scale=1, maximum-scale=3',
    applicationName: resolvedSiteMetadata.title,
    description: resolvedSiteMetadata.description,
    author: resolvedSiteMetadata.authors.map((author) => author.name).join(', '),
    creator: resolvedSiteMetadata.name,
    publisher: resolvedSiteMetadata.name,
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
    ogTitle: resolvedSiteMetadata.title,
    ogDescription: resolvedSiteMetadata.description,
    ogUrl: siteUrl,
    ogSiteName: resolvedSiteMetadata.name,
    ogLocale: resolvedSiteMetadata.locale,
    ogImage: {
        url: resolvedSiteMetadata.ogImage.url,
        width: String(resolvedSiteMetadata.ogImage.width),
        height: String(resolvedSiteMetadata.ogImage.height),
        alt: resolvedSiteMetadata.ogImage.alt,
        type: resolvedSiteMetadata.ogImage.type,
    },
    twitterSite: resolvedSiteMetadata.twitterHandle,
    twitterCreator: resolvedSiteMetadata.twitterHandle,
    twitterTitle: resolvedSiteMetadata.title,
    twitterDescription: resolvedSiteMetadata.description,
    twitterCard: 'summary_large_image',
    twitterImage: {
        url: resolvedSiteMetadata.ogImage.url,
        width: String(resolvedSiteMetadata.ogImage.width),
        height: String(resolvedSiteMetadata.ogImage.height),
        alt: resolvedSiteMetadata.ogImage.alt,
        type: resolvedSiteMetadata.ogImage.type,
    },
    robots: {
        nofollow: false,
        noindex: false,
    },
    googleSiteVerification: googleSiteVerification || undefined,
});

useHead({
    titleTemplate: (title) =>
        title && title !== resolvedSiteMetadata.title
            ? `${title} | ${resolvedSiteMetadata.title}`
            : resolvedSiteMetadata.title,
    link: [
        {
            rel: 'canonical',
            href: siteUrl,
        },
    ],
    meta: [
        {
            name: 'keywords',
            content: resolvedSiteMetadata.keywords.join(', '),
        },
        {
            name: 'googlebot',
            content: 'noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1',
        },
    ],
});
</script>
