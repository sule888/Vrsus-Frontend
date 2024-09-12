<template>
    <div class="main-cont-card">
        <div class="multimedy-part">
            <img v-for="(item, index) in configurationCard.multimedy" :key="index" :src="item.src" :alt="item.alt" />
        </div>

        <div class="text">
            <p>{{ configurationCard.text }}</p>
        </div>
        <div class="buttons" v-for="(btn, index) in configurationCard.actionButtons " :key="index">
            <CircleButton :buttonColor="btn.buttonType" :functionButton="btn.action">{{ btn.buttonTitle }}
            </CircleButton>
        </div>

    </div>
</template>

<script setup>
import CircleButton from './CircleButton.vue';

const props = defineProps({
    configurationCard: {
        type: Object,
        default: () => []
    },
    actionCards: {
        type: Function,
        required: true

    }
})
</script>

<style scoped>
.main-cont-card {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
    background-color: transparent;
    width: 100%;
    margin: 5px 20px;
}

.multimedy-part img {
    border-radius: var(--border-radius-cards);
    width: 100%;
}

.buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>