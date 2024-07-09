<template>
    <div class="counter-cont">
        <BaseNormalButton counterButtons="secondary-color" class="counter-button" @click="increaseValue">+
        </BaseNormalButton>
        <slot></slot>
        <BaseNormalButton counterButtons="secondary-color" class="counter-button" @click="decreaseValue">-
        </BaseNormalButton>
    </div>
</template>

<script setup>
import BaseNormalButton from "@/components/BaseNormalButton.vue"
const props = defineProps({
    decreaseValue: {
        type: Function,
        required: true
    },
    increaseValue: {
        type: Function,
        required: true
    }
})

</script>

<style scoped>
.counter-cont {
    display: flex;
    gap: 30px;
    max-width: 120px;
    align-items: center;
    text-align: center;
}

.counter-button {
    padding: 8px 15px
}

.counter-button:hover:before,
.counter-button:focus:before {
    transition: 0.1s all ease;
    left: 0;
    right: 0;
    opacity: 1;
}

.counter-button:active {
    transform: scale(0.9);
}
</style>