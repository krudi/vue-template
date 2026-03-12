<template>
    <section>
        <h3><b>Page:</b> [...404].vue</h3>

        <hr class="hr" />

        <h4>
            <b>404 Not Found</b>
        </h4>
        <p>The HTTP 404 Not Found response status code indicates that the server cannot find the requested resource.</p>
    </section>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';

definePageMeta({
    layout: 'default',
});
</script>
