<template>
    <AuthCard>
        <UAlert
            v-if="unverifiedEmail"
            color="neutral"
            variant="subtle"
            description="Verify your email address before signing in. Check your inbox for the link, or request a new one."
            :actions="[
                {
                    label: 'Resend verification email',
                    color: 'neutral',
                    variant: 'outline',
                    loading: isResending,
                    onClick: () => handleResend(unverifiedEmail ?? ''),
                },
            ]"
        />

        <UAuthForm
            title="Sign in"
            description="Enter your email and password to continue."
            :fields="fields"
            :schema="signInSchema"
            :submit="{ label: 'Sign in' }"
            @submit="onSubmit"
        >
            <template #password-hint>
                <ULink
                    to="/forgot-password"
                    class="text-sm text-muted underline underline-offset-4"
                >
                    Forgot your password?
                </ULink>
            </template>

            <template #footer>
                Don't have an account?
                <ULink
                    to="/sign-up"
                    class="font-medium text-highlighted underline underline-offset-4"
                >
                    Sign up
                </ULink>
            </template>
        </UAuthForm>
    </AuthCard>
</template>

<script setup lang="ts">
import type { AuthFormField, FormSubmitEvent } from '@nuxt/ui';
import type { z } from 'zod';

import { signInSchema } from '#shared/schemas/auth';

const toast = useToast();
const unverifiedEmail = ref<string | null>(null);
const { resendVerificationEmail, isResending } = useResendVerificationEmail();

const fields: AuthFormField[] = [
    { name: 'email', type: 'email', label: 'Email', autocomplete: 'email' },
    { name: 'password', type: 'password', label: 'Password', autocomplete: 'current-password' },
    { name: 'rememberMe', type: 'checkbox', label: 'Remember me', defaultValue: true },
];

async function handleResend(email: string) {
    if (await resendVerificationEmail(email)) {
        await navigateTo(verifyEmailPendingHref(email));
    }
}

async function onSubmit({ data: value }: FormSubmitEvent<z.output<typeof signInSchema>>) {
    const { data, error } = await authClient.signIn.email({
        email: value.email,
        password: value.password,
        rememberMe: value.rememberMe,
    });
    if (error) {
        if (error.code === 'EMAIL_NOT_VERIFIED') {
            unverifiedEmail.value = value.email;
            toast.add({ title: 'Verify your email address before signing in.', color: 'error' });
            return;
        }
        unverifiedEmail.value = null;
        toast.add({ title: error.message ?? 'Failed to sign in.', color: 'error' });
        return;
    }
    if (data && 'twoFactorRedirect' in data && data.twoFactorRedirect) {
        return;
    }
    toast.add({ title: 'Signed in.', color: 'success' });
    await navigateTo('/');
}

usePageSeo({
    path: '/sign-in',
    title: 'Sign in',
});
</script>
