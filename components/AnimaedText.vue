<template>
    <div ref="textWrapper">
        <span
            :id="`char-${charIndex}`"
            v-for="(char, charIndex) in props.text.split('')"
            :key="charIndex"
        >
            {{ char }}
        </span>
    </div>
</template>

<script setup>
import { ref, onMounted, useTemplateRef } from 'vue'

const props = defineProps({
    text: String,
    speed: {
        type: [Number, String],
        default() {
            return 100
        },
    },
})

const textWrapperRef = useTemplateRef('textWrapper')

const chertCharsArray = ref(['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'])

//! hooks
onMounted(() => {
    startAnimation()
})

//! methods
const startAnimation = () => {
    for (let i = 0; i < textWrapperRef.value.children.length; i++) {
        changeChar(textWrapperRef.value.children[i])
    }
}

const changeChar = async (target) => {
    let orginalChar = target.innerText
    let counter = 0
    do {
        await new Promise(async (resolve, reject) => {
            await useDelay(Math.floor(Math.random() * 300))
            target.innerText =
                chertCharsArray.value[Math.floor(Math.random() * 10)]
            setTimeout(() => {
                counter++
                resolve()
            }, +props.speed)
        })
    } while (counter < chertCharsArray.value.length)
    target.innerText = orginalChar
}
</script>
