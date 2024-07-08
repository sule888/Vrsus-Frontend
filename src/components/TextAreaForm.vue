<template>
    <div>
        <textarea class="styled-textarea" :placeholder="placehoderText"></textarea>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    placehoderText: {
        type: String,
        default: "Escribe aqui"
    }
})
</script>

<style scoped>
.styled-textarea {
    border: var(--secondary-color) 3px solid;
    border-radius: var(--border-radius-textarea);
    width: 400px;
    height: 200px;
    padding: 10px;
    font-size: 16px;
    resize: none;
    background-color: var(--primary-background-color);
    color: var(--white);
    outline: none;
}
</style>