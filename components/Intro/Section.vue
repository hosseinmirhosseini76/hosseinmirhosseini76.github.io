<template>
    <section
        id="about"
        class="intro-section my-bg-dark d-flex justify-center"
        aria-labelledby="about-heading"
    >
        <div class="v-col-md-8 v-col-12 intro-inner">
            <div class="title-section">
                <h2 id="about-heading" class="section-heading">
                    <SectionTitle text="About" />
                </h2>
            </div>

            <div class="about-card">
                <Box hideLayer>
                    <p class="role text-Exo2-ExtraBold my-text-light">
                        Full-Stack Developer
                    </p>
                    <p class="stack text-Exo2-Bold my-text-orange">
                        Vue.js · Nuxt.js · Laravel · Docker · TypeScript
                    </p>
                    <p class="summary text-Exo2-Regular my-text-light">
                        Full-Stack Developer with 9+ years of experience
                        building scalable web applications, SaaS platforms,
                        e-commerce, and admin systems — from Vue/Nuxt
                        front-ends to Laravel APIs and production deploy.
                    </p>
                    <p class="summary text-Exo2-Regular my-text-light">
                        Strong in large-scale apps, reusable component systems,
                        monorepo architecture, Docker/Nginx delivery, legacy
                        modernization, and remote work with international teams.
                    </p>

                    <ul class="focus-list" aria-label="Core strengths">
                        <li
                            v-for="item in strengths"
                            :key="item"
                            class="text-Exo2-Medium my-text-light"
                        >
                            <span class="dot my-bg-green" aria-hidden="true"></span>
                            {{ item }}
                        </li>
                    </ul>

                    <ul class="cta-row" aria-label="Contact links">
                        <li>
                            <a
                                class="nav-chip font-ps2p"
                                href="mailto:hosseinmirhosseini76@gmail.com"
                            >
                                <Icon
                                    icon="logos:google-gmail"
                                    width="18"
                                    height="18"
                                    aria-hidden="true"
                                />
                                <span>Email</span>
                            </a>
                        </li>
                        <li>
                            <a
                                class="nav-chip font-ps2p"
                                href="https://linkedin.com/in/hosseinmirhosseini76"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon
                                    icon="logos:linkedin-icon"
                                    width="18"
                                    height="18"
                                    aria-hidden="true"
                                />
                                <span>LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a
                                class="nav-chip font-ps2p"
                                href="https://github.com/hosseinmirhosseini76"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon
                                    icon="mdi:github"
                                    width="18"
                                    height="18"
                                    class="my-text-light"
                                    aria-hidden="true"
                                />
                                <span>GitHub</span>
                            </a>
                        </li>
                        <li>
                            <a
                                class="nav-chip font-ps2p"
                                href="https://t.me/hosseinmirhosseini76"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon
                                    icon="logos:telegram"
                                    width="18"
                                    height="18"
                                    aria-hidden="true"
                                />
                                <span>Telegram</span>
                            </a>
                        </li>
                    </ul>
                </Box>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const strengths = [
    'End-to-end product delivery (UI, API, deploy)',
    'Vue / Nuxt architecture & reusable UI systems',
    'Laravel APIs, Docker, and production operations',
    'Remote collaboration with international teams',
]
</script>

<style scoped lang="scss">
.intro-section {
    padding: 48px 18px 60px;
}

.intro-inner {
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

.about-card > :deep(.box) {
    padding: 22px 18px;
}

.role {
    font-size: clamp(1.4rem, 3.2vw, 2rem);
    line-height: 1.25;
    margin: 0 0 8px;
}

.stack {
    font-size: clamp(1rem, 1.6vw, 1.25rem);
    line-height: 1.45;
    margin: 0 0 20px;
}

.summary {
    font-size: clamp(0.95rem, 1.4vw, 1.15rem);
    line-height: 1.6;
    margin: 0 0 12px;
    opacity: 0.95;
}

.focus-list {
    list-style: none;
    margin: 18px 0 0;
    padding: 0;
    display: grid;
    gap: 10px;
}

.focus-list li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: clamp(0.95rem, 1.3vw, 1.1rem);
}

.dot {
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 50%;
    margin-top: 0.55em;
    flex-shrink: 0;
}

.cta-row {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    margin: 24px 0 0;
    padding: 0;
}

.nav-chip {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 36px;
    padding: 8px 12px;
    gap: 8px;
    font-size: 0.62rem;
    letter-spacing: 0.04em;
    text-decoration: none;
    color: var(--light-color);
    position: relative;
    isolation: isolate;
    overflow: hidden;
    clip-path: polygon(
        0 0,
        calc(100% - 10px) 0,
        100% 10px,
        100% 100%,
        10px 100%,
        0 calc(100% - 10px)
    );

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 0;
        background: var(--orange-color);
        clip-path: polygon(
            0 0,
            calc(100% - 10px) 0,
            100% 10px,
            100% 100%,
            10px 100%,
            0 calc(100% - 10px),
            0 0,
            2px 2px,
            2px calc(100% - 10px - 1.5px),
            calc(10px + 1.5px) calc(100% - 2px),
            calc(100% - 2px) calc(100% - 2px),
            calc(100% - 2px) calc(10px + 1.5px),
            calc(100% - 10px - 1.5px) 2px,
            2px 2px
        );
        transition: background 0.2s ease;
    }

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        background: var(--green-color);
        transform: translate(-100%, 100%);
        transition: transform 0.2s ease;
    }

    &:hover,
    &:focus-visible {
        color: var(--dark-color);
        outline: none;

        &::after {
            transform: translate(0, 0);
        }

        &::before {
            background: var(--green-color);
        }
    }

    span,
    :deep(svg) {
        position: relative;
        z-index: 1;
        flex-shrink: 0;
    }
}

@media (max-width: 960px) {
    .intro-section {
        padding: 32px 18px 40px;
    }
}
</style>
