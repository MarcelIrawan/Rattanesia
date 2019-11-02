<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Beranda from './views/Home';

export default {
  name: 'App',
  components: {
    Beranda
  },
  data: () => ({
    //
  }),
};
</script>
