<template>
    <div class="background">
        <div class="main-cont-special-backgrounds">
            <div class="title">
                <p class="title">Proyectos Vrsus</p>
            </div>
            <div class="text">
                <p>En VRsus, utilizamos la tecnología en realidad virtual para asegurarnos de que nuestras experiencias
                    sean inmersivas y realistas. Contamos con equipos de alta gama y software de vanguardia para
                    garantizar que cada sesión sea fluida y libre de interrupciones. Además, nuestros desarrolladores
                    están constantemente innovando para mejorar nuestras ofertas y mantenernos a la vanguardia de la
                    industria.</p>
            </div>
            <div class="carrousel">
                <CarrouselButtons v-if="!isFirstSlide" @click="prevSlide">
                    <font-awesome-icon icon="chevron-down" style=" transform: rotate(90deg);" />
                </CarrouselButtons>

                <div class="carrousel-container">
                    <CardMain :configurationCards="visibleCards" :cardAction="cardAction" @open-modal="openModal" />
                </div>
                <CarrouselButtons v-if="!isLastSlide" @click="nextSlide">
                    <font-awesome-icon icon="chevron-down" style="transform: rotate(-90deg);" />
                </CarrouselButtons>
                <ModalMain :isOpen="isModalOpen" :multimedia="multimedia" :titulo="titulo" :texto="texto"
                    @close="closeModal" />
            </div>
            <div class="extra-info" v-if="showExtraInfo">
                <h2>{{ selectedCard.title }}</h2>
                <p>{{ selectedCard.extraInformation }}</p>
            </div>
            <div class="why-choose-vrsus">
                <p class="subtitles">¿Por que elegir Vrsus?</p>
                <div class="cont-part-text">
                    <div class="cont-text" v-for="(text, index) in textWhyChoose" :key="index">
                        <p style="font-size:var(--subtitles-extra);" class="gradient-color"> {{ text.title }}</p>
                        <p class="text">{{ text.text }}</p>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import CarrouselButtons from './CarrouselButtons.vue'
