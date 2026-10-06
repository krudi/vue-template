<template>
    <div
        v-if="session"
        class="flex items-center justify-end gap-3 text-sm text-muted"
    >
        <span>{{ session.user.email }}</span>
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
    </div>
</template>

<script setup lang="ts">
const { data: session } = await authClient.useSession(useFetch);
const { signOut, isSigningOut } = useSignOut();
</script>
