type UsePageSeoOptions = {
    path?: string;
    title?: string;
    description?: string;
    keywords?: string[];
};

export function usePageSeo({ path = '/', title, description, keywords }: UsePageSeoOptions = {}) {
    const siteUrl = useSiteUrl();
    const siteMetadata = buildSiteMetadata(siteUrl);
    const canonicalUrl = new URL(path, siteUrl).toString();

    useSeoMeta({
        title: title ?? siteMetadata.title,
        description: description ?? siteMetadata.description,
        ogTitle: title ?? siteMetadata.title,
        ogDescription: description ?? siteMetadata.description,
        ogUrl: canonicalUrl,
        ogSiteName: siteMetadata.name,
        ogLocale: siteMetadata.locale,
        ogImage: {
            url: siteMetadata.ogImage.url,
            width: String(siteMetadata.ogImage.width),
            height: String(siteMetadata.ogImage.height),
            alt: siteMetadata.ogImage.alt,
            type: siteMetadata.ogImage.type,
        },
        twitterTitle: title ?? siteMetadata.title,
        twitterDescription: description ?? siteMetadata.description,
        twitterImage: {
            url: siteMetadata.ogImage.url,
            width: String(siteMetadata.ogImage.width),
            height: String(siteMetadata.ogImage.height),
            alt: siteMetadata.ogImage.alt,
            type: siteMetadata.ogImage.type,
        },
    });

    useHead({
        link: [
            {
                rel: 'canonical',
                href: canonicalUrl,
            },
        ],
        meta: [
            {
                name: 'keywords',
                content: (keywords ?? [...siteMetadata.keywords]).join(', '),
            },
        ],
    });
}
