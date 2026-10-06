<template>
    <AuthCard
        v-if="!token"
        title="Invalid link"
        description="This password reset link is invalid or has expired."
    >
        <ULink
            to="/forgot-password"
            class="text-sm text-highlighted underline underline-offset-4"
        >
            Request a new link
        </ULink>
    </AuthCard>

    <AuthCard v-else>
        <UAuthForm
            title="Set a new password"
            description="Enter a new password for your account."
            :fields="fields"
            :schema="resetPasswordSchema"
            :submit="{ label: 'Set new password' }"
            @submit="onSubmit"
        />
    </AuthCard>
</template>

<script setup lang="ts">
import type { AuthFormField, FormSubmitEvent } from '@nuxt/ui';
import type { z } from 'zod';

import { resetPasswordSchema } from '#shared/schemas/auth';

const route = useRoute();
const token = computed(() => (typeof route.query['token'] === 'string' ? route.query['token'] : null));

const toast = useToast();

const fields: AuthFormField[] = [
    { name: 'password', type: 'password', label: 'New password', autocomplete: 'new-password' },
];

async function onSubmit({ data: value }: FormSubmitEvent<z.output<typeof resetPasswordSchema>>) {
    if (!token.value) {
        toast.add({ title: 'The reset token is missing from the link. Request a new one.', color: 'error' });
        return;
    }
    const { error } = await authClient.resetPassword({
        newPassword: value.password,
        token: token.value,
    });
    if (error) {
        toast.add({ title: error.message ?? 'Failed to reset the password.', color: 'error' });
        return;
    }
    toast.add({ title: 'Password has been changed.', color: 'success' });
    await navigateTo('/sign-in');
}

usePageSeo({
    path: '/reset-password',
    title: 'Set a new password',
});

useSeoMeta({
    robots: 'noindex, nofollow',
});
</script>
