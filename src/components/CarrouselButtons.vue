<template>
    <button class="button-opacity button" @click="buttonAction">
        <slot></slot>
    </button>

</template>

<script setup>
const props = defineProps({
    buttonAction: {
        type: Function,
        required: true
    }
})
</script>

<style scoped>
.button {
    border-radius: var(--border-radius-arrow-buttons);
    height: 50px;
    width: 50px;
    border: none;
    cursor: pointer;
    color: var(--white);
    font-size: 20px;
    text-align: center;
}

.button-opacity {
    position: relative;
    overflow: hidden;
    background-color: rgba(0, 0, 0, .15);

}

.button-opacity::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.15);
    z-index: 0;
    transition: 0.9s all ease;
}

button:hover:before,
button:focus:before {
    transition: 0.9s all ease;
    left: 0;
    right: 0;
    opacity: 1;
}

button:active {
    transform: scale(0.9);
}
</style>