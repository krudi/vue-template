<template>
    <UDropdownMenu
        :items="items"
        :content="{ align: 'end' }"
    >
        <UButton
            color="neutral"
            variant="outline"
            :icon="colorMode.value === 'dark' ? 'i-lucide-moon' : 'i-lucide-sun'"
            aria-label="Toggle theme"
        />
    </UDropdownMenu>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui';

const colorMode = useColorMode();

const items: DropdownMenuItem[] = [
    { label: 'Light', icon: 'i-lucide-sun', onSelect: () => (colorMode.preference = 'light') },
    { label: 'Dark', icon: 'i-lucide-moon', onSelect: () => (colorMode.preference = 'dark') },
    { label: 'System', icon: 'i-lucide-monitor', onSelect: () => (colorMode.preference = 'system') },
];
</script>
