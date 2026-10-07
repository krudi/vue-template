<template>
    <UApp>
        <NuxtLayout>
            <div
                class="mx-auto flex min-h-[60svh] max-w-md flex-col items-center justify-center gap-4 px-4 text-center"
            >
                <template v-if="error.status === 404">
                    <h1 class="text-2xl font-semibold text-highlighted">404 — Page not found</h1>
                    <p class="text-muted">The page you're looking for doesn't exist or has been moved.</p>
                </template>

                <template v-else>
                    <h1 class="text-2xl font-semibold text-highlighted">Something went wrong</h1>
                    <p class="text-muted">
                        We couldn't load this page. Try again — if the problem persists, come back later.
                    </p>
                </template>

                <UButton
                    label="Back to home"
                    color="neutral"
                    variant="outline"
                    @click="handleError"
                />
            </div>
        </NuxtLayout>
    </UApp>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

const { error } = defineProps<{
    error: NuxtError;
}>();

useSeoMeta({
    title: error.status === 404 ? 'Page not found' : 'Something went wrong',
});

useRobotsRule(false);

function handleError() {
    void clearError({ redirect: '/' });
}
</script>
