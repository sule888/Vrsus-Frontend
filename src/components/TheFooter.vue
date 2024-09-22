<template>
    <div class="background">
        <div class="main-cont">
            <div class="logo-slogan">
                <img src="@/assets/img/logos/LOGO_VRSUS_CIRCULAR.png" alt="">
                <p class="subtitles-extra">Vrusus, tu alido para la diversion</p>
            </div>
            <div class="cont-items">
                <div class="cont-items-footer">
                    <p class="titles-footer">Redes Sociales</p>
                    <a v-for="(item, index) in itemsFooterSocialMedia" :key="index" :href="item.route"
                        class="item-social-media items">
                        <font-awesome-icon :icon="item.icon" class="icon" />
                        {{ item.title }}
                    </a>
                </div>
                <div class="cont-items-footer">
                    <p class="titles-footer">Legal</p>
                    <a v-for="(item, index) in itemsFooterLegal" :key="index" :href="item.route"
                        class="item-social-media items">
                        <font-awesome-icon :icon="item.icon" class="icon" />
                        {{ item.title }}
                    </a>
                </div>

                <div class="cont-items-footer">
                    <p class="titles-footer">Visitanos</p>
                    <RouterLink v-for="(item, index) in itemsFooterOthersPages" :key="index"
                        class="items item-social-media " :to="item.route">
                        {{ item.title }}
                    </RouterLink>
                </div>
                <div class="cont-items-footer">
                    <p class="titles-footer">Contactos</p>
                    <div v-for="(item, index) in itemsFooterContact" :key="index" class="items">

                        {{ item.title }}
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
const itemsFooterSocialMedia = [
    {
        title: "Facebook",
        route: "https://www.facebook.com/VRsusMx",
        icon: ['fab', 'facebook']
    },
    {
        title: "Instagram",
        route: "",
        icon: ['fab', 'instagram']
    },
    {
        title: "Tiktok",
        route: "",
        icon: ['fab', 'tiktok']
    },
    {
        title: "Youtube",
        route: "",
        icon: ['fab', 'youtube']
    },
    {
        title: "Dah",
        route: "https://dahjrz.com/"
    },
]
const itemsFooterContact = [
    {
        title: " Telefono: 6556565656",
        route: ""
    },
    {
        title: " Correo electronico: email@email.com",
        route: ""
    },
    {
        title: " Ubicacion: Plaza Americas 1234 ",
        route: ""
    },

]
const itemsFooterOthersPages = [
    {
        title: "Catalogo de Juegos",
        route: "/catalogo"
    },
    {
        title: "Aparta local",
        route: ""
    },
    {
        title: "Aparta videojuegos",
        route: ""
    },
]
const itemsFooterLegal = [
    {
        title: "Copyrigth",
        route: ""
    },
    {
        title: "Facturacion",
        route: ""
    },
]

</script>

<style scoped>
.background {
    width: auto;
    background: var(--gradient-support-background-color);
    margin-top: 100px;
    border-radius: 20px 20px 0 0;
}

.main-cont {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 5%;
    padding: 30px 0;
}

.logo-slogan {
    display: flex;
    gap: 50px;
    align-items: center;

}

.logo-slogan img {
    width: 50px;
    height: 50px;
}

.titles-footer {
    font-size: 20px;
    color: black;
}

.cont-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
    row-gap: 50px;
}

.items {
    display: flex;
    gap: 20px;

}

.item-social-media:hover {
    color: rgb(167, 161, 161);
    cursor: pointer
}

.icon {
    width: 15px;
    height: auto;
}

.cont-items-footer {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

a {
    text-decoration: none;
    color: white;
}
</style>