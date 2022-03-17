<template>
  <div class="song-list-detail">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        :center="true"
        @click="goSongs(item.al.id,index)"
        size="large"
        v-for="(item,index) in list"
        :key="(item.id = Math.random())"
        :title="item.name"
        :icon="item.al.picUrl"
      >
        <template #default>
          {{ item.ar[0].name }}
        </template>
      </van-cell>
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
      ids: [],
    };
  },
  methods: {
    goSongs(x,y) {
      // console.log(x,y);
      let id = this.ids[y].id
      // console.log("id",id);
      this.$router.push({
        name: "Player",
        query: {
          id,
        },
      });
    },
    onLoad() {
      let id = this.id;
      this.loading = true;
      this.$axios
        .get("/api/playlist/track/all", {
          params: {
            id,
            limit: 10,
            offset: this.offset,
          },
        })
        .then((res) => {
          // console.log(res);
          this.list = [...this.list, ...res.songs];
          this.ids = [...this.ids, ...res.privileges];
          this.loading = false;
          this.offset += 1;
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
.chuchu {
  text-align: center;
  text-overflow: hidden;
}
</style>