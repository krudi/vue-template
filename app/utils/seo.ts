export const siteMetadata = {
    name: 'vue-template',
    title: 'vue-template',
    description: 'A template with Nuxt 4 built on Vue 3 with focus on performance and best practices.',
    keywords: ['template'],
    locale: 'en_US',
    twitterHandle: '@twitter',
    ogImage: {
        path: '/images/meta-tags/page-view.png',
        alt: 'Page preview',
        width: 1200,
        height: 630,
        type: 'image/png',
    },
    authors: [
        {
            name: 'Patryk Kudlik',
        },
    ],
} as const;

export function buildSiteMetadata(siteUrl: string) {
    return {
        ...siteMetadata,
        siteUrl,
        authors: siteMetadata.authors.map((author) => ({
            ...author,
            url: siteUrl,
        })),
        ogImage: {
            ...siteMetadata.ogImage,
            url: new URL(siteMetadata.ogImage.path, siteUrl).toString(),
        },
    };
}
