<template>
    <div v-if="props.item" class="certificates-item v-col-12 mt-4 no-select">
        <Box hideLayer>
            <div class="text-Exo2-ExtraBold main-title">
                <a
                    :href="item.link"
                    class="my-text-light"
                >
                    {{ item.title }}
                </a>
            </div>
            <div class="text-Exo2-Regular main-subtitle my-text-light">
                {{ item.issuer }}
                <span class="my-text-green">({{ item.date }})</span>
            </div>
            <div class="v-col-12">
                <v-img width="95%" :src="item.image" class="mx-auto" />
            </div>
        </Box>
    </div>
</template>

<script setup lang="ts">
import Box from '@/components/Box.vue'

const props = defineProps({
    item: {
        type: Object,
        default: () => null,
    },
})
</script>

<style scoped lang="scss">
.certificates-item {
    .main-title {
        font-size: clamp(1.4rem, 4vw, 2rem);
    }
    .main-subtitle {
        font-size: clamp(1.15rem, 4vw, 1.8rem);
    }
    .info-text {
        font-size: clamp(0.725rem, 4vw, 1.4rem);
    }
}
</style>
