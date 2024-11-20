<template>
    <span
        :class="[classes]"
        class="section-title font-ps2p no-select"
    >
        {{ props.text }}
    </span>
</template>

<script setup lang="ts">
const props = defineProps({
    text: String,
    classes: {
        type: String,
        default: function() {
            return 'my-text-light'
        }
    },
})
</script>

<style scoped>
.section-title {
    font-size: clamp(1.7rem, 2.9vw, 4rem);
}
</style>
