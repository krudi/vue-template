<template>
    <Sheet v-model:open="open">
        <SheetTrigger as-child>
            <Button
                variant="outline"
                size="icon"
                aria-label="Open menu"
                v-bind="$attrs"
            >
                <MenuIcon aria-hidden="true" />
            </Button>
        </SheetTrigger>

        <SheetContent side="right">
            <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription class="sr-only">Site navigation</SheetDescription>
            </SheetHeader>

            <nav
                aria-label="Mobile"
                class="flex flex-col gap-1 px-4"
            >
                <NuxtLink
                    v-for="item in navigationItems"
                    :key="item.to"
                    :to="item.to"
                    :aria-current="isActivePath(route.path, item.to) ? 'page' : undefined"
                    :class="
                        cn(
                            'rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted',
                            isActivePath(route.path, item.to) && 'bg-muted text-foreground'
                        )
                    "
                    @click="open = false"
                >
                    {{ item.label }}
                </NuxtLink>
            </nav>
        </SheetContent>
    </Sheet>
</template>

<script setup lang="ts">
import { MenuIcon } from '@lucide/vue';
import { isActivePath, navigationItems } from '@utils/navigation';
import { ref } from 'vue';

import { useRoute } from '#imports';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

defineOptions({
    inheritAttrs: false,
});

const route = useRoute();
const open = ref(false);
</script>
