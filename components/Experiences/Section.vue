<template>
    <v-col
        cols="12"
        class="experiences-section my-bg-dark d-flex justify-center"
    >
        <v-col md="8" cols="12">
            <div id="experiences" class="title-section">
                <SectionTitle text="Experiences" />
            </div>
            <div class="items-section">
                <v-row noGutters>
                    <template v-for="(item, itemIndex) in items">
                        <ExperiencesCard :item="item" />
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
        logo: '/images/interactivo.logo.svg',
        title: 'Front-End Team Lead',
        companyName: 'Interactivo.io LLC',
        location: 'New York, US',
        types: [
            {
                text: 'Full Time',
                color: 'amber',
            },
            {
                text: 'Remote',
                color: 'cyan',
            },
        ],
        from: 'Aug 2022',
        to: 'Oct 2024',
        description: [
            "Developed and implemented features using the Vue.js framework with the assistance of Vuetify.js in order to enhance the functionality and user experience of the web application.",
            "Migration of the end-user app from Vue.js 2 to version 3 to improve performance and keep it up-to-date.",
            "Refactoring massive and legacy code bases using best practices for better maintainability and scalability.",
            "Making the back-office and end-user applications multilingual with Vue-i18n so that all users around the world can easily use them.",
            "Enhanced development efficiency and accelerated speed by separating the back office application from the end-user application.",
            "To ensure inclusivity and reach a wider audience, the website was made more accessible based on the WCAG (Web Content Accessibility Guidelines) guidelines.",
            "Designing the entire back-office application in XD and converting it into code to ensure a better user experience and ease of use.",
            "Redesigning the logo and logotype.",
        ],
        skills: [
            'Vue.js 2, 3',
            'Vuetify.js 2, 3',
            'Vuex',
            'Vue-i18n',
            'Vue-router',
            'Vee-Validate',
            'Vite',
            'Sass',
            'axios',
            'Lottiefiles',
            'chart.js',
            'lodash',
            'moment',
            'jquery',
            'Trello',
            'ClickUp',
        ],
        links: [
            {
                title: 'Company Website',
                link: 'https://interactivo.io/',
                color: "blue",
            },
            {
                title: 'Main App',
                link: 'https://main.interactivo.io',
                color: "cyan",
            },
        ]
    },
    {
        logo: '/images/ryca.jpg',
        title: 'Front-End Team Lead',
        companyName: 'Ryca',
        location: 'Shahrood, IR',
        types: [
            {
                text: 'Full Time',
                color: 'amber',
            },
            {
                text: 'Hybrid',
                color: 'pink',
            },
        ],
        from: 'Jan 2021',
        to: 'Aug 2022',
        description: [
            "Nuxt.js and Vue.js combined with Vuetify.js were used to create three large-scale web applications from the SCRATCH.",
            "Components and features writing with a high degree of accuracy and quality.",
            "Designing a role-based administration panel for Carvan app that can be easily used by anyone.",
            "UI/UX principles are used in all apps designed according to best practices.",
            "Implemented Sentry tool for reporting and collecting bugs automatically.",
            "Managing the Front-End team to make the application more efficient and effective.",
        ],
        skills: [
            'Nuxt.js 2',
            'Vue.js 2',
            'Vuetify.js 2',
            'Vuex',
            'Vue-i18n',
            'Vue-router',
            'Sass',
            'axios',
            'chart.js',
            'lodash',
            'moment',
            'jquery',
            'Trello',
        ],
        links: [
            {
                title: 'Carvann Website',
                link: 'https://carvann.ir/',
                color: "teal-accent-3",
            },
            {
                title: 'Carvann Panel',
                link: 'https://panel.carvann.ir/',
                color: "teal",
            },
            {
                title: 'MS Market',
                link: 'https://msmarket.ir/',
                color: "purple",
            },
        ]
    },
    {
        logo: '/images/superz.png',
        title: 'Front-End Team Lead',
        companyName: 'Superz',
        location: 'Shahrood, IR',
        types: [
            {
                text: 'Part Time',
                color: 'cyan',
            },
        ],
        from: 'Oct 2019',
        to: 'Sep 2020',
        description: [
            'Developed SSR web applications that display categorized and optimized products from all online supermarkets available.',
            "Confronted with a wide range of challenges in developing SSR, we ultimately managed to resolve them all.",
            "We've separated the mobile app from the desktop app to enhance performance and improve maintainability.",
            "Implemented Sentry tool for reporting and collecting bugs automatically.",
            "All of the apps were created with the principles of UI/UX design in mind.",
        ],
        skills: [
            'SSR',
            'Nuxt.js 2',
            'Vue.js 2',
            'Vuex',
            'Vue-router',
            'Sass',
            'axios',
            'moment',
            'jquery',
            'Jira',
        ],
        links: [
            {
                title: 'Superz App',
                link: 'https://superz.ir/',
                color: "var(--orange-color)",
            },
        ]
    },
    {
        logo: '/images/uniplus.png',
        title: 'Founder & Developer',
        companyName: 'UniPlus',
        location: 'Shahrood, IR',
        types: [
            {
                text: 'Self Employed',
                color: 'amber',
            },
        ],
        from: 'Jul 2019',
        to: 'Oct 2019',
        description: [
            "Developed an app aimed at helping university students enhance their daily lives.",
            "There are many features that can simplify the process of finding a roommate, travel companion, classmate, and more.",
            "Designed app with Vue.js with high quality and maintainable code base."
        ],
        skills: [
            'Vue.js 2',
            'Vuex',
            'Vue-router',
            'Sass',
            'axios',
            'moment',
            'jquery',
            'Trello',
        ],
    },
    {
        logo: '/images/fidar.png',
        title: 'Frontend Developer',
        companyName: 'Fidar Data Inc.',
        location: 'Shahrood, IR',
        types: [
            {
                text: 'Part Time',
                color: 'cyan',
            },
        ],
        from: 'Apr 2019',
        to: 'Jul 2019',
        description: [
            'Vue.js was utilized to develop large-scale web applications from the ground up for managing mining vehicles.',
            'There are numerous features available for managing all aspects related to vehicles used in mines.',
            'There are numerous features available for managing all aspects related to vehicles used in mines.',
        ],
        skills: [
            'Vue.js 2',
            'Vuex',
            'Vue-router',
            'Sass',
            'Bootstrap',
            'axios',
            'jquery',
            'Jira',
        ],
        links: [
            {
                title: 'Fidar Company Website',
                link: 'https://fdni.ir/fdni/',
                color: "white",
            },
            {
                title: 'VSM Detail',
                link: 'https://fdni.ir/fdni/project/vsm/',
                color: "yellow",
            },
        ]
    },
    {
        logo: '/images/cert.png',
        title: 'Junior Web Developer',
        companyName: 'CERT SUT',
        location: 'Shahrood, IR',
        types: [
            {
                text: 'Part Time',
                color: 'cyan',
            },
        ],
        from: 'Sep 2018',
        to: 'Apr 2019',
        description: [
            "I began my career journey from that point, exploring various opportunities and gaining knowledge in multiple technologies.",
            "As a designer, I have created numerous banners, posters, certificates, and other materials.",
            "As a developer, I worked on a large-scale application called ParsPam, which manages and controls remote access. For more details, please see the links below.",
            "I learned a great deal about web development, including topics such as browsers, requests, compatibility issues, cyber attacks, and more.",
        ],
        skills: [
            'Vue.js 2',
            'Vuex',
            'Vue-router',
            'React.js',
            'Angular.js',
            'Sass',
            'Bootstrap',
            'axios',
            'jquery',
            'Jira',
        ],
        links: [
            {
                title: 'ParsPam App Detail',
                link: 'https://fdni.ir/fdni/project/pam/',
                color: "yellow-darken-1",
            },
            {
                title: 'CERT SUT website',
                link: 'https://cert.shahroodut.ac.ir/',
                color: "light-blue-darken-4",
            },
        ]
    },
])
</script>

<style>
.experiences-section {
    padding: 60px 18px;
}

@media (max-width: 960px) {
    .experiences-section {
        padding: 30px 18px;
    }
}
</style>
