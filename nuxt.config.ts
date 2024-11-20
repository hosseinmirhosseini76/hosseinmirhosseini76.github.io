export default defineNuxtConfig({
    app: {
        baseURL: '/',
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: "Seyed Hossein Mirhosseini",
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
