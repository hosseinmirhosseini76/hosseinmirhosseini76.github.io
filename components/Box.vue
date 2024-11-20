<template>
    <div
        :class="[!hideLayer ? 'd-flex justify-center align-center' : '']"
        class="box"
        @click="emitCalled()"
    >
        <div v-if="!hideLayer" class="box-underLayer"></div>
        <div class="content">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'

const emit = defineEmits(['clicked'])

const id = useId()

const props = defineProps({
    hideLayer: {
        type: Boolean,
        default: false,
    },
    borderColor: {
        type: String,
        default: function () {
            return 'var(--orange-color)'
        },
    },
    rippleColor: {
        type: String,
        default: function () {
            return 'var(--green-color)'
        },
    },
})

const borderColor = ref('')
const rippleColor = ref('')

onBeforeMount(() => {
    borderColor.value = props.borderColor
    rippleColor.value = props.rippleColor
})

const emitCalled = () => {
    emit('clicked', 'OK')
}
</script>

<style scoped lang="scss">
.box {
    position: relative;
    width: auto; /* Set a width for the box */
    height: auto; /* Set a height for the box */
    padding: 20px;
    overflow: hidden;

    .content {
        z-index: 9;
    }

    .box-underLayer {
        position: absolute;
        z-index: 1;
        top: 100%;
        left: -100%;
        inset: 1;
        width: 100%;
        height: 100%;
        background-color: v-bind(rippleColor);
        clip-path: polygon(
            0 0,
            calc(100% - 30px) 0,
            100% 30px,
            100% 100%,
            30px 100%,
            0 calc(100% - 30px)
        );
        transition: all 0.2s ease-in-out;
    }

    &:hover {
        &::before {
            background: v-bind(rippleColor);
        }

        .box-underLayer {
            top: 0;
            left: 0;
        }
    }

    &:before {
        transition: background 0.2s ease-in-out;
        content: '';
        position: absolute;
        inset: 0;
        background: v-bind(borderColor);
        clip-path: polygon(
            0 0,
            calc(100% - 30px) 0,
            100% 30px,
            100% 100%,
            30px 100%,
            0 calc(100% - 30px),
            0 0,
            4px 4px,
            4px calc(100% - 30px - 3.31px),
            calc(30px + 3.31px) calc(100% - 4px),
            calc(100% - 4px) calc(100% - 4px),
            calc(100% - 4px) calc(30px + 3.31px),
            calc(100% - 30px - 3.31px) 4px,
            4px 4px
        );
    }
}
</style>
