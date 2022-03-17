<template>
  <div class="bolg">
    <van-tabs v-model="activeName">
      <van-tab title="听听" name="a"></van-tab>
      <van-tab title="推荐" name="b"></van-tab>
      <van-tab title="故事" name="c"></van-tab>
    </van-tabs>

    <van-search
      v-model="value"
      shape="round"
      background=""
      placeholder="大家都在听"
    />

    <van-swipe
      class="my-swipe"
      autoplay="false"
      indicator-color="white"
      :show-indicators="false"
    >
      <van-swipe-item>
        <van-row gutter="20">
          <van-col span="5" class="w"
            ><van-icon name="fire" size="70" color="red" />
          </van-col>
          <van-col span="5" class="w">
            <van-icon name="service " size="70" color="red" />
          </van-col>
          <van-col span="5" class="w">
            <van-icon name="medal" size="70" color="red" />
          </van-col>
          <van-col span="5" class="w">
            <van-icon name="like" size="70" color="red" />
          </van-col>
          <van-col span="5" class="w">
            <van-icon name="photograph" size="70" color="red"
          /></van-col>
        </van-row>
      </van-swipe-item>
      <van-swipe-item>
        <van-row gutter="20">
          <van-col span="5" class="w">
            <van-icon name="point-gift" size="70" color="red" />
          </van-col>

          <!-- <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col> -->
        </van-row>
      </van-swipe-item>
    </van-swipe>

    <div class="d1">
      <van-swipe :loop="false" :width="300" :show-indicators="false" class="q">
        <van-swipe-item
          class="qq"
          v-for="item in obj"
          :key="item.id + Math.random()"
        >
          <p>{{ item.name }}</p>

          <img :src="item.picUrl" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <van-tabs v-model="active">
      <van-tab title="推荐" class="r1">
        <van-row
          gutter="20"
          class="r"
          v-for="item in ss"
          :key="item.id"
          @click="to(item.id)"
        >
          <van-col offset="6" span="5" class="c1">
            <img :src="item.picUrl" alt="" class="m1" />
            <p>{{ item.name }}</p>
          </van-col>
          <!-- <van-col span="5" class="c1">span: 8</van-col>
          <van-col span="6" class="c1">span: 8</van-col> -->
        </van-row>

        <!-- <van-row gutter="20" class="r">
          <van-col offset="4" span="5" class="c1">span: 8</van-col>
          <van-col span="5" class="c1">span: 8</van-col>
          <van-col span="6" class="c1">span: 8</van-col>
        </van-row>

        <van-row gutter="20" class="r">
          <van-col offset="4" span="5" class="c1">span: 8</van-col>
          <van-col span="5" class="c1">span: 8</van-col>
          <van-col span="6" class="c1">span: 8</van-col>
        </van-row> -->
      </van-tab>
      <van-tab title="真实故事">
        <van-row gutter="20" class="r">
          <van-col offset="6" span="5" class="c1"> </van-col>
          <!-- <van-col span="5" class="c1">span: 8</van-col>
          <van-col span="6" class="c1">span: 8</van-col> -->
        </van-row>

        <van-row gutter="20" class="r">
          <van-col offset="4" span="5" class="c1">span: 8</van-col>
          <van-col span="5" class="c1">span: 8</van-col>
          <van-col span="6" class="c1">span: 8</van-col>
        </van-row>

        <van-row gutter="20" class="r">
          <van-col offset="4" span="5" class="c1">span: 8</van-col>
          <van-col span="5" class="c1">span: 8</van-col>
          <van-col span="6" class="c1">span: 8</van-col>
        </van-row>
      </van-tab>
      <van-tab title="每日必听">
        <van-row gutter="20" class="r">
          <van-col offset="6" span="5" class="c1">span: 8</van-col>
          <van-col span="5" class="c1">span: 8</van-col>
          <van-col span="6" class="c1">span: 8</van-col>
        </van-row>

        <van-row gutter="20" class="r">
          <van-col offset="4" span="5" class="c1">span: 8</van-col>
          <van-col span="5" class="c1">span: 8</van-col>
          <van-col span="6" class="c1">span: 8</van-col>
        </van-row>

        <van-row gutter="20" class="r">
          <van-col offset="4" span="5" class="c1">span: 8</van-col>
          <van-col span="5" class="c1">span: 8</van-col>
          <van-col span="6" class="c1">span: 8</van-col>
        </van-row>
      </van-tab>
      <van-tab title="听见好书">
        <van-row gutter="20" class="r">
          <van-col offset="6" span="5" class="c1">span: 8</van-col>
          <van-col span="5" class="c1">span: 8</van-col>
          <van-col span="6" class="c1">span: 8</van-col>
        </van-row>

        <van-row gutter="20" class="r">
          <van-col offset="4" span="5" class="c1">span: 8</van-col>
          <van-col span="5" class="c1">span: 8</van-col>
          <van-col span="6" class="c1">span: 8</van-col>
        </van-row>

        <van-row gutter="20" class="r">
          <van-col offset="4" span="5" class="c1">span: 8</van-col>
          <van-col span="5" class="c1">span: 8</van-col>
          <van-col span="6" class="c1">span: 8</van-col>
        </van-row>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs } from "vant";
