<template>
    <transition name="modal">
        <div v-if="isOpen" class="modal-overlay" @click="closeModal">
            <div class="modal-content" @click.stop>
                <button class="close-button" @click="closeModal">&times;</button>
                <h1>{{ titulo }}</h1>
                <div v-if="multimedia.length" class="multimedia-container">
                    <div v-for="(item, index) in multimedia" :key="index">
                        <img v-if="item.type === 'image'" :src="item.src" :alt="item.alt" />
                        <video v-if="item.type === 'video'" controls>
                            <source :src="item.src" :type="item.mimeType" />
                        </video>
                    </div>
                </div>
                <div class="text-part" v-if="texto != ''">
                    {{ texto }}
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        multimedia: {
            type: Array,
            required: true
        },
        titulo: {
            type: String,
            required: true
        },
        texto: {
            type: String,
            required: true
        },
        isOpen: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
        }
    }
};
</script>
<style scoped>
h1 {
    color: var(--primary-color);
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;

    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: var(--primary-background-color);
    width: 40%;
    padding: 20px;
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 30px;
    border: solid white 1px;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}

.multimedia-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.multimedia-container img,
.multimedia-container video {
    width: 100%;
    border-radius: 10px;
}

.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s, transform 0.3s;
}

.modal-enter,
.modal-leave-to {
    opacity: 0;
    transform: scale(0.9);
}
</style>