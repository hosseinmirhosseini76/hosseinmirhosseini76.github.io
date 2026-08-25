<template>
    <section
        class="educations-section my-bg-dark d-flex justify-center"
        aria-labelledby="educations-heading"
    >
        <div class="v-col-md-8 v-col-12 educations-inner">
            <div id="educations" class="title-section">
                <SectionTitle text="Education" />
            </div>
            <h2 id="educations-heading" class="visually-hidden">Education</h2>
            <div class="items-section">
                <v-row noGutters>
                    <EducationCard
                        v-for="(item, itemIndex) in items"
                        :key="itemIndex"
                        :item="item"
                    />
                </v-row>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const items = [
    {
        university: 'Shahid Beheshti University',
        type: 'MEng (CE)',
        title: 'Computer Systems Architecture',
        from: 'Sep 2020',
        to: 'Mar 2023',
    },
    {
        university: 'Shahrood University of Technology',
        type: 'BEng (CE)',
        title: 'Software Engineering',
        from: 'Sep 2016',
        to: 'Jun 2020',
    },
]
</script>

<style scoped>
.educations-section {
    padding: 48px 18px 60px;
}

.educations-inner {
    max-width: 960px;
    margin: 0 auto;
    padding: 0;
}

.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

@media (max-width: 960px) {
    .educations-section {
        padding: 32px 18px 40px;
    }
}
</style>
