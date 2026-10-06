import { getSessionCookie } from 'better-auth/cookies';

export default defineNuxtRouteMiddleware(() => {
    if (import.meta.server && !getSessionCookie(new Headers(useRequestHeaders(['cookie'])))) {
        return navigateTo('/sign-in');
    }

    return undefined;
});
