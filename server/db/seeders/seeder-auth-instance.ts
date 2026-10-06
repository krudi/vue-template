import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';

import { MIN_PASSWORD_LENGTH } from '#shared/auth/security';

import { env } from '../../env';
import { db } from '../client';
import * as schema from '../schemas';

export const seederAuth = betterAuth({
    secret: env.BETTER_AUTH_SECRET,
    baseURL: env.BETTER_AUTH_URL,
    database: drizzleAdapter(db, { provider: 'pg', schema }),
    emailAndPassword: {
        enabled: true,
        disableSignUp: false,
        minPasswordLength: MIN_PASSWORD_LENGTH,
    },
    databaseHooks: {
        user: {
            create: {
                before: async (user) => ({ data: { ...user, emailVerified: true } }),
            },
        },
    },
});
