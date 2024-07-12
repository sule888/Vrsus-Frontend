<template>
    <div class="background">
        <div class="main-cont">
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
                    <CardMain :configurationCards="visibleCards"></CardMain>
                </div>
                <CarrouselButtons v-if="!isLastSlide" @click="nextSlide">
                    <font-awesome-icon icon="chevron-down" style="transform: rotate(-90deg);" />
                </CarrouselButtons>
            </div>
            <div class="extra-info"></div>
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
import { ref, computed } from 'vue'
import CarrouselButtons from './CarrouselButtons.vue'
import CardMain from './CardMain.vue'

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
        title: "",
        multimedy: [
            {
                src: 'src/assets/img/test/portada-juego1.jpeg',
                alt: 'imagen'
            }
        ],
        title: 'Title 1',
        text: 'Excepteur sint st laborum',
        actionButtons: [
            {
                buttonTitle: "Ver mas Detalles",
                action: ''
            },
            {
                buttonTitle: "Contactanos",
                action: ''
            }
        ],
        icons: [],
        price: null
    },
    {
        cardType: "vrsus-proyects",
        title: "",
        multimedy: [
            {
                src: 'src/assets/img/test/poster de modal.jpg',
                alt: 'imagen'
            }
        ],
        title: 'Title 2',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        actionButtons: [
            {
                buttonTitle: "Ver mas Detalles",
                action: ''
            },
            {
                buttonTitle: "Contactanos",
                action: ''
            }
        ],
        icons: [],
        price: null
    },
    {
        cardType: "vrsus-proyects",
        title: "",
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
                action: ''
            },
            {
                buttonTitle: "Contactanos",
                action: ''
            }
        ],
        icons: [],
        price: null
    },
    {
        cardType: "vrsus-proyects",
        title: "",
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
                action: ''
            },
            {
                buttonTitle: "Contactanos",
                action: ''
            }
        ],
        icons: [],
        price: null
    },
    {
        cardType: "vrsus-proyects",
        title: "",
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
                action: ''
            },
            {
                buttonTitle: "Contactanos",
                action: ''
            }
        ],
        icons: [],
        price: null
    },
    {
        cardType: "vrsus-proyects",
        title: "",
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
                action: ''
            },
            {
                buttonTitle: "Contactanos",
                action: ''
            }
        ],
        icons: [],
        price: null
    }, {
        cardType: "vrsus-proyects",
        title: "",
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
                action: ''
            },
            {
                buttonTitle: "Contactanos",
                action: ''
            }
        ],
        icons: [],
        price: null
    },

];
const currentSlide = ref(0)
const cardsPerSlide = 4
const totalSlides = computed(() => Math.ceil(cards.length / cardsPerSlide))
const isFirstSlide = computed(() => currentSlide.value === 0);
const isLastSlide = computed(() => currentSlide.value === totalSlides.value - 1);


const visibleCards = computed(() => {
    const start = currentSlide.value * cardsPerSlide
    return cards.slice(start, start + cardsPerSlide)
})

const prevSlide = () => {
    if (currentSlide.value > 0) {
        currentSlide.value -= 1
    } else {
        currentSlide.value = totalSlides.value - 1
    }
}

const nextSlide = () => {
    if (currentSlide.value < totalSlides.value - 1) {
        currentSlide.value += 1
    } else {
        currentSlide.value = 0
    }
}

</script>

<style scoped>
.background {
    background: linear-gradient(to right, #000038, #2d0134);
    width: auto;
}

.main-cont {
    margin: 50px 5%;
    display: flex;
    flex-direction: column;
    row-gap: 50px;
}

.carrousel {
    display: flex;
    align-items: center;
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
</style>
