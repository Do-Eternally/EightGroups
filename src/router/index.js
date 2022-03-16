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
      children: [
        {
          path: "songslist", //歌单
          name: "SongsList",
          component: () => import("../pages/Find/components/SongsList.vue"),
        },
        {
          path: "recommended", //每日推荐
          name: "RecommendedDaily",
          component: () =>
            import("../pages/Find/components/RecommendedDaily.vue"),
        },
        {
          path: "ranklist", //排行榜
          name: "RankList",
          component: () => import("../pages/Find/components/RankList"),
        },
        {
          path: "privatefm", //私人FM
          name: "PrivateFM",
          component: () => import("../pages/Find/components/PrivateFM"),
        },
      ],
    },
    {
      path: "/songlist",
      name: "SonglistDetail",
      component: () => import("../pages/Find/components/SonglistDetail"),
    },
    {
      path: "/blog",
      name: "Blog",
      component: () => import("../pages/Blog"),
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
