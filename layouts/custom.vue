<template>
    <div class="position-relative">
        <a class="skip-link" href="#about">Skip to content</a>
        <NavigationItemsSection />
        <main id="main-content">
            <NuxtPage />
        </main>
    </div>
</template>

<style scoped>
.skip-link {
    position: absolute;
    left: 12px;
    top: -48px;
    z-index: 1000;
    background: var(--green-color);
    color: var(--dark-color);
    padding: 10px 14px;
    text-decoration: none;
    font-family: sans-serif;
}

.skip-link:focus {
    top: 12px;
}
</style>
