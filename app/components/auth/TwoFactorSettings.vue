<template>
    <UForm
        v-if="step === 'enable-password' || step === 'disable-password' || step === 'regenerate-password'"
        :schema="twoFactorPasswordSchema"
        :state="passwordState"
        class="flex flex-col gap-4"
        @submit="onPasswordSubmit"
    >
        <UFormField
            name="password"
            label="Confirm with your password"
        >
            <UInput
                v-model="passwordState.password"
                type="password"
                autocomplete="current-password"
                class="w-full"
            />
        </UFormField>
        <div class="flex gap-2">
            <UButton
                type="submit"
                :label="passwordSubmitLabel"
                :color="step === 'disable-password' ? 'error' : 'primary'"
                loading-auto
            />
            <UButton
                label="Cancel"
                color="neutral"
                variant="ghost"
                @click="resetTransientState"
            />
        </div>
    </UForm>

    <div
        v-else-if="step === 'enable-verify'"
        class="flex flex-col gap-4"
    >
        <div class="flex items-center justify-center rounded-lg bg-white p-4">
            <QrcodeVue
                :value="totpUri"
                :size="180"
                render-as="svg"
            />
        </div>
        <p class="text-sm text-muted">Scan the code with your authenticator app and enter the generated code.</p>
        <UForm
            :schema="twoFactorPinSchema"
            :state="verifyState"
            class="flex flex-col gap-4"
            @submit="onVerifySubmit"
        >
            <UFormField
                name="code"
                label="Code"
            >
                <UPinInput
                    v-model="verifyState.code"
                    :length="6"
                    otp
                />
            </UFormField>
            <div class="flex gap-2">
                <UButton
                    type="submit"
                    label="Enable 2FA"
                    loading-auto
                />
                <UButton
                    label="Cancel"
                    color="neutral"
                    variant="ghost"
                    @click="resetTransientState"
                />
            </div>
        </UForm>
    </div>

    <div
        v-else-if="step === 'enable-backup-codes' || step === 'regenerate-backup-codes'"
        class="flex flex-col gap-4"
    >
        <p class="text-sm text-muted">
            Save these codes somewhere safe. Each one can be used only once to sign in if you lose access to your
            authenticator app.
            <template v-if="step === 'regenerate-backup-codes'">Your previous backup codes no longer work.</template>
        </p>
        <ul class="grid grid-cols-2 gap-2 rounded-lg border border-default bg-elevated/50 p-4 font-mono text-sm">
            <li
                v-for="code in backupCodes"
                :key="code"
            >
                {{ code }}
            </li>
        </ul>
        <UButton
            label="I've saved the codes, finish"
            class="w-fit"
            @click="finishBackupCodes"
        />
    </div>

    <div
        v-else
        class="flex items-center justify-between gap-4"
    >
        <p class="text-sm text-muted">
            {{ isEnabled ? 'Two-factor authentication is enabled.' : 'Two-factor authentication is disabled.' }}
        </p>
        <div class="flex gap-2">
            <template v-if="isEnabled">
                <UButton
                    label="New backup codes"
                    color="neutral"
                    variant="outline"
                    size="sm"
                    @click="step = 'regenerate-password'"
                />
                <UButton
                    label="Disable"
                    color="error"
                    size="sm"
                    @click="step = 'disable-password'"
                />
            </template>
            <UButton
                v-else
                label="Enable"
                size="sm"
                @click="step = 'enable-password'"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui';
import QrcodeVue from 'qrcode.vue';
import type { z } from 'zod';

import { twoFactorPasswordSchema, twoFactorPinSchema } from '#shared/schemas/auth';

type Step =
    | 'status'
    | 'enable-password'
    | 'enable-verify'
    | 'enable-backup-codes'
    | 'disable-password'
    | 'regenerate-password'
    | 'regenerate-backup-codes';

const props = defineProps<{
    enabled: boolean;
}>();

const toast = useToast();
const isEnabled = ref(props.enabled);
const step = ref<Step>('status');
const totpUri = ref('');
const backupCodes = ref<string[]>([]);
const passwordState = reactive({ password: '' });
const verifyState = reactive<{ code: string[] }>({ code: [] });

const passwordSubmitLabel = computed(() => {
    if (step.value === 'disable-password') {
        return 'Disable 2FA';
    }
    return step.value === 'regenerate-password' ? 'Generate new codes' : 'Next';
});

function resetTransientState() {
    step.value = 'status';
    totpUri.value = '';
    backupCodes.value = [];
    passwordState.password = '';
    verifyState.code = [];
}

async function enableTwoFactor(password: string) {
    const { data, error } = await authClient.twoFactor.enable({ password });
    if (error) {
        toast.add({ title: error.message ?? 'Failed to start enabling 2FA.', color: 'error' });
        return;
    }
    if (data.method !== 'totp') {
        toast.add({
            title: 'This app only supports verification through an authenticator app (TOTP).',
            color: 'error',
        });
        return;
    }
    totpUri.value = data.totpURI;
    backupCodes.value = data.backupCodes ?? [];
    passwordState.password = '';
    step.value = 'enable-verify';
}

async function disableTwoFactor(password: string) {
    const { error } = await authClient.twoFactor.disable({ password });
    if (error) {
        toast.add({ title: error.message ?? 'Failed to disable 2FA.', color: 'error' });
        return;
    }
    toast.add({ title: '2FA disabled.', color: 'success' });
    isEnabled.value = false;
    resetTransientState();
}

async function regenerateBackupCodes(password: string) {
    const { data, error } = await authClient.twoFactor.generateBackupCodes({ password });
    if (error) {
        toast.add({ title: error.message ?? 'Failed to generate new backup codes.', color: 'error' });
        return;
    }
    passwordState.password = '';
    backupCodes.value = data.backupCodes ?? [];
    step.value = 'regenerate-backup-codes';
}

async function onPasswordSubmit({ data: value }: FormSubmitEvent<z.output<typeof twoFactorPasswordSchema>>) {
    if (step.value === 'disable-password') {
        await disableTwoFactor(value.password);
        return;
    }
    if (step.value === 'regenerate-password') {
        await regenerateBackupCodes(value.password);
        return;
    }
    await enableTwoFactor(value.password);
}

async function onVerifySubmit({ data: value }: FormSubmitEvent<z.output<typeof twoFactorPinSchema>>) {
    const { error } = await authClient.twoFactor.verifyTotp({ code: value.code });
    if (error) {
        toast.add({ title: error.message ?? 'Invalid code.', color: 'error' });
        verifyState.code = [];
        return;
    }
    isEnabled.value = true;
    totpUri.value = '';
    step.value = 'enable-backup-codes';
}

function finishBackupCodes() {
    toast.add({
        title: step.value === 'enable-backup-codes' ? '2FA enabled.' : 'New backup codes saved.',
        color: 'success',
    });
    resetTransientState();
}
</script>
