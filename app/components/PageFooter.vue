<template>
    <footer class="py-8">
        <Separator class="mb-4" />

        <div class="flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
            <p>
                &copy; {{ year }}
                <NuxtLink
                    to="/"
                    class="hover:text-foreground"
                >
                    vue-template
                </NuxtLink>
            </p>

            <nav
                aria-label="Footer"
                class="flex items-center gap-4"
            >
                <NuxtLink
                    v-for="item in navigationItems"
                    :key="item.to"
                    :to="item.to"
                    class="hover:text-foreground"
                >
                    {{ item.label }}
                </NuxtLink>
            </nav>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { navigationItems } from '@utils/navigation';

import { Separator } from '@/components/ui/separator';

const year = new Date().getFullYear();
</script>
