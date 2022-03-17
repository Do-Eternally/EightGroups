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
      meta: { showFooter: false },
    },
    {
      path: "/reg",
      name: "Reg",
      component: () => import("../pages/Reg"),
      meta: { showFooter: true },
    },
    {
      path: "/find",
      name: "Find",
      component: () => import("../pages/Find"),
      meta: { showFooter: true },
      children: [
        {
          path: "songslist", //歌单
          name: "SongsList",
          component: () => import("../pages/Find/components/SongsList.vue"),
          meta: { showFooter: true },
        },
        {
          path: "recommended", //每日推荐
          name: "RecommendedDaily",
          component: () =>
            import("../pages/Find/components/RecommendedDaily.vue"),
          meta: { showFooter: true },
        },
        {
          path: "ranklist", //排行榜
          name: "RankList",
          component: () => import("../pages/Find/components/RankList"),
          meta: { showFooter: true },
        },
        {
          path: "privatefm", //私人FM
          name: "PrivateFM",
          component: () => import("../pages/Find/components/PrivateFM"),
          meta: { showFooter: true },
        },
      ],
    },
    {
      path: "/blog",
      name: "Blog",
      component: () => import("../pages/Blog"),
      meta: { showFooter: true },
    },
    {
      path: "/mine",
      name: "Mine",
      component: () => import("../pages/Mine"),
      meta: { showFooter: true },
    },

    {
      path: "/attention",
      name: "Attention",
      component: () => import("../pages/Attention"),
      meta: { showFooter: true },
    },
    {
      path: "/country",
      name: "Country",
      component: () => import("../pages/Country"),
      meta: { showFooter: true },
    },
    {
      path: "/sidebar",
      name: "Sidebar",
      component: () => import("../pages/Sidebar"),
      meta: { showFooter: false },
    },
  ],
});
export default router;
