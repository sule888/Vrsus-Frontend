<template>

    <div style="z-index: 1; ">
        <div style="margin: 100px 5%;">
            <h2>Arrastra para ver mas categorias</h2>
            <br>
            <carousel :items-to-show="settings.itemsToShow" :snap-align="settings.snapAlign"
                :breakpoints="breakpointsCategories">
                <slide v-for="(category, index) in categories" :key="index">
                    <NormalButton buttonColor="primary-color">{{ category.title }}</NormalButton>
                </slide>
            </carousel>

            <p class="title margin"> Los favoritos: </p>
            <carousel :items-to-show="settingsFavorites.itemsToShow" :snap-align="settingsFavorites.snapAlign"
                :breakpoints="breakpointsFavorites">
                <slide v-for="(card, index) in favorites" :key="index">
                    <CardGames :configurationCard="card"></CardGames>
                </slide>
                <template #addons>
                    <Navigation />
                </template>
            </carousel>
        </div>


        <div class="poster">
            <img :src="poster[0].src" alt="">

            <div class="cont-poster-text-buttons">
                <p class="title">{{ poster[0].title }}</p>
                <p>{{ poster[0].text }}</p>
                <div class="poster-buttons">
                    <div v-for="(btn, index) in poster[0].botones" :key="index" style="width: 100%;">
                        <CircleButton :buttonColor="btn.buttonType">{{ btn.buttonTitle }}</CircleButton>
                    </div>
                </div>

            </div>
        </div>
        <div style="margin: 100px 5%;">
            <carousel :items-to-show="settingsFavorites.itemsToShow" :snap-align="settingsFavorites.snapAlign"
                :breakpoints="breakpointsFavorites">
                <slide v-for="(card, index) in favorites" :key="index">
                    <CardGames :configurationCard="card"></CardGames>

                </slide>
                <template #addons>
                    <Navigation />
                </template>
            </carousel>
        </div>

        <div class="poster">
            <img :src="poster[1].src" alt="">

            <div class="cont-poster-text-buttons">
                <p class="title">{{ poster[1].title }}</p>
                <p>{{ poster[1].text }}</p>
                <div class="poster-buttons">
                    <div v-for="(btn, index) in poster[1].botones" :key="index" style="width: 100%;">
                        <CircleButton :buttonColor="btn.buttonType">{{ btn.buttonTitle }}</CircleButton>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import NormalButton from '@/components/NormalButton.vue';
import CardGames from '@/components/CardGames.vue';
import CircleButton from '@/components/CircleButton.vue';

const settings = ref({
    itemsToShow: 1,
    snapAlign: 'center-[odd|even]',
});

const breakpointsCategories = ref({
    300: {
        itemsToShow: 2.5,
        snapAlign: 'center-[odd|even]'
    },
    400: {
        itemsToShow: 3.5,
        snapAlign: 'center-[odd|even]'
    },
    600: {
        itemsToShow: 3.5,
        snapAlign: 'center-[odd|even]'
    },
    500: {
        itemsToShow: 4.5,
        snapAlign: 'center-[odd|even]'
    },
    700: {
        itemsToShow: 5.5,
        snapAlign: 'start',
    },
    1024: {
        itemsToShow: 8.5,
        snapAlign: 'cebter',
    },
});
const settingsFavorites = ref({
    itemsToShow: 1,
    snapAlign: 'center',
})

const breakpointsFavorites = ref({
    700: {
        itemsToShow: 2.5,
        snapAlign: 'center',
    },
    300: {
        itemsToShow: 1.5, 700: {
            itemsToShow: 1.5,
            snapAlign: 'center',
        },
        snapAlign: 'center',
    },
    400: {
        itemsToShow: 1.5,
        snapAlign: 'center',
    },
    600: {
        itemsToShow: 2.5,
        snapAlign: 'center',
    },
    900: {
        itemsToShow: 3.5,
        snapAlign: 'center',
    },


    1024: {
        itemsToShow: 4.5,
        snapAlign: 'start',
    },
})

