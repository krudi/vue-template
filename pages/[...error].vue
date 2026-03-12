<template>
    <section>
        <h3><b>Page:</b> [...error].vue</h3>

        <hr class="hr" />

        <h4>
            <b>Error</b>
        </h4>
        <p>Oh no, something went wrong... maybe refresh?</p>
    </section>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';

definePageMeta({
    layout: 'default',
});
</script>
