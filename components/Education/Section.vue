<template>
    <v-col
        cols="12"
        class="educations-section my-bg-dark d-flex justify-center"
    >
        <v-col md="8" cols="12">
            <div id="educations" class="title-section">
                <SectionTitle text="Educations" />
            </div>
            <div class="items-section">
                <v-row noGutters>
                    <template v-for="(item, itemIndex) in items">
                        <EducationCard :item="item" />
                    </template>
                </v-row>
            </div>
        </v-col>
    </v-col>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
    {
        university: 'Shahid Beheshti University',
        type: 'MEng (CE)',
        title: 'Computer systems architecture',
        from: 'Sep 2020',
        to: 'March 2023',
    },
    {
        university: 'Shahrood University of Technology',
        type: 'BEng (CE)',
        title: 'Software Engineering',
        from: 'Sep 2016',
        to: 'Jun 2020',
    },
])
</script>

<style>
.educations-section {
    padding: 60px 18px;
}

@media (max-width: 960px) {
    .educations-section {
        padding: 30px 18px;
    }
}
</style>
