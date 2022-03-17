<template>
  <div class="xiaoxi">
    <!-- <h1>消息</h1> -->
    <!-- 循环 -->
    <div v-for="item in list" :key="item._id">
      <!-- 展示图片 -->
      <img :src="item.coverImgUrl" alt="" />
      <!-- 名称信息详情强制一行显示 -->
      <!-- <p>{{ item.name }}</p> -->
      <div class="van-ellipsis">{{ item.name }}</div>
      <!-- 音乐详情信息 -->
      <!-- <div class="van-ellipsis">{{ item.description }}</div> -->
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "Xiaoxi",
  data() {
    return {
      list: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    to(id) {
      console.log(id);
      this.$router.push({
        // path: "/find/songslist",
        name: "SonglistDetail",
        query: {
          id,
        },
      });
    },
  },
  created() {
    // 调取消息中心;
    // this.$axios.get("/api/playlist/catlist").then((res) => {
    //   console.log(res);
    // });
    this.$axios.get("/api/top/playlist").then((res) => {
      console.log("消息中心", res);
      this.list = res.playlists;
      // console.log("we", this.list);
    });
  },
  mounted() {},
  components: {},
};
</script>
<style scoped>
.xiaoxi,
.xiaoxi div,
.xiaoxi div img {
  height: 220px;
  width: 100%;
}
.xiaoxi div {
  display: flex;
  /* justify-content: space-around; */
  padding: 10px;
}
.xiaoxi div img {
  width: 200px;
  height: 90%;
  margin-top: 30px;
}
/* .xiaoxi div p {
  flex: 1;
} */
.van-ellipsis {
  margin-top: 30px;
  flex: 1;
}
</style>
