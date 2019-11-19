<template>
  <v-app>
    <kepala/>
    <v-content>
      <kepala2/>
      <produk/>
    </v-content>
    <kaki/>
  </v-app>  
</template>

<script>
import HelloWorld from '../components/HelloWorld';
import kepala from '../components/Navbar';
import kepala2 from '../components/Header';
import kaki from '../components/Footer';
import produk from '../components/Produkdpn';

export default {
  components: {
    HelloWorld,
    kepala2,
    kepala,
    kaki,
    produk
  },
  
};
</script>
