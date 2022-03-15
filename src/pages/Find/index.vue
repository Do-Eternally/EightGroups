<template>
  <div class="find">
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      :width="100"
      :show-indicators="false"
      :loop="false"
    >
      <van-swipe-item
        ><router-link to="/find/recommended"
          >每日推荐</router-link
        ></van-swipe-item
      >
      <van-swipe-item
        ><router-link to="/find/privatefm">私人FM</router-link></van-swipe-item
      >
      <van-swipe-item
        ><router-link to="/find/songslist">歌单</router-link></van-swipe-item
      >
      <van-swipe-item
        ><router-link to="/find/ranklist">排行榜</router-link></van-swipe-item
      >
    </van-swipe>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Find",
  data() {
    return {
      current: 0,
    };
  },
  computed: {},
  watch: {},

  methods: {},
  created() {},
  mounted() {},
  components: {},
};
</script>
<style scoped>
</style>