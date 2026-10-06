export function useSignOut() {
    const toast = useToast();
    const isSigningOut = ref(false);

    async function signOut() {
        isSigningOut.value = true;
        const { error } = await authClient.signOut();
        isSigningOut.value = false;

        if (error) {
            toast.add({ title: error.message ?? 'Failed to sign out.', color: 'error' });
            return;
        }

        toast.add({ title: 'Signed out.', color: 'success' });
        await navigateTo('/sign-in');
    }

    return { signOut, isSigningOut };
}
