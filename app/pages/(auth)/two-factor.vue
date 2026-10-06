<template>
    <AuthCard>
        <UAuthForm
            v-if="useBackupCode"
            title="Two-factor authentication"
            description="Enter one of your backup recovery codes."
            :fields="backupFields"
            :schema="backupCodeSchema"
            :submit="{ label: 'Verify' }"
            @submit="onBackupSubmit"
        />

        <UAuthForm
            v-else
            title="Two-factor authentication"
            description="Enter the 6-digit code from your authenticator app."
            :fields="totpFields"
            :schema="twoFactorPinSchema"
            :submit="{ label: 'Verify' }"
            @submit="onTotpSubmit"
        />

        <UButton
            color="neutral"
            variant="ghost"
            block
            class="whitespace-normal"
            :label="
                useBackupCode
                    ? 'Use the code from your authenticator app'
                    : 'Don\'t have access to the app? Use a backup code'
            "
            @click="useBackupCode = !useBackupCode"
        />
    </AuthCard>
</template>

<script setup lang="ts">
import type { AuthFormField, FormSubmitEvent } from '@nuxt/ui';
import type { z } from 'zod';

import { backupCodeSchema, twoFactorPinSchema } from '#shared/schemas/auth';

const toast = useToast();
const useBackupCode = ref(false);

const totpFields: AuthFormField[] = [{ name: 'code', type: 'otp', label: 'Code', length: 6 }];
const backupFields: AuthFormField[] = [
    { name: 'code', type: 'text', label: 'Backup code', autocomplete: 'one-time-code' },
];

async function onTotpSubmit({ data: value }: FormSubmitEvent<z.output<typeof twoFactorPinSchema>>) {
    const { error } = await authClient.twoFactor.verifyTotp({ code: value.code });
    if (error) {
        toast.add({ title: error.message ?? 'Invalid code.', color: 'error' });
        return;
    }
    toast.add({ title: 'Signed in.', color: 'success' });
    await navigateTo('/');
}

async function onBackupSubmit({ data: value }: FormSubmitEvent<z.output<typeof backupCodeSchema>>) {
    const { error } = await authClient.twoFactor.verifyBackupCode({ code: value.code });
    if (error) {
        toast.add({ title: error.message ?? 'Invalid backup code.', color: 'error' });
        return;
    }
    toast.add({ title: "Signed in. This backup code has been used and won't work again.", color: 'success' });
    await navigateTo('/');
}

usePageSeo({
    path: '/two-factor',
    title: 'Two-factor authentication',
});

useSeoMeta({
    robots: 'noindex, nofollow',
});
</script>
