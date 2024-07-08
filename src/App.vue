<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
// import ModalMain from "@/components/ModalMain.vue"
// import CircleButton from "./components/CircleButton.vue";
// Ejemplo de pase de props para el componente de cards: 
// const gameCard = {
//   cardType: 'vr-aplications',
//   title: "Aplicacion 1 ",
//   multimedy: [
//     {
//       src: "src/assets/img/test/opcion-juego1.jpg",
//       alt: "hola"
//     }
//   ],
//   text: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ut iure et voluptas doloribus ad dolorem illum blanditiis accusamus autem? Lorem ipsum dolor, sit amet consectetur adipisicing eliitiis accusamus autem?",
//   actionButtons: [
//     {
//       buttonTitle: "Ver mas detalles",
//       // aqui va la ruta a la vista 
//       action: "",
//       buttonType: 'primary-color'
//     },
//     {
//       buttonTitle: "Contactanos",
//       action: '',
//       buttonType: 'secondary-color'
//     }
//   ],
//   icons: []

// }

// Ejemplo de props a componente CounterButtons
// let value = ref(1)
// const increaseValue = () => {
//   if (value.value < 20) {
//     value.value += 1
//   }
// }
// const decreaseValue = () => {
//   if (value.value > 1) {
//     value.value -= 1;
//   }
// }


// Ejemplo para modal 
// const isModalOpen = ref(false);

// const multimedia = ref([
//   // { type: 'image', src: 'src/assets/img/test/opcion-juego-3.jpeg', alt: 'Image 1' },
//   { type: 'video', src: 'src/assets/img/SampleVideo_1280x720_1mb.mp4', mimeType: 'video/mp4' }
// ]);

// const titulo = ref('Modal Title');
// const texto = ref('  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui architecto, ducimus maiores blanditiis nesciunt quidem magni molestias laboriosam commodi rem vitae provident pariatur at itaque ea quaerat unde autem quod?Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui architecto, ducimus maiores blanditiis nesciunt quidem magni molestias laboriosam commodi rem vitae provident pariatur at itaque ea quaerat unde autem quod?Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui architecto, ducimus maiores blanditiis nesciunt quidem magni molestias laboriosam commodi rem vitae provident pariatur at itaque ea quaerat unde autem quod?');

// const openModal = () => {
//   isModalOpen.value = true;
// };

// const closeModal = () => {
//   isModalOpen.value = false;
// };


</script>

<template>

  <header>

    <div class="wrapper">
      <div style="margin-top: 200px;"></div>
      <div style="margin-left: 200px">
        <!-- <CircleButton @click="openModal">Open Modal</CircleButton>
        <ModalMain :isOpen="isModalOpen" :multimedia="multimedia" :titulo="titulo" :texto="texto" @close="closeModal" /> -->
      </div>
    </div>
    <div style="margin-top: 200px;"></div>
  </header>

  <RouterView />


</template>
<style scoped></style>
