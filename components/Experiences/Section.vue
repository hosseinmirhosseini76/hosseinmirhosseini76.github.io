<template>
    <section
        class="experiences-section my-bg-dark d-flex justify-center"
        aria-labelledby="experiences-heading"
    >
        <div class="v-col-md-8 v-col-12 experiences-inner">
            <div id="experiences" class="title-section">
                <SectionTitle text="Experience" />
            </div>
            <h2 id="experiences-heading" class="visually-hidden">
                Professional Experience
            </h2>
            <div class="items-section">
                <v-row noGutters>
                    <ExperiencesCard
                        v-for="(item, itemIndex) in items"
                        :key="item.companyName"
                        :item="item"
                        :default-open="itemIndex < 3"
                    />
                </v-row>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const items = [
    {
        logo: '/images/daizima.png',
        title: 'Full-Stack Developer',
        companyName: 'Daizima',
        location: 'Tehran, IR',
        types: [
            { text: 'Part-time', color: 'cyan' },
            { text: 'Hybrid', color: 'pink' },
        ],
        from: 'Sep 2025',
        to: 'Present',
        description: [
            'Owned end-to-end production e-commerce for networking/tech products at daizima.com: Laravel API, Nuxt SSR storefront + admin, Docker/Nginx deploy, price crawlers, and an LLM content bot.',
            'Shipped catalog, cart, checkout, Mellat/Zarinpal payments, Tapin/Tipax shipping, OTP auth, RBAC, competitor feeds, and a FastAPI + Gemini SEO article pipeline into the CMS.',
        ],
        skills: [
            'Laravel',
            'Nuxt.js',
            'Vue.js',
            'MySQL',
            'Redis',
            'Docker',
            'Nginx',
            'Python',
            'Playwright',
            'FastAPI',
            'Gemini',
        ],
        links: [
            {
                title: 'Storefront',
                link: 'https://daizima.com/',
                color: 'orange',
            },
        ],
    },
    {
        logo: '/images/algorift.png',
        title: 'Full-Stack Developer',
        companyName: 'Algorfit.ai',
        location: 'Brisbane, AU',
        types: [
            { text: 'Full-time', color: 'amber' },
            { text: 'Remote', color: 'red' },
        ],
        from: 'Feb 2025',
        to: 'Sep 2025',
        description: [
            'Built full-stack features for an affiliate SaaS platform: Vue monorepo (6 apps, 300+ components, landing-page builder) plus Laravel API work on Postgres.',
            'Owned Docker/Nginx deploy paths with Cloudflare and AWS, Stripe billing integrations, i18n, affiliate-network hooks, and admin workflows with a remote international team.',
        ],
        skills: [
            'Vue.js',
            'Laravel',
            'PostgreSQL',
            'Docker',
            'Nginx',
            'Cloudflare',
            'AWS',
            'Stripe',
            'Pinia',
            'Vue-i18n',
            'npm Workspaces',
        ],
        links: [
            {
                title: 'Company Website',
                link: 'https://algorift.io',
                color: 'lime',
            },
            {
                title: 'Seller App',
                link: 'https://seller.algorift.io',
                color: 'cyan-lighten-3',
            },
            {
                title: 'Affiliate App',
                link: 'https://affiliate.algorift.io',
                color: 'cyan-lighten-1',
            },
            {
                title: 'Admin App',
                link: 'https://admin.algorift.io',
                color: 'cyan-darken-2',
            },
            {
                title: 'Doc App',
                link: 'https://doc.algorift.io',
                color: 'orange-lighten-1',
            },
        ],
    },
    {
        logo: '/images/interactivo.logo.svg',
        title: 'Senior Front-End Developer',
        companyName: 'Interactivo.io LLC',
        location: 'New York, US',
        types: [
            { text: 'Full-time', color: 'amber' },
            { text: 'Remote', color: 'cyan' },
        ],
        from: 'Aug 2022',
        to: 'Oct 2024',
        description: [
            'Built and maintained Vue/Vuetify customer and back-office apps, including a Vue 2 → 3 migration on a live production product.',
            'Designed the back-office UI in Adobe XD, then shipped i18n, accessibility improvements, and reusable UI patterns into production.',
        ],
        skills: [
            'Vue.js 2/3',
            'Vuetify 2/3',
            'Vuex',
            'Vue Router',
            'Vue-i18n',
            'Vite',
            'VeeValidate',
            'Sass',
            'Axios',
            'Chart.js',
            'Sentry',
        ],
        links: [
            {
                title: 'Company Website',
                link: 'https://interactivo.io/',
                color: 'blue',
            },
            {
                title: 'Main App',
                link: 'https://main.interactivo.io',
                color: 'cyan',
            },
        ],
    },
    {
        logo: '/images/ryca.jpg',
        title: 'Front-End Team Lead',
        companyName: 'Ryca',
        location: 'Shahrood, IR',
        types: [
            { text: 'Full-time', color: 'amber' },
            { text: 'Hybrid', color: 'pink' },
        ],
        from: 'Jan 2021',
        to: 'Aug 2022',
        description: [
            'Led front-end delivery and built 3 large Vue/Nuxt applications from scratch, including SSR products and a role-based admin panel.',
            'Set reusable UI patterns and worked closely with backend and product teams to ship maintainable production apps.',
        ],
        skills: [
            'Nuxt.js 2',
            'Vue.js 2',
            'Vuetify 2',
            'Vuex',
            'Vue Router',
            'Sass',
            'Axios',
            'Chart.js',
            'Sentry',
        ],
        links: [
            {
                title: 'Carvann Website',
                link: 'https://carvann.ir/',
                color: 'teal-accent-3',
            },
            {
                title: 'Carvann Panel',
                link: 'https://panel.carvann.ir/',
                color: 'teal',
            },
            {
                title: 'MS Market',
                link: 'https://msmarket.ir/',
                color: 'purple',
            },
        ],
    },
    {
        logo: '/images/superz.png',
        title: 'Front-End Developer',
        companyName: 'Superz',
        location: 'Shahrood, IR',
        types: [{ text: 'Part-time', color: 'cyan' }],
        from: 'Oct 2019',
        to: 'Sep 2020',
        description: [
            'Built Nuxt SSR apps that aggregated and displayed products from multiple online supermarket sources.',
            'Separated mobile and desktop experiences and resolved SSR challenges to keep the architecture maintainable.',
        ],
        skills: [
            'Nuxt.js 2',
            'Vue.js 2',
            'Vuex',
            'Vue Router',
            'Sass',
            'Axios',
            'Sentry',
        ],
        links: [
            {
                title: 'Superz App',
                link: 'https://superz.ir/',
                color: 'var(--orange-color)',
            },
        ],
    },
    {
        logo: '/images/uniplus.png',
        title: 'Founder & Front-End Developer',
        companyName: 'UniPlus',
        location: 'Shahrood, IR',
        types: [{ text: 'Self-employed', color: 'amber' }],
        from: 'Jul 2019',
        to: 'Oct 2019',
        description: [
            'Founded and built a Vue.js student platform for finding roommates, travel companions, and classmates.',
        ],
        skills: ['Vue.js', 'Vuex', 'Vue Router', 'Sass', 'Axios'],
    },
    {
        logo: '/images/fidar.png',
        title: 'Front-End Developer',
        companyName: 'Fidar Data Inc.',
        location: 'Shahrood, IR',
        types: [{ text: 'Part-time', color: 'cyan' }],
        from: 'Apr 2019',
        to: 'Jul 2019',
        description: [
            'Developed Vue.js interfaces for managing mining vehicles and operational data, connected to backend APIs.',
        ],
        skills: [
            'Vue.js',
            'Vuex',
            'Vue Router',
            'Sass',
            'Bootstrap',
            'Axios',
        ],
        links: [
            {
                title: 'Company Website',
                link: 'https://fdni.ir/fdni/',
                color: 'white',
            },
            {
                title: 'VSM Detail',
                link: 'https://fdni.ir/fdni/project/vsm/',
                color: 'yellow',
            },
        ],
    },
]
</script>

<style scoped>
.experiences-section {
    padding: 48px 18px 60px;
}

.experiences-inner {
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
    .experiences-section {
        padding: 32px 18px 40px;
    }
}
</style>
