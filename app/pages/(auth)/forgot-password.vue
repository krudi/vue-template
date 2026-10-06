<template>
    <AuthCard
        v-if="sent"
        title="Check your email"
        description="If that email address exists in our records, we've sent a password reset link to it."
    >
        <ULink
            to="/sign-in"
            class="text-sm text-highlighted underline underline-offset-4"
        >
            Back to sign in
        </ULink>
    </AuthCard>

    <AuthCard v-else>
        <UAuthForm
            title="Forgot your password?"
            description="Enter the email address we should send the password reset link to."
            :fields="fields"
            :schema="forgotPasswordSchema"
            :submit="{ label: 'Send reset link' }"
            @submit="onSubmit"
        />
    </AuthCard>
</template>

<script setup lang="ts">
import type { AuthFormField, FormSubmitEvent } from '@nuxt/ui';
import type { z } from 'zod';

import { forgotPasswordSchema } from '#shared/schemas/auth';

const toast = useToast();
const sent = ref(false);

const fields: AuthFormField[] = [{ name: 'email', type: 'email', label: 'Email', autocomplete: 'email' }];

async function onSubmit({ data: value }: FormSubmitEvent<z.output<typeof forgotPasswordSchema>>) {
    const { error } = await authClient.requestPasswordReset({
        email: value.email,
        redirectTo: '/reset-password',
    });
    if (error) {
        toast.add({ title: error.message ?? 'Failed to send the reset link.', color: 'error' });
        return;
    }
    sent.value = true;
}

usePageSeo({
    path: '/forgot-password',
    title: 'Forgot your password?',
});

useSeoMeta({
    robots: 'noindex, nofollow',
});
</script>
