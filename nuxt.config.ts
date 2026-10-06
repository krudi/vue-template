import { fileURLToPath } from 'node:url';

import tailwindcss from '@tailwindcss/vite';
import { defineNuxtConfig } from 'nuxt/config';

import { siteMetadata } from './app/utils/seo';

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    modules: ['@nuxtjs/color-mode'],
    devtools: {
        enabled: true,
    },
    css: ['~/assets/css/main.css'],
    colorMode: {
        preference: 'system',
        fallback: 'light',
        classSuffix: '',
    },
    components: [
        {
            path: '~/components',
            ignore: ['ui/**'],
        },
    ],
    vite: {
        plugins: [tailwindcss()],
    },
    runtimeConfig: {
        public: {
            siteUrl: process.env['NUXT_PUBLIC_SITE_URL'] ?? 'http://localhost:3000',
            googleSiteVerification: process.env['GOOGLE_SITE_VERIFICATION'] ?? '',
        },
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
    alias: {
        '@': fileURLToPath(new URL('./app', import.meta.url)),
        '@composables': fileURLToPath(new URL('./app/composables', import.meta.url)),
        '@components': fileURLToPath(new URL('./app/components', import.meta.url)),
        '@layouts': fileURLToPath(new URL('./app/layouts', import.meta.url)),
        '@middleware': fileURLToPath(new URL('./app/middleware', import.meta.url)),
        '@pages': fileURLToPath(new URL('./app/pages', import.meta.url)),
        '@plugins': fileURLToPath(new URL('./app/plugins', import.meta.url)),
        '@server': fileURLToPath(new URL('./server', import.meta.url)),
        '@assets': fileURLToPath(new URL('./app/assets', import.meta.url)),
        '@utils': fileURLToPath(new URL('./app/utils', import.meta.url)),
    },
    app: {
        head: {
            htmlAttrs: {
                lang: siteMetadata.locale.replace('_', '-'),
                dir: 'ltr',
            },
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
            ],
        },
    },
    typescript: {
        tsConfig: {
            compilerOptions: {
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
