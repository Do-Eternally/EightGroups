<template>
  <div class="song-list-detail">
    <h1>歌单详细</h1>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell :center="true" size=""  v-for="item in list" :key="item.id" :title="item.name"></van-cell>
    </van-list>
  </div>
</template>

<script>
export default {
  name: "SonglistDetail",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      offset: 0,
      id: this.$route.query.id,
    };
  },
  methods: {
    onLoad() {
      let id = this.id;
      this.onLoad = true;
      this.$axios
        .get("/api/playlist/track/all", {
          params: {
            id,
            limit: 10,
            offset: this.offset,
            // offset: 101,
          },
        })
        .then((res) => {
          this.list = [...this.list, ...res.songs];
          this.onLoad = false;
          this.offset += 10;
          if (res.songs.length < 10) {
            this.finished = true;
          }
        });
    },
  },
  created() {
    // this.onLoad()
  },
  mounted() {},
  components: {},
};
</script>
<style scoped>
</style>