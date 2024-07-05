<script setup>
import { RouterLink, RouterView } from "vue-router";
import LoaderFullPage from "@/components/LoaderFullPage.vue";
import CheckboxGradient from "@/components/CheckboxGradient.vue"
</script>

<template>
  <header>
    <div class="wrapper">
      <div style="margin-top: 200px;"></div>
      <CheckboxGradient checkboxText="fnasdkj"> </CheckboxGradient>
      <div style="margin-left: 200px;">
        <LoaderFullPage loaderTextColor="support-color-text" loaderColor="support-color-loader"> </LoaderFullPage>

      </div>

    </div>

  </header>

  <RouterView />
</template>

<style scoped>
.tooltip-container {
  position: relative;
  background: black;
  cursor: pointer;
  font-size: 17px;
  padding: 0.7em 1.8em;
}
</style>
