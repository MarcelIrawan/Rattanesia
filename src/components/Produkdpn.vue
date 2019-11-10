<template>
<vs-row vs-justify="" class="produk">
            <vs-col  style="margin: 15px;"  type="fixed" vs-justify="left" vs-align="left" vs-w="3.5" v-for="produk in produks" :key="(produk.nama, produk.desc, produk.tags, produk.harga, produk.images)">
                <vs-card actionable>
                <div class="pronem" slot="header">
                    <h3>
                    {{produk.nama}}
                    </h3>
                </div>
                <div slot="media" >
                    <img :src="produk.images">
                </div>
                <div class="prodesc">
                    <span>{{produk.desc}}</span>
                </div>
                <div slot="footer">
                    <vs-row vs-justify="flex-end">
                        <div>
                            <h3>Harga Rp {{produk.harga}}</h3>
                        </div>
                    <!-- <vs-button @click="$vs.notify({title:'CEK KERANJANG',text:'Barang masuk keranjang',color:'success'})" type="gradient" color="primary" icon="favorite">BELI</vs-button>
                    <vs-button @click="$vs.notify({title:'Tersimpan',text:'Barang masuk favorite',color:'danger'})" color="danger" icon="favorite">SIMPAN</vs-button> -->
                    </vs-row>
                </div>
                </vs-card>
            </vs-col>
</vs-row>
</template>

<script>
import {fb,db} from "../firebase";

export default {
    data: () => ({
        produks: [],
        produk:{
            nama: '',
            harga: '',
            tags: [],
            desc: '',
            images: []
        },
    }),
    firestore(){
        return {
        produks: db.collection('Produk')
        }
    },
    methods:{
}
}
</script>

<style scoped>
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
.prohed{
    font-family: 'font5';
}
.pronem{
    font-family: 'font3';
}
.prodesc{
    font-family: 'font2';
}
</style>
