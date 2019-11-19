<template>
    <div class="add-to-cart">
        <vs-button color="primary" @click="addToCart(); popupActivo=true;">
            Add to cart
        </vs-button>
        <vs-popup class="holamundo"  title="Tambah Produk" :active.sync="popupActivo">
                    <div>
                        <h3>Kerjanjangku</h3>
                        <hr>
                    </div>
                    <div>
                        <ul>
                            <li v-for="item in this.$store.state.cart">
                                <img :src="item.produkImg" width="80px">
                                <div>
                                    <h5>{{item.namaProduk}}</h5>
                                    <p>{{item.hargaProduk}}</p>
                                    <p>Jumlah :{{item.produkQuantity}}</p>
                                </div>
                            </li>
                        </ul>
                    </div>    
                    <div>
                    <vs-button to="/checkout" @click="popupActivo=false;" type="filled">Checkout</vs-button>
                    <vs-button  @click="popupActivo=false;" type="filled">Lanjut berbelanja</vs-button>
                    </div>
                </vs-popup>
        <!-- <minicart :active.sync="popupActivo"></minicart> -->
    </div>
</template>

<script>

export default {
    name: 'add-to-cart',
    props: {
        nama: String,
        harga: String,
        pId: String,
        produkImg: String
    },
    components: {

    },
    data() {
    return{
        item:{
        namaProduk: this.nama,
        hargaProduk: this.harga,
        produkId: this.pId,
        produk_Img: this.produkImg,
        produkQuantity: 1,
        },
        popupActivo: false,
    }
    },
    methods: {
        addToCart(){
        this.$store.commit('addToCart', this.item)
        }
    }
    
}
</script>

<style>

</style>