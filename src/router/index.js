import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/find/recommended",
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
      redirect:"/find/recommended",
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
      component: () => import("../pages/Sidebar"),
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
      path: "/songlist",
      name: "SonglistDetail",
      component: () => import("../pages/Find/components/SonglistDetail"),
    },
    {
      path: "/player",
      name: "Player",
      component: () => import("../pages/Player"),
    },
    /* {
      path: "/sidebar", //侧边栏
      name: "Sidebar",
      component: () => import("../pages/Sidebar"),
      meta: { showFooter: false },
    }, */
    {
      path: "/xiaoxi", //侧边栏>消息中心
      name: "Xiaoxi",
      component: () => import("../pages/Sidebar/components/xiaoxi.vue"),
    },
    {
      path: "/yunbei", //侧边栏>云贝中心
      name: "Yunbei",
      component: () => import("../pages/Sidebar/components/yunbei.vue"),
    },
    {
      path: "/chuangzuo", //侧边栏>创作中心
      name: "Chuangzuo",
      component: () => import("../pages/Sidebar/components/chuangzuo.vue"),
    },
    {
      path: "/yanchu", //侧边栏>演出
      name: "Yanchu",
      component: () => import("../pages/Sidebar/components/yanchu.vue"),
    },
    {
      path: "/youxi", //侧边栏>游戏专区
      name: "Youxi",
      component: () => import("../pages/Sidebar/components/youxi.vue"),
    },
    {
      path: "/koudai", //侧边栏>口袋彩铃
      name: "Koudai",
      component: () => import("../pages/Sidebar/components/koudai.vue"),
    },
    {
      path: "/beat", //侧边栏>best专区
      name: "Beat",
      component: () => import("../pages/Sidebar/components/beat.vue"),
    },
  ],
});
export default router;
