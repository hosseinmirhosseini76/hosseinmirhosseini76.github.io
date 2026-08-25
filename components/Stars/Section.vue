<template>
    <header class="canvas-wrapper" aria-label="Introduction">
        <canvas aria-hidden="true" />
        <div class="hero-copy text-center no-select">
            <div class="text font-ps2p my-text-light">
                <AnimaedText text="Seyed" :speed="100" />
                <AnimaedText text="Hossein" :speed="100" />
                <AnimaedText text="Mirhosseini" />
            </div>
            <p class="role text-Exo2-Bold my-text-green">
                Senior Front-End Engineer
            </p>
            <p class="meta text-Exo2-Medium my-text-light">
                Vue.js · Nuxt.js · TypeScript · 6+ Years
            </p>
        </div>
        <div class="mouse-icon v-col-12 pa-0 bg-transparent text-center">
            <Icon
                icon="solar:mouse-minimalistic-outline"
                width="36"
                height="36"
                class="my-text-light"
                aria-hidden="true"
            />
            <span class="visually-hidden">Scroll for more</span>
        </div>
    </header>
</template>

<script setup>
import { nextTick, onMounted } from 'vue'

onMounted(() => {
    nextTick(async () => {
        const STAR_COLOR = '#a09aa7'
        const STAR_SIZE = 3
        const STAR_MIN_SCALE = 0.2
        const OVERFLOW_THRESHOLD = 50
        const STAR_COUNT = (window.innerWidth + window.innerHeight) / 8

        const canvas = document.querySelector('canvas'),
            context = canvas.getContext('2d')

        let scale = 1,
            width = 0,
            height = 0

        let stars = []

        let pointerX, pointerY

        let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 }

        let touchInput = false

        generate()
        resize()
        step()

        window.onresize = resize
        canvas.onmousemove = onMouseMove
        // canvas.ontouchmove = onTouchMove
        canvas.ontouchend = onMouseLeave
        document.onmouseleave = onMouseLeave

        function generate() {
            for (let i = 0; i < STAR_COUNT; i++) {
                stars.push({
                    x: 0,
                    y: 0,
                    z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
                })
            }
        }

        function placeStar(star) {
            star.x = Math.random() * width
            star.y = Math.random() * height
        }

        function recycleStar(star) {
            let direction = 'z'

            let vx = Math.abs(velocity.x),
                vy = Math.abs(velocity.y)

            if (vx > 1 || vy > 1) {
                let axis

                if (vx > vy) {
                    axis = Math.random() < vx / (vx + vy) ? 'h' : 'v'
                } else {
                    axis = Math.random() < vy / (vx + vy) ? 'v' : 'h'
                }

                if (axis === 'h') {
                    direction = velocity.x > 0 ? 'l' : 'r'
                } else {
                    direction = velocity.y > 0 ? 't' : 'b'
                }
            }

            star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE)

            if (direction === 'z') {
                star.z = 0.1
                star.x = Math.random() * width
                star.y = Math.random() * height
            } else if (direction === 'l') {
                star.x = -OVERFLOW_THRESHOLD
                star.y = height * Math.random()
            } else if (direction === 'r') {
                star.x = width + OVERFLOW_THRESHOLD
                star.y = height * Math.random()
            } else if (direction === 't') {
                star.x = width * Math.random()
                star.y = -OVERFLOW_THRESHOLD
            } else if (direction === 'b') {
                star.x = width * Math.random()
                star.y = height + OVERFLOW_THRESHOLD
            }
        }

        function resize() {
            scale = window?.devicePixelRatio || 1

            width = window?.innerWidth * scale
            height = window?.innerHeight * scale

            canvas.width = width
            canvas.height = height

            stars.forEach(placeStar)
        }

        function step() {
            context.clearRect(0, 0, width, height)

            update()
            render()

            requestAnimationFrame(step)
        }

        function update() {
            velocity.tx *= 0.96
            velocity.ty *= 0.96

            velocity.x += (velocity.tx - velocity.x) * 0.8
            velocity.y += (velocity.ty - velocity.y) * 0.8

            stars.forEach((star) => {
                star.x += velocity.x * star.z
                star.y += velocity.y * star.z

                star.x += (star.x - width / 2) * velocity.z * star.z
                star.y += (star.y - height / 2) * velocity.z * star.z
                star.z += velocity.z

                // recycle when out of bounds
                if (
                    star.x < -OVERFLOW_THRESHOLD ||
                    star.x > width + OVERFLOW_THRESHOLD ||
                    star.y < -OVERFLOW_THRESHOLD ||
                    star.y > height + OVERFLOW_THRESHOLD
                ) {
                    recycleStar(star)
                }
            })
        }

        function render() {
            stars.forEach((star) => {
                context.beginPath()
                context.lineCap = 'round'
                context.lineWidth = STAR_SIZE * star.z * scale
                context.globalAlpha = 0.5 + 0.5 * Math.random()
                context.strokeStyle = STAR_COLOR

                context.beginPath()
                context.moveTo(star.x, star.y)

                var tailX = velocity.x * 2,
                    tailY = velocity.y * 2

                // stroke() wont work on an invisible line
                if (Math.abs(tailX) < 0.1) tailX = 0.5
                if (Math.abs(tailY) < 0.1) tailY = 0.5

                context.lineTo(star.x + tailX, star.y + tailY)

                context.stroke()
            })
        }

        function movePointer(x, y) {
            if (typeof pointerX === 'number' && typeof pointerY === 'number') {
                let ox = x - pointerX,
                    oy = y - pointerY

                velocity.tx =
                    velocity.tx + (ox / 8) * scale * (touchInput ? 1 : -1)
                velocity.ty =
                    velocity.ty + (oy / 8) * scale * (touchInput ? 1 : -1)
            }

            pointerX = x
            pointerY = y
        }

        function onMouseMove(event) {
            touchInput = false

            movePointer(event.clientX, event.clientY)
        }

        function onTouchMove(event) {
            touchInput = true

            movePointer(
                event.touches[0].clientX,
                event.touches[0].clientY,
                true
            )

            event.preventDefault()
        }

        function onMouseLeave() {
            pointerX = null
            pointerY = null
        }
    })
})
</script>

<style lang="scss">
.canvas-wrapper {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    background: rgba(47, 43, 51, 1) !important;

    canvas {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .hero-copy {
        position: relative;
        z-index: 2;
        height: inherit;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 18px;
        pointer-events: none;
    }

    .text {
        display: flex;
        font-size: clamp(1.7rem, 4vw, 6rem);
        font-weight: 600;
        flex-direction: column;
        justify-content: center;
        line-height: 1.1;
    }

    .role {
        margin-top: clamp(1rem, 2vw, 1.75rem);
        font-size: clamp(1.05rem, 2vw, 1.75rem);
        letter-spacing: 0.02em;
    }

    .meta {
        margin-top: 0.4rem;
        font-size: clamp(0.9rem, 1.4vw, 1.15rem);
        opacity: 0.9;
    }

    .mouse-icon {
        position: absolute;
        bottom: 30px;
        left: 0;
        right: 0;
        z-index: 2;
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
</style>
