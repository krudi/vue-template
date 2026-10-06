<template>
    <div class="mx-auto flex min-h-[60svh] max-w-md flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 class="text-2xl font-semibold text-highlighted">404 — Page not found</h1>
        <p class="text-muted">The page you're looking for doesn't exist or has been moved.</p>
        <UButton
            label="Back to home"
            to="/"
            color="neutral"
            variant="outline"
        />
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'default',
});

useSeoMeta({
    title: 'Page not found',
    robots: 'noindex',
});

const event = useRequestEvent();

if (event) {
    setResponseStatus(event, 404, 'Page Not Found');
}
</script>
