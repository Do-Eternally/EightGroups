<template>
  <div id="app">
    <router-view></router-view>
    <router-link to="/home">首页</router-link>
    <router-link to="/list">列表</router-link>
    <router-link to="/mine">个人中心</router-link>
    <router-link to="/reg">注册</router-link>
    <router-link to="/login">登录</router-link>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
