<template>
  <div class="songs-list">
    <!-- <h1>歌单列表</h1> -->
    <van-loading type="spinner" color="#1989fa" v-if="showLoading" vertical />
    <van-card
      :desc="item.al.name"
      :title="item.name"
      :thumb="item.al.picUrl"
      v-for="(item, index) in list"
      :key="item.id + Math.random()"
      @click="goSongs(item.id)"
    >
      <template #tags>
        <van-tag plain type="danger">{{ item.reason }}</van-tag>
      </template>
      <template #num>
        {{ singer(index) }}
      </template>
    </van-card>
  </div>
</template>

<script>
export default {
  name: "SongsList",
  data() {
    return {
      list: [],
      showLoading: true,
    };
  },
  computed: {
    singer() {
      return (index) => {
        let singers = "";
        this.list[index].ar.forEach((item) => {
          singers += item.name + "  /  ";
        });
        singers = singers.replace(/\/\s*$/, "");
        return singers;
      };
    },
  },
  watch: {},

  methods: {
    goSongs(x) {
      let id = x;
      // console.log("id", id);
      this.$router.push({
        name: "Player",
        query: {
          id,
        },
      });
    },
  },
  async created() {
    let res = await this.$axios.get("/api/recommend/songs");
    this.list = res.data.dailySongs;

    // console.log(this.list);
    this.$nextTick(function () {
      this.showLoading = false;
    });
  },
  mounted() {},
};
</script>
<style scoped>
</style>