<template>
    <article
        v-if="props.item"
        class="experiences-item v-col-12 mt-4"
    >
        <Box hideLayer>
            <div class="v-col-12 header-section pa-0">
                <v-row noGutters>
                    <div class="v-col-12">
                        <v-list-item
                            :ripple="false"
                            slim
                            class="px-0"
                            role="button"
                            :aria-expanded="!hideContent"
                            :aria-controls="contentId"
                            @click="hideContent = !hideContent"
                            @keydown.enter.prevent="hideContent = !hideContent"
                            @keydown.space.prevent="hideContent = !hideContent"
                        >
                            <template v-if="$vuetify.display.mdAndUp" #prepend>
                                <div class="my-bg-light rounded-pill">
                                    <v-img
                                        :width="90"
                                        aspect-ratio="1"
                                        rounded="pill"
                                        :src="item.logo"
                                        :alt="`${item.companyName} logo`"
                                    />
                                </div>
                            </template>
                            <template #default>
                                <div class="pl-3">
                                    <h3
                                        class="main-title text-Exo2-ExtraBold my-text-light"
                                    >
                                        {{ item.title }}
                                    </h3>
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
                                            –
                                            {{ item.to }}
                                        </span>
                                        <v-chip
                                            v-for="(
                                                type, typeIndex
                                            ) in item.types"
                                            :key="typeIndex"
                                            :color="type.color"
                                            :class="[{ 'ml-2': Number(typeIndex) > 0 }]"
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
                                    aria-hidden="true"
                                />
                            </template>
                        </v-list-item>
                    </div>
                </v-row>
            </div>
            <v-expand-transition>
                <div
                    v-if="!hideContent"
                    :id="contentId"
                    class="content-section my-text-light px-6 py-3 text-Exo2-Medium"
                >
                    <ul class="experience-bullets">
                        <li
                            v-for="(desc, descIndex) in item.description"
                            :key="descIndex"
                        >
                            {{ desc }}
                        </li>
                    </ul>
                    <div v-if="item.skills?.length" class="v-col-12 px-0 pt-2">
                        <v-chip
                            v-for="(skill, skillIndex) in item.skills"
                            :key="skillIndex"
                            variant="outlined"
                            color="var(--green-color)"
                            class="mr-2 mb-2 text-Exo2-Regular"
                        >
                            {{ skill }}
                        </v-chip>
                    </div>
                    <div
                        v-if="item.links?.length"
                        class="v-col-12 d-flex justify-end flex-wrap ga-2 px-0"
                    >
                        <a
                            v-for="(link, linkIndex) in item.links"
                            :key="linkIndex"
                            :href="link.link"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="experience-link"
                        >
                            <v-chip
                                variant="flat"
                                :color="link.color"
                                size="large"
                            >
                                <Icon
                                    icon="solar:link-round-angle-outline"
                                    width="20"
                                    height="20"
                                    class="mr-2"
                                    aria-hidden="true"
                                />
                                {{ link.title }}
                            </v-chip>
                        </a>
                    </div>
                </div>
            </v-expand-transition>
        </Box>
    </article>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Box from '@/components/Box.vue'

const props = defineProps({
    item: {
        type: Object,
        default: () => null,
    },
    defaultOpen: {
        type: Boolean,
        default: false,
    },
})

const hideContent = ref(!props.defaultOpen)
const contentId = computed(
    () =>
        `experience-${(props.item?.companyName || 'item')
            .toString()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')}`,
)
</script>

<style scoped lang="scss">
.experiences-item {
    height: fit-content !important;

    .header-section {
        .main-title {
            font-size: clamp(1.25rem, 3.2vw, 1.85rem);
            line-height: 1.25;
        }

        .main-subtitle {
            font-size: clamp(1.05rem, 2.8vw, 1.55rem);
        }
    }

    .content-section {
        font-size: clamp(0.95rem, 1.5vw, 1.15rem);
        line-height: 1.55;
    }

    .experience-bullets {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 10px;

        li {
            position: relative;
            padding-left: 1.15rem;

            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0.55em;
                width: 0.45rem;
                height: 0.45rem;
                border-radius: 50%;
                background: var(--green-color);
            }
        }
    }

    .experience-link {
        text-decoration: none;
    }
}
</style>
