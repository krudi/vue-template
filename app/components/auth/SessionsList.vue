<template>
    <ul class="flex flex-col divide-y divide-default">
        <li
            v-for="session in items"
            :key="session.id"
            class="flex items-center justify-between gap-4 py-3"
        >
            <div class="flex flex-col gap-0.5 text-sm">
                <span class="font-medium text-highlighted">
                    {{
                        session.token === currentSessionToken ? 'This device' : (session.userAgent ?? 'Unknown device')
                    }}
                </span>
                <span class="text-muted">
                    {{ session.ipAddress ?? 'Unknown IP address' }} ·
                    {{ new Date(session.createdAt).toLocaleString('en-US') }}
                </span>
            </div>
            <UButton
                v-if="session.token !== currentSessionToken"
                label="End"
                color="neutral"
                variant="outline"
                size="sm"
                :loading="revokingToken === session.token"
                @click="handleRevoke(session.token)"
            />
        </li>
    </ul>
</template>

<script setup lang="ts">
type SessionInfo = {
    id: string;
    token: string;
    createdAt: Date | string;
    ipAddress?: string | null | undefined;
    userAgent?: string | null | undefined;
};

const { sessions, currentSessionToken } = defineProps<{
    sessions: SessionInfo[];
    currentSessionToken: string;
}>();

const toast = useToast();
const items = ref(sessions);
const revokingToken = ref<string | null>(null);

async function handleRevoke(token: string) {
    revokingToken.value = token;
    const { error } = await authClient.revokeSession({ token });
    revokingToken.value = null;
    if (error) {
        toast.add({ title: error.message ?? 'Failed to end session.', color: 'error' });
        return;
    }
    items.value = items.value.filter((session) => session.token !== token);
    toast.add({ title: 'Session ended.', color: 'success' });
}
</script>
