<template>
    <div v-if="props.item" class="experiences-item v-col-12 mt-4 no-select">
        <Box hideLayer>
            <div class="v-col-12 header-section pa-0">
                <v-row noGutters>
                    <div class="v-col-12">
                        <v-list-item
                            :ripple="false"
                            slim
                            class="px-0"
                            @click="hideContent = !hideContent"
                        >
                            <template v-if="$vuetify.display.mdAndUp" #prepend>
                                <div class="my-bg-light rounded-pill">
                                    <v-img
                                        :width="90"
                                        aspect-ratio="1"
                                        rounded="pill"
                                        :src="item.logo"
                                    />
                                </div>
                            </template>
                            <template #default>
                                <div class="pl-3">
                                    <div
                                        class="main-title text-Exo2-ExtraBold my-text-light"
                                    >
                                        {{ item.title }}
                                    </div>
                                    <div
                                        :class="[
                                            $vuetify.display.mdAndUp
                                                ? 'mt-n3'
                                                : 'mt-n1',
                                        ]"
                                        class="main-subtitle text-Exo2-Bold my-text-light"
                                    >
                                        {{ item.companyName }}
                                        <span
                                            v-if="$vuetify.display.mdAndUp"
                                            class="text-Exo2-Regular my-text-green"
                                        >
                                            ({{ item.location }})
                                        </span>
                                    </div>
                                    <!-- location -->
                                    <div v-if="!$vuetify.display.mdAndUp">
                                        <span
                                            class="text-Exo2-Regular my-text-green"
                                        >
                                            ({{ item.location }})
                                        </span>
                                    </div>
                                    <div>
                                        <span
                                            class="text-Exo2-Regular my-text-light pr-2"
                                        >
                                            {{ item.from }}
                                            >>
                                            {{ item.to }}
                                        </span>
                                        <v-chip
                                            v-for="(
                                                type, typeIndex
                                            ) in item.types"
                                            :color="type.color"
                                            :class="[{ 'ml-2': typeIndex > 0 }]"
                                            density="compact"
                                            variant="outlined"
                                            class="text-Exo2-Medium"
                                        >
                                            {{ type.text }}
                                        </v-chip>
                                    </div>
                                </div>
                            </template>
                            <template #append>
                                <Icon
                                    :rotate="!hideContent ? '180deg' : ''"
                                    icon="solar:alt-arrow-down-outline"
                                    class="my-text-light"
                                    width="32"
                                    height="32"
                                />
                            </template>
                        </v-list-item>
                    </div>
                </v-row>
            </div>
            <v-expand-transition>
                <div
                    v-show="!hideContent"
                    class="content-section my-text-light px-6 py-3 text-Exo2-Medium"
                >
                    <div v-for="desc in item.description">✅ {{ desc }}</div>
                    <div v-if="!!item.skills" class="v-col-12 px-0">
                        <v-chip v-for="(skill, skillIndex) in item.skills" variant="outlined" color="var(--green-color)" class="mr-2 mb-2 text-Exo2-Regular">
                            {{ skill }}
                        </v-chip>
                    </div>
                    <div v-if="!!item.links" class="v-col-12 d-flex justify-end flex-columns">
                        <template v-for="link in item.links">
                            <NuxtLink :href="link.link" target="_blank">
                                <v-chip variant="flat" :color="link.color" class="ml-3" size="large">
                                    <Icon icon="solar:link-round-angle-outline" width="20" height="20" class="mr-2"/>
                                    {{ link.title }}
                                </v-chip>
                            </NuxtLink>
                        </template>
                    </div>
                </div>
            </v-expand-transition>
        </Box>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Box from '@/components/Box.vue'

const props = defineProps({
    item: {
        type: Object,
        default: () => null,
    },
})

const hideContent = ref(true)
</script>

<style scoped lang="scss">
.experiences-item {
    height: fit-content !important;
    .header-section {
        .main-title {
            font-size: clamp(1.3rem, 4vw, 2rem);
        }
        .main-subtitle {
            font-size: clamp(1.15rem, 4vw, 1.8rem);
        }
        .info-text {
            font-size: clamp(0.725rem, 4vw, 1.4rem);
        }
    }
    .content-section {
        font-size: clamp(0.725rem, 4vw, 1.3rem);
    }
}
</style>
