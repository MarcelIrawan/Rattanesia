<template>
    <div class="mini-cart">
        <vs-popup class="holamundo"  title="Tambah Produk" :active.sync="popupActivo">
                    <div>
                        <h3>Kerjanjangku</h3>
                        <hr>
                    </div>
                    <div>
                        <ul>
                            <li v-for="item in this.$store.state.cart">
                                {{item.namaProduk}}
                            </li>
                        </ul>
                    </div>    
                    <div>
                    <router-link @click="; popupActivo=false;" type="filled">Checkout</router-link>
                    <vs-button to="/checkout" @click="; popupActivo=false;" type="filled">Lanjut berbelanja</vs-button>
                    </div>
                </vs-popup>
    </div>
</template>

<script>
export default {
    name: "MiniCart",
    data(){
        return{
            popupActivo: false,
        }
    }
};
</script>