import { Search } from "vant";
import { Col, Row } from "vant";

// import {reqProducts} from ''

export default {
  name: "Bolg",
  data() {
    return {
      activeName: "b",
      value: "",
      active: 0,
      obj: "",
      cc: "",
      ss: "",
      xx: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    to(id) {
      console.log(id);
      this.$router.push({
        // path: "/find/songslist",
        nameL: "SonglistDetail",
        query: {
          id,
        },
      });
    },
  },
  created() {
    this.$axios.get("/api/personalized/djprogram").then((res) => {
      console.log(res, 111);
      this.obj = res.result;
      console.log(this.obj, 22222);
    });

    this.$axios.get("/api/dj/program/toplist?limit=5").then((res) => {
      console.log(res, 888);
      this.cc = res.toplist;
      console.log(this.cc, 333);
    });

    this.$axios.get("/api/personalized").then((res) => {
      console.log(res, 777);
      this.ss = res.result;
      // console.log(this.ss, 444);
    });

    this.$axios.get("/song/detail").then((res) => {
      console.log(res, 666);
      this.ss = res.result;
      console.log(this.ss, 444);
    });

    // this.$axios.get("/api/program/recommend").then((res) => {
    //   console.log(res, 111777);
    //   this.ss = res.result;
    //   console.log(this.xx, 444);
    // });
  },
  mounted() {},
  components: {},
};
</script>
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 70px;
  text-align: center;

  height: 70px;
}
/* 
  .van-col{
    background-color: yellow;
    width: 18%;
    height: 50px;
    border-radius:50px ;
  } */

.w {
  width: 24.333333%;
  border-radius: 49%;
  /* background-color: tomato; */
  height: 54px;
}
.d1 {
  width: 100%;
  height: 140px;
  background-color: #ebe6ec;
}
.qq {
  background-color: #f3f1f4;
  margin-top: 20px;
}
.q {
  height: 120px;
}
.q1 {
  /* background-color: red; */
  margin-top: 20px;
}
.s1 {
  text-align: center;
}

van-col span {
  display: block;
  width: 200px;
  height: 30px;
  /* background-color: red; */
}
.c1 {
  height: 100px;

  margin-top: 8px;
  margin-left: 8px;
}
.r {
  /* margin-left: 67px; */

  height: 200px;
  width: 32%;
  /* display: flex;
  justify-content: space-around; */
}

.van-col--6 {
  width: 21%;
}
img {
  width: 60px;
  height: 60px;
  /* float: left; */
  margin-top: 20px;
}
p {
  float: right;
}
.r1 {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.c1 {
  width: 84.833333%;
}
.m1 {
  width: 100px;
  height: 100px;
  border-radius: 100px;
}
</style>