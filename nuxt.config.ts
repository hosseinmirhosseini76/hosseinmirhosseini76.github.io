export default defineNuxtConfig({
    app: {
        baseURL: '/',
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Seyed Hossein Mirhosseini | Senior Front-End Engineer',
            meta: [
                {
                    name: 'description',
                    content:
                        'Senior Front-End Engineer with 6+ years of experience in Vue.js, Nuxt.js, and TypeScript. Building scalable web apps, monorepos, and reusable UI systems.',
                },
                {
                    name: 'author',
                    content: 'Seyed Hossein Mirhosseini',
                },
                {
                    name: 'theme-color',
                    content: '#2f2b33',
                },
                {
                    name: 'robots',
                    content: 'index, follow',
                },
                {
                    property: 'og:image',
                    content:
                        'https://hosseinmirhosseini76.github.io/images/og-linkedin.png',
                },
                {
                    property: 'og:image:width',
                    content: '1200',
                },
                {
                    property: 'og:image:height',
                    content: '630',
                },
            ],
        },
    },
    ssr: true,
    compatibilityDate: '2024-04-03',
    devtools: { enabled: false },
    modules: ['vuetify-nuxt-module', ['@pinia/nuxt', { disableVuex: true }]],
    css: ['~/assets/_main.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    silenceDeprecations: ['legacy-js-api'],
                    additionalData: '@use "~/assets/styles/_colors.scss" as *;',
                },
            },
        },
    },
    plugins: ['~/plugins/iconify.js', '~/plugins/axios.js'],
})
