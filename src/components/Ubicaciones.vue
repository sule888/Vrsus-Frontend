<template>
    <div class="background">
        <div class="main-cont-special-backgrounds">
            <p class="title">Ubicaciones</p>
            <div class="cont-ubi">
                <div v-for="(ubication, index) in ubications" :key="index" class="ubi-item">
                    <img :src="ubication.icon.src" :alt="ubication.icon.alt">
                    <p>{{ ubication.name }}</p>
                    <CircleButton style="width: 60%;" :functionButton="ubication.buttonAction"
                        buttonColor="primary-color">
                        {{
                            ubication.buttonTitle
                        }}</CircleButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { icon } from '@fortawesome/fontawesome-svg-core';
import CircleButton from './CircleButton.vue';

const ubications = [
    {
        name: 'Plaza Sendero las Torres',
        buttonTitle: 'Como llegar',
        icon: {
            src: 'src/assets/img/img-statics/icono-maps-neon.png',
            alt: "icon"
        }
    },
    {
        name: 'Plaza las Americas',
        buttonTitle: 'Como llegar',
        buttonAction: '/Maps',
        icon: {
            src: 'src/assets/img/img-statics/icono-maps-neon.png',
            alt: "icon"
        }
    }
]
</script>

<style scoped>
.background {
    width: auto;
    background-color: var(--secondary-backgound-color);
}

.cont-ubi {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    row-gap: 40px;
}

.ubi-item {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
}

.ubi-item img {
    width: 50%;
    height: auto;
}
</style>