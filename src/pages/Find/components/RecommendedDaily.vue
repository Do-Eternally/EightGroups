<template>
  <div class="recommend">
    <!-- <h1>每日推荐</h1> -->
    <van-empty
      description="请先登录"
      v-if="!$store.state.user.userinfo"
      @click="goLogin"
    />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-card
        v-for="item in list"
        :key="item.trackUpdateTime + Math.random()"
        :price="item.copywriter"
        currency=""
        :title="item.description || item.name"
        :thumb="item.picUrl"
        @click="toplistDetail(item.id)"
      />
    </van-list>
  </div>
</template>

<script>
export default {
  name: "RecommendedDaily",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
    };
  },
  computed: {
    getplayCount() {
      return function (x) {
        return parseInt(x / 10000) + "w播放";
      };
    },
  },
  watch: {},

  methods: {
    onLoad() {
      this.finished = true;
    },
    goLogin() {
      this.$router.push("/login");
    },
    toplistDetail(id) {
      console.log(id);
      this.$router.push({
        name: "SonglistDetail",
        query: {
          id,
        },
      });
    },
  },
  created() {
    // console.log(this.$store);
    this.$axios.get("/api/recommend/resource").then((res) => {
      console.log("推荐", res);
      if (res.code == 200) this.list = res.recommend;
    });
  },
  mounted() {},
  components: {},
};
</script>
<style scoped>
</style>