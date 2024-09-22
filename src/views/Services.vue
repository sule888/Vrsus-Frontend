<template>
    <div style="z-index: 1; margin: 0 5%;">
        <p class="title text-center mt-100">¡Bienvenido a Vrsus, el lugar perfecto para celebrar tus eventos en
            un entorno único en la ciudad!</p>
        <p class="subtitles-extra">En Vrsus, ofrecemos paquetes que se adaptan a tus necesidades y preferencias,
            asegurando que tu evento sea inolvidable. Ya sea que prefieras una experiencia completamente personalizada,
            un evento sin preocupaciones con todos los servicios incluidos, o una reunión en la que tú decidas los
            detalles, tenemos la opción ideal para ti.
        </p>
        <br><br>
        <span class="subtitles">A continuación, te presentamos nuestros</span>
        <span class="subtitles gradient-color">tres paquetes principales:</span>

        <div class="cont-cards">
            <CardPacks v-for="(pack, index) in packs" :key="index" :cardSettings="pack" />
        </div>
        <div class="calendar-options-cont">

            <div class="calendar-cont">

                <VCalendar expanded borderless transparent :initial-page="{ month: 9, year: 2024 }"
                    :color="selectedColor" :attributes="attrs" />

            </div>
            <div class="options">
                <p>Horario: </p>
                <div class="schedule">
                    <NormalButton class="width" v-for="horario in selectedPack.scheduleOptions.horarios" :key="horario">
                        {{ horario }}
                    </NormalButton>
                </div>
                <p>Elige el local de tu preferencia </p>
                <div class="local">

                    <NormalButton class="width" v-for="local in selectedPack.scheduleOptions.local" :key="local">
                        {{ local }}
                    </NormalButton>
                </div>
                <p>Escoge el numero de personas prara la reservavion </p>
                <div class="people">

                    <div class="people-counter">
                        <NormalButton @click="decrementPersonas" class="width-counter "> - </NormalButton>
                        <span>{{ selectedPersonas }}</span>
                        <NormalButton @click="incrementPersonas" class="width-counter "> + </NormalButton>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import CardPacks from '@/components/CardPacks.vue';
import NormalButton from '@/components/NormalButton.vue';

const selectedColor = ref('Red');
const attrs = ref([
    {
        key: 'today',
        dot: true,
        highlight: true,
        dates: new Date(),
    }
]);
const selectedPersonas = ref(20);  // Valor por defecto de personas

// Función para incrementar personas
const incrementPersonas = () => {
    const maxPersonas = Math.max(...selectedPack.value.scheduleOptions.personas);
    if (selectedPersonas.value < maxPersonas) {
        selectedPersonas.value++;
    }
};

// Función para decrementar personas
const decrementPersonas = () => {
    const minPersonas = Math.min(...selectedPack.value.scheduleOptions.personas);
    if (selectedPersonas.value > minPersonas) {
        selectedPersonas.value--;
    }
};

const packs = [{
    cardType: 'support-color',
    title: 'Paquete Vrsus Zero',
    icons: [
        {
            src: 'src/assets/img/img-cards/among-us-verde.png',
            alt: 'Among Us Verde'
        },
        {
            src: 'src/assets/img/img-cards/among-us-rojo.png',
            alt: 'Among Us Rojo'
        }
    ],
    description: {
        duracion: 5,
        unidadesDeTiempo: 'horas',
        capacidad: 20,
        contenido: []
    },
    nota: 'El tiempo de juego se cobra por separado.',
    price: 1900,
    scheduleOptions: {
        horarios: ['10:00 AM - 1:00 PM', '2:00 PM - 5:00 PM', '6:00 PM - 9:00 PM'],
        local: ['Vrsus Plaza las Americas', 'Vrsus Plaza Sendero las Torres'],
        personas: [10, 15, 20]
    }
}, {
    cardType: 'secondary-color',
    title: 'Paquete Vrsus Full',
    icons: [
        {
            src: 'src/assets/img/img-cards/minecraft.png',
            alt: 'Minecraft'
        },
    ],
    description: {
        duracion: 5,
        unidadesDeTiempo: 'horas',
        capacidad: 20,
        contenido: ['2 horas de acceso a más de 30 juegos y experiencias de nuestro catálogo', '4 rebanadas de pizza por persona',
            'Botana', 'Bebida', 'Decoracion', 'Pastel', 'Desechables', 'Musica'
        ]
    },
    nota: '',
    price: 5700,
    scheduleOptions: {
        horarios: ['11:00 AM - 2:00 PM', '3:00 PM - 6:00 PM', '7:00 PM - 10:00 PM'],
        local: ['Vrsus Plaza las Americas', 'Vrsus Plaza Sendero las Torres'],
        personas: [15, 20, 25]
    }
}, {
    cardType: 'primary-color',
    title: 'Paquete Vrsus Reunion',
    icons: [
        {
            src: 'src/assets/img/img-cards/tetris2.png',
            alt: 'Tetris'
        },
        {
            src: 'src/assets/img/img-cards/tetris.png',
            alt: 'Tetris'
        }
    ],
    description: {
        duracion: 5,
        unidadesDeTiempo: 'horas',
        capacidad: 20,
        contenido: ['2 horas de acceso a tus juegos favoritos y nuevas experiencias']
    },
    nota: '',
    price: 1900,
    scheduleOptions: {
        horarios: ['12:00 PM - 3:00 PM', '4:00 PM - 7:00 PM', '8:00 PM - 11:00 PM'],
        local: ['Vrsus Plaza las Americas', 'Vrsus Plaza Sendero las Torres'],
        personas: [10, 20, 30]
    }
}];

const selectedPack = ref(packs[0]); // Cambia según el paquete seleccionado
</script>


<style scoped>
.cont-cards {
    margin-top: 100px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
    gap: 10%;
}

.calendar-cont {
    background-image: var(--gradient-calendar-background-color);
    display: inline-block;
    border-radius: var(--border-radius-cards);

}

.calendar-options-cont {
    margin-top: 90px;
    display: grid;
    gap: 10%;
    grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
}


.schedule {
    margin-top: 20px;
    display: grid;
    column-gap: 30px;
    row-gap: 20px;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));

}

.width {
    width: auto;
}

.width-counter {
    width: 50px;
}

.local {
    display: flex;
    gap: 20px;

}

.options {
    display: flex;
    flex-direction: column;
    gap: 35px;
}

.people-counter {
    display: flex;
    gap: 20px;
    align-items: center;
}
</style>
