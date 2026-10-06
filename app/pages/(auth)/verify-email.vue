<template>
    <AuthCard
        v-if="state === 'verified'"
        title="Email verified"
        description="Your email address is confirmed and your account is ready."
    >
        <UButton
            label="Continue to your account"
            to="/account"
            block
        />
    </AuthCard>

    <AuthCard
        v-else-if="state === 'email-changed'"
        title="Email address updated"
        description="Your new email address is confirmed. Use it the next time you sign in."
    >
        <UButton
            label="Back to your account"
            to="/account"
            block
        />
    </AuthCard>

    <AuthCard
        v-else
        :title="state === 'invalid-link' ? 'Invalid link' : 'Check your inbox'"
        :description="description"
    >
        <p
            v-if="state === 'pending'"
            class="text-sm text-muted"
        >
            Didn't get the email? Check your spam folder or request a new link.
        </p>

        <UAuthForm
            :fields="fields"
            :schema="resendVerificationSchema"
            :submit="{ label: 'Resend verification email', color: 'neutral', variant: 'outline' }"
            @submit="onSubmit"
        >
            <template #footer>
                <ULink
                    to="/sign-in"
                    class="text-highlighted underline underline-offset-4"
                >
                    Back to sign in
                </ULink>
            </template>
        </UAuthForm>
    </AuthCard>
</template>

<script setup lang="ts">
import type { AuthFormField, FormSubmitEvent } from '@nuxt/ui';
import type { z } from 'zod';

import { resendVerificationSchema } from '#shared/schemas/auth';

const route = useRoute();
const state = computed(() => resolveVerifyEmailState(route.query['status'], route.query['error']));
const email = computed(() => (typeof route.query['email'] === 'string' ? route.query['email'] : ''));

const { resendVerificationEmail } = useResendVerificationEmail();

const description = computed(() => {
    if (state.value === 'invalid-link') {
        return 'This verification link is invalid or has expired. Request a new one below.';
    }
    return email.value
        ? `We sent a verification link to ${email.value}. Open it to activate your account.`
        : 'We sent you a verification link. Open it to activate your account.';
});

const fields = computed<AuthFormField[]>(() => [
    { name: 'email', type: 'email', label: 'Email', autocomplete: 'email', defaultValue: email.value },
]);

async function onSubmit({ data: value }: FormSubmitEvent<z.output<typeof resendVerificationSchema>>) {
    await resendVerificationEmail(value.email);
}

usePageSeo({
    path: '/verify-email',
    title: 'Verify your email',
});

useSeoMeta({
    robots: 'noindex, nofollow',
});
</script>
