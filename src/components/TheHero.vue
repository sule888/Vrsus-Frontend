<template>
    <div class="cont-hero margin-between-components">
        <div class="title-part subtitles">
            <p class="gradient-color title">Bienvenidos a Vrsus</p>
            <p>Innovación en Realidad Virtual y Tecnología</p>
        </div>

        <img src="@/assets/img/img-statics/torre-con-gema-escarlata.png" alt="torre" />
        <div class="blur-div"></div>
        <div class="buttons-part">
            <CircleButton buttonColor="primary-color" class="button">Nuestros Servicios</CircleButton>
            <DropdownButton :options="productos" class="button drop">
                <p>Nuestros Productos</p>
            </DropdownButton>
        </div>

    </div>


</template>

<script setup>
import { ref } from "vue";
import DropdownButton from '@/components/DropdownButton.vue'
import CircleButton from "./CircleButton.vue";

const productos = [
    { title: "Quiero apartar un juego", rute: "/producto1" },
    { title: "Quiero apartar mas de un juego", rute: "/producto2" },
    { title: "Quiero ver el catalogo de juegos", rute: "/gamesCatalog" }
]

</script>

<style scoped>
.cont-hero {
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.blur-div {
    top: 230px;
    position: absolute;
    width: 570px;
    height: 550px;
    background-color: rgba(216, 66, 243, 0.3);
    filter: blur(500px);
    z-index: -1;
    left: -70px;
    border-radius: 200px;
}

img {
    width: 50%;
    height: auto;
    align-self: center;
}

.buttons-part {
    display: flex;
    justify-content: space-between;
    position: relative;
    flex-flow: wrap;
    row-gap: 30px;
}

.drop {
    margin: 0 20px;
}

@media (max-width: 600px) {
    .drop {
        margin: 0;
    }
}
</style>