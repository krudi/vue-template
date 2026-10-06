import { auth } from '#server/auth/auth';

export default defineEventHandler(async (event) => {
    const session = await requireSession(event.headers);
    const sessions = await auth.api.listSessions({ headers: event.headers });

    return { session, sessions };
});
