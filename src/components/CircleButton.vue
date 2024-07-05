<template>
  <div>
    <BaseCircularButton class="button" :class="buttonColor">
      <slot></slot>
    </BaseCircularButton>
  </div>
</template>

<script setup>
import BaseCircularButton from './BaseCircularButton.vue';

const props = defineProps({
  buttonColor: {
    type: String,
    default: "primary-color"
  }
})
</script>

<style scoped>
.primary-color {
  border: 4px solid var(--primary-color);
}

.primary-color:hover {
  background: var(--primary-color);
  box-shadow: 0 0 20px 5px var(--primary-color);
  color: black;
}

.primary-color::before {
  background: var(--primary-color-pressed);
  box-shadow: 0 0 50px 30px var(--primary-color-disabled);
}

.secondary-color {
  border: 4px solid var(--secondary-color);
}

.secondary-color:hover {
  background: var(--secondary-color);
  box-shadow: 0 0 20px 5px var(--secondary-color);
}

.secondary-color::before {
  background: var(--secondary-color-pressed);
  box-shadow: 0 0 50px 30px var(--secondary-color-disabled);
}


button {
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

button:hover {
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  cursor: pointer;
}

button:hover::before {
  -webkit-animation: sh02 0.5s 0s linear;
  -moz-animation: sh02 0.5s 0s linear;
  animation: sh02 0.5s 0s linear;
}

button::before {
  content: '';
  display: block;
  position: absolute;
  top: 7%;
  left: 0%;
  opacity: 0;
  -webkit-transform: skewX(-20deg);
  -moz-transform: skewX(-20deg);
  -ms-transform: skewX(-20deg);
  -o-transform: skewX(-20deg);
  transform: skewX(-20deg);
}

@keyframes sh02 {
  from {
    opacity: 0;
    left: 0%;
  }

  50% {
    opacity: 1;
  }

  to {
    opacity: 0;
    left: 100%;
  }
}

button:active {
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: box-shadow 0.2s ease-in;
  -moz-transition: box-shadow 0.2s ease-in;
  transition: box-shadow 0.2s ease-in;
}
</style>