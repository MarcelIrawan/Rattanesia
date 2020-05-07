import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Admin from "./views/Admin.vue";
import DaftarProduk from "./components/DaftarProduk.vue";
import DaftarPesanan from "./components/DaftarPesanan";
import Profile from "./components/Profile.vue";
import {fb} from "./firebase";

// import Layanan from "./views/Layanan.Vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: 'produk',
          name: 'produk',
          component: DaftarProduk
        },
        {
          path: 'pesanan',
          name: 'pesanan',
          component: DaftarPesanan
        },
        {
          path: 'profile',
          name: 'profile',
          component: Profile
        }
      ]
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () =>
        import("./views/Checkout.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import("./views/About.vue")
    },
    {
      path: "/service",
      name: "layanan",
      component: () =>
        import("./views/lynn.vue")
    },
    {
      path: "/cart",
      name: "keranjang",
      component: () =>
        import("./views/Cart.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => 
        import("./views/Login.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => 
        import("./views/Signup.vue"),
    }
  ]
});


router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if(requiresAuth && !currentUser) {
    next('/')
  } else if (requiresAuth && !currentUser){
    next()
  } else {
    next()
  }
})

export default router;