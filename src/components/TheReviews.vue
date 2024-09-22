<template>
    <div class="main-cont">
        <p class="title">Reseñas</p>
        <div ref="contReviewCards" class="cont-review-cards">
            <CardReviews :reviewCard="visibleReviews"></CardReviews>
            <CardReviews v-if="showMore" :reviewCard="additionalReviews"></CardReviews>
        </div>
        <div class="button" v-if="reviewCards.length > visibleReviews.length">
            <CircleButton @click="toggleShowMore">
                {{ showMore ? 'Ver menos' : 'Ver más' }}
            </CircleButton>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import CardReviews from './CardReviews.vue';
import CircleButton from './CircleButton.vue';

const reviewCards = [
    {
        multimedy: {
            src: 'src/assets/img/test/perfil.jpeg',
            alt: 'hola',
        },
        name: 'Sulem',
        review:
            'Fuga natus earum aliquid odio nisi fugiat cupiditate fugit commodi quis deserunt incidunt, accusamus voluptatibus veritatis. Explicabo sequi officiis dolor perferendis nesciunt modi asperiores, harum velit eaque mollitia neque quasi, minus deleniti repudiandae ex aliquid non est labore tempora. Quidem earum inventore architecto rerum iure, nesciunt asperiores sit! Illo odio aspernatur aperiam deserunt eum. Sequi iusto nisi illo quae ea fugit architecto. Facilis nemo officiis, odit labore doloremque lib omnis. Corrupti saepe iure quis expedita iste incidunt odit tempore optio porro omnis doloremque quos fugit, adipisci tempora? Illum.',
        qualification: [0, 1, 2, 3],
    },

    {
        multimedy: {
            src: 'src/assets/img/test/perfil.jpeg',
            alt: 'hola',
        },
        name: 'Sulem',
        review:
            'Fuga natus earum aliquid odio nisi fugiat cupiditate fugit commodi quis deserunt incidunt, accusamus voluptatibus veritatis. Explicabo sequi officiis dolor perferendis nesciunt modi asperiores, harum velit eaque mollitia neque quasi, minus deleniti repudiandae ex aliquid non est labore tempora. Quidem earum inventore architecto rerum iure, nesciunt asperiores sit! Illo odio aspernatur aperiam deserunt eum. Sequi iusto nisi illo quae ea fugit architecto. Facilis nemo officiis, odit labore doloremque lib omnis. Corrupti saepe iure quis expedita iste incidunt odit tempore optio porro omnis doloremque quos fugit, adipisci tempora? Illum.',
        qualification: [0, 1, 2, 3],
    },
    {
        multimedy: {
            src: 'src/assets/img/test/perfil.jpeg',
            alt: 'hola',
        },
        name: 'Sulem',
        review:
            'ad repellat alias iure necessitatibus? Praesentium odit modi pariatur optio, voluptatum veniam facere omnis alias quam, architecto natus fugiat harum tenetur atque, distinctio ipsum. Sunt repellendus magnam fuga enim, earum at laborum quasi, reprehenderit quaerat voluptatibus quod, similique minus voluptatum recusandae. Non doloremque eligendi voluptate id ex suscipit maxime, placeat deleniti ipsa praesentium incidunt, iure odio? Sint assumenda iure repellendus qui. Itaque maiores even',
        qualification: [0, 1, 2, 3],
    },
    {
        multimedy: {
            src: 'src/assets/img/test/perfil.jpeg',
            alt: 'hola',
        },
        name: 'Sulem',
        review:
            'Fuga natus earum aliquid odio nisi fugiat cupiditate fugit commodi quis deserunt incidunt, accusamus voluptatibus veritatis. Explicabo sequi officiis dolor perferendis nesciunt modi asperiores, harum velit eaque mollitia neque quasi, minus deleniti repudiandae ex aliquid non est labore tempora. Quidem earum inventore architecto rerum iure, nesciunt asperiores sit! Illo odio aspernatur aperiam deserunt eum. Sequi iusto nisi illo quae ea fugit architecto. Facilis nemo officiis, odit labore doloremque lib omnis. Corrupti saepe iure quis expedita iste incidunt odit tempore optio porro omnis doloremque quos fugit, adipisci tempora? Illum.',
        qualification: [0, 1, 2, 3],
    },

    {
        multimedy: {
            src: 'src/assets/img/test/perfil.jpeg',
            alt: 'hola',
        },
        name: 'Sulem',
        review:
            'Fuga natus earum aliquid odio nisi fugiat cupiditate fugit commodi quis deserunt incidunt, accusamus voluptatibus veritatis. Explicabo sequi officiis dolor perferendis nesciunt modi asperiores, harum velit eaque mollitia neque quasi, minus deleniti repudiandae ex aliquid non est labore tempora. Quidem earum inventore architecto rerum iure, nesciunt asperiores sit! Illo odio aspernatur aperiam deserunt eum. Sequi iusto nisi illo quae ea fugit architecto. Facilis nemo officiis, odit labore doloremque lib omnis. Corrupti saepe iure quis expedita iste incidunt odit tempore optio porro omnis doloremque quos fugit, adipisci tempora? Illum.',
        qualification: [0, 1, 2, 3],
    },
    {
        multimedy: {
            src: 'src/assets/img/test/perfil.jpeg',
            alt: 'hola',
        },
        name: 'Sulem',
        review:
            'ad repellat alias iure necessitatibus? Praesentium odit modi pariatur optio, voluptatum veniam facere omnis alias quam, architecto natus fugiat harum tenetur atque, distinctio ipsum. Sunt repellendus magnam fuga enim, earum at laborum quasi, reprehenderit quaerat voluptatibus quod, similique minus voluptatum recusandae. Non doloremque eligendi voluptate id ex suscipit maxime, placeat deleniti ipsa praesentium incidunt, iure odio? Sint assumenda iure repellendus qui. Itaque maiores even',
        qualification: [0, 1, 2, 3],
    },

];


const showMore = ref(false);
const visibleCount = ref(0);
const contReviewCards = ref(null);

const visibleReviews = computed(() => {
    return showMore.value ? reviewCards : reviewCards.slice(0, visibleCount.value);
});

const additionalReviews = computed(() => {
    return reviewCards.slice(visibleCount.value);
});

const toggleShowMore = () => {
    showMore.value = !showMore.value;
};

const updateVisibleCount = () => {
    if (contReviewCards.value) {
        const containerWidth = contReviewCards.value.clientWidth;
        const cardWidth = 272;
        visibleCount.value = Math.floor(containerWidth / cardWidth);
    }
};

onMounted(() => {
    const resizeObserver = new ResizeObserver(updateVisibleCount);
    if (contReviewCards.value) {
        resizeObserver.observe(contReviewCards.value);
        updateVisibleCount();
    }
    onBeforeUnmount(() => {
        if (contReviewCards.value) {
            resizeObserver.unobserve(contReviewCards.value);
        }
    });
});
</script>

<style scoped>
.main-cont {
    display: flex;
    flex-direction: column;
    gap: 100px;
}

.cont-review-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
    gap: 20px;

}

.button {
    display: flex;
    justify-content: center;
    justify-items: center;

}

button {
    width: 400px;
}
</style>