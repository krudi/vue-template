import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import vuePlugin from 'eslint-plugin-vue';
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
    {
        ignores: [
            'dist',
            'dev-dist',
            'public',
            'node_modules',
            '.nuxt',
            '.output'
        ],
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...vuePlugin.configs['flat/recommended'],
    prettierConfig,
    {
        languageOptions: {
            globals: {
                ...globals.node
            }
        }
    },
    {
        files: ['**/*.{js,cjs,mjs,ts,mts,vue}'],
        rules: {
            "indent": ["warn", 4],
            "no-undef": "off",
            "perfectionist/sort-vue-attributes": "off",
            "tailwindcss/no-custom-classname": "off",
            "vue/html-indent": ["warn", 4],
            "vue/multi-word-component-names": "off",
            "vue/v-on-event-hyphenation": "off",
            "@typescript-eslint/no-invalid-void-type": "off",
            "@typescript-eslint/unified-signatures": "off"
        }
    }
)
