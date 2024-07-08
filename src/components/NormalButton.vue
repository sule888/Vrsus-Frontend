<template>

    <BaseNormalButton :class="buttonColor">
        <slot></slot>
    </BaseNormalButton>

</template>

<script setup lang="ts">
import BaseNormalButton from "@/components/BaseNormalButton.vue"

const props = defineProps({
    buttonColor: {
        type: String,
        default: "primary-color"
    }
})
</script>

<style scoped>
.primary-color {
    border: var(--primary-color) solid var(--border-width-buttons);
}

.primary-color:hover {
    box-shadow: 0px 0px 20px 1px var(--primary-color);
}

.primary-color:active {
    box-shadow: 0 0 20px 3px var(--primary-color);
}

.primary-color:focus {
    box-shadow: 0px 0px 30px 4px var(--primary-color)
}

.secondary-color {
    border: var(--secondary-color) solid var(--border-width-buttons);
}

.secondary-color:hover {
    box-shadow: 0px 0px 20px 1px var(--secondary-color);
}

.secondary-color:active {
    box-shadow: 0 0 20px 3px var(--secondary-color);
}

.secondary-color:focus {
    box-shadow: 0px 0px 30px 4px var(--secondary-color)
}
</style>