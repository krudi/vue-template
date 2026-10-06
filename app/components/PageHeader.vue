<template>
    <UHeader
        title="vue-template"
        to="/"
        mode="slideover"
        :menu="{ side: 'right', title: 'Menu', description: 'Site navigation' }"
    >
        <UNavigationMenu :items="navigationItems" />

        <template #right>
            <div class="hidden items-center gap-2 lg:flex">
                <template v-if="session">
                    <UButton
                        label="Account"
                        to="/account"
                        color="neutral"
                        variant="ghost"
                        size="sm"
                    />
                    <UButton
                        label="Sign out"
                        color="neutral"
                        variant="outline"
                        size="sm"
                        :loading="isSigningOut"
                        @click="signOut"
                    />
                </template>
                <UButton
                    v-else
                    label="Sign in"
                    to="/sign-in"
                    size="sm"
                />
            </div>
            <ThemeToggle />
        </template>

        <template #body>
            <UNavigationMenu
                :items="mobileItems"
                orientation="vertical"
                class="-mx-2.5"
            />
            <UButton
                v-if="session"
                label="Sign out"
                color="neutral"
                variant="outline"
                block
                class="mt-6"
                :loading="isSigningOut"
                @click="signOut"
            />
            <UButton
                v-else
                label="Sign in"
                to="/sign-in"
                block
                class="mt-6"
            />
        </template>
    </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const { data: session } = await authClient.useSession(useFetch);
const { signOut, isSigningOut } = useSignOut();

const mobileItems = computed<NavigationMenuItem[]>(() =>
    session.value ? [...navigationItems, { label: 'Account', to: '/account' }] : navigationItems
);
</script>
