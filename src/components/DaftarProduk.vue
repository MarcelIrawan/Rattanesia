<template>
<vs-row vs-justify="center" class="produk">
    <vs-collapse :type="type">
        <vs-collapse-item class="bantal">
            <div slot="header">
                Bantal
            </div>
            <vs-col  style="margin: 15px;"  type="fixed" vs-justify="left" vs-align="left" vs-w="3.5" v-for="prod in Bantal" :key="(prod.name,prod.asal,prod.desc)">
                <vs-card actionable>
                <div slot="header">
                    <h3>
                    {{prod.name}}
                    </h3>
                </div>
                <div slot="media" >
                    <img :src="prod.asal">
                </div>
                <div >
                    <span>{{prod.desc}}</span>
                </div>
                <div slot="footer">
                    <vs-row vs-justify="flex-end">
                        <vs-button @click="$vs.notify({title:'CEK KERANJANG',text:'Barang masuk keranjang',color:'success'})" type="gradient" color="primary" icon="build">Edit</vs-button>
                        <vs-button @click="$vs.notify({title:'Hapus',text:'Barang dihapus',color:'danger'})" color="danger" icon="delete">Hapus</vs-button>
                    </vs-row>
                </div>
                </vs-card>
            </vs-col>
        </vs-collapse-item>
        <vs-collapse-item class="Cermin">
            <div slot="header">
                Cermin
            </div>
            <vs-col  style="margin: 15px;"  type="fixed" vs-justify="center" vs-align="center" vs-w="3.5" v-for="prod in Cermin" :key="(prod.name,prod.asal,prod.desc)">
                <vs-card actionable>
                <div slot="header">
                    <h3>
                    {{prod.name}}
                    </h3>
                </div>
                <div slot="media" >
                    <img :src="prod.asal">
                </div>
                <div >
                    <span>{{prod.desc}}</span>
                </div>
                <div slot="footer">
                    <vs-row vs-justify="flex-end">
                        <vs-button @click="$vs.notify({title:'CEK KERANJANG',text:'Barang masuk keranjang',color:'success'})" type="gradient" color="primary" icon="build">Edit</vs-button>
                        <vs-button @click="$vs.notify({title:'Hapus',text:'Barang dihapus',color:'danger'})" color="danger" icon="delete">Hapus</vs-button>
                    </vs-row>
                </div>
                </vs-card>
            </vs-col>
        </vs-collapse-item>
        <vs-collapse-item class="Karpet">
            <div slot="header">
                Karpet
            </div>
            <vs-col  style="margin: 15px;"  type="fixed" vs-justify="center" vs-align="center" vs-w="3.5" v-for="prod in Karpet" :key="(prod.name,prod.asal,prod.desc)">
                <vs-card actionable>
                <div slot="header">
                    <h3>
                    {{prod.name}}
                    </h3>
                </div>
                <div slot="media" >
                    <img :src="prod.asal">
                </div>
                <div >
                    <span>{{prod.desc}}</span>
                </div>
                <div slot="footer">
                    <vs-row vs-justify="flex-end">
                        <vs-button @click="$vs.notify({title:'CEK KERANJANG',text:'Barang masuk keranjang',color:'success'})" type="gradient" color="primary" icon="build">Edit</vs-button>
                        <vs-button @click="$vs.notify({title:'Hapus',text:'Barang dihapus',color:'danger'})" color="danger" icon="delete">Hapus</vs-button>
                    </vs-row>
                </div>
                </vs-card>
            </vs-col>
        </vs-collapse-item>
        <vs-collapse-item class="keranjang">
            <div slot="header">
                Keranjang
            </div>
            <vs-col  style="margin: 15px;"  type="fixed" vs-justify="center" vs-align="center" vs-w="3.5" v-for="prod in Keranjang" :key="(prod.name,prod.asal,prod.desc)">
                <vs-card actionable>
                <div slot="header">
                    <h3>
                    {{prod.name}}
                    </h3>
                </div>
                <div slot="media" >
                    <img :src="prod.asal">
                </div>
                <div >
                    <span>{{prod.desc}}</span>
                </div>
                <div slot="footer">
                    <vs-row vs-justify="flex-end">
                        <vs-button @click="$vs.notify({title:'CEK KERANJANG',text:'Barang masuk keranjang',color:'success'})" type="gradient" color="primary" icon="build">Edit</vs-button>
                        <vs-button @click="$vs.notify({title:'Hapus',text:'Barang dihapus',color:'danger'})" color="danger" icon="delete">Hapus</vs-button>
                    </vs-row>
                </div>
                </vs-card>
            </vs-col>
        </vs-collapse-item>
        <vs-collapse-item class="kursi">
            <div slot="header">
                Kursi
            </div>
            <vs-col  style="margin: 15px;"  type="fixed" vs-justify="center" vs-align="center" vs-w="3.5" v-for="prod in Kursi" :key="(prod.name,prod.asal,prod.desc)">
                <vs-card actionable>
                <div slot="header">
                    <h3>
                    {{prod.name}}
                    </h3>
                </div>
                <div slot="media" >
                    <img :src="prod.asal">
                </div>
                <div >
                    <span>{{prod.desc}}</span>
                </div>
                <div slot="footer">
                    <vs-row vs-justify="flex-end">
                        <vs-button @click="$vs.notify({title:'CEK KERANJANG',text:'Barang masuk keranjang',color:'success'})" type="gradient" color="primary" icon="build">Edit</vs-button>
                        <vs-button @click="$vs.notify({title:'Hapus',text:'Barang dihapus',color:'danger'})" color="danger" icon="delete">Hapus</vs-button>
                    </vs-row>
                </div>
                </vs-card>
            </vs-col>
        </vs-collapse-item>
        <vs-collapse-item class="lampu">
            <div slot="header">
                Lampu
            </div>
            <vs-col  style="margin: 15px;"  type="fixed" vs-justify="center" vs-align="center" vs-w="3.5" v-for="prod in Lampu" :key="(prod.name,prod.asal,prod.desc)">
                <vs-card actionable>
                <div slot="header">
                    <h3>
                    {{prod.name}}
                    </h3>
                </div>
                <div slot="media" >
                    <img :src="prod.asal">
                </div>
                <div >
                    <span>{{prod.desc}}</span>
                </div>
                <div slot="footer">
                    <vs-row vs-justify="flex-end">
                        <vs-button @click="$vs.notify({title:'CEK KERANJANG',text:'Barang masuk keranjang',color:'success'})" type="gradient" color="primary" icon="build">Edit</vs-button>
                        <vs-button @click="$vs.notify({title:'Hapus',text:'Barang dihapus',color:'danger'})" color="danger" icon="delete">Hapus</vs-button>
                    </vs-row>
                </div>
                </vs-card>
            </vs-col>
        </vs-collapse-item>
        <vs-collapse-item class="placemat">
            <div slot="header">
                Placemat
            </div>
            <vs-col  style="margin: 15px;"  type="fixed" vs-justify="center" vs-align="center" vs-w="3.5" v-for="prod in Placemat" :key="(prod.name,prod.asal,prod.desc)">
                <vs-card actionable>
                <div slot="header">
                    <h3>
                    {{prod.name}}
                    </h3>
                </div>
                <div slot="media" >
                    <img :src="prod.asal">
                </div>
                <div >
                    <span>{{prod.desc}}</span>
                </div>
                <div slot="footer">
                    <vs-row vs-justify="flex-end">
                        <vs-button @click="$vs.notify({title:'CEK KERANJANG',text:'Barang masuk keranjang',color:'success'})" type="gradient" color="primary" icon="build">Edit</vs-button>
                        <vs-button @click="$vs.notify({title:'Hapus',text:'Barang dihapus',color:'danger'})" color="danger" icon="delete">Hapus</vs-button>
                    </vs-row>
                </div>
                </vs-card>
            </vs-col>
        </vs-collapse-item>
        <vs-collapse-item class="tas">
            <div slot="header">
                Tas
            </div>
            <vs-col  style="margin: 15px;"  type="fixed" vs-justify="center" vs-align="center" vs-w="3.5" v-for="prod in Tas" :key="(prod.name,prod.asal,prod.desc)">
                <vs-card actionable>
                <div slot="header">
                    <h3>
                    {{prod.name}}
                    </h3>
                </div>
                <div slot="media" >
                    <img :src="prod.asal">
                </div>
                <div >
                    <span>{{prod.desc}}</span>
                </div>
                <div slot="footer">
                    <vs-row vs-justify="flex-end">
                        <vs-button @click="$vs.notify({title:'CEK KERANJANG',text:'Barang masuk keranjang',color:'success'})" type="gradient" color="primary" icon="build">Edit</vs-button>
                        <vs-button @click="$vs.notify({title:'Hapus',text:'Barang dihapus',color:'danger'})" color="danger" icon="delete">Hapus</vs-button>
                    </vs-row>
                </div>
                </vs-card>
            </vs-col>
        </vs-collapse-item>
    </vs-collapse>
