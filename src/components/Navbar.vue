<template>
    <div class="centerx">
            <vs-navbar v-model="activeItem" class="nabarx">
        <div slot="title">
            <vs-navbar-title class="fontR">
            Rattanesia
            </vs-navbar-title>
        </div>
        <vs-navbar-item index="0">
            <router-link to="/">Beranda</router-link>
        </vs-navbar-item>
        <vs-navbar-item index="1">
            <router-link to="/about">Tentang</router-link>
        </vs-navbar-item>
        <vs-navbar-item index="2">
            <router-link to="/admin">Login</router-link>
        </vs-navbar-item>
        <vs-input icon="search" placeholder="Search" v-model="search"/>
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
    font-family: font1;
    src: url('../assets/Font/WanderlustLetters-Regular.otf') format('truetype'), url('../assets/Font/wanderlustletters-regular-webfont.woff') format('woff');
}
.fontR{
    font-family: 'font1'
}
</style>