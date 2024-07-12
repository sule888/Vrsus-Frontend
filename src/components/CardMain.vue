<template>
    <div class="card-container">
        <div v-for="(card, index) in configurationCards" :key="index"
            :class="['cont-card-wrapper', card.cardType + '-wrapper']">
            <div class="cont-card" :class="card.cardType">
                <div v-if="card.title" class="title-part subtitles">
                    {{ card.title }}
                </div>
                <div class="multimedy-part" v-if="card.multimedy.length > 0">
                    <img v-for="(item, index) in card.multimedy" :key="index"
                        :src="item.poster ? item.poster : item.src" :alt="item.alt" @click="openModal(card)" />
                </div>
                <div v-if="card.text" class="text-part">
                    {{ card.text }}
                </div>
                <div class="action-buttons-part" v-if="card.actionButtons.length > 0">
                    <CircleButton v-for="(button, index) in card.actionButtons" :key="index"
                        :buttonColor="button.buttonType" @click="handleButtonClick(button.action, card)">
                        {{ button.buttonTitle }}
                    </CircleButton>
                </div>
                <div class="icons-part" v-if="card.icons.length > 0">
                    <img v-for="(img, index) in card.icons" :key="index" :src="img.src" :alt="img.alt" />
                </div>
                <div class="price-part" v-if="card.price !== null">
                    {{ card.price }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    configurationCards: {
        type: Array,
        default: () => ([])
    },
    cardAction: {
        type: Function,
        required: true
    }
});

const emit = defineEmits(['open-modal']);

const router = useRouter();

const handleButtonClick = (action, card) => {
    if (action === 'details') {
        props.cardAction(card);
    } else if (action === 'contact') {
        router.push('/contact');
    }
};

const openModal = (card) => {
    emit('open-modal', card);
};
</script>

<style scoped>
/* Estilos aquí */
</style>



<style scoped>
.cont-card {
    border-radius: var(--border-radius-cards);
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    gap: 20px;
}

.multimedy-part img {
    width: 100%;
    height: auto;
    display: inline-block;
    border-radius: var(--border-radius-cards);
}

.game-card .action-buttons-part {
    display: flex;
    gap: 5px;
    margin: 5px 0;
    justify-content: space-between;
}

.game-card {
    max-width: 330px;
}

.vrsus-proyects .action-buttons-part {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: auto;
}

.vrsus-proyects {
    min-height: 540px;
    max-width: 250px;
    position: relative;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.15);
    padding: 20px;
    border-radius: var(--border-radius-cards);
}

.vrsus-proyects::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.15);
    z-index: 0;
    border-radius: var(--border-radius-cards);
}

.vrsus-proyects img {
    height: 200px;
    width: 100%;
    object-fit: cover;
}

.vrsus-proyects>* {
    position: relative;
    z-index: 1;
}

.vr-aplications {
    position: relative;
    max-width: 600px;
    padding: 20px;
    border-radius: var(--border-radius-cards);
    box-sizing: border-box;
    background: var(--primary-background-color);
    background-clip: padding-box;
    border: solid var(--border-width-buttons) transparent;
    border-radius: var(--border-radius-cards);
}

.vr-aplications .action-buttons-part {
    display: flex;
    justify-content: space-between;
}


.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}
</style>
