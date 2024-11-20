<template>
    <div class="v-col-12 pa-0 navigation-items-wrapper my-bg-dark">
        <v-col lg="8" md="11" cols="12" class="mx-auto">
            <v-row no-gutters justify="center">
                <template v-for="item in items">
                    <div
                        class="v-col-lg-4 v-col-md-4 v-col-12 navigation-item font-ps2p my-text-light no-select"
                    >
                        <Box @clicked="goToSection(item.to)">
                            {{ item.text }}
                        </Box>
                    </div>
                </template>
            </v-row>
        </v-col>
    </div>
</template>

<script setup lang="ts">
//! packages
import { ref } from 'vue'
import Box from '@/components/Box.vue'

//! utils
const router = useRouter()

const items = ref([
    {
        icon: 'fluent:person-info-24-regular',
        text: 'Who Am I',
        to: '/#whoami',
    },
    {
        icon: 'fluent:hat-graduation-sparkle-24-regular',
        text: 'Educations',
        to: '/#educations',
    },
    {
        icon: 'fluent:briefcase-24-regular',
        text: 'Experiences',
        to: '/#experiences',
    },
    /* {
        icon: 'fluent:brain-circuit-24-regular',
        text: 'Skills',
        to: '/#skills',
    }, */
    {
        icon: 'fluent:certificate-24-regular',
        text: 'Certificates',
        to: '/#certificates',
    },
    /* {
        icon: 'fluent:book-globe-24-regular',
        text: 'Publications',
        to: '/#publications',
    }, */
    /* {
        icon: 'solar:cup-outline',
        text: 'Awards',
        to: '/#awards',
    }, */
    {
        icon: 'solar:phone-rounded-linear',
        text: 'Contact Me',
        to: '/#contact-me',
    },
])

const goToSection = (to: string) => {
    router.push(`${to}`)
}
</script>

<style lang="scss">
.navigation-items-wrapper {
    padding-top: 5rem !important;
    padding-bottom: 5rem !important;
    .navigation-item {
        padding: 10px 20px !important;
        font-size: clamp(1rem, 1.3vw, 2.7rem);
    }
}
</style>
