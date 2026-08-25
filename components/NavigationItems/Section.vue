<template>
    <nav class="site-nav" aria-label="Primary">
        <div class="site-nav-bar">
            <a href="#about" class="brand font-ps2p my-text-light">SHM</a>

            <ul class="desktop-links">
                <li v-for="item in items" :key="item.to">
                    <a :href="item.to" class="nav-chip font-ps2p">
                        <span>{{ item.text }}</span>
                    </a>
                </li>
            </ul>

            <div class="nav-actions">
                <button
                    class="menu-toggle"
                    type="button"
                    :aria-expanded="menuOpen"
                    aria-controls="mobile-nav-panel"
                    :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
                    @click="menuOpen = !menuOpen"
                >
                    <span class="menu-toggle-box" aria-hidden="true">
                        <span :class="['burger', { open: menuOpen }]"></span>
                    </span>
                </button>
            </div>
        </div>

        <Teleport to="body">
            <div
                v-show="menuOpen"
                class="mobile-nav-backdrop"
                @click="menuOpen = false"
            />
            <div
                id="mobile-nav-panel"
                class="mobile-nav-panel"
                :class="{ open: menuOpen }"
                :aria-hidden="!menuOpen"
            >
                <p class="mobile-kicker font-ps2p my-text-green">Navigate</p>
                <ul class="mobile-links">
                    <li v-for="item in items" :key="`m-${item.to}`">
                        <a
                            :href="item.to"
                            class="mobile-link"
                            @click="menuOpen = false"
                        >
                            <Box>
                                <span class="font-ps2p my-text-light">
                                    {{ item.text }}
                                </span>
                            </Box>
                        </a>
                    </li>
                </ul>
            </div>
        </Teleport>
    </nav>
</template>

<script setup lang="ts">
const menuOpen = ref(false)

const items = [
    { text: 'About', to: '#about' },
    { text: 'Highlights', to: '#highlights' },
    { text: 'Experience', to: '#experiences' },
    { text: 'Education', to: '#educations' },
    { text: 'Contact', to: '#contact-me' },
]

onMounted(() => {
    window.addEventListener('keydown', onEscape)
    window.addEventListener('resize', onResize)
})

onUnmounted(() => {
    window.removeEventListener('keydown', onEscape)
    window.removeEventListener('resize', onResize)
    document.body.style.overflow = ''
})

const onEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
        menuOpen.value = false
    }
}

const onResize = () => {
    if (window.innerWidth >= 961) {
        menuOpen.value = false
    }
}

watch(menuOpen, (open) => {
    document.body.style.overflow = open ? 'hidden' : ''
})
</script>
