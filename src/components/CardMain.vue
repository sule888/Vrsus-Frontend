<template>
    <div :class="['cont-card-wrapper', configurationCard.cardType + '-wrapper']">
        <div class="cont-card" :class="configurationCard.cardType">
            <div v-if="configurationCard.title" class="title-part">
                {{ configurationCard.title }}
            </div>
            <div class="multimedy-part" v-if="configurationCard.multimedy.length > 0">
                <img v-for="(image, index) in configurationCard.multimedy" :key="index" :src="image.src"
                    :alt="image.alt" />
            </div>
            <div v-if="configurationCard.text" class="text-part">
                {{ configurationCard.text }}
            </div>

            <div class="action-buttons-part" v-if="configurationCard.actionButtons.length > 0">
                <BaseCircularButton v-for="(button, index) in configurationCard.actionButtons" :key="index"
                    :buttonColor="button.buttonType" :to="button.action">
                    {{ button.buttonTitle }}
                </BaseCircularButton>
            </div>
            <div class="icons-part" v-if="configurationCard.icons.length > 0">
                <img v-for="(img, index) in configurationCard.icons" :key="index" :src="img.src" :alt="img.alt" />
            </div>
            <div class="price-part" v-if="configurationCard.price !== null">
                {{ configurationCard.price }}
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import BaseCircularButton from './BaseCircularButton.vue'

const props = defineProps({
    configurationCard: {
        type: Object,
        default: () => ({
            cardType: "local-card",
            title: "Title",
            multimedy: [],
            text: "",
            actionButtons: [],
            icons: [],
            price: null
        })
    }
})

const router = useRouter()

const navigate = (action) => {
    if (action) {
        router.push(action)
    }
}
</script>

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

.vrsus-proyects {
    max-width: 330px;
}

.vrsus-proyects .action-buttons-part {
    display: flex;
    flex-direction: column;
    gap: 20px;

}

.vrsus-proyects {
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

    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        margin: -5px;
        border-radius: inherit;
        background: var(--gradient-border-card-color)
    }
}

.vr-aplications .title-part {
    font-size: var(--subtitles);
}

.vr-aplications .action-buttons-part {
    display: flex;
    justify-content: space-between;
}
</style>