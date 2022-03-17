<template>
  <div id="app">
    <van-nav-bar
      :title="$route.name"
      :left-text="text"
      right-text="首页"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      fixed
      placeholder
    />
    <router-view></router-view>
    <div style="height: 5rem"></div>
    <van-tabbar route v-if="$route.meta.showFooter" id="homenav">
      <van-tabbar-item icon="home-o" to="/find">发现</van-tabbar-item>
      <van-tabbar-item icon="search" to="/blog">博客</van-tabbar-item>
      <van-tabbar-item icon="friends-o" :to="{ name: 'Sidebar' }"
        >我的</van-tabbar-item
      >
      <van-tabbar-item icon="setting-o" to="/attention">关注</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/country">云村</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Toast } from "vant";
// import { Toast } from "vant";
import instance from "./util";
export default {
  name: "App",
  created() {
    const token = localStorage.getItem("token");
    this.$store.commit("changeToken", token);
  },
  computed: {
    text() {
      return this.$route.meta.showFooter
        ? !this.$store.state.user.userinfo
          ? "登录"
          : "我的"
        : "返回";
    },
  },
  methods: {
    onClickLeft() {
      // Toast("返回");
      // console.log("uesreinfo", this.$store.state.user);
      // console.log("$route.meta", this.$route.meta);
      if (this.$store.state.user.userinfo) {
        if (!this.$route.meta.showFooter) {
          this.$router.go(-1);
        } else {
          this.$router.push("/sidebar");
          Toast("个人中心");
        }
      } else {
        Toast("请登录");
        this.$router.push("/login");
      }
    },
    onClickRight() {
      this.$router.push("/");
    },
    async isLogin() {
      let res = await instance.get("/api/login/status");
      // let res = await instance.get("/api/logout");
      if (res.data.account == null) {
        Toast("未登录");
        return false;
      } else {
        // console.log("登录",res);
        return res.data.profile;
      }
    },
  },
  async created() {
    let data = await this.isLogin();
    this.$store.commit("user/changeUser", data);
    // let user=this.$store.state.user.userinfo
    // console.log("Vuex", this.$store.state.user.userinfo);
  },
};
</script>

<style>
.van-swipe-item {
  width: 100px;
  height: 60px;
  border-radius: 50px;
  line-height: 60px;
  text-align: center;
  background-color: pink;
  margin-right: 10px;
}
/* van-tabbar{
  position: sticky;
  bottom: 0;
} */
/* .headnav{
  position: fixed;
  top: 0;
} */
/* #homenav{
  position: sticky;
  bottom: 0;
} */
</style>
