<template>
    <div class="margin-between-components main-cont">
        <div class="part-title subtitles">En VRsus,<p class="gradient-color">estamos redefiniendo la experiencia de la
                realidad
                virtual
            </p> y llevando la
            tecnología al siguiente nivel
        </div>
        <div class="flex-cont">
            <div class="flex-img-text" v-for="(row, index) in multimedy" :key="index" :class="row.class">
                <p class="text-img-part">{{ row.text }}</p>
                <img :src="row.src" :alt="row.alt" class="img-about-us" :class="row.class" @click="openImage(index)">
            </div>

            <div v-if="selectedImage !== null" class="overlay" @touchstart="startTouch" @touchmove="moveTouch"
                @click="closeImage">
                <CarrouselButtons @click.stop="prevImage" class="carrousel-btn">
                    <font-awesome-icon icon="chevron-down" :class="{ open: isDropdownOpen }"
                        style=" transform: rotate(90deg);" />
                </CarrouselButtons>
                <div class="carrousel-multemedy-part"><img :src="multimedy[selectedImage].src"
                        :alt="multimedy[selectedImage].alt" class="full-image" @click.stop />
                    <p>{{ multimedy[selectedImage].alt }}</p>
                </div>
                <CarrouselButtons @click.stop="nextImage" class="carrousel-btn">
                    <font-awesome-icon icon="chevron-down" :class="{ open: isDropdownOpen }"
                        style=" transform: rotate(-90deg);" />
                </CarrouselButtons>

            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import CarrouselButtons from './CarrouselButtons.vue';

const multimedy = [
    {
        src: 'src/assets/img/img-vrsus/local-frontal-mujer.jpg',
        alt: 'Local exterior',
        class: 'right',
        text: 'Somos una empresa dedicada a ofrecer soluciones avanzadas y experiencias inmersivas que capturan la imaginación y abren nuevas posibilidades tanto para el entretenimiento como para aplicaciones profesionales.'
    },
    {
        src: 'src/assets/img/img-vrsus/local-logo.jpg',
        alt: 'Local interior',
        class: 'left',
        text: 'Nos esforzamos por ser líderes en innovación tecnológica, asegurando que cada interacción con nuestros productos y servicios deje una impresión duradera.'
    },
    {
        src: 'src/assets/img/img-vrsus/local-rosa1.jpg',
        alt: 'Local interior',
        class: 'right',
        text: 'En VRsus, nuestra misión es crear y proporcionar experiencias de realidad virtual únicas y de alta calidad que inspiren, entretengan y eduquen a personas de todas las edades.'
    }
]


const selectedImage = ref(null)

const openImage = (index) => {
    selectedImage.value = index
}

const closeImage = () => {
    selectedImage.value = null
}

const prevImage = () => {
    if (selectedImage.value !== null) {
        selectedImage.value = (selectedImage.value - 1 + multimedy.length) % multimedy.length
    }
}

const nextImage = () => {
    if (selectedImage.value !== null) {
        selectedImage.value = (selectedImage.value + 1) % multimedy.length
    }
}

let touchStartX = 0

const startTouch = (e) => {
    touchStartX = e.touches[0].clientX
}

const moveTouch = (e) => {
    if (touchStartX === 0) {
        return
    }
    const touchEndX = e.touches[0].clientX
    const diffX = touchStartX - touchEndX

    if (diffX > 50) {
        nextImage()
    } else if (diffX < -50) {
        prevImage()
    }
    touchStartX = 0
}
</script>


<style scoped>
.main-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
}

.part-title {
    text-align: center;
}

.flex-cont {
    width: 80%;
    display: flex;
    column-gap: 100px;
    flex-direction: column;
    row-gap: 50px;
}

.flex-img-text {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    column-gap: 15%;
    row-gap: 100px;
    align-items: center;
}

.right {
    direction: rtl;
    gap: 50px;
}

.right img {
    box-shadow: 0px 0px 20px 1px var(--primary-color);
}

.left img {
    box-shadow: 0px 0px 20px 1px var(--secondary-color);
}

.img-about-us {
    object-fit: cover;
    width: 100%;
    transition: transform 0.2s;
    cursor: pointer;
}

.img-about-us:hover {
    transform: scale(1.1);
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    flex-direction: row;
    gap: 20px;
    padding: 10px;
    box-sizing: border-box;
}

.overlay img {
    max-width: 100%;
    align-self: center;
    height: auto;
    border-radius: var(--border-radius-cards);
    max-height: 80vh;
}

.carrousel-multemedy-part {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
}

.text-img-part {
    font-size: var(--normal-text);
    text-align: center;
}

.nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.8);
    border: none;
    padding: 10px;
    cursor: pointer;
}

.close-button {
    background: rgba(255, 255, 255, 0.8);
    border: none;
    padding: 10px;
    cursor: pointer;
    margin-top: 20px;
}

@media (max-width: 800px) {
    .carrousel-btn {
        display: none;
    }

    .overlay img {
        width: 50%;
    }
}
</style>
