<template>
    <div class="contact-me v-col-12 d-flex justify-center my-bg-dark no-select">
        <v-col md="8" cols="12">
            <div id="contact-me" class="title-section">
                <SectionTitle text="Contact Me" />
            </div>
            <div class="content-section">
                <div class="v-row ma-0">
                    <div class="v-col-md-6 v-col-12 pa-0">
                        <span class="text text-Exo2-Medium my-text-light">
                            If you want to start a start-up<br />
                            and need a teammate, just text me 👨‍💻
                        </span>
                    </div>
                    <div
                        class="v-col-md-6 v-col-12 pa-0 pt-md-0 pt-6 d-flex flex-columns justify-md-end justify-center"
                    >
                        <NuxtLink href="https://t.me/hosseinmirhosseini76">
                            <Icon
                                icon="logos:telegram"
                                width="50"
                                height="50"
                            ></Icon>
                        </NuxtLink>
                        <NuxtLink
                            href="https://x.com/hossein__dev"
                            class="px-3"
                        >
                            <Icon
                                icon="pajamas:twitter"
                                width="50"
                                height="50"
                                class="my-text-light"
                            ></Icon>
                        </NuxtLink>
                        <NuxtLink href="mailto:hosseinmirhosseini76@gmail.com">
                            <Icon
                                icon="logos:google-gmail"
                                width="60"
                                height="50"
                            ></Icon>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </v-col>
    </div>
</template>

<style scoped lang="scss">
.contact-me {
    .content-section {
        .text {
            font-size: clamp(1.3rem, 2.3vw, 4rem);
        }
    }
}
</style>
