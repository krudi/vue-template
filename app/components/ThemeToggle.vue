<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button
                variant="outline"
                size="icon"
                aria-label="Toggle theme"
                class="relative"
            >
                <SunIcon class="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <MoonIcon class="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span class="sr-only">Toggle theme</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem @select="colorMode.preference = 'light'">Light</DropdownMenuItem>
            <DropdownMenuItem @select="colorMode.preference = 'dark'">Dark</DropdownMenuItem>
            <DropdownMenuItem @select="colorMode.preference = 'system'">System</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>

<script setup lang="ts">
import { MoonIcon, SunIcon } from '@lucide/vue';

import { useColorMode } from '#imports';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const colorMode = useColorMode();
</script>
