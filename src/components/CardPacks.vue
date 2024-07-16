<template>
    <div class="card" :class="cardSettings.cardType">
        <div style="">
            <div class="title-part subtitles">
                Paquete Vrsus {{ cardSettings.title }}
            </div>
            <div class="description-part">
                <span>Duracion: {{ cardSettings.description.duracion }} {{ cardSettings.description.unidadesDeTiempo
                    }}</span>
                <span>Capacidad: Hasta {{ cardSettings.description.capacidad }} personas</span>
                <div class="note-part" v-if="cardSettings.nota != ''">
                    {{ cardSettings.nota }}
                </div>
                <div class="descripcion-icon">
                    <div>
                        <ul v-for="(contenido, index) in cardSettings.description.contenido" :key="index">
                            <li> {{ contenido }}</li>
                        </ul>
                    </div>

                    <img v-if="cardSettings.icons.length > 1" :src="cardSettings.icons[1].src"
                        :alt="cardSettings.icons[1].alt">
                </div>

            </div>
        </div>
        <div class="price-icon">
            <img :src="cardSettings.icons[0].src" :alt="cardSettings.icons[0].alt">
            <p> ${{ cardSettings.price }}</p>

        </div>

    </div>
</template>

<script setup>
const props = defineProps({
    cardSettings: {
        type: Object,
        default: () => ({
            cardType: 'primary-color',
            title: 'select',
            icons: [],
            description: {
                duracion: null,
                unidadesDeTiempo: 'horas',
                capacidad: null,
                contenido: '',

            },
            nota: '',
            price: null
        })
    }
})
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: auto;
    justify-content: space-between;
    height: auto;
    border-radius: var(--border-radius-cards);
    max-width: 400px;
    padding: 20px;
    transition: 0.5s;
}

.title-part {
    margin-bottom: 20px;
}

.descripcion-icon {
    display: flex;
    justify-content: space-between;
}

ul li {
    list-style: inside;
}

img {
    max-width: auto;
    height: auto;
}

.price-icon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* Alinea los elementos verticalmente al centro */
    margin-top: auto;
}

.price-icon p {
    text-align: end;
    font-size: 24px;
}

.description-part {
    display: flex;
    flex-direction: column;
    gap: 10px;

}

.card:hover {
    transform: translateY(-20px);
    cursor: pointer;
}

.primary-color {
    border: var(--primary-color) solid var(--border-width-buttons);
}


.primary-color:hover {
    box-shadow: 0px 0px 20px 3px var(--primary-color);
}

.primary-color:focus {
    box-shadow: 0px 0px 30px 4px var(--primary-color);
}

.primary-color:active {
    box-shadow: 0px 0px 20px 1px var(--primary-color);
}


.secondary-color {
    border: var(--border-width-buttons) var(--secondary-color) solid;
}

.secondary-color:active {
    box-shadow: 0px 0px 20px 3px var(--secondary-color);
}

.secondary-color:hover {
    box-shadow: 0px 0px 30px 3px var(--secondary-color);
}

.secondary-color:focus {
    box-shadow: 0px 0px 30px 4px var(--secondary-color);
}

.support-color {
    border: var(--border-width-buttons) var(--support-color) solid;
}

.support-color:active {
    box-shadow: 0 0 20px 3px var(--support-color);
}

.support-color:hover {
    box-shadow: 0 0 30px 3px var(--support-color);
}

.support-color:focus {
    box-shadow: 0 0 30px 4px var(--support-color);
}
</style>