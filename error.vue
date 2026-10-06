<template>
    <NuxtLayout>
        <section>
            <h3><b>Page:</b> error.vue</h3>

            <hr class="hr" />

            <h4>
                <b>{{ error.status }} {{ error.statusText }}</b>
            </h4>
            <p>Oh no, something went wrong... maybe refresh?</p>

            <button
                type="button"
                @click="handleError"
            >
                Back to the homepage
            </button>
        </section>
    </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';
import { clearError } from '#imports';

const { error } = defineProps<{
    error: NuxtError;
}>();

function handleError() {
    void clearError({ redirect: '/' });
}
</script>
