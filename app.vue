<template>
    <div>
        <NuxtLoadingIndicator />

        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
import '@assets/styles/styles.css';

import { useHead, useSeoMeta } from '#imports';
import { useSiteUrl } from '@composables/use-site-url';
import { buildSiteMetadata } from '@utils/seo';

const siteUrl = useSiteUrl();
const resolvedSiteMetadata = buildSiteMetadata(siteUrl);

useSeoMeta({
    charset: 'utf-8',
    title: resolvedSiteMetadata.title,
    viewport: 'width=device-width, initial-scale=1, maximum-scale=3',
    applicationName: resolvedSiteMetadata.title,
    description: resolvedSiteMetadata.description,
    keywords: resolvedSiteMetadata.keywords.join(', '),
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
    ogLocale: 'en-US',
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
    googleSiteVerification: resolvedSiteMetadata.verification.google,
});

useHead({
    link: [
        {
            rel: 'canonical',
            href: siteUrl,
        },
    ],
    meta: [
        {
            name: 'googlebot',
            content: 'noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1',
        },
    ],
});
</script>
