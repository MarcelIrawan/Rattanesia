<template>
    <v-app id="sandbox">
        <v-app-bar
        :clipped-left="primaryDrawer.clipped"
        app
        >
        <v-app-bar-nav-icon
            v-if="primaryDrawer.type !== 'permanent'"
            @click.stop="primaryDrawer.model = !primaryDrawer.model"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>
            <router-link to="/">Rattanesia</router-link>
            </v-toolbar-title>
    </v-app-bar>
    <v-content>
        <v-container fluid>
            <template>
    <v-card>
        <v-tabs vertical>
        <v-tab>
            <v-icon left>mdi-account</v-icon>
            Produk
        </v-tab>
        <v-tab>
            <v-icon left>mdi-lock</v-icon>
            Pesanan
        </v-tab>
        <v-tab>
            <v-icon left>mdi-access-point</v-icon>
            Option 3
            </v-tab>

        <v-tab-item>
            <v-card flat>
            <v-card-text>
                <h1>Produk</h1>
            </v-card-text>
                <aplot/>
                <produk/>
            </v-card>
        </v-tab-item>
        <v-tab-item>
            <v-card flat>
            <v-card-text>
                <h1>PESANAN</h1>
            </v-card-text>
            <pesenan/>
            </v-card>
        </v-tab-item>
        <v-tab-item>
            <v-card flat>
            <v-card-text>
                <h1>HAHA</h1>
            </v-card-text>
            </v-card>
        </v-tab-item>
        </v-tabs>
    </v-card>
</template>
        </v-container>
        </v-content>
    </v-app>
</template>

<script>
import AK from "@/components/AdminKonten.vue"
import router from "@/router.js"
import produk from "@/components/DaftarProduk.vue"
import aplot from "@/components/Upload.vue"
import pesenan from "@/components/DaftarPesanan.vue"

export default {
    name: 'Admin',
    components: {
        AK,
        produk,
        aplot,
        pesenan
    },
    data: () => ({
        drawers: ['Default (no property)', 'Permanent', 'Temporary'],
        primaryDrawer: {
        model: null,
        type: 'default (no property)',
        clipped: false,
        floating: false,
        mini: false,
        },
    }),
    methods: {
        
    }
}
</script>

<style lang="scss">
.adminbtn{
    align-content: center;
}
</style>