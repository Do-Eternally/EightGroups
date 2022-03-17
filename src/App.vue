<template>
  <div id="app">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="首页"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <router-view></router-view>
    <van-tabbar route v-if="$route.meta.showFooter">
      <van-tabbar-item icon="home-o" to="/find">发现</van-tabbar-item>
      <van-tabbar-item icon="search" to="/blog">博客</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/mine">我的</van-tabbar-item>
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
  methods: {
    onClickLeft() {
      // Toast("返回");
      this.$router.go(-1);
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
        console.log(res);
        return res.data.profile;
      }
    },
  },
  async created() {
    // console.log("vc", this);
    // this.isLogin();
    let data = await this.isLogin();
    this.$store.commit("user/changeUser", data);
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
</style>
