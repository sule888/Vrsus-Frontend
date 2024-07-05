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
    background: transparent;
}

.primary-color {
    border: solid var(--primary-color) var(--border-width-buttons)
}

.secondary-color {
    border: solid var(--secondary-color) var(--border-width-buttons)
}
</style>