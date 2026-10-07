<template>
    <UContainer
        v-if="data"
        class="flex max-w-2xl flex-col gap-8 py-8 lg:py-12"
    >
        <div class="flex flex-col gap-3">
            <div class="flex items-start justify-between gap-4">
                <div class="flex flex-col gap-1.5">
                    <ULink
                        to="/"
                        class="text-sm text-muted hover:text-highlighted"
                    >
                        ← Home
                    </ULink>
                    <h1 class="text-2xl font-semibold text-highlighted">Your account</h1>
                </div>
                <AuthUserBar />
            </div>
        </div>

        <section class="flex flex-col gap-3">
            <h2 class="text-lg font-semibold text-highlighted">Profile</h2>
            <USeparator />
            <AuthUpdateProfileForm
                :current-name="data.session.user.name"
                :current-image="data.session.user.image ?? null"
            />
        </section>

        <section class="flex flex-col gap-3">
            <h2 class="text-lg font-semibold text-highlighted">Email</h2>
            <USeparator />
            <AuthChangeEmailForm :current-email="data.session.user.email" />
        </section>

        <section class="flex flex-col gap-3">
            <h2 class="text-lg font-semibold text-highlighted">Password</h2>
            <USeparator />
            <AuthChangePasswordForm />
        </section>

        <section class="flex flex-col gap-3">
            <h2 class="text-lg font-semibold text-highlighted">Two-factor authentication</h2>
            <USeparator />
            <AuthTwoFactorSettings :enabled="Boolean(data.session.user.twoFactorEnabled)" />
        </section>

        <section class="flex flex-col gap-3">
            <h2 class="text-lg font-semibold text-highlighted">Active sessions</h2>
            <USeparator />
            <AuthSessionsList
                :key="data.sessions.map((item) => item.id).join(',')"
                :sessions="data.sessions"
                :current-session-token="data.session.session.token"
            />
        </section>

        <section class="flex flex-col gap-3">
            <h2 class="text-lg font-semibold text-error">Delete account</h2>
            <USeparator />
            <AuthDeleteAccountForm />
        </section>
    </UContainer>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'auth',
});

useSeoMeta({
    title: 'Your account',
});

const { data } = await useFetch('/api/account');

if (!data.value) {
    await navigateTo('/sign-in');
}
</script>
