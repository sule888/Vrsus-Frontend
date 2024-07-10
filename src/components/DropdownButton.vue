<template>
    <div class="dropdown-container">
        <button class="btn dropdown-button" @click="toggleDropdown" :class="buttonColor">
            <slot></slot>
            <font-awesome-icon icon="chevron-down" :class="{ open: isDropdownOpen }" />
        </button>
        <div v-if="isDropdownOpen" class="dropdown-content">
            <RouterLink href="#option1" v-for="(option, index) in options" :key="index" :to="option.rute"> {{
                option.title }}</RouterLink>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
const isDropdownOpen = ref(false)
const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value
}

const props = defineProps({
    buttonColor: {
        type: String,
        default: 'primary-color'
    },
    options: {
        type: Array,
        default: () => {
            []
        }
    }
})
</script>
<style scoped>
.primary-color {
    border: var(--primary-color) var(--border-width-buttons) solid;
}

.dropdown-container {
    position: relative;
    display: inline-block;
    width: auto;
    margin: 0 30px;
}

.dropdown-button {
    border-radius: var(--border-radius-button);
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    background-color: transparent;
    color: white;
    cursor: pointer;
    font-size: var(--normal-text);
}

.dropdown-content {
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: transparent;
    z-index: 1;
    color: white;
    border-radius: 4px;
    margin-top: 5px;
    width: 100%;

}

.dropdown-content a {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    width: 100%;
}

.dropdown-content a:last-child {
    border-bottom: none;
}

.dropdown-content a:hover {
    color: var(--primary-color);
}
</style>
