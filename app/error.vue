<template>
    <NuxtLayout>
        <div class="mx-auto flex min-h-[60svh] max-w-md flex-col items-center justify-center gap-4 px-4 text-center">
            <template v-if="error.status === 404">
                <h1 class="text-2xl font-semibold text-foreground">404 — Page not found</h1>
                <p class="text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
                <Button
                    variant="outline"
                    @click="handleError"
                >
                    Back to home
                </Button>
            </template>

            <template v-else>
                <h1 class="text-2xl font-semibold text-foreground">Something went wrong</h1>
                <p class="text-muted-foreground">
                    We couldn't load this page. Try again — if the problem persists, come back later.
                </p>
                <Button
                    variant="outline"
                    @click="handleError"
                >
                    Back to home
                </Button>
            </template>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';
import { clearError, useSeoMeta } from '#imports';
import { Button } from '@/components/ui/button';

const { error } = defineProps<{
    error: NuxtError;
}>();

useSeoMeta({
    title: error.status === 404 ? 'Page not found' : 'Something went wrong',
    robots: 'noindex',
});

function handleError() {
    void clearError({ redirect: '/' });
}
</script>
