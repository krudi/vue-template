import { auth } from '#server/auth/auth';

export default defineEventHandler((event) => auth.handler(toWebRequest(event)));
