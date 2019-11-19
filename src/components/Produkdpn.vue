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
                    </vs-row>
                    <add-to-cart
                    :nama="produk.nama"
                    :harga="produk.harga"
                    :p-id="produk.id"
                    :produkImg="getImage(produk.images)"></add-to-cart>
                </div>
                </vs-card>
                
            </vs-col>
            <!-- <vs-button @click="popupActivo=true">Keranjang</vs-button> -->
</vs-row>
</template>

<script>
import {fb,db} from "../firebase";

export default {
    data(){
        return{
            produks: [],
            produk:{
                nama: '',
                harga: '',
                tags: [],
                desc: '',
                images: []
            },
            popupActivo: false,
        }
    },
    firestore(){
        return {
        produks: db.collection('Produk')
        }
    },
    methods:{
        getImage(images){
            // console.log(images[0]);
            return images[0]
        }
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
