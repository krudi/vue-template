<template>
    <AuthCard>
        <UAuthForm
            title="Create an account"
            description="Enter your details to get started."
            :fields="fields"
            :schema="signUpSchema"
            :submit="{ label: 'Create account' }"
            @submit="onSubmit"
        >
            <template #footer>
                Already have an account?
                <ULink
                    to="/sign-in"
                    class="font-medium text-highlighted underline underline-offset-4"
                >
                    Sign in
                </ULink>
            </template>
        </UAuthForm>
    </AuthCard>
</template>

<script setup lang="ts">
import type { AuthFormField, FormSubmitEvent } from '@nuxt/ui';
import type { z } from 'zod';

import { signUpSchema } from '#shared/schemas/auth';

const toast = useToast();

const fields: AuthFormField[] = [
    { name: 'name', type: 'text', label: 'Name', autocomplete: 'name' },
    { name: 'email', type: 'email', label: 'Email', autocomplete: 'email' },
    { name: 'password', type: 'password', label: 'Password', autocomplete: 'new-password' },
    { name: 'confirmPassword', type: 'password', label: 'Confirm password', autocomplete: 'new-password' },
];

async function onSubmit({ data: value }: FormSubmitEvent<z.output<typeof signUpSchema>>) {
    const { error } = await authClient.signUp.email({
        name: value.name,
        email: value.email,
        password: value.password,
        callbackURL: EMAIL_VERIFIED_CALLBACK_URL,
    });
    if (error) {
        toast.add({ title: error.message ?? 'Failed to create the account.', color: 'error' });
        return;
    }
    await navigateTo(verifyEmailPendingHref(value.email));
}

useSeoMeta({
    title: 'Create an account',
});
</script>
