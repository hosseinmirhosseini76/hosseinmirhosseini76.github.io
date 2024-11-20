<template>
    <div v-if="props.item" class="education-item v-col-12 mt-4 no-select">
        <Box hideLayer>
            <div class="text-Exo2-ExtraBold main-title my-text-light">
                {{ props.item.university }}
            </div>
            <div class="text-Exo2-Regular main-subtitle my-text-light">
                {{ props.item.title }}
            </div>
            <v-row noGutters>
                <div
                    class="v-col-6 text-Exo2-LightItalic info-text my-text-light"
                >
                    {{ props.item.from }}
                    <span class="my-text-green text-Exo2-ExtraBold">>></span>
                    {{ props.item.to }}
                </div>
                <div
                    class="v-col-6 text-Exo2-BoldItalic info-text text-end my-text-green"
                >
                    {{ props.item.type }}
                </div>
            </v-row>
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
.education-item {
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
