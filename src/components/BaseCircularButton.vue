<template>
    <button class="btn circular-btn" :class="buttonColor">
        <slot></slot>
    </button>
</template>

<script setup>
const props = defineProps({
    buttonColor: {
        type: String,
        default: "primary-color"
    }
})

</script>

<style scoped>
.circular-btn {
    font-size: var(--circular-buttons-text);
    border-radius: var(--border-radius-circular-button);
    padding: 10px 20px;
    border-radius: var(--border-radius-button);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.primary-color {
    border: solid var(--primary-color) var(--border-width-buttons)
}

.secondary-color {
    border: solid var(--secondary-color) var(--border-width-buttons)
}

.primary-color:hover {
    background-color: var(--primary-color);
    color: var(--black);
}

.secondary-color:hover {
    background-color: var(--secondary-color);
}
</style>