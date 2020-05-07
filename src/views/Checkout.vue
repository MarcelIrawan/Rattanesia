<template>
  <v-app>
    <kepala/>
    <div class='container'>
      <div class="row">
        <div class="col-md-9">
          <h1>CheckOut Page</h1>
          <ul>
            <li v-for="item in this.$store.state.cart">
                <div>
                  <h3>{{item.namaProduk}}</h3>
                  <p>{{item.hargaProduk}}</p>
                  <p>Jumlah:{{item.produkQuantity}}</p>
                </div>
              </li>
          </ul>
        </div>
        <div class="col-md-9">
          <h2>Total Price</h2>
          <li v-for="item in this.$store.state.cart">
            {{item.hargaProduk*item.produkQuantity}}
          </li>
          <!-- <p>{{item.hargaProduk*item.produkQuantity}}</p> -->
        </div>
      </div>
    </div>
  </v-app>  
</template>

<script>
import HelloWorld from '../components/HelloWorld';
import kepala from '../components/Navbar';
import kepala2 from '../components/Header';
import kaki from '../components/Footer';


export default {
  components: {
    HelloWorld,
    kepala2,
    kepala,
    kaki,
  },
  data() {
    return{
      type: 'margin',
    }
  }
};
</script>
