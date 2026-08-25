<template>
    <StarsSection />
    <IntroSection />
    <HighlightsSection />
    <ExperiencesSection />
    <EducationSection />
    <CertificatesSection />
    <ContactMeSection />
</template>

<script setup>
definePageMeta({
    layout: 'custom',
})

const siteUrl = 'https://hosseinmirhosseini76.github.io/'
const ogImage = `${siteUrl}images/og-linkedin.png`
const title = 'Seyed Hossein Mirhosseini | Senior Front-End Engineer'
const description =
    'Senior Front-End Engineer with 6+ years of experience in Vue.js, Nuxt.js, and TypeScript. Building scalable web apps, monorepos, and reusable UI systems for remote and international teams.'

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    twitterTitle: title,
    twitterDescription: description,
    ogType: 'website',
    ogUrl: siteUrl,
    ogImage,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageType: 'image/png',
    ogImageAlt: 'Seyed Hossein Mirhosseini — Senior Front-End Engineer',
    twitterCard: 'summary_large_image',
    twitterImage: ogImage,
})

useHead({
    htmlAttrs: {
        lang: 'en',
    },
    link: [
        {
            rel: 'canonical',
            href: siteUrl,
        },
        {
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico',
        },
    ],
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Seyed Hossein Mirhosseini',
                jobTitle: 'Senior Front-End Engineer',
                url: siteUrl,
                sameAs: [
                    'https://github.com/hosseinmirhosseini76',
                    'https://linkedin.com/in/hosseinmirhosseini76',
                ],
                email: 'mailto:hosseinmirhosseini76@gmail.com',
                knowsAbout: [
                    'Vue.js',
                    'Nuxt.js',
                    'TypeScript',
                    'JavaScript',
                    'Front-End Architecture',
                ],
            }),
        },
    ],
})
</script>
