import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './app.vue',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
    },
    container: {
      padding: '1rem',
    },
    borderWidth: {
      '1': '1px',
    }
  },
  plugins: [],
} satisfies Config;