const categories = [
    {
        title: 'Acción',
        subcategories: [
            'Acción y aventura',
            'Lucha',
            "Hack'n Slash",
            "Beat'em Up",
            'Battle Royale',
            'Espionaje e infiltración'
        ]
    },
    {
        title: 'Shooter',
        subcategories: [
            'FPS',
            'TPS',
            'Looter shooter',
            "Shoot'em Up",
        ]
    },
    {
        title: 'Rol',
        subcategories: [
            'Rol de acción',
            'Rol por turnos ',
            'Rol tácticos',
            'JRPG',
            'Roguelike'
        ]
    },
    {
        title: 'Agilidad mental'
    },
    {
        title: 'MMO'
    },
    {
        title: 'Estrategia',
        subcategories: [
            'TBS',
            'RTS',
            '4X',
            'Estrategia táctica',
            'Defensa de torres',
            'Artillería',
            'MOBA',
            'Auto battler'
        ]
    },
    {
        title: 'Aventura',
        subcategories: [
            'Point & Click',
            'Aventura conversacional y narrativa',
            'Walk Simulator',
            'Película interactiva'
        ]
    },
    {
        title: 'Supervivencia',
    },
    {
        title: 'Terror',
        subcategories: [
            'Survival horror',
            'Terror psicológico'
        ]
    },
    {
        title: 'Plataformas',
        subcategories: [
            '2D',
            '3D'
        ]
    },


    {
        title: 'Musical'
    },
    {
        title: 'Simulación'
    },
    {
        title: 'Arcade'
    },
    {
        title: 'Mundo abierto'
    }
];
const favorites = [
    {
        multimedy: [
            {
                src: "src/assets/img/test/opcion-juego1.jpg",
                alt: "game"
            }
        ],
        text: " amet consectetur adipisicing eliitiis accusamus autem? amet consectetur adipisicing eliitiis accusamus autem? amet consectetur adipisicing eliitiis accusamus autem? amet consectetur adipisicing eliitiis accusamus autem?",
        actionButtons: [
            {
                buttonTitle: "Ver mas informacion",
                // aqui va la ruta a la vista 
                action: "",
                buttonType: 'primary-color'
            },
            {
                buttonTitle: "Apartar",
                action: '',
                buttonType: 'secondary-color'
            }
        ],

    },
    {
        multimedy: [
            {
                src: "src/assets/img/test/opcion-juego1.jpg",
                alt: "game"
            }
        ],
        text: " amet consectetur adipisicing eliitiis accusamus autem? amet consectetur adipisicing eliitiis accusamus autem? amet consectetur adipisicing eliitiis accusamus autem? amet consectetur adipisicing eliitiis accusamus autem?",
        actionButtons: [
            {
                buttonTitle: "Ver mas informacion",
                // aqui va la ruta a la vista 
                action: "",
                buttonType: 'primary-color'
            },
            {
                buttonTitle: "Apartar",
                action: '',
                buttonType: 'secondary-color'
            }
        ],

    },
    {
        multimedy: [
            {
                src: "src/assets/img/test/opcion-juego1.jpg",
                alt: "game"
            }
        ],
        text: " amet consectetur adipisicing eliitiis accusamus autem? amet consectetur adipisicing eliitiis accusamus autem? amet consectetur adipisicing eliitiis accusamus autem? amet consectetur adipisicing eliitiis accusamus autem?",
        actionButtons: [
            {
                buttonTitle: "Ver mas informacion",
                // aqui va la ruta a la vista 
                action: "",
                buttonType: 'primary-color'
            },
            {
                buttonTitle: "Apartar",
                action: '',
                buttonType: 'secondary-color'
            }
        ],

    },
    {
        multimedy: [
            {
                src: "src/assets/img/test/opcion-juego1.jpg",
                alt: "game"
            }
        ],
        text: " amet consectetur adipisicing eliitiis accusamus autem? amet consectetur adipisicing eliitiis accusamus autem? amet consectetur adipisicing eliitiis accusamus autem? amet consectetur adipisicing eliitiis accusamus autem?",
        actionButtons: [
            {
                buttonTitle: "Ver mas informacion",
                // aqui va la ruta a la vista 
                action: "",
                buttonType: 'primary-color'
            },
            {
                buttonTitle: "Apartar",
                action: '',
                buttonType: 'secondary-color'
            }
        ],

    },
    {
        multimedy: [
            {
                src: "src/assets/img/test/opcion-juego1.jpg",
                alt: "game"
            }
        ],
        text: " amet consectetur adipisicing eliitiis accusamus autem? amet consectetur adipisicing eliitiis accusamus autem? amet consectetur adipisicing eliitiis accusamus autem? amet consectetur adipisicing eliitiis accusamus autem?",
        actionButtons: [
            {
                buttonTitle: "Ver mas informacion",
                // aqui va la ruta a la vista 
                action: "",
                buttonType: 'primary-color'
            },
            {
                buttonTitle: "Apartar",
                action: '',
                buttonType: 'secondary-color'
            }
        ],

    },
    {
        multimedy: [
            {
                src: "src/assets/img/test/opcion-juego1.jpg",
                alt: "game"
            }
        ],
        text: " amet consectetur adipisicing eliitiis accusamus autem? amet consectetur adipisicing eliitiis accusamus autem? amet consectetur adipisicing eliitiis accusamus autem? amet consectetur adipisicing eliitiis accusamus autem?",
        actionButtons: [
            {
                buttonTitle: "Ver mas informacion",
                // aqui va la ruta a la vista 
                action: "",
                buttonType: 'primary-color'
            },
            {
                buttonTitle: "Apartar",
                action: '',
                buttonType: 'secondary-color'
            }
        ],

    },

]
const poster = [
    {
        src: 'src/assets/img/test/opcion-juego4.jpeg',
        title: 'BLOOD Y TRUTH',
        text: 'amet consectetur adipisicing eliitiis accusamus autem? amet consectetur adipisicing eliitiis accusamus autem? amet consectetur adipisicing eliitiis accusamus autem? amet consectetur adipisicing eliitiis accusamus autem?',
        botones: [
            {
                action: '',
                buttonTitle: 'Ver mas informacion',
                buttonType: 'secondary-color'
            },
            {
                action: '',
                buttonTitle: 'Apartar',
                buttonType: 'primary-color'
            }
        ]
    },
    {
        src: 'src/assets/img/test/opcion-juego6.jpeg',
        title: 'BLOOD Y TRUTH',
        text: 'amet consectetur adipisicing eliitiis accusamus autem? amet consectetur adipisicing eliitiis accusamus autem? amet consectetur adipisicing eliitiis accusamus autem? amet consectetur adipisicing eliitiis accusamus autem?',
        botones: [
            {
                action: '',
                buttonTitle: 'Ver mas informacion',
                buttonType: 'secondary-color'
            },
            {
                action: '',
                buttonTitle: 'Apartar',
                buttonType: 'primary-color'
            }
        ]
    }
]
const handleCardAction = (action, card) => {

};

</script>

<style>
.cont-carrousel {
    display: flex;
    gap: 60px
}

.margin {
    margin: 40px 0;
}

.poster {
    /* grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr)); */
    display: flex;

}

.poster img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    flex: 2
}

.cont-poster-text-buttons {
    flex: 1;
    background-image: var(--gradient-calendar-background-color);
    padding: 20px;
    display: flex;
    gap: 20px;
    flex-direction: column;
}

.poster-buttons {
    display: flex;
    margin-top: auto;
    justify-content: space-between;
    gap: 20px;
}

@media (max-width: 750px) {
    .poster {
        flex-direction: column;
    }
}
</style>