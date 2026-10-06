<template>
    <div class="flex items-center justify-between gap-4">
        <p class="text-sm text-muted">
            Permanently delete your account, sessions and two-factor settings. This cannot be undone.
        </p>

        <USlideover
            v-model:open="open"
            side="bottom"
            title="Delete your account?"
            description="This permanently deletes your account and signs you out everywhere. Enter your password to confirm."
            :ui="{ content: 'mx-auto w-full max-w-md' }"
        >
            <UButton
                label="Delete account"
                color="error"
                size="sm"
            />

            <template #body>
                <UForm
                    :schema="deleteAccountSchema"
                    :state="state"
                    class="flex flex-col gap-4"
                    @submit="onSubmit"
                >
                    <UFormField
                        name="password"
                        label="Password"
                    >
                        <UInput
                            v-model="state.password"
                            type="password"
                            autocomplete="current-password"
                            class="w-full"
                        />
                    </UFormField>

                    <div class="flex justify-end gap-2">
                        <UButton
                            label="Cancel"
                            color="neutral"
                            variant="ghost"
                            @click="open = false"
                        />
                        <UButton
                            type="submit"
                            label="Delete account permanently"
                            color="error"
                            loading-auto
                        />
                    </div>
                </UForm>
            </template>
        </USlideover>
    </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui';
import type { z } from 'zod';

import { deleteAccountSchema } from '#shared/schemas/auth';

const toast = useToast();
const open = ref(false);
const state = reactive({ password: '' });

watch(open, (isOpen) => {
    if (!isOpen) {
        state.password = '';
    }
});

async function onSubmit({ data: value }: FormSubmitEvent<z.output<typeof deleteAccountSchema>>) {
    const { error } = await authClient.deleteUser({ password: value.password });
    if (error) {
        toast.add({ title: error.message ?? 'Failed to delete the account.', color: 'error' });
        state.password = '';
        return;
    }
    open.value = false;
    toast.add({ title: 'Your account has been deleted.', color: 'success' });
    await navigateTo('/');
}
</script>
