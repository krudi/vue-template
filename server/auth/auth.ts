import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { twoFactor } from 'better-auth/plugins';

import {
    MIN_PASSWORD_LENGTH,
    RATE_LIMIT_MAX,
    RATE_LIMIT_RULES,
    RATE_LIMIT_WINDOW_SECONDS,
    secureCookiesFor,
    trustedOrigins,
} from '#shared/auth/security';

import { db } from '../db/client';
import * as schema from '../db/schemas';
import { env } from '../env';
import { sendResetPasswordEmail, sendVerificationEmail, sendWelcomeEmail } from './emails';
import { securityNotificationsHook } from './hooks/security-notifications';
import { rejectInvalidAvatar } from './utils/avatar';
import { sendNotificationSafely } from './utils/notify';
import { isEmailChangeVerification } from './utils/verification-token';

export const auth = betterAuth({
    secret: env.BETTER_AUTH_SECRET,
    baseURL: env.BETTER_AUTH_URL,
    database: drizzleAdapter(db, { provider: 'pg', schema }),
    trustedOrigins: trustedOrigins(env.BETTER_AUTH_URL, env.BETTER_AUTH_TRUSTED_ORIGINS),
    rateLimit: {
        enabled: true,
        storage: 'database',
        window: RATE_LIMIT_WINDOW_SECONDS,
        max: RATE_LIMIT_MAX,
        customRules: RATE_LIMIT_RULES,
    },
    advanced: {
        useSecureCookies: secureCookiesFor(env.BETTER_AUTH_URL),
    },
    emailAndPassword: {
        enabled: true,
        minPasswordLength: MIN_PASSWORD_LENGTH,
        revokeSessionsOnPasswordReset: true,
        requireEmailVerification: true,
        sendResetPassword: async ({ user, url }) => {
            await sendResetPasswordEmail(user.email, url);
        },
    },
    emailVerification: {
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
        sendVerificationEmail: async ({ user, url }) => {
            await sendVerificationEmail(user.email, url);
        },
        afterEmailVerification: async (user, request) => {
            if (await isEmailChangeVerification(request, env.BETTER_AUTH_SECRET)) {
                return;
            }
            await sendNotificationSafely('welcome email', () =>
                sendWelcomeEmail(user.email, user.name, env.NUXT_PUBLIC_SITE_URL)
            );
        },
    },
    user: {
        changeEmail: {
            enabled: true,
        },
        deleteUser: {
            enabled: true,
        },
    },
    databaseHooks: {
        user: {
            create: {
                before: async (data) => rejectInvalidAvatar(data),
            },
            update: {
                before: async (data) => rejectInvalidAvatar(data),
            },
        },
    },
    hooks: {
        after: securityNotificationsHook,
    },
    plugins: [twoFactor()],
});
