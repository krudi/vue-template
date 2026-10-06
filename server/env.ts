import { createEnv } from '@t3-oss/env-nuxt';
import { z } from 'zod';

export const env = createEnv({
    server: {
        DATABASE_URL: z.url(),
        BETTER_AUTH_SECRET: z.string().min(32),
        BETTER_AUTH_URL: z.url(),
        BETTER_AUTH_TRUSTED_ORIGINS: z.string().optional(),
        SMTP_HOST: z.string().min(1).optional(),
        SMTP_PORT: z.coerce.number().int().positive().default(587),
        SMTP_USER: z.string().min(1).optional(),
        SMTP_PASSWORD: z.string().min(1).optional(),
        SMTP_FROM: z.email().optional(),
    },
    client: {
        NUXT_PUBLIC_SITE_URL: z.url().default('http://localhost:3000'),
        NUXT_PUBLIC_GOOGLE_SITE_VERIFICATION: z.string().optional(),
    },
    emptyStringAsUndefined: true,
});
