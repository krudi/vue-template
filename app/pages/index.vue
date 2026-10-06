<template>
    <div>
        <UPageHero
            headline="Nuxt starter"
            title="A clean starting point for your next project"
            description="Nuxt, TypeScript, and Tailwind CSS v4 with authentication, forms, and a Nuxt UI component library already wired up — ready to customize."
            :links="links"
        />

        <UPageSection
            title="What's included"
            description="A short overview of what this template already provides."
            :features="features"
        />

        <UPageSection
            title="Built with"
            description="The stack this template is assembled from."
        >
            <div class="flex flex-wrap items-center justify-center gap-2">
                <UBadge
                    v-for="technology in technologies"
                    :key="technology"
                    :label="technology"
                    color="neutral"
                    variant="outline"
                />
            </div>
        </UPageSection>
    </div>
</template>

<script setup lang="ts">
import type { ButtonProps, PageFeatureProps } from '@nuxt/ui';

definePageMeta({
    layout: 'default',
});

usePageSeo({
    path: '/',
    title: 'Homepage',
    description: 'A Nuxt starter template built with Vue, Tailwind CSS v4, and Nuxt UI.',
    keywords: ['vue template', 'nuxt', 'homepage', 'starter'],
});

const { data: session } = await authClient.useSession(useFetch);

const links = computed<ButtonProps[]>(() => [
    session.value
        ? { label: 'Go to your account', to: '/account', size: 'lg' }
        : { label: 'Sign in', to: '/sign-in', size: 'lg' },
    {
        label: 'View on GitHub',
        to: 'https://github.com/krudi/vue-template',
        target: '_blank',
        color: 'neutral',
        variant: 'outline',
        size: 'lg',
    },
]);

const features: PageFeatureProps[] = [
    {
        icon: 'i-lucide-shield-check',
        title: 'Authentication built in',
        description:
            'Email and password sign-in with optional two-factor authentication, powered by Better Auth and Drizzle ORM.',
    },
    {
        icon: 'i-lucide-key-round',
        title: 'Type-safe forms',
        description: 'Forms are built with Nuxt UI and validated with Zod, end to end in TypeScript.',
    },
    {
        icon: 'i-lucide-layers',
        title: 'Nuxt UI foundation',
        description: 'UI components come from Nuxt UI on Reka UI primitives, styled with Tailwind CSS v4.',
    },
];

const technologies = [
    'Nuxt',
    'Vue',
    'TypeScript',
    'Tailwind CSS v4',
    'Nuxt UI',
    'Reka UI',
    'Better Auth',
    'Drizzle ORM',
];
</script>
