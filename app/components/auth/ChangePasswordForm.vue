<template>
    <UForm
        ref="form"
        :schema="changePasswordSchema"
        :state="state"
        class="flex flex-col gap-4"
        @submit="onSubmit"
    >
        <UFormField
            name="currentPassword"
            label="Current password"
        >
            <UInput
                v-model="state.currentPassword"
                type="password"
                autocomplete="current-password"
                class="w-full"
            />
        </UFormField>

        <UFormField
            name="newPassword"
            label="New password"
        >
            <UInput
                v-model="state.newPassword"
                type="password"
                autocomplete="new-password"
                class="w-full"
            />
        </UFormField>

        <UFormField
            name="confirmPassword"
            label="Confirm new password"
        >
            <UInput
                v-model="state.confirmPassword"
                type="password"
                autocomplete="new-password"
                class="w-full"
            />
        </UFormField>

        <UFormField name="revokeOtherSessions">
            <UCheckbox
                v-model="state.revokeOtherSessions"
                label="Sign out of other devices"
            />
        </UFormField>

        <UButton
            type="submit"
            label="Change password"
            class="w-fit"
            loading-auto
        />
    </UForm>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui';
import type { z } from 'zod';

import { changePasswordSchema } from '#shared/schemas/auth';

const toast = useToast();
const form = useTemplateRef('form');
const state = reactive({ currentPassword: '', newPassword: '', confirmPassword: '', revokeOtherSessions: false });

async function onSubmit({ data: value }: FormSubmitEvent<z.output<typeof changePasswordSchema>>) {
    const { error } = await authClient.changePassword({
        currentPassword: value.currentPassword,
        newPassword: value.newPassword,
        revokeOtherSessions: value.revokeOtherSessions,
    });
    if (error) {
        toast.add({ title: error.message ?? 'Failed to change the password.', color: 'error' });
        return;
    }
    toast.add({ title: 'Password changed.', color: 'success' });
    Object.assign(state, { currentPassword: '', newPassword: '', confirmPassword: '', revokeOtherSessions: false });
    form.value?.clear();
    if (value.revokeOtherSessions) {
        await refreshNuxtData();
    }
}
</script>
