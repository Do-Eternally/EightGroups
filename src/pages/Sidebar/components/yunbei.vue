<template>
  <div class="yunbei">
    <!-- <h1>消息</h1> -->
    <!-- 循环 -->
    <div v-for="item in list" :key="item._id">
      <!-- 展示图片 -->
      <img :src="item.album.picUrl" alt="" />
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
  name: "Yunbei",
  data() {
    return {
      list: "",
    };
  },
  computed: {},
  watch: {},

  methods: {},
  created() {
    // 调取消息中心;
    // this.$axios.get("/api/playlist/catlist").then((res) => {
    //   console.log(res);
    // });
    this.$axios.get("/api/top/song").then((res) => {
      console.log("云贝中心", res);
      this.list = res.data;
      // console.log("we", this.list);
    });
  },
  mounted() {},
  components: {},
};
</script>
<style scoped>
.yunbei,
.yunbei div,
.yunbei div img {
  height: 220px;
  width: 100%;
}
.yunbei div {
  display: flex;
  /* justify-content: space-around; */
  padding: 10px;
}
.yunbei div img {
  width: 200px;
  height: 90%;
  margin-top: 30px;
}
/* .yunbei div p {
  flex: 1;
} */
.van-ellipsis {
  margin-top: 30px;
  flex: 1;
}
</style>
