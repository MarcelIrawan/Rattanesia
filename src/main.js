import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "material-icons/iconfont/material-icons.css";
import Vuesax from "vuesax";

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax)

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  Vuesax,
  render: h => h(App)
}).$mount("#app");
