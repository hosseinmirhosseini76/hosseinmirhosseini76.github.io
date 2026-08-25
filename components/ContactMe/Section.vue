<template>
    <section
        id="contact-me"
        class="contact-me v-col-12 d-flex justify-center my-bg-dark"
        aria-labelledby="contact-heading"
    >
        <div class="v-col-md-8 v-col-12 contact-inner">
            <div class="title-section">
                <SectionTitle text="Contact" />
            </div>
            <h2 id="contact-heading" class="visually-hidden">Contact</h2>

            <div class="content-section">
                <p class="lead text-Exo2-Medium my-text-light">
                    Open to Full-Stack Developer roles with remote and
                    international teams building ambitious, well-engineered
                    products.
                </p>
                <p class="support text-Exo2-Regular my-text-light">
                    If you are hiring for Vue / Nuxt and Laravel platforms,
                    production e-commerce or SaaS, or end-to-end product
                    engineering, I would be glad to connect.
                </p>

                <ul class="contact-links" aria-label="Contact links">
                    <li>
                        <a
                            class="contact-link text-Exo2-Bold"
                            href="mailto:hosseinmirhosseini76@gmail.com"
                        >
                            <Icon
                                icon="logos:google-gmail"
                                width="28"
                                height="28"
                                aria-hidden="true"
                            />
                            <span>Email</span>
                        </a>
                    </li>
                    <li>
                        <a
                            class="contact-link text-Exo2-Bold"
                            href="https://linkedin.com/in/hosseinmirhosseini76"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon
                                icon="logos:linkedin-icon"
                                width="28"
                                height="28"
                                aria-hidden="true"
                            />
                            <span>LinkedIn</span>
                        </a>
                    </li>
                    <li>
                        <a
                            class="contact-link text-Exo2-Bold"
                            href="https://github.com/hosseinmirhosseini76"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon
                                icon="mdi:github"
                                width="28"
                                height="28"
                                class="my-text-light"
                                aria-hidden="true"
                            />
                            <span>GitHub</span>
                        </a>
                    </li>
                    <li>
                        <a
                            class="contact-link text-Exo2-Bold"
                            href="https://t.me/hosseinmirhosseini76"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon
                                icon="logos:telegram"
                                width="28"
                                height="28"
                                aria-hidden="true"
                            />
                            <span>Telegram</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.contact-me {
    padding: 48px 18px 80px;

    .contact-inner {
        max-width: 960px;
        margin: 0 auto;
        padding: 0;
    }

    .title-section {
        margin-bottom: 24px;
    }

    .lead {
        font-size: clamp(1.15rem, 2vw, 1.65rem);
        line-height: 1.45;
        max-width: 42ch;
        margin-bottom: 14px;
    }

    .support {
        font-size: clamp(1rem, 1.4vw, 1.15rem);
        line-height: 1.6;
        max-width: 62ch;
        opacity: 0.92;
        margin-bottom: 28px;
    }

    .contact-links {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
    }

    .contact-link {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        min-height: 48px;
        padding: 10px 16px;
        text-decoration: none;
        color: var(--light-color);
        border: 2px solid rgba(250, 248, 235, 0.28);
        transition: border-color 0.2s ease, color 0.2s ease;

        &:hover,
        &:focus-visible {
            border-color: var(--green-color);
            color: var(--green-color);
            outline: none;
        }
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
}

@media (max-width: 960px) {
    .contact-me {
        padding: 32px 18px 64px;
    }
}
</style>
