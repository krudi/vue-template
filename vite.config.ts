import { resolve } from 'path';
import type { UserConfig } from 'vite'

export default defineConfig({
    resolve: {
        alias: [
            {
                find: '~',
                replacement: resolve(__dirname, './')
            }
        ]
    }
});
