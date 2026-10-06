export const EMAIL_VERIFIED_CALLBACK_URL = '/verify-email?status=verified';

export function verifyEmailPendingHref(email: string) {
    return `/verify-email?email=${encodeURIComponent(email)}`;
}

export function useResendVerificationEmail() {
    const toast = useToast();
    const isResending = ref(false);

    async function resendVerificationEmail(email: string): Promise<boolean> {
        isResending.value = true;
        const { error } = await authClient.sendVerificationEmail({
            email,
            callbackURL: EMAIL_VERIFIED_CALLBACK_URL,
        });
        isResending.value = false;

        if (error) {
            toast.add({ title: error.message ?? 'Failed to send the verification email.', color: 'error' });
            return false;
        }

        toast.add({ title: 'If that account still needs verification, a new link is on its way.', color: 'success' });
        return true;
    }

    return { resendVerificationEmail, isResending };
}
