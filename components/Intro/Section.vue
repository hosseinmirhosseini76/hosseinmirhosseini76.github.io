<template>
    <div class="intro-section my-bg-dark">
        <div class="text-wrapper">
            <div class="text font-ps2p my-text-light no-select">
                <div id="whoami">&lt;info</div>
                <div :class="$vuetify.display.mdAndDown ? 'mll-5' : 'mll-10'">
                    field="<span class="my-text-green">Front-End Dev</span
                    >"
                </div>
                <div :class="$vuetify.display.mdAndDown ? 'mll-5' : 'mll-10'">
                    lovely-framework="<span class="my-text-orange">Vue.js</span
                    >"
                </div>
                <div :class="$vuetify.display.mdAndDown ? 'mll-5' : 'mll-10'">
                    work-with="[<span class="my-text-green">
                        <br />
                        <div
                            :class="
                                $vuetify.display.mdAndDown ? 'mll-5' : 'mll-10'
                            "
                        >
                            'Nuxt.js',
                        </div>
                        <div
                            :class="
                                $vuetify.display.mdAndDown ? 'mll-5' : 'mll-10'
                            "
                        >
                            'Vuetify.js',
                        </div>
                        <div
                            :class="
                                $vuetify.display.mdAndDown ? 'mll-5' : 'mll-10'
                            "
                        >
                            'Vuex',
                        </div>
                        <div
                            :class="
                                $vuetify.display.mdAndDown ? 'mll-5' : 'mll-10'
                            "
                        >
                            'Pinia',
                        </div>
                    </span>]"
                </div>
                <div :class="$vuetify.display.mdAndDown ? 'mll-5' : 'mll-10'">
                    birth-date="<span class="my-text-green">09/25/1997</span>"
                </div>
                <div :class="$vuetify.display.mdAndDown ? 'mll-5' : 'mll-10'">
                    :hobies="[
                    <span class="my-text-green">
                        <br />
                        <div
                            :class="
                                $vuetify.display.mdAndDown ? 'mll-5' : 'mll-10'
                            "
                        >
                            'Learn',
                        </div>
                        <div
                            :class="
                                $vuetify.display.mdAndDown ? 'mll-5' : 'mll-10'
                            "
                        >
                            'Music',
                        </div>
                        <div
                            :class="
                                $vuetify.display.mdAndDown ? 'mll-5' : 'mll-10'
                            "
                        >
                            'Walking'
                        </div>
                        <div
                            :class="
                                $vuetify.display.mdAndDown ? 'mll-5' : 'mll-10'
                            "
                        >
                            'Futsal'
                        </div>
                    </span>]"
                </div>
                <div>/&gt;</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.intro-section {
    width: 100vw;
    padding-top: 100px;
    padding-bottom: 100px;

    .text-wrapper {
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;

        .text {
            display: flex;
            z-index: 9;
            height: inherit;
            font-size: clamp(1rem, 1.5vw, 1.5rem);
            font-weight: 600;
            flex-direction: column;
            justify-content: center;
        }
    }
}
</style>
