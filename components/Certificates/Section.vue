<template>
    <v-col
        cols="12"
        class="certificates-section my-bg-dark d-flex justify-center"
    >
        <v-col md="8" cols="12">
            <div id="certificates" class="title-section">
                <SectionTitle text="Certificates" />
            </div>
            <div class="items-section">
                <v-row noGutters>
                    <template v-for="(item, itemIndex) in items">
                        <CertificatesCard :item="item" />
                    </template>
                </v-row>
            </div>
            <div class="v-col-12 text-center text-Exo2-Regular my-text-light">
                they are comming soon ...
            </div>
        </v-col>
    </v-col>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
    {
        image: 'images/certificate-1.png',
        title: 'JavaScript Algorithms and Data Structure (Beta)',
        issuer: 'Freecodecamp',
        link: 'https://www.freecodecamp.org/certification/fcc947abfe8-ff10-453c-af8d-e3c7f27037d4/javascript-algorithms-and-data-structures-v8',
        date: 'Feb 2024',
    },
])
</script>

<style>
.certificates-section {
    padding: 60px 18px;
}

@media (max-width: 960px) {
    .certificates-section {
        padding: 30px 18px;
    }
}
</style>
