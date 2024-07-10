<template>
    <div class="cont-hero">
        <div class="title-part">
            <p class="gradient-color">Bienvenidos a Vrsus</p>
            <p>Innovación en Realidad Virtual y Tecnología</p>
        </div>

        <img src="@/assets/img/img-statics/torre-con-gema-escarlata.png" alt="torre" />
        <div class="blur-div"></div>
        <div class="buttons-part">
            <CircleButton buttonColor="primary-color">Nuestros Servicios</CircleButton>
            <DropdownButton :options="productos">
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
    { title: "Quiero ver el catalogo de juegos", rute: "/producto3" }
]

</script>

<style scoped>
.cont-hero {
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.title-part p {
    font-size: var(--titles);
}

.gradient-color {
    background: linear-gradient(to left, #7076ec, #ce8ade);
    background-clip: text;
    -webkit-text-fill-color: transparent;
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
    width: 500px;
    height: auto;
    align-self: center;
}

.buttons-part {
    display: flex;
    justify-content: space-between;
    position: relative;
}
</style>