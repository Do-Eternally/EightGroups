<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/find">发现</van-tabbar-item>
      <van-tabbar-item icon="search" to="/blog">博客</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/mine">我的</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/attention">关注</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/country">云村</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    const token = localStorage.getItem("token");
    this.$store.commit("changeToken", token);
  },
  components: {},
};
</script>

<style>
</style>
