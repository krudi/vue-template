import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import importSortPlugin from 'eslint-plugin-simple-import-sort';
import vuePlugin from 'eslint-plugin-vue';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const typeScriptConfig = [
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            parser: tseslint.parser
        },
    },
    {
        files: ['**/*.{js,cjs,mjs}'],
        ...tseslint.configs.disableTypeChecked,
    },
];

const importSortConfig = {
    plugins: {
        'simple-import-sort': importSortPlugin,
    },
    rules: {
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
    },
};

const vueConfig = [
    ...vuePlugin.configs['flat/recommended'],
    {
        rules: {
            'vue/multi-word-component-names': 'off'
        }
    }
];

export default tseslint.config(
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
    {
        languageOptions: {
            globals: {
                ...globals.node
            }
        }
    },
    {
        files: ['**/*.{js,jsx,cjs,mjs,ts,tsx,mts,vue}'],
        rules: {
            'quotes': [
                'error',
                'single'
            ],
            'quote-props': [
                'error',
                'consistent'
            ],
            'import/prefer-default-export': 'off',
            'import/no-anonymous-default-export': 'off'
        }
    },
    eslint.configs.recommended,
    ...typeScriptConfig,
    ...vueConfig,
    prettierConfig,
    importSortConfig
);
