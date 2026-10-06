<template>
    <div class="flex min-h-svh w-full items-center justify-center p-4">
        <UPageCard
            :title="title"
            :description="description"
            class="w-full max-w-sm"
        >
            <slot />
        </UPageCard>
    </div>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        title?: string;
        description?: string;
    }>(),
    {
        title: '',
        description: '',
    }
);
</script>
