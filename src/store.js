import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cart:[]
    },

    mutations: {
        addToCart(state, item){
            let found = state.cart.find(produk => produk.produkId == item.produkId);
            if(found){
                found.produkQuantity++;
            }else{
                state.cart.push(item);
            }

        }

    }
})