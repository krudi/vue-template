import { resolve } from 'path';
import type { UserConfig } from 'vite';

export default {
    resolve: {
        alias: [
            {
                find: '~',
                replacement: resolve(__dirname, './')
            }
        ]
    }
} satisfies UserConfig;
