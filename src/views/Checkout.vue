<template>
  <v-app>
    <kepala/>
    <v-content>
      <h1>TENTANG RATTANESIA</h1>
        <h1>FAQ</h1>
        <vs-collapse :type="type">
      <vs-collapse-item>
        <div slot="header">
          Rattanesia
        </div>

        Toko online produk rotan
      </vs-collapse-item>
      <vs-collapse-item>
        <div slot="header">
          Kontak
        </div>
        Hotline: 018291281291
        <br/>
        Email: cs@rattanesia.com
      </vs-collapse-item>
        <vs-collapse-item>
        <div slot="header">
          Cara Pemesanan
        </div>
        blablablablaalblalablablabalbal
      </vs-collapse-item>
        </vs-collapse>
    </v-content>
    <kaki/>
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
