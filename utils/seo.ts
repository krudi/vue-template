export const siteMetadata = {
    name: 'vue-template',
    title: 'vue-template',
    description: 'A template with Nuxt3 built on Vue3 with focus on performance and best practices.',
    keywords: ['template'],
    locale: 'en_US',
    twitterHandle: '@twitter',
    ogImage: {
        path: '/meta-tags/page-view.png',
        alt: 'Page preview',
        width: 1800,
        height: 1600,
        type: 'image/png',
    },
    authors: [
        {
            name: 'Patryk Kudlik',
        },
    ],
    verification: {
        google: 'Q9rK2mA0ZxWcE4B_HY8nLJpUoFqGdS7V5tI1eM6l3',
    },
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