import CardMain from './CardMain.vue'
import ModalMain from './ModalMain.vue';
const textWhyChoose = [
    {
        title: 'Innovación Continua: ',
        text: 'Nos mantenemos al día con las últimas tendencias y avances en la tecnología VR para ofrecer siempre lo mejor a nuestros clientes.'
    },
    {
        title: 'Experiencia Personalizada: ',
        text: 'Adaptamos nuestras soluciones a las necesidades específicas de cada cliente, asegurando una experiencia única y relevante.'
    },
    {
        title: 'Atención al Cliente: ',
        text: 'Nuestro equipo está dedicado a proporcionar un servicio excepcional y a garantizar que cada cliente esté completamente satisfecho con su experiencia.'
    },
]
const cards = [
    {
        cardType: "vrsus-proyects",
        extraInformation: 'lorejnkajfkdbfbsadjlksjd jdkasnbds fjkdsbf c djs jsadnfkjsbdnf gfsdfkjshskfjasf sadfdjhfksjg tysdjfhskjdhfsd fjkbadjfbsdkfb grtjhkbsjdh frbvhfnxhnbfgdbc fbsgathwyha andhnchdsbagbxzbandjhksbdshfnnchdnfbhcbdnf  vhfbyrhbf xbgvfdvcbgd cbzxvfsgdbc dgteyhrjfjguofo o olobp mxndfbvjhsdvfj shdjasgdsdbfsdhjfjsdhvfas dbfggcbbf   bvbjhsbfigfre qwheiquwgeigqtiqwejhv rgysbldihasvduhverewf web fjafgefwr  rfaefsdfsdv fdhgdfgs menrbkjb ksjdbv s e we vc',
        multimedy: [
            {
                src: 'src/assets/img/SampleVideo_1280x720_1mb.mp4',
                alt: 'imagen',
                poster: 'src/assets/img/test/opcion-juego6.jpeg'
            }
        ],
        title: 'Title 1',
        text: 'Excepteur sint st laborum',
        actionButtons: [
            {
                buttonTitle: "Ver mas Detalles",
                action: 'details'
            },
            {
                buttonTitle: "Contactanos",
                action: 'contact'
            }
        ],
        icons: [],
        price: null
    },
    {
        cardType: "vrsus-proyects",
        extraInformation: 'lorejnkajfkdbfbsadjlksjd jdkasnbds fjkdsbf c djs jsadnfkjsbdnf gfsdfkjshskfjasf sadfdjhfksjg tysdjfhskjdhfsd fjkbadjfbsdkfb grtjhkbsjdh frbvhfnxhnbfgdbc fbsgathwyha andhnchdsbagbxzbandjhksbdshfnnchdnfbhcbdnf  vhfbyrhbf xbgvfdvcbgd cbzxvfsgdbc dgteyhrjfjguofo o olobp mxndfbvjhsdvfj shdjasgdsdbfsdhjfjsdhvfas dbfggcbbf   bvbjhsbfigfre qwheiquwgeigqtiqwejhv rgysbldihasvduhverewf web fjafgefwr  rfaefsdfsdv fdhgdfgs menrbkjb ksjdbv s e we vc',
        multimedy: [
            {
                src: 'src/assets/img/V1-0081_URSA Mini_1_2016-09-20_1006_C0031.mp4',
                alt: 'imagen',
                poster: 'src/assets/img/test/perfil.jpeg'
            }
        ],
        title: 'Title 2',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        actionButtons: [
            {
                buttonTitle: "Ver mas Detalles",
                action: 'details'
            },
            {
                buttonTitle: "Contactanos",
                action: 'contact'
            }
        ],
        icons: [],
        price: null
    },
    {
        cardType: "vrsus-proyects",
        extraInformation: 'lorejnkajfkdbfbsadjlksjd jdkasnbds fjkdsbf c djs jsadnfkjsbdnf gfsdfkjshskfjasf sadfdjhfksjg tysdjfhskjdhfsd fjkbadjfbsdkfb grtjhkbsjdh frbvhfnxhnbfgdbc fbsgathwyha andhnchdsbagbxzbandjhksbdshfnnchdnfbhcbdnf  vhfbyrhbf xbgvfdvcbgd cbzxvfsgdbc dgteyhrjfjguofo o olobp mxndfbvjhsdvfj shdjasgdsdbfsdhjfjsdhvfas dbfggcbbf   bvbjhsbfigfre qwheiquwgeigqtiqwejhv rgysbldihasvduhverewf web fjafgefwr  rfaefsdfsdv fdhgdfgs menrbkjb ksjdbv s e we vc',
        multimedy: [
            {
                src: 'src/assets/img/test/poster de modal.jpg',
                alt: 'imagen'
            }
        ],
        title: 'Title 3',
        text: 'Excepteur est laborum',
        actionButtons: [
            {
                buttonTitle: "Ver mas Detalles",
                action: 'details'
            },
            {
                buttonTitle: "Contactanos",
                action: 'contact'
            }
        ],
        icons: [],
        price: null
    },
    {
        cardType: "vrsus-proyects",
        extraInformation: 'lorejnkajfkdbfbsadjlksjd jdkasnbds fjkdsbf c djs jsadnfkjsbdnf gfsdfkjshskfjasf sadfdjhfksjg tysdjfhskjdhfsd fjkbadjfbsdkfb grtjhkbsjdh frbvhfnxhnbfgdbc fbsgathwyha andhnchdsbagbxzbandjhksbdshfnnchdnfbhcbdnf  vhfbyrhbf xbgvfdvcbgd cbzxvfsgdbc dgteyhrjfjguofo o olobp mxndfbvjhsdvfj shdjasgdsdbfsdhjfjsdhvfas dbfggcbbf   bvbjhsbfigfre qwheiquwgeigqtiqwejhv rgysbldihasvduhverewf web fjafgefwr  rfaefsdfsdv fdhgdfgs menrbkjb ksjdbv s e we vc',
        multimedy: [
            {
                src: 'src/assets/img/test/poster de modal.jpg',
                alt: 'imagen'
            }
        ],
        title: 'Title 4',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        actionButtons: [
            {
                buttonTitle: "Ver mas Detalles",
                action: 'details'
            },
            {
                buttonTitle: "Contactanos",
                action: 'contact'
            }
        ],
        icons: [],
        price: null
    },
    {
        cardType: "vrsus-proyects",
        extraInformation: 'lorejnkajfkdbfbsadjlksjd jdkasnbds fjkdsbf c djs jsadnfkjsbdnf gfsdfkjshskfjasf sadfdjhfksjg tysdjfhskjdhfsd fjkbadjfbsdkfb grtjhkbsjdh frbvhfnxhnbfgdbc fbsgathwyha andhnchdsbagbxzbandjhksbdshfnnchdnfbhcbdnf  vhfbyrhbf xbgvfdvcbgd cbzxvfsgdbc dgteyhrjfjguofo o olobp mxndfbvjhsdvfj shdjasgdsdbfsdhjfjsdhvfas dbfggcbbf   bvbjhsbfigfre qwheiquwgeigqtiqwejhv rgysbldihasvduhverewf web fjafgefwr  rfaefsdfsdv fdhgdfgs menrbkjb ksjdbv s e we vc',
        multimedy: [
            {
                src: 'src/assets/img/test/poster de modal.jpg',
                alt: 'imagen'
            }
        ],
        title: 'Title 5',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        actionButtons: [
            {
                buttonTitle: "Ver mas Detalles",
                action: 'details'
            },
            {
                buttonTitle: "Contactanos",
                action: 'contact'
            }
        ],
        icons: [],
        price: null
    },
    {
        cardType: "vrsus-proyects",
        extraInformation: 'lorejnkajfkdbfbsadjlksjd jdkasnbds fjkdsbf c djs jsadnfkjsbdnf gfsdfkjshskfjasf sadfdjhfksjg tysdjfhskjdhfsd fjkbadjfbsdkfb grtjhkbsjdh frbvhfnxhnbfgdbc fbsgathwyha andhnchdsbagbxzbandjhksbdshfnnchdnfbhcbdnf  vhfbyrhbf xbgvfdvcbgd cbzxvfsgdbc dgteyhrjfjguofo o olobp mxndfbvjhsdvfj shdjasgdsdbfsdhjfjsdhvfas dbfggcbbf   bvbjhsbfigfre qwheiquwgeigqtiqwejhv rgysbldihasvduhverewf web fjafgefwr  rfaefsdfsdv fdhgdfgs menrbkjb ksjdbv s e we vc',
        multimedy: [
            {
                src: 'src/assets/img/test/opcion-juego-3.jpeg',
                alt: 'imagen'
            }
        ],
        title: 'Title 1',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        actionButtons: [
            {
                buttonTitle: "Ver mas Detalles",
                action: 'details'
            },
            {
                buttonTitle: "Contactanos",
                action: 'contact'
            }
        ],
        icons: [],
        price: null
    }, {
        cardType: "vrsus-proyects",
        extraInformation: 'lorejnkajfkdbfbsadjlksjd jdkasnbds fjkdsbf c djs jsadnfkjsbdnf gfsdfkjshskfjasf sadfdjhfksjg tysdjfhskjdhfsd fjkbadjfbsdkfb grtjhkbsjdh frbvhfnxhnbfgdbc fbsgathwyha andhnchdsbagbxzbandjhksbdshfnnchdnfbhcbdnf  vhfbyrhbf xbgvfdvcbgd cbzxvfsgdbc dgteyhrjfjguofo o olobp mxndfbvjhsdvfj shdjasgdsdbfsdhjfjsdhvfas dbfggcbbf   bvbjhsbfigfre qwheiquwgeigqtiqwejhv rgysbldihasvduhverewf web fjafgefwr  rfaefsdfsdv fdhgdfgs menrbkjb ksjdbv s e we vc',
        multimedy: [
            {
                src: 'src/assets/img/test/portada-juego2.jpeg',
                alt: 'imagen'
            }
        ],
        title: 'Title 1',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        actionButtons: [
            {
                buttonTitle: "Ver mas Detalles",
                action: 'details'
            },
            {
                buttonTitle: "Contactanos",
                action: 'contact'
            }
        ],
        icons: [],
        price: null
    },

];

