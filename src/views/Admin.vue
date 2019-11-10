<template>
    <v-app id="sandbox">
            <v-navigation-drawer
            v-model="drawer"
            app
            >
            <v-list dense>
                <v-list-item link>
                <v-list-item-action>
                </v-list-item-action>
                <v-list-item-content>
                    <router-link to="/admin/produk">
                        <v-list-item-title>Produk</v-list-item-title>
                    </router-link>
                </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                <v-list-item-action>
                </v-list-item-action>
                <v-list-item-content>
                    <router-link to="/admin/pesanan">
                        <v-list-item-title>Pesanan</v-list-item-title>
                    </router-link>
                </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                <v-list-item-action>
                </v-list-item-action>
                <v-list-item-content>
                    <router-link to="/admin/profile">
                        <v-list-item-title>Profile</v-list-item-title>
                    </router-link>
                </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                <v-list-item-action>
                </v-list-item-action>
                <v-list-item-content>
                    <vs-button type="line" @click="logout" color="danger">Logout</vs-button>
                </v-list-item-content>
                </v-list-item>
            </v-list>
            </v-navigation-drawer>

            <v-app-bar
            app
            color="indigo"
            dark
            >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title>Rattanesia</v-toolbar-title>
            </v-app-bar>

            <v-content>
                <router-view/>
            <!-- <produk/> -->
            <!-- <v-container
                class="fill-height"
                fluid
            > -->
            <!-- <kepala/> -->
            
                <!-- <v-row
                align="center"
                justify="center"
                >
                <v-col class="text-center">
                    <v-tooltip left>
                    <template v-slot:activator="{ on }">
                        <v-btn
                        :href="source"
                        icon
                        large
                        target="_blank"
                        v-on="on"
                        >
                        <v-icon large>mdi-code-tags</v-icon>
                        </v-btn>
                    </template>
                    <span>Source</span>
                    </v-tooltip>

                    <v-tooltip right>
                    <template v-slot:activator="{ on }">
                        <v-btn
                        icon
                        large
                        href="https://codepen.io/johnjleider/pen/zgxeLQ"
                        target="_blank"
                        v-on="on"
                        >
                        <v-icon large>mdi-codepen</v-icon>
                        </v-btn>
                    </template>
                    <span>Codepen</span>
                    </v-tooltip>
                </v-col>
                </v-row> -->
            <!-- </v-container> -->
            </v-content>
            <v-footer
            color="indigo"
            app
            >
            <span class="white--text">Rattanesia &copy; 2019</span>
            </v-footer>
    </v-app>
</template>

<script>
import Profile from "@/components/Profile.vue"
import router from "@/router.js"
import produk from "@/components/DaftarProduk.vue"
// import aplot from "@/components/Upload.vue"
import pesenan from "@/components/DaftarPesanan.vue"
import {fb} from "../firebase"
import kepala from "../components/Navbar"

export default {
    name: 'Admin',
    components: {
        Profile,
        produk,
        pesenan,
        kepala
    },
    data: () => ({
        drawer: null,
    }),
    methods: {
        logout(){
            fb.auth().signOut()
            .then(() => {
                this.$router.replace('/');
            })
            .catch((err) =>
            {

            })
        }
    }
}
</script>

<style lang="scss">
.adminbtn{
    align-content: center;
}
</style>