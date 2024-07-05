<template>
  <button class="btn normal-btn">
    <slot></slot>
  </button>
</template>

<script setup></script>

<style scoped>
.normal-btn {
  font-size: var(--normal-buttons-text);
  border-radius: var(--border-radius-normal-button);
  background-color: transparent;
  max-width: 200px;
  cursor: pointer;
  padding: var(--padding-buttons-normal);
}
</style>
