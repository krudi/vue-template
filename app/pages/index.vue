<template>
    <div class="flex flex-col gap-16 py-8">
        <section class="flex flex-col items-center gap-6 py-8 text-center">
            <Badge variant="secondary">Nuxt starter</Badge>

            <h1 class="max-w-2xl text-4xl font-semibold text-balance text-foreground sm:text-5xl">
                A clean starting point for your next project
            </h1>

            <p class="max-w-xl text-lg text-balance text-muted-foreground">
                Nuxt, TypeScript, and Tailwind CSS v4 with security headers, strict type checking, and a shadcn-vue
                component library already wired up — ready to customize.
            </p>

            <div class="flex flex-wrap items-center justify-center gap-3">
                <a
                    href="https://github.com/krudi/vue-template#quick-start"
                    target="_blank"
                    rel="noreferrer"
                    :class="cn(buttonVariants({ size: 'lg' }))"
                >
                    Get started
                </a>

                <a
                    href="https://github.com/krudi/vue-template"
                    target="_blank"
                    rel="noreferrer"
                    :class="cn(buttonVariants({ variant: 'outline', size: 'lg' }))"
                >
                    View on GitHub
                </a>
            </div>
        </section>

        <section class="flex flex-col gap-6">
            <div class="flex flex-col gap-1 text-center">
                <h2 class="text-2xl font-semibold text-foreground">What's included</h2>
                <p class="text-muted-foreground">A short overview of what this template already provides.</p>
            </div>

            <div class="grid gap-4 sm:grid-cols-3">
                <Card
                    v-for="feature in features"
                    :key="feature.title"
                >
                    <CardHeader>
                        <component
                            :is="feature.icon"
                            class="size-5 text-muted-foreground"
                            aria-hidden="true"
                        />
                        <CardTitle class="mt-2">{{ feature.title }}</CardTitle>
                        <CardDescription>{{ feature.description }}</CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </section>

        <section class="flex flex-col gap-6">
            <Separator />

            <div class="flex flex-col gap-1 text-center">
                <h2 class="text-2xl font-semibold text-foreground">Built with</h2>
                <p class="text-muted-foreground">The stack this template is assembled from.</p>
            </div>

            <div class="flex flex-wrap items-center justify-center gap-2">
                <Badge
                    v-for="technology in technologies"
                    :key="technology"
                    variant="outline"
                >
                    {{ technology }}
                </Badge>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { usePageSeo } from '@composables/use-page-seo';
import { Layers, ShieldCheck, SquareCode } from '@lucide/vue';

import { definePageMeta } from '#imports';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

definePageMeta({
    layout: 'default',
});

usePageSeo({
    path: '/',
    title: 'Homepage',
    description: 'A Nuxt starter template built with Vue, Tailwind CSS v4, and shadcn-vue.',
    keywords: ['vue template', 'nuxt', 'homepage', 'starter'],
});

const features = [
    {
        icon: ShieldCheck,
        title: 'Secure by default',
        description:
            'Production responses ship a Content Security Policy, HSTS and strict frame, referrer and permissions headers.',
    },
    {
        icon: SquareCode,
        title: 'Strict TypeScript',
        description: 'Strict compiler flags, vue-tsc type checking, oxlint and oxfmt keep every change consistent.',
    },
    {
        icon: Layers,
        title: 'shadcn-vue foundation',
        description: 'UI components are composed from shadcn-vue on Reka UI primitives, styled with Tailwind CSS v4.',
    },
];

const technologies = ['Nuxt', 'Vue', 'TypeScript', 'Tailwind CSS v4', 'shadcn-vue', 'Reka UI'];
</script>
