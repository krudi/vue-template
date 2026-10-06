export type VerifyEmailState = 'pending' | 'verified' | 'email-changed' | 'invalid-link';

export function resolveVerifyEmailState(status: unknown, error: unknown): VerifyEmailState {
    if (error) {
        return 'invalid-link';
    }
    if (status === 'verified' || status === 'email-changed') {
        return status;
    }
    return 'pending';
}
