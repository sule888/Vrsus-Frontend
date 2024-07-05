<template>
    <div>
        <BaseNormalButton :class="buttonColor">
            <slot></slot>
        </BaseNormalButton>
    </div>
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

.secondary-color {
    border: var(--secondary-color) solid var(--border-width-buttons);
}

.secondary-color:hover {
    box-shadow: 0px 0px 20px 1px var(--secondary-color);
}
</style>