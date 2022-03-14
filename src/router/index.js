import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/find",
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../pages/Login"),
    },
    {
      path: "/reg",
      name: "Reg",
      component: () => import("../pages/Reg"),
    },
    {
      path: "/find",
      name: "Find",
      component: () => import("../pages/Find"),
    },
    {
      path: "/bolg",
      name: "Bolg",
      component: () => import("../pages/Bolg"),
    },
    {
      path: "/mine",
      name: "Mine",
      component: () => import("../pages/Mine"),
    },
    {
      path: "/attention",
      name: "Attention",
      component: () => import("../pages/Attention"),
    },
    {
      path: "/country",
      name: "Country",
      component: () => import("../pages/Country"),
    },
  ],
});
export default router;
