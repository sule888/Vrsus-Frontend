<template>
    <div class="spinner">
        <div class="spinner1"></div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.spinner {
    background-image: linear-gradient(var(--secondary-color) 35%, var(--primary-color));
    width: 50px;
    height: 50px;
    animation: spinning82341 1.7s linear infinite, hue 1s ease-in-out infinite;
    text-align: center;
    border-radius: 50px;
    filter: blur(1px);
    box-shadow: 0px -5px 20px 0px var(--secondary-color), 0px 5px 20px 0px var(--primary-color);
}

.spinner1 {
    background-color: var(--primary-background-color);
    width: 50px;
    height: 50px;
    border-radius: 50px;
    filter: blur(10px);
}

@keyframes spinning82341 {
    to {
        transform: rotate(360deg);
    }
}

@keyframes hue {
    0% {
        filter: hue-rotate(0deg);
    }

    100% {
        filter: hue-rotate(360deg);
    }
}
</style>