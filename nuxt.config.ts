import { defineNuxtConfig } from 'nuxt/config'
import path from 'path'

export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  ssr: true,
  imports: {
    autoImport: true,
  },
  typescript: {
    strict: false,
    typeCheck: true
  },
  modules: [
    '@nuxt/devtools'
  ],
  css: ['~/assets/styles/styles.css'],
  app: {
    head: {
      title: 'vue-boilerplate',
      charset: 'utf-8',
      meta: [
        {
          name: 'viewport',
          content: 'width: device-width, initial-scale: 1'
        },
        {
          name: 'application-name',
          content: 'vue-template'
        },
        {
          name: 'generator',
          content: 'Nuxt3'
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
          content: 'light'
        },
        {
          name: 'creator',
          content: 'Creator'
        },
        {
          name: 'publisher',
          content: 'Publisher'
        },
        {
          name: 'format-detection',
          content: 'telephone: no, address: no, email: no'
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
          name: 'author',
          content: 'Author'
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
          name: 'twitter:site:id',
          content: '1467726470533754880'
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
          property: 'twitter:image:width',
          content: '1800'
        },
        {
          property: 'twitter:image:height',
          content: '1600'
        },
        {
          name: 'twitter:image:alt',
          content: 'Alternative description'
        },
        {
          name: 'robots',
          content: 'noindex, follow, nocache'
        },
        {
          name: 'googlebot',
          content:
            'index, nofollow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'http://127.0.0.1:3000'
        },
        {
          rel: 'alternate',
          hreflang: 'en-US',
          href: 'http://127.0.0.1:3000'
        },
        {
          rel: 'alternate',
          media: 'only screen and (max-width: 600px)',
          href: 'https://example.com/meta-tags/page-view.webp'
        },
        {
          rel: 'author',
          href: 'https://example.com'
        },
        {
          rel: 'manifest',
          href: '/manifest.webmanifest'
        },
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
          find: '@',
          replacement: path.resolve(__dirname, './')
        },
        {
          find: '~',
          replacement: path.resolve(__dirname, './')
        }
      ]
    },
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      'postcss-nested': {},
      'postcss-custom-media': {},
      'autoprefixer': {},
    },
  },
})
