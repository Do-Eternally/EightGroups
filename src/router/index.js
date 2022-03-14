import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home",
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
      path: "/home",
      name: "Home",
      component: () => import("../pages/Home"),
    },
    {
      path: "/list",
      name: "List",
      component: () => import("../pages/List"),
    },
    {
      path: "/mine",
      name: "Mine",
      component: () => import("../pages/Mine"),
    },
  ],
});
export default router;
