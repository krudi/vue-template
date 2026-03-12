import { useHead, useSeoMeta } from '#imports';
import { useSiteUrl } from '@composables/use-site-url';
import { buildSiteMetadata } from '@utils/seo';

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
        keywords: (keywords ?? [...siteMetadata.keywords]).join(', '),
        ogTitle: title ?? siteMetadata.title,
        ogDescription: description ?? siteMetadata.description,
        ogUrl: canonicalUrl,
        ogSiteName: siteMetadata.name,
        ogLocale: 'en-US',
        ogImage: siteMetadata.ogImage.url,
        twitterTitle: title ?? siteMetadata.title,
        twitterDescription: description ?? siteMetadata.description,
        twitterImage: siteMetadata.ogImage.url,
    });

    useHead({
        link: [
            {
                rel: 'canonical',
                href: canonicalUrl,
            },
        ],
    });
}
