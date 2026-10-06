<template>
    <UFooter>
        <template #left>
            <p class="text-sm text-muted">
                &copy; {{ year }}
                <ULink
                    to="/"
                    class="hover:text-highlighted"
                >
                    vue-template
                </ULink>
            </p>
        </template>

        <template #right>
            <UNavigationMenu
                :items="navigationItems"
                variant="link"
                aria-label="Footer"
            />
        </template>
    </UFooter>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
