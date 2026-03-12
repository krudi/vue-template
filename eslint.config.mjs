import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
    files: ['**/*.vue'],
    rules: {
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                    normal: 'never',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
        'vue/multi-word-component-names': 'off',
    },
});