const selectedCard = ref(null);
const showExtraInfo = ref(false);
const showCardDetails = (card) => {
    selectedCard.value = card;
    showExtraInfo.value = true;
};

const cardAction = (card) => {
    showCardDetails(card);
};


const currentSlide = ref(0);
const cardsPerSlide = ref(4);
const updateCardsPerSlide = () => {
    const width = window.innerWidth;
    if (width <= 750) {
        cardsPerSlide.value = 1;
    } else if (width <= 1400) {
        cardsPerSlide.value = 2;
    } else {
        cardsPerSlide.value = 4;
    }
};

onMounted(() => {
    updateCardsPerSlide();
    window.addEventListener('resize', updateCardsPerSlide);
});

// calcula la cantidad de cards pra mostrar en cada slide
const totalSlides = computed(() => Math.ceil(cards.length / cardsPerSlide.value));
// maneja la visibilidad de los botones de direccion 
const isFirstSlide = computed(() => currentSlide.value === 0);
const isLastSlide = computed(() => currentSlide.value === totalSlides.value - 1);


const visibleCards = computed(() => {
    const start = currentSlide.value * cardsPerSlide.value;
    return cards.slice(start, start + cardsPerSlide.value);
});

const prevSlide = () => {
    if (currentSlide.value > 0) {
        currentSlide.value -= 1;
    } else {
        currentSlide.value = totalSlides.value - 1;
    }
};

const nextSlide = () => {
    if (currentSlide.value < totalSlides.value - 1) {
        currentSlide.value += 1;
    } else {
        currentSlide.value = 0;
    }
};

const isModalOpen = ref(false);
const multimedia = ref([]);
const titulo = ref('');
const texto = ref('');

const openModal = (card) => {
    multimedia.value = card.multimedy.map(item => {
        if (item.src.endsWith('.mp4')) {
            return { ...item, type: 'video', mimeType: 'video/mp4' };
        }
        return { ...item, type: 'image' };
    });
    titulo.value = card.title;
    texto.value = card.extraInformation;
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};

</script>

<style scoped>
.background {
    background: linear-gradient(to right, #000038, #2d0134);
    width: auto;
}

.carrousel {
    display: flex;
    align-items: center;
    gap: 10px;
}

.carrousel-container {
    overflow: hidden;
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: row;
    transition: transform 0.5s ease;
    /* Añadir transición suave */
}

.cont-part-text {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    justify-content: space-between;
    gap: 50px;
}

.why-choose-vrsus {
    display: flex;
    gap: 50px;
    flex-direction: column;
}

.why-choose-vrsus .cont-text {
    display: flex;
    gap: 20px;
    flex-direction: column;
}

.extra-info {
    height: auto;
    width: 100%;

}
</style>