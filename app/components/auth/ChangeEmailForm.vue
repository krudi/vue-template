<template>
    <UForm
        ref="form"
        :schema="changeEmailSchema"
        :state="state"
        class="flex flex-col gap-4"
        @submit="onSubmit"
    >
        <UFormField
            name="newEmail"
            label="New email address"
            :description="`Your current address is ${currentEmail}. It stays active until you confirm the new one from the link we email you.`"
        >
            <UInput
                v-model="state.newEmail"
                type="email"
                autocomplete="email"
                class="w-full"
            />
        </UFormField>

        <UButton
            type="submit"
            label="Change email"
            class="w-fit"
            loading-auto
        />
    </UForm>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui';
import type { z } from 'zod';

import { changeEmailSchema } from '#shared/schemas/auth';

const EMAIL_CHANGED_CALLBACK_URL = '/verify-email?status=email-changed';

defineProps<{
    currentEmail: string;
}>();

const toast = useToast();
const form = useTemplateRef('form');
const state = reactive({ newEmail: '' });

async function onSubmit({ data: value }: FormSubmitEvent<z.output<typeof changeEmailSchema>>) {
    const { error } = await authClient.changeEmail({
        newEmail: value.newEmail,
        callbackURL: EMAIL_CHANGED_CALLBACK_URL,
    });
    if (error) {
        toast.add({ title: error.message ?? 'Failed to change the email address.', color: 'error' });
        return;
    }
    toast.add({ title: `Check ${value.newEmail} for a link to confirm the change.`, color: 'success' });
    state.newEmail = '';
    form.value?.clear();
}
</script>
