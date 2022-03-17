<template>
  <div class="ranklist">
    <!-- <h1>排行榜</h1> -->
    <van-loading type="spinner" color="#1989fa" v-if="showLoading" vertical />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-card
        v-for="item in list"
        :key="item.trackUpdateTime + Math.random()"
        :price="getplayCount(item.playCount)"
        currency=""
        :title="item.description || item.name"
        :thumb="item.coverImgUrl"
        @click="toplistDetail(item.id)"
      />
    </van-list>
  </div>
</template>

<script>
export default {
  name: "RankList",
  data() {
    return {
      list: [],
      loading: false,
      showLoading: true,
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
  methods: {
    onLoad() {
      // this.finished = true;
    },
    //排行榜内歌曲
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

  //vue实例创建时调取排行榜信息
  created() {
    this.$axios.get("/api/toplist").then((res) => {
      // console.log("排行榜", res);
      if (res.code == 200) {
        this.list = res.list;
      }
    });
    this.$nextTick(function () {
      this.showLoading = false;
      // this.finished = true;
    });
  },
  mounted() {},
  components: {},
};
</script>
<style scoped>
/* .ranklist {
  padding: 0 10px;
} */
</style>