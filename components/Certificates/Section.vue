<template>
    <section
        class="certificates-section my-bg-dark d-flex justify-center"
        aria-labelledby="certificates-heading"
    >
        <div class="v-col-md-8 v-col-12 certificates-inner">
            <div id="certificates" class="title-section">
                <SectionTitle text="Certification" />
            </div>
            <h2 id="certificates-heading" class="visually-hidden">
                Certification
            </h2>
            <div class="items-section">
                <v-row noGutters>
                    <CertificatesCard
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
        image: 'images/certificate-1.png',
        title: 'JavaScript Algorithms and Data Structures',
        issuer: 'freeCodeCamp',
        link: 'https://www.freecodecamp.org/certification/fcc947abfe8-ff10-453c-af8d-e3c7f27037d4/javascript-algorithms-and-data-structures-v8',
        date: 'Feb 2024',
    },
]
</script>

<style scoped>
.certificates-section {
    padding: 48px 18px 60px;
}

.certificates-inner {
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
    .certificates-section {
        padding: 32px 18px 40px;
    }
}
</style>
