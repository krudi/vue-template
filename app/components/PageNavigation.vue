<template>
    <div class="flex items-center gap-2">
        <NavigationMenu
            :viewport="false"
            class="max-w-none justify-start"
        >
            <NavigationMenuList>
                <NavigationMenuItem
                    v-for="item in navigationItems"
                    :key="item.to"
                >
                    <NavigationMenuLink
                        as-child
                        :active="isActivePath(route.path, item.to)"
                    >
                        <NuxtLink
                            :to="item.to"
                            :aria-current="isActivePath(route.path, item.to) ? 'page' : undefined"
                        >
                            {{ item.label }}
                        </NuxtLink>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    </div>
</template>

<script setup lang="ts">
import { isActivePath, navigationItems } from '@utils/navigation';

import { useRoute } from '#imports';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';

const route = useRoute();
</script>