</vs-row>
</template>

<script>
export default {
    data: () => ({
        Bantal: [
            {
                name: 'Bantal Kotak RumbaiAgel Zig Zag Natural',
                asal: 'https://i.ibb.co/PZ9zFjq/bntl2.jpg',
                desc: 'Fungsi : Bantal, Bahan : Sea grass Inner (Sudah dengan bantal/inner di dalamnya), Ukuran : 40cm x 40cm, Rp 169.000'
            },
            {
                name: 'BantalBulatRumbaiAgel Natural Polos',
                asal: 'https://i.ibb.co/cNCS282/bntl1.jpg',
                desc: 'Fungsi : Bantal Hiasan, Bahan : Sea grass Inner (Sudah dengan bantal/inner di dalamnya), Ukuran : Diameter 40cm, Rp 149.000'
            }
        ],
        Cermin: [
            {
                name: 'Rattan Mirror Eye and Sun',
                asal: 'https://i.ibb.co/86YVtdM/Rattan-Mirror-Eye-and-Sun.jpg',
                desc: 'Fungsi : Home decor Cermin Bahan : Rattan Core Ukuran : 50cm x 50cm Rp 210.000'
            },
        ],
        Karpet: [
            {
                name: 'Seagrass Rug Motif Pancawarna Black',
                asal: 'https://i.ibb.co/7YXJ5n1/Seagrass-Rug-Motif-Pancawarna-Black.jpg',
                desc: 'Fungsi : Home decor Bahan : Seagrass sintetisplastik Ukuran : diameter 100cm Rp 235.000'
            },
            {
                name: 'Seagrass Rug Motif Babyblue Combination',
                asal: 'https://i.ibb.co/m54tjr0/Seagrass-Rug-Motif-Babyblue-Combination.jpg',
                desc: 'Bahan : Seagrass kombinasisintetisplastik Ukuran : Kecil : Diameter 100cm Sedang : Diameter 120cm Besar : Diameter 150cm Kecil Rp 235.000, SedangRp 260.000, BesarRp 310.000'
            },
        ],
        Keranjang: [
            {
                name: 'Box EcengGondok',
                asal: 'https://i.ibb.co/bL7xBnL/Box-Eceng-Gondok.jpg',
                desc: 'Fungsi : tempatbuku,keranjangmainan, home décor Bahan : EcengGondok Rangkabesididalamnya Ukuran : Panjang 35cm Lebar 23cmTinggi 25cm Rp 120.000'
            },
            {
                name: 'Basket Banana Diamond set of 2',
                asal: 'https://i.ibb.co/Wssm3RN/Basket-Banana-Diamond-set-of-2.jpg',
                desc: 'Fungsi : laundrybag Cover pot Keranjangmainan Home décor Bahan : Banana Fiber RajutanMacrame RajutanKawung Rajutan Diagonal Ukuran : Besar: D 40cm T 35cm Kecil: D 30cm T 27cm Rp250.000'
            },
            {
                name: 'Basket Laundry Rara',
                asal: 'https://i.ibb.co/CJzRB4G/Basket-Laundry-Rara.jpg',
                desc: 'Fungsi : laundrybag Cover pot Keranjangmainan Home décor Bahan : EcengGondok Rangkabesididalamnya Ukuran : Diameter 30cm Tinggi 33cm Rp130.000'
            },
            {
                name: 'Basket Triple Banana set of 3',
                asal: 'https://i.ibb.co/BtN1CQq/Basket-Triple-Banana-set-of-3.jpg',
                desc: 'Fungsi : Cover pot Keranjangmainan Home décor Bahan : Banana Fiber Ukuran : Besar: D 25cm T 30cmSedang: D 23cm T 28cm Kecil: D 20cm T 27cm Rp210.000'
            },
            {
                name: 'Tray EcengRactangle set of 2',
                asal: 'https://i.ibb.co/F794yh3/Tray-Eceng-Ractangle-set-of-2.jpg',
                desc: 'Fungsi : Home décor Keranjang accessories Bahan : EcengGondok Rangkabesididalamnya Ukuran : Kecil: 44cmx30cmx8cm Besar: 50cmx35cmx10cm Rp250.000'
            },
            {
                name: 'White Banana Bowl set of 2',
                asal: 'https://i.ibb.co/S6nDLPJ/White-Banana-Bowl-set-of-2.jpg',
                desc: 'Fungsi : Cover pot Keranjangmainan Home décor Bahan : Banana Fiber Ukuran : Besar: D 25cm T 30cm Kecil: D 23cm T 28cm Rp180.000'
            },
            {
                name: 'Triplet Basket Banana set of 3',
                asal: 'https://i.ibb.co/9w2xh7q/Triplet-Basket-Banana-set-of-3.jpg',
                desc: 'Fungsi : Cover pot Keranjangmainan Home décor Bahan : Banana Fiber Ukuran : Besar: D 30cm T 30cm Sedang: D 23cm T 28cm Kecil: D 20cm T 25cm Rp240.000'
            },
            {
                name: 'Triple Banana Ractangle set of 2',
                asal: 'https://i.ibb.co/716crz4/Grey-Banana-Ember-set-of-2.jpg',
                desc: 'Fungsi : Cover pot Keranjangmainan Home décor Bahan : Banana Fiber Rangkabesididalamnya Ukuran : Besar: 35cmx35cmx38cm Kecil: 30cmx30cmx33cm Rp210.000'
            },
            {
                name: 'Seagrass Black Stripe',
                asal: 'https://i.ibb.co/Yc6p4Vk/Seagrass-Black-Stripe.jpg',
                desc: 'Fungsi : laundrybag Cover pot Keranjangmainan Home décor Bahan : Seagrass Banana Fiber Ukuran : Diameter 28cm Tinggi 33cm Rp140.000'
            },
            {
                name: 'Basket Triple Red Banana set of 3',
                asal: 'https://i.ibb.co/QYKXkhK/Basket-Triple-Red-Banana-set-of-3.jpg',
                desc: 'Fungsi : Cover pot Keranjangmainan Home décor Bahan : Banana Fiber Ukuran : Besar: D 25cm T 30cm Sedang: D 23cm T 28cm Kecil: D 20cm T 27cm  Rp210.000'
            },
            {
                name: 'Seagrass White Stripe',
                asal: 'https://i.ibb.co/55Wz60J/Seagrass-White-Stripe.jpg',
                desc: 'Fungsi : laundrybag Cover pot Keranjangmainan Home décor Bahan : Seagrass Banana Fiber Ukuran : Diameter 28cm Tinggi 33cm Rp140.000'
            },
            {
                name: 'Big Basket Triple Pink Color',
                asal: 'https://i.ibb.co/LrDQX1P/Big-Basket-Triple-Pink-Color.jpg',
                desc: 'Fungsi : Laundry bag Cover pot Keranjangmainan Home décor Bahan : Banana Fiber Ukuran : Diameter 38cm Tinggi 45cm Rp210.000'
            },
            {
                name: 'Basket Eceng Arrow Black set of 2',
                asal: 'https://i.ibb.co/HpHZ3r0/Basket-Eceng-Arrow-Black-set-of-2.jpg',
                desc: 'Fungsi : laundrybag Cover pot Keranjangmainan Home décor Bahan : EcengGondok Ukuran : Besar: D 33cm T 33cm Kecil: D 26cm T 27cm Rp170.000'
            },
            {
                name: 'Big Basket Triple Black Color',
                asal: 'https://i.ibb.co/DfPJSnZ/Big-Basket-Triple-Black-Color.jpg',
                desc: 'Fungsi : Laundry bag Cover pot Keranjangmainan Home décor Bahan : Banana Fiber Ukuran : Diameter 38cm Tinggi 45cm Rp210.000'
            },
            {
                name: 'Bowl Eceng Natural',
                asal: 'https://i.ibb.co/HxGHBjy/Bowl-Eceng-Natural.jpg',
                desc: 'Fungsi : Keranjang accessories Keranjangmainan Home décor Bahan : EcengGondok Ukuran : Diameter atas 30cm Diameter bawah 23cm Tinggi 26cm Rp99.000'
            },
            {
                name: 'Basket EcengPerahu',
                asal: 'https://i.ibb.co/Lv73X8V/Basket-Eceng-Perahu.jpg',
                desc: 'Fungsi : Laundry bag Keranjangmainan Home décor Bahan : EcengGondok Ukuran : Panjangatas 40cm Panjangbawah 35cm Tinggi 30cm Rp130.000'
            },
            {
                name: 'Basket Banana Natural set of 2',
                asal: 'https://i.ibb.co/dJzjsK1/Basket-Banana-Natural-set-of-2.jpg',
                desc: 'Fungsi : laundrybag Cover pot Keranjangmainan Home décor Bahan : Banana Fiber RajutanMacrame Ukuran : Besar: D 40cm T 35cm Kecil: D 30cm T 27cm Rp250.000'
            },
            {
                name: 'Hanging Storage Banana Black',
                asal: 'https://i.ibb.co/Tr4sX1Z/Hanging-Storage-Banana-Black.jpg',
                desc: 'Fungsi : Home decor Keranjangaksesoris Bahan : Banana Fiber Mix Sintetis Ukuran : Diameter storage 23cm, 28cm, 35cm Tinggi saatdigantung 100cm sampai hanger atas Rp 159.000/set'
            },
        ],
        Kursi: [
            {
                name: 'Stool Mushroom Natural',
                asal: 'https://i.ibb.co/bzpSPtC/Stool-Mushroom-Natural.jpg',
                desc: 'Fungsi : Tempat duduk Bahan : ecenggondok Rangkakayudidalamnya Kaki solid wood bubut Busadidalamnya Ukuran : Diameter 40cm Tinggi 45cm Rp320.000'
            },
            {
                name: 'Mushroom Square Stool',
                asal: 'https://i.ibb.co/0DSfD3z/Mushroom-Square-Stool.jpg',
                desc: 'Fungsi : tempat duduk Bahan : Rangkakayudidalamnya Kaki solid wood bubut Cover kainkanvas Busadidalamnya Ukuran : 40cmx40cmx40cm Tinggi 40cm Rp290.000'
            },
            {
                name: 'Mushroom Canvas Stool',
                asal: 'https://i.ibb.co/7jjm2sH/Mushroom-Canvas-Stool.jpg',
                desc: 'Fungsi : tempat duduk Bahan : Rangkakayudidalamnya Kaki solid wood bubut Cover kainkanvas Busadidalamnya Ukuran : Diameter 40cm Tinggi 45cm Rp290.000'
            },
            {
                name: 'Natural Stool',
                asal: 'https://i.ibb.co/6B5mkQ3/Natural-Stool.jpg',
                desc: 'Fungsi : tempat duduk Bahan : Teak wood Iron leg Ukuran : Diameter 30cm Tinggi 50cm Rp200.000'
            },
            {
                name: 'Stool Mushroom Bar',
                asal: 'https://i.ibb.co/nz9jtth/Stool-Mushroom-Bar.jpg',
                desc: 'Fungsi : Tempat duduk Bahan : Ecenggondok Rangkakayudidalamnya Kaki solid wood bubut Busadidalamnya Ukuran : Diameter 30cm Tinggi 93cm Rp670.000'
            },
            {
                name: 'Big Round Eceng Stool',
                asal: 'https://i.ibb.co/M2pBtC0/Big-Round-Eceng-Stool.jpg',
                desc: 'Fungsi : Tempat duduk Bahan : Ecenggondok Busadidalamnya Ukuran : Diameter 55cm Tinggi 35cm Rp345.000'
            },
            {
                name: 'Natural Seat Navy',
                asal: 'https://i.ibb.co/7bscTDB/Natural-Seat-Navy.jpg',
                desc: 'Fungsi : Home decor Bahan :Anyaman seagrass, ecenggondok, rangkakayu di dalamnya, kaki solid wood Ukuran : 40cm x 40cm Tinggi 40cm Rp 270.000'
            },  
        ],
        Lampu: [
            {
                name: 'Natural Lamp',
                asal: 'https://i.ibb.co/2gfHHdJ/Natural-Lamp.jpg',
                desc: 'Fungsi : Home decor Bahan : Seagrass handmade top Ukuran : Diameter 20cm Tinggi 50cm Rp 120.000'
            },
            {
                name: 'Seagrass Natural Lamp',
                asal: 'https://i.ibb.co/f2vJZ7m/Seagrass-Natural-Lamp.jpg',
                desc: 'Fungsi : Home decor Bahan : Seagrass Ukuran : Diameter atas 15cm, bawah 35cm Tinggi 40cm Rp 185.000'
            },
            {
                name: 'Rattan Natural Lamp',
                asal: 'https://i.ibb.co/JFn9BKz/Rattan-Natural-Lamp.jpg',
                desc: 'Fungsi : Home decor Bahan :Anyaman seagrass Ukuran : Diameter atas 20cm, diameter bawah 40cm Tinggi 40cm Rp 275.000'
            },
            {
                name: 'Simple Brown Ball Lamp',
                asal: 'https://i.ibb.co/P5mRHyy/Simple-Brown-Ball-Lamp.jpg',
                desc: 'Fungsi : Lamp Home decor Bahan : Seagrass Ukuran : Diameter 40cm Rp 310.000'
            },
        ],
        Placemat: [
            {
                name: 'Placemat EcengGondok Motif Kepang',
                asal: 'https://i.ibb.co/c6GWGnM/Placemat-Eceng-Gondok-Motif-Kepang.jpg',
                desc: 'Fungsi : HiasanMeja Bahan : EcengGondok Ukuran : Diameter 38cm Rp 45.000'
            },
            {
                name: 'Placemat Seagrass Sun',
                asal: 'https://i.ibb.co/LSs34zL/Placemat-Seagrass-Sun.jpg',
                desc: 'Fungsi : HiasanMeja Bahan : Seagrass Ukuran : Diameter 35cm Rp 59.000'
            },
            {
                name: 'Placemat Lilit Natural',
                asal: 'https://i.ibb.co/9bJtnSH/Placemat-Lilit-Natural.jpg',
                desc: 'Fungsi : HiasanMeja Bahan : Seagrass Ukuran : Diameter 38 cm Rp 50.000'
            },
            {
                name: 'Placemat Lilit Navy',
                asal: 'https://i.ibb.co/JkCsLR5/Placemat-Lilit-Navy.jpg',
                desc: 'Fungsi : HiasanMeja Bahan : Seagrass Ukuran : Diameter 38 cm Rp 50.000'
            },
            {
                name: 'Placemat EcengGondokLilit',
                asal: 'https://i.ibb.co/1vKT2kD/Placemat-Eceng-Gondok-Lilit.jpg',
                desc: 'Fungsi : HiasanMeja Bahan : EcengGondok Ukuran : Diameter 38cm Rp 45.000'
            },
            {
                name: 'Placemat EcengGondok Matahari',
                asal: 'https://i.ibb.co/jym3wyy/Placemat-Eceng-Gondok-Matahari.jpg',
                desc: 'Fungsi : HiasanMeja Bahan : EcengGondok Ukuran : Diameter 38cm Rp 45.000'
            },
        ],
        Tas: [
            {
                name: 'Bag Seagrass Triple Pink',
                asal: 'https://i.ibb.co/ZMLBzFg/Bag-Seagrass-Triple-Pink.jpg',
                desc: 'Fungsi : KeranjangBelanja Tas Bahan : Seagrass mix Plastic Inner furing Zipper Pompom Ukuran : Panjang 41cm Lebar 22cm Rp145.000'
            },
            {
                name: 'Keong Bag MendongKepang',
                asal: 'https://i.ibb.co/K6F1Tj0/Keong-Bag-Mendong-Kepang.jpg',
                desc: 'Fungsi : Tas Bahan : Seagrass Kepang Inner Furing Zipper ukuran : besar: Diameter 30cm kecil: Diameter 25cm Diameter 30cm Rp145.000 Diameter 25cm Rp135.000'
            },
            {
                name: 'Keong Bag Mendong Natural',
                asal: 'https://i.ibb.co/RN06NLT/Keong-Bag-Mendong-Natural.jpg',
                desc: 'Fungsi : Tas Bahan : Seagrass Kepang Inner Furing Zipper Pompom ukuran : Diameter 25cm'
            },
            {
                name: 'Keong Bag Mendong Red',
                asal: 'https://i.ibb.co/jZ8Cj3c/Keong-Bag-Mendong-Red.jpg',
                desc: 'Fungsi : Tas Bahan : Seagrass Kepang Inner Furing Zipper ukuran : besar: Diameter 30cm kecil: Diameter 25cm Diameter 30cm Rp135.000 Diameter 25cm Rp125.000'
            },
            {
                name: 'Navy Seagrass Bag',
                asal: 'https://i.ibb.co/1v5xmym/Navy-Seagrass-Bag.jpg',
                desc: 'Fungsi : Tas Bahan : Seagrass Kepang Inner furing Zipper TaliSintetis Ukuran : Panjang 30cm Lebar 25cm Rp245.000'
            },
            {
                name: 'White Seagrass Bag',
                asal: 'https://i.ibb.co/Y4SXKZC/White-Seagrass-Bag.jpg',
                desc: 'Fungsi : Tas Bahan : Seagrass Kepang Inner furing Zipper TaliSintetis Ukuran : Panjang 30cm Lebar 25cm Rp245.000'
            },
        ]
        // namaProduk: [
        // {
        //     name: 'Bantal',
        //     asal: 'https://i.ibb.co/cNCS282/bntl1.jpg',
        //     desc: 'Bantal keren'
        // },
        // {
        //     name: 'Cermin',
        //     asal: 'https://i.ibb.co/86YVtdM/Rattan-Mirror-Eye-and-Sun.jpg',
        //     desc: 'Bantal 1'
        // },
        // {
        //     name: 'Karpet',
        //     asal: 'https://i.ibb.co/7YXJ5n1/Seagrass-Rug-Motif-Pancawarna-Black.jpg',
        //     desc: 'Bantal 2'
        // },
        // {
        //     name: 'Keranjang',
        //     asal: 'https://i.ibb.co/Wssm3RN/Basket-Banana-Diamond-set-of-2.jpg',
        //     desc: 'Bantal 3'
        // },
        // {
        //     name: 'Kursi',
        //     asal: 'https://i.ibb.co/bzpSPtC/Stool-Mushroom-Natural.jpg',
        //     desc: 'Bantal 4'
        // },
        // {
        //     name: 'Lampu',
        //     asal: 'https://i.ibb.co/P5mRHyy/Simple-Brown-Ball-Lamp.jpg',
        //     desc: 'Bantal 5'
        // },
        // {
        //     name: 'Placemat',
        //     asal: 'https://i.ibb.co/c6GWGnM/Placemat-Eceng-Gondok-Motif-Kepang.jpg',
        //     desc: 'Bantal 6'
        // },
        // {
        //     name: 'Tas',
        //     asal: 'https://i.ibb.co/1v5xmym/Navy-Seagrass-Bag.jpg',
        //     desc: 'Bantal 7'
        // }
        // ]
    }),
    methods:{
}
}
</script>

<style scoped>

</style>