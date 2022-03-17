<template>
  <div class="tingge">
    <!-- <h1>消息</h1> -->
    <!-- 循环 -->
    <div v-for="item in list" :key="item._id">
      <!-- 展示图片 -->
      <img :src="item.picUrl" alt="" @click="to(item.id)" />
      <!-- 名称信息详情强制一行显示 -->
      <!-- <p>{{ item.name }}</p> -->
      <div class="van-ellipsis">{{ item.name }}</div>
      <!-- <p>{{ item.id }}</p> -->
      <!-- 音乐详情信息 -->
      <!-- <div class="van-ellipsis">{{ item.description }}</div> -->
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "Tingge",
  data() {
    return {
      list: "",
      id: "",
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
    this.$axios.get("/api/personalized").then((res) => {
      console.log("听歌", res);
      this.list = res.result;
      // console.log("ID", res);
      this.id = res.result;
      // console.log("we", this.list);
    });
  },
  mounted() {},
  components: {},
};
</script>
<style scoped>
.tingge,
.tingge div,
.tingge div img {
  height: 220px;
  width: 100%;
}
.tingge div {
  display: flex;
  /* justify-content: space-around; */
  padding: 10px;
}
.tingge div img {
  width: 200px;
  height: 90%;
  margin-top: 30px;
}
/* .tingge div p {
  flex: 1;
} */
.van-ellipsis {
  margin-top: 30px;
  flex: 1;
}
</style>
