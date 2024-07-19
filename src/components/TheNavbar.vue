<template>
    <div class="cont-nav margin-between-components">
        <div class="logo-part">
            <img src="@/assets/img/logos/LOGO_FINAL_VRSUS5_para_NEON.png" alt="Vrsus logo">
        </div>
        <div class="items-nav-part" v-for="(item, index) in navigationItems" :key="index">
            <RouterLink :to="item.route">{{ item.title }}</RouterLink>
        </div>
        <img src="@/assets/img/logos/ondas.png" alt="" class="ondas-img">

        <div class="burger" @click="toggleMenu">
            <span :class="{ open: isMenuOpen }" v-for="(span, index) in burgerSpans" :key="index"></span>
        </div>
        <div class="menu-cont" :class="{ open: isMenuOpen }">
            <div class="menu-items" v-for="(item, index) in navigationItems" :key="index">
                <RouterLink :to="item.route">{{ item.title }}</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const navigationItems = [
    { route: '/home', title: 'Home' },
    { route: '/about', title: 'About' },
    { route: '/services', title: 'Services' },
    { route: '/contact', title: 'Contact' }
];

const burgerSpans = Array(3).fill(null);
</script>
<style scoped>
.cont-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    position: relative;
    z-index: 1;
}

.logo-part {
    width: 100%;
}

.logo-part img {
    width: 150px;
    height: auto;
    cursor: pointer;
}

.items-nav-part {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    color: var(--primary-color);
    width: 40%;
}

.items-nav-part a {
    font-size: 20px;
    text-decoration: none;
    color: inherit;
    display: inline-flex;
    transition: 0.5s;
}

.items-nav-part a:hover {
    transform: translateY(-20px);
    cursor: pointer;
    font-size: 22px;
}

.ondas-img {
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    width: 20%;
    height: auto;
}

.burger {
    position: relative;
    width: 40px;
    height: 30px;
    background: transparent;
    cursor: pointer;
    margin: 0 20px;
    display: none;
    z-index: 2;
    transition: 0.5s;
}

.burger span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: white;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
    z-index: 2;
}

.burger span:nth-of-type(1) {
    top: 0px;
    transform-origin: left center;
}

.burger span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
}

.burger span:nth-of-type(3) {
    top: 100%;
    transform-origin: left center;
    transform: translateY(-100%);
}

.burger span.open:nth-of-type(1) {
    transform: rotate(45deg);
    top: 0px;
    left: 5px;
}

.burger span.open:nth-of-type(2) {
    width: 0%;
    opacity: 0;
}

.burger span.open:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 25px;
    left: 5px;
}

.menu-cont {
    transition: 0.5s;
    background-color: var(--primary-background-color);
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transform: translateY(-100%);
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.menu-cont.open {
    display: block;
    opacity: 1;
    transition: 0.5s;
    transform: translateY(0);
}

.menu-items a {
    display: block;
    color: white;
    text-decoration: none;
    font-size: 16px;
    margin: 50px 20px;

}

.menu-items a:hover {
    text-decoration: none;
    color: var(--primary-color)
}

@media (max-width: 1000px) {
    .ondas-img {
        display: none;
    }

    .items-nav-part {
        display: none;
    }

    .burger {
        display: block;
        position: relative;
        width: 40px;
        height: 30px;
        background: transparent;
        cursor: pointer;
        margin: 0 20px;
    }

    .burger {
        width: 30px;
        height: 20px;
    }

    .burger span.open:nth-of-type(3) {
        transform: rotate(-45deg);
        top: 18px;
        left: 5px;
    }

    .logo-part img {
        width: 100px;
        height: auto;
    }
}
</style>