import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "material-icons/iconfont/material-icons.css";
import Vuesax from "vuesax";
import {fb} from "./firebase";
import VueFirestore from 'vue-firestore';
const Swal = require('sweetalert2');
window.Swal = Swal;
import 'bootstrap';
import 'popper.js';
import Vuex from 'vuex';
Vue.use(Vuex);

import store from './store';


const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})
window.Toast = Toast;

Vue.component('add-to-cart', require('./views/Add-to-cart.vue').default);
Vue.component('mini-cart', require('./components/MiniCart.vue').default);

Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax)
Vue.use(VueFirestore);

Vue.config.productionTip = false;

let app = '';

fb.auth().onAuthStateChanged(function(user) {
  if (!app) {
    new Vue({
      router,
      vuetify,
      Vuesax,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});


