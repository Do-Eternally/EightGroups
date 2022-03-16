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
      :autoplay="false"
      indicator-color="white"
      :show-indicators="false"
    >
      <van-swipe-item>
        <van-row gutter="20">
          <div></div>
          <van-col span="8" class="w"></van-col>

          <van-col span="8" class="w"></van-col>
          <van-col span="8" class="w"></van-col>
          <van-col span="8" class="w"></van-col>

          <!-- <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col> -->
        </van-row>
      </van-swipe-item>
      <van-swipe-item>
        <van-row gutter="20">
          <van-col span="8" class="w"></van-col>

          <!-- <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col> -->
        </van-row>
      </van-swipe-item>
    </van-swipe>

    <div class="d1">
      <van-swipe :loop="false" :width="300" :show-indicators="false" class="q">
        <van-swipe-item class="qq"></van-swipe-item>
        <van-swipe-item class="q1"></van-swipe-item>
        <van-swipe-item class="qq"></van-swipe-item>
        <van-swipe-item class="q1"></van-swipe-item>
      </van-swipe>
    </div>
    <van-tabs v-model="active">
      <van-tab title="推荐">
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
      <van-tab title="真实故事">
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

export default {
  name: "Bolg",
  data() {
    return {
      activeName: "b",
      value: "",
      active: 0,
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
  background-color: tomato;
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
  background-color: #f3f1f494;
  margin-top: 20px;
}
.s1 {
  text-align: center;
}

van-col span {
  display: block;
  width: 200px;
  height: 30px;
  background-color: red;
}
.c1{
  height: 100px;
  background-color: red;
  margin-top: 8px;
  margin-left: 8px;
}
.r{
  margin-left: 67px;
}

.van-col--6 {
    width: 21%;
}

</style>