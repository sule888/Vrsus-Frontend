<template>
    <div class="cont-card" v-for="(card, index) in reviewCard" :key="index">
        <div class="personal-information-cont">
            <img :src="card.multimedy.src" :alt="card.multimedy.alt">
            <div class="name-qualification">
                <p>{{ card.name }}</p>
                <div class="stars">
                    <div v-for="(star, index) in card.qualification">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                            <polygon points="12,2 15,10 24,10 17,15 20,23 12,18 4,23 7,15 0,10 9,10" fill="#00ffff" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="review coments">
            <p>{{ card.review }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    reviewCard: {
        type: Array,
        default: () => ([])
    }
})
</script>

<style scoped>
.cont-card {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    border-radius: var(--border-radius-cards);
    position: relative;
    overflow: hidden;
    background-color: rgba(0, 0, 0, .15);
    padding: 20px;
    gap: 20px;
}

.cont-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, .15);
    z-index: 0;
    border-radius: var(--border-radius-cards);
}

.personal-information-cont {
    display: flex;
    justify-content: space-between;
    gap: 30px;
}

.personal-information-cont img {
    border-radius: 50px;
    width: 50px;
    height: 50px;
    flex: 1;
}

.name-qualification {
    display: flex;
    flex-direction: column;
    flex: 4;
}

.stars {
    display: flex;
    gap: 5px;
}

.star {
    background-color: var(--primary-color);
}
</style>