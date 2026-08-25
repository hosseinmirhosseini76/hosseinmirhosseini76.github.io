<template>
    <section
        id="highlights"
        class="highlights-section my-bg-dark d-flex justify-center"
        aria-labelledby="highlights-heading"
    >
        <div class="highlights-inner v-col-md-8 v-col-12">
            <div class="title-section">
                <h2 id="highlights-heading" class="section-heading">
                    <SectionTitle text="Key Highlights" />
                </h2>
            </div>
            <ul class="highlights-grid">
                <li
                    v-for="item in items"
                    :key="item.value"
                    class="highlight-card"
                >
                    <Box hideLayer>
                        <p class="value font-ps2p my-text-green">
                            {{ item.value }}
                        </p>
                        <p class="label text-Exo2-Medium my-text-light">
                            {{ item.label }}
                        </p>
                    </Box>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
const items = [
    {
        value: '10+ Years',
        label: 'Shipping production front-end work across startups, product companies, and remote teams',
    },
    {
        value: '7 Roles',
        label: 'A path from founder and developer to team lead, senior, and full-stack engineer',
    },
    {
        value: 'International',
        label: 'Remote collaboration with teams in Australia, the United States, and Iran',
    },
    {
        value: 'Vue & Nuxt',
        label: 'Deep specialization across Vue 2/3, Nuxt, and large-scale component architecture',
    },
    {
        value: 'Greenfield + Legacy',
        label: 'Building products from scratch and modernizing live codebases, including Vue 2 → 3',
    },
    {
        value: 'Product Range',
        label: 'SaaS platforms, e-commerce, admin systems, SSR marketplaces, and customer-facing applications',
    },
]
</script>

<style scoped lang="scss">
.highlights-section {
    padding: 48px 18px 60px;

    .highlights-inner {
        width: 100%;
        max-width: 960px;
        margin: 0 auto;
        padding: 0;
    }

    .title-section {
        margin-bottom: 28px;
    }

    .section-heading {
        margin: 0;
        font-size: inherit;
        font-weight: inherit;
    }

    .highlights-grid {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
    }

    .highlight-card {
        min-height: 100%;

        :deep(.box) {
            height: 100%;
            padding: 22px 18px;
        }
    }

    .value {
        font-size: clamp(1.05rem, 1.8vw, 1.45rem);
        margin-bottom: 10px;
        line-height: 1.3;
    }

    .label {
        font-size: clamp(0.92rem, 1.25vw, 1.05rem);
        line-height: 1.5;
        opacity: 0.92;
        margin: 0;
    }
}

@media (max-width: 960px) {
    .highlights-section {
        padding: 32px 18px 40px;
    }
}

@media (max-width: 600px) {
    .highlights-section .highlights-grid {
        grid-template-columns: 1fr;
    }
}
</style>
