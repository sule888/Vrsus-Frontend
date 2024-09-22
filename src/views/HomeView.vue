<template>
    <div>
        <div class="sections-whit-margin">
            <TheHero />
            <TheAboutUs />
        </div>
        <TheVrsusProyects />
        <div class="sections-whit-margin">
            <TheVrAplications />
        </div>
        <TheUbications />
        <div class="sections-whit-margin">
            <TheReviews />
        </div>

    </div>
</template>

<script setup>
import TheHero from "@/components/TheHero.vue"
import TheAboutUs from "@/components/TheAboutUs.vue";
import TheVrsusProyects from "@/components/TheVrsusProyects.vue"
import TheVrAplications from "@/components/TheVrAplications.vue";
import TheUbications from "@/components/TheUbications.vue"
import TheReviews from "@/components/TheReviews.vue"
</script>

<style scoped></style>