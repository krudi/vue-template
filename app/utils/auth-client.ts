import { twoFactorClient } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/vue';

export const authClient = createAuthClient({
    plugins: [
        twoFactorClient({
            onTwoFactorRedirect() {
                void navigateTo('/two-factor');
            },
        }),
    ],
});
