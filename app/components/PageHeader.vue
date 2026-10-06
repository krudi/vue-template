<template>
    <header class="flex items-center justify-between gap-4 border-b border-border py-4">
        <NuxtLink
            to="/"
            class="text-lg font-semibold text-foreground"
        >
            vue-template
        </NuxtLink>

        <div class="flex items-center gap-2">
            <PageNavigation class="hidden md:flex" />
            <ThemeToggle />
            <PageMobileNavigation class="md:hidden" />
        </div>
    </header>
</template>
