<template>
  <button class="btn normal-btn" :class="counterButtons">
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  counterButtons: {
    type: String,
    default: "secondary-color"
  }
})
</script>

<style scoped>
.normal-btn {
  font-size: var(--normal-buttons-text);
  border-radius: var(--border-radius-normal-button);
  padding: var(--padding-normal-buttons);
}

.primary-color {
  border: solid var(--border-width-buttons) var(--primary-color);
}


.secondary-color {
  border: solid var(--border-width-buttons) var(--secondary-color);
}
</style>
