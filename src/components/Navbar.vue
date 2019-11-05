<template>
    <div class="centerx">
            <vs-navbar v-model="activeItem" class="nabarx">
        <div slot="title">
            <vs-navbar-title class="fontR">
            Rattanesia
            </vs-navbar-title>
        </div>
        <vs-navbar-item index="0">
            <vs-button class="nvbrtxt" to="/" type="line">Home</vs-button>
            <!-- <router-link  class="nvbrtxt" to="/">Beranda</router-link> -->
        </vs-navbar-item>
        <vs-navbar-item index="1">
            <vs-button class="nvbrtxt" to="/about" type="line">About Us</vs-button>
            <!-- <router-link class="nvbrtxt" to="/about">About Us</router-link> -->
        </vs-navbar-item>
        <vs-navbar-item index="2">
            <vs-button class="nvbrtxt" to="/service" type="line">Service</vs-button>
            <!-- <router-link class="nvbrtxt" to="/">Service</router-link> -->
        </vs-navbar-item>
        <vs-navbar-item index="3">
            <vs-button class="nvbrtxt" to="/cart" type="line">Cart</vs-button>
            <!-- <router-link class="nvbrtxt" to="/">Cart</router-link> -->
        </vs-navbar-item>
        <vs-navbar-item index="4">
            <vs-button class="nvbrtxt" to="/login" color="primary" type="flat">Login</vs-button>
            <!-- <router-link class="nvbrtxt" to="/admin">Login</router-link> -->
        </vs-navbar-item>
        <!-- <vs-input icon="search" placeholder="Search" v-model="search"/> -->
        </vs-navbar>
    </div>
</template>

<script>
import {mdiAccount} from '@mdi/js';
import Login from './Login.vue';
export default {
    data:() => ({
        icons: {
            mdiAccount
        }
    }),
    methods:{
    },
    components: {
        Login
    }
    }

</script>

<style lang="scss" scoped>
.navbar-text{
    font-size: 18px;
}
@font-face {
    font-family: fontR;
    src: url('../assets/Font/WanderlustLetters-Regular.otf') format('opentype'),
    url('../assets/Font/wanderlustletters-regular-webfont.woff') format('woff');
}
@font-face {
    font-family: font1;
    src: url('../assets/Font/tt0140m_.ttf') format('truetype'),
    url('../assets/Font/tt0140m_-webfont.woff') format('woff');
}
@font-face {
    font-family: font2;
    src: url('../assets/Font/tt0141m_.ttf') format('truetype'),
    url('../assets/Font/tt0141m_-webfont.woff') format('woff');
}
@font-face {
    font-family: font3;
    src: url('../assets/Font/tt0142m_.ttf') format('truetype'),
    url('../assets/Font/tt0142m_-webfont.woff') format('woff');
}
@font-face {
    font-family: font4;
    src: url('../assets/Font/tt0143m_.ttf') format('truetype'),
    url('../assets/Font/tt0143m_-webfont.woff') format('woff');
}
@font-face {
    font-family: font5;
    src: url('../assets/Font/tt0144m_.ttf') format('truetype'),
    url('../assets/Font/tt0144m_-webfont.woff') format('woff');
}
@font-face {
    font-family: font6;
    src: url('../assets/Font/tt0145m_.ttf') format('truetype'),
    url('../assets/Font/tt0145m_-webfont.woff') format('woff');
}
.fontR{
    font-family: 'fontR';
    font-size: 30px;
}
.nvbrtxt{
    font-family: 'font1';
    font-size: '80px';
}
.centerx{
    color: 'D4C4C4';
}
</style>