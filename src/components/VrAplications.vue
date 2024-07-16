<template>
    <div style="display: flex;  margin-top: 100px; flex-direction: column; gap: 30px;">
        <div class="title">Aplicaciones de la Realidad Aumentada </div>
        <div class="grid-cont">
            <CardMain :configurationCards="cards" :cardAction="handleCardAction" />
        </div>
        <div :class="['cont-more-information', { 'visible': isMoreInfoVisible }]" ref="moreInfoContainer">
            <h2>{{ selectedCardTitle }}</h2>
            <p>{{ selectedCardMoreInfo }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import CardMain from '@/components/CardMain.vue';

const router = useRouter();
const cards = ref([
    {
        cardType: 'vr-aplications',
        title: "Aplicacion 1",
        multimedy: [
            {
                src: "src/assets/img/test/opcion-juego1.jpg",
                alt: "hola"
            }
        ],
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ut iure et voluptas doloribus ad dolorem illum blanditiis accusamus autem? Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        actionButtons: [
            {
                buttonTitle: "Ver mas detalles",
                action: "details",
                buttonType: 'primary-color'
            },
            {
                buttonTitle: "Contactanos",
                action: 'contact',
                buttonType: 'secondary-color'
            }
        ],
        icons: [],
        masInformacion: "Más información sobre Aplicacion 1."
    },
    {
        cardType: 'vr-aplications',
        title: "Aplicacion 2",
        multimedy: [
            {
                src: "src/assets/img/test/portada-juego2.jpeg",
                alt: "adios"
            }
        ],
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ut iure et voluptas doloribus ad dolorem illum blanditiis accusamus autem? Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        actionButtons: [
            {
                buttonTitle: "Ver mas detalles",
                action: "details",
                buttonType: 'primary-color'
            },
            {
                buttonTitle: "Contactanos",
                action: 'contact',
                buttonType: 'secondary-color'
            }
        ],
        icons: [],
        masInformacion: "Más información sobre Aplicacion 2."
    },
    {
        cardType: 'vr-aplications',
        title: "Aplicacion 1",
        multimedy: [
            {
                src: "src/assets/img/test/opcion-juego1.jpg",
                alt: "hola"
            }
        ],
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ut iure et voluptas doloribus ad dolorem illum blanditiis accusamus autem? Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        actionButtons: [
            {
                buttonTitle: "Ver mas detalles",
                action: "details",
                buttonType: 'primary-color'
            },
            {
                buttonTitle: "Contactanos",
                action: 'contact',
                buttonType: 'secondary-color'
            }
        ],
        icons: [],
        masInformacion: "Más información sobre Aplicacion 1."
    },
    {
        cardType: 'vr-aplications',
        title: "Aplicacion 2",
        multimedy: [
            {
                src: "src/assets/img/test/portada-juego2.jpeg",
                alt: "adios"
            }
        ],
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ut iure et voluptas doloribus ad dolorem illum blanditiis accusamus autem? Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        actionButtons: [
            {
                buttonTitle: "Ver mas detalles",
                action: "details",
                buttonType: 'primary-color'
            },
            {
                buttonTitle: "Contactanos",
                action: 'contact',
                buttonType: 'secondary-color'
            }
        ],
        icons: [],
        masInformacion: "Más información sobre Aplicacion 2."
    },
    // Añade más tarjetas según sea necesario
]);

const moreInfoContainer = ref(null);
const selectedCardTitle = ref('');
const selectedCardMoreInfo = ref('');
const isMoreInfoVisible = ref(false);

const handleCardAction = (action, card) => {
    if (action === 'details') {
        selectedCardTitle.value = card.title;
        selectedCardMoreInfo.value = card.masInformacion;
        isMoreInfoVisible.value = true;
        if (moreInfoContainer.value) {
            moreInfoContainer.value.scrollIntoView({ behavior: 'smooth' });
        }
    } else if (action === 'contact') {
        router.push('/contact');
    }
};
</script>

<style scoped>
.cont-more-information {
    margin-top: 2rem;
    padding: 1rem;
    border: 2px solid #ccc;
    transition: all 1s ease;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    border-radius: var(--border-radius-normal-button);
}

.cont-more-information.visible {
    max-height: 500px;
    opacity: 1;
}
</style>
