import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    modules: ['@nuxt/ui', '@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxt/image', '@nuxt/hints'],
    devtools: {
        enabled: true,
    },
    css: ['~/assets/css/main.css'],
    ui: {
        fonts: false,
    },
    icon: {
        serverBundle: {
            collections: ['lucide'],
        },
        clientBundle: {
            scan: true,
        },
        fallbackToApi: false,
    },
    runtimeConfig: {
        public: {
            siteUrl: 'http://localhost:3000',
            googleSiteVerification: '',
        },
    },
    routeRules: {
        '/sign-in': { robots: false },
        '/sign-up': { robots: false },
        '/forgot-password': { robots: false },
        '/reset-password': { robots: false },
        '/two-factor': { robots: false },
        '/verify-email': { robots: false },
        '/account': { robots: false },
    },
    $production: {
        routeRules: {
            '/**': {
                headers: {
                    'Content-Security-Policy': [
                        "default-src 'self'",
                        "script-src 'self' 'unsafe-inline'",
                        "style-src 'self' 'unsafe-inline'",
                        "img-src 'self' data: blob:",
                        "font-src 'self'",
                        "connect-src 'self'",
                        "media-src 'self'",
                        "object-src 'none'",
                        "frame-src 'none'",
                        "worker-src 'self' blob:",
                        "manifest-src 'self'",
                        "base-uri 'self'",
                        "form-action 'self'",
                        "frame-ancestors 'none'",
                        ...((process.env['BETTER_AUTH_URL'] ?? '').startsWith('https://')
                            ? ['upgrade-insecure-requests']
                            : []),
                    ].join('; '),
                    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
                    'X-Content-Type-Options': 'nosniff',
                    'Referrer-Policy': 'strict-origin-when-cross-origin',
                    'X-Frame-Options': 'DENY',
                    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), browsing-topics=()',
                },
            },
        },
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
                dir: 'ltr',
            },
            link: [
                {
                    rel: 'icon',
                    href: '/favicon.ico',
                    sizes: 'any',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/favicon-32x32.png',
                },
                {
                    rel: 'apple-touch-icon',
                    href: '/apple-touch-icon.png',
                },
                {
                    rel: 'manifest',
                    href: '/manifest.webmanifest',
                },
            ],
        },
    },
    typescript: {
        tsConfig: {
            compilerOptions: {
                exactOptionalPropertyTypes: true,
                noImplicitReturns: true,
                noImplicitOverride: true,
                noPropertyAccessFromIndexSignature: true,
                noUncheckedSideEffectImports: true,
                verbatimModuleSyntax: true,
                noFallthroughCasesInSwitch: true,
            },
        },
        sharedTsConfig: {
            compilerOptions: {
                exactOptionalPropertyTypes: true,
                noImplicitReturns: true,
                noImplicitOverride: true,
                noPropertyAccessFromIndexSignature: true,
                noUncheckedSideEffectImports: true,
                verbatimModuleSyntax: true,
                noFallthroughCasesInSwitch: true,
            },
        },
        nodeTsConfig: {
            compilerOptions: {
                exactOptionalPropertyTypes: true,
                noImplicitReturns: true,
                noImplicitOverride: true,
                noPropertyAccessFromIndexSignature: true,
                noUncheckedSideEffectImports: true,
                verbatimModuleSyntax: true,
                noFallthroughCasesInSwitch: true,
            },
        },
    },
    nitro: {
        typescript: {
            tsConfig: {
                compilerOptions: {
                    exactOptionalPropertyTypes: true,
                    noImplicitReturns: true,
                    noImplicitOverride: true,
                    noPropertyAccessFromIndexSignature: true,
                    noUncheckedSideEffectImports: true,
                    verbatimModuleSyntax: true,
                    noFallthroughCasesInSwitch: true,
                },
            },
        },
    },
});
