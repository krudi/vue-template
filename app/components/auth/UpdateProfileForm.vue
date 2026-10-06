<template>
    <UForm
        :schema="updateNameSchema"
        :state="state"
        class="flex flex-col gap-4"
        @submit="onSubmit"
    >
        <UFormField
            name="name"
            label="Name"
        >
            <UInput
                v-model="state.name"
                autocomplete="name"
                class="w-full"
            />
        </UFormField>

        <UFormField label="Profile picture">
            <div class="flex items-end gap-4">
                <UAvatar
                    v-if="currentImage && !image"
                    :src="currentImage"
                    alt="Profile"
                    size="3xl"
                />
                <UFileUpload
                    v-model="image"
                    :accept="[...ACCEPTED_AVATAR_MIME_TYPES].join(',')"
                    label="Drop an image here"
                    :description="`PNG, JPEG, WebP or GIF (max ${Math.round(MAX_AVATAR_FILE_BYTES / 1_000_000)}MB)`"
                    class="min-h-32 w-full"
                />
            </div>
        </UFormField>

        <UButton
            type="submit"
            label="Save"
            class="w-fit"
            loading-auto
        />
    </UForm>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui';
import type { z } from 'zod';

import { ACCEPTED_AVATAR_MIME_TYPES, MAX_AVATAR_FILE_BYTES } from '#shared/config/uploads';
import { updateNameSchema } from '#shared/schemas/auth';

const { currentName, currentImage } = defineProps<{
    currentName: string;
    currentImage: string | null;
}>();

const toast = useToast();
const state = reactive({ name: currentName });
const image = ref<File | null>(null);

watch(image, (file) => {
    if (!file) {
        return;
    }
    if (!ACCEPTED_AVATAR_MIME_TYPES.has(file.type)) {
        toast.add({ title: 'Choose a PNG, JPEG, WebP, or GIF image file.', color: 'error' });
        image.value = null;
        return;
    }
    if (file.size > MAX_AVATAR_FILE_BYTES) {
        toast.add({
            title: `The image is too large (max ${Math.round(MAX_AVATAR_FILE_BYTES / 1_000_000)}MB).`,
            color: 'error',
        });
        image.value = null;
    }
});

function readAsDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(typeof reader.result === 'string' ? reader.result : '');
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

async function onSubmit({ data: value }: FormSubmitEvent<z.output<typeof updateNameSchema>>) {
    const { error } = await authClient.updateUser({
        name: value.name,
        image: image.value ? await readAsDataUrl(image.value) : undefined,
    });
    if (error) {
        toast.add({ title: error.message ?? 'Failed to save profile.', color: 'error' });
        return;
    }
    toast.add({ title: 'Profile updated.', color: 'success' });
}
</script>
