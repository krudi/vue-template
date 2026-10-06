<template>
    <div class="mx-auto flex min-h-[60svh] max-w-md flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 class="text-2xl font-semibold text-foreground">404 — Page not found</h1>
        <p class="text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
        <NuxtLink
            to="/"
            :class="cn(buttonVariants({ variant: 'outline' }))"
        >
            Back to home
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import { definePageMeta, setResponseStatus, useRequestEvent, useSeoMeta } from '#imports';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
