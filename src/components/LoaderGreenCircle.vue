<template>
    <div class="loader">
        <div v-for="index in numbersIndex" :key="index" :class="loadingColor" class="orbe" :style="`--index: ${index}`">
        </div>
    </div>

</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    loadingColor: {
        type: String,
        default: "primary-color"
    }
});

const numbersIndex = [0, 1, 2, 3, 4];
</script>


<style scoped>
.support-color::after {
    background-color: var(--support-color);
    box-shadow: 0px 0px 20px 2px var(--support-color);
}

.primary-color::after {
    background-color: var(--primary-color);
    box-shadow: 0px 0px 20px 2px var(--primary-color);
}

.secondary-color::after {
    background-color: var(--secondary-color);
    box-shadow: 0px 0px 20px 2px var(--secondary-color);
}


.loader {
    --size-loader: 50px;
    --size-orbe: 10px;
    width: var(--size-loader);
    height: var(--size-loader);
    position: relative;
    transform: rotate(45deg);
}

.orbe {
    position: absolute;
    width: 100%;
    height: 100%;
    --delay: calc(var(--index) * 0.1s);
    animation: orbit7456 ease-in-out 1.5s var(--delay) infinite;
    opacity: calc(1 - calc(0.2 * var(--index)));
}

.orbe::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: var(--size-orbe);
    height: var(--size-orbe);
    border-radius: 50%;
}

@keyframes orbit7456 {
    0% {}

    80% {
        transform: rotate(360deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>