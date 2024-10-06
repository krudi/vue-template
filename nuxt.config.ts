import { defineNuxtConfig } from 'nuxt/config';
import { resolve } from 'path';

export default defineNuxtConfig({
    devtools: {
        enabled: true
    },
    imports: {
        autoImport: true
    },
    typescript: {
        typeCheck: true
    },
    modules: ['@nuxt/eslint', '@nuxt/devtools', '@vite-pwa/nuxt'],
    css: ['~/assets/styles/styles.css'],
    app: {
        head: {
            title: 'vue-boilerplate',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1, maximum-scale=3',
            meta: [
                {
                    name: 'application-name',
                    content: 'vue-template'
                },
                {
                    name: 'description',
                    content:
                        'A template with Nuxt3 built on Vue3 with focus on performance and best practices.'
                },
                {
                    name: 'keywords',
                    content: 'template'
                },
                {
                    name: 'referrer',
                    content: 'origin-when-cross-origin'
                },
                {
                    name: 'color-scheme',
                    content: 'dark light'
                },
                {
                    name: 'theme-color',
                    media: '(prefers-color-scheme: light)',
                    content: 'white'
                },
                {
                    name: 'theme-color',
                    media: '(prefers-color-scheme: dark)',
                    content: 'black'
                },
                {
                    property: 'og:title',
                    content: 'vue-template'
                },
                {
                    property: 'og:description',
                    content:
                        'A template with Nuxt3 built on Vue3 with focus on performance and best practices.'
                },
                {
                    property: 'og:url',
                    content: 'http://127.0.0.1:3000'
                },
                {
                    property: 'og:site_name',
                    content: 'vue-template'
                },
                {
                    property: 'og:locale',
                    content: 'en-US'
                },
                {
                    property: 'og:image:url',
                    content: 'https://example.com/meta-tags/page-view.webp'
                },
                {
                    property: 'og:image:width',
                    content: '1800'
                },
                {
                    property: 'og:image:height',
                    content: '1600'
                },
                {
                    property: 'og:image:alt',
                    content: 'Alternative description'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    name: 'twitter:site',
                    content: '@twitter'
                },
                {
                    name: 'twitter:creator',
                    content: '@twitter'
                },
                {
                    name: 'twitter:creator:id',
                    content: '1467726470533754880'
                },
                {
                    name: 'twitter:title',
                    content: 'vue-template'
                },
                {
                    name: 'twitter:description',
                    content:
                        'A template with Nuxt3 built on Vue3 with focus on performance and best practices.'
                },
                {
                    name: 'twitter:card',
                    content: 'app'
                },
                {
                    name: 'twitter:image',
                    content: 'https://example.com/meta-tags/page-view.webp'
                },
                {
                    name: 'twitter:image:alt',
                    content: 'Alternative description'
                },
                {
                    name: 'robots',
                    content: 'index,follow'
                },
                {
                    name: 'googlebot',
                    content:
                        'index, nofollow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1'
                }
            ],
            link: [
                {
                    rel: 'shortcut icon',
                    href: '/favicons/nuxt3-favicon.svg',
                    type: 'svg+xml'
                },
                {
                    rel: 'icon',
                    href: '/favicons/nuxt3-favicon.svg',
                    type: 'svg+xml'
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/favicons/nuxt3-apple-touch.svg'
                }
            ]
        }
    },
    vite: {
        resolve: {
            alias: [
                {
                    find: '~',
                    replacement: resolve(__dirname)
                }
            ]
        }
    },
    eslint: {
        checker: true
    },
    pwa: {
        registerType: 'autoUpdate',
        devOptions: {
            enabled: true,
            suppressWarnings: true,
            navigateFallback: '/',
            navigateFallbackAllowlist: [/^\/$/],
            type: 'module'
        },
        manifest: {
            name: 'nuxt3-template',
            short_name: 'nuxt3-template',
            description: 'Description for the webmanifest file.',
            theme_color: '#FFFFFF',
            background_color: '#AFCC1E',
            display: 'standalone',
            start_url: '/',
            lang: 'en-EN',
            orientation: 'any',
            prefer_related_applications: true,
            categories: ['template'],
            icons: [
                {
                    src: 'favicons/nuxt3-16x16.svg',
                    type: 'image/svg+xml',
                    sizes: '16x16',
                    purpose: 'maskable'
                },
                {
                    src: 'favicons/nuxt3-32x32.svg',
                    type: 'image/svg+xml',
                    sizes: '32x32',
                    purpose: 'maskable'
                },
                {
                    src: 'favicons/nuxt3-48x48.svg',
                    type: 'image/svg+xml',
                    sizes: '48x48',
                    purpose: 'maskable'
                },
                {
                    src: 'favicons/nuxt3-144x144.svg',
                    type: 'image/svg+xml',
                    sizes: '144x144',
                    purpose: 'any'
                },
                {
                    src: 'favicons/nuxt3-192x192.svg',
                    type: 'image/svg+xml',
                    sizes: '192x192',
                    purpose: 'maskable'
                },
                {
                    src: 'favicons/nuxt3-512x512.svg',
                    type: 'image/svg+xml',
                    sizes: '512x512',
                    purpose: 'maskable'
                }
            ],
            screenshots: [
                {
                    src: 'manifest/desktop-home-screen-view.webp',
                    sizes: '1280x720',
                    type: 'image/webp',
                    form_factor: 'wide',
                    label: 'Homescreen of the app in the desktop view.'
                },
                {
                    src: 'manifest/mobile-home-screen-view.webp',
                    sizes: '540x720',
                    type: 'image/webp',
                    form_factor: 'narrow',
                    label: 'Homescreen of the app in the mobile view.'
                }
            ]
        },
        workbox: {
            globPatterns: ['**/*.{js,css,html,png,svg,ico}']
        },
        injectManifest: {
            globPatterns: ['**/*.{js,css,html,png,svg,ico}']
        }
    },
    postcss: {
        plugins: {
            'postcss-import': {},
            'postcss-nested': {},
            autoprefixer: {}
        }
    }
});
