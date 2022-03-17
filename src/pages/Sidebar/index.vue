<template>
  <div class="sidebar">
    <van-cell is-link @click="showPopup">
      <!-- 猫猫头像 -->
      <van-image
        round
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
        class="avater"
      />
      <div class="cc">{{ user.name }}</div>
    </van-cell>
    <!-- <van-popup v-model="show">请登录账户</van-popup> -->
    <!-- 黑的大块 -->
    <div class="one">
      <div class="header">
        <div class="pl">
          <div class="pp"><strong>开通黑胶VIP</strong></div>
          <div class="ll">立享21项专属特权></div>
        </div>
      </div>
      <!-- 圆形图标 -->
      <van-button class="oo" round type="info">会员中心</van-button>
      <!-- 滚动通知 -->
      <van-notice-bar
        class="tt"
        text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
      />
      <van-image class="ava" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
    </div>
    <div class="two">
      <div>
        <!-- <van-cell title="消息中心" to="./components/event.vue" /> -->
        <van-cell title="消息中心" :to="{ name: 'Xiaoxi' }" />
      </div>
      <div>
        <van-cell title="云贝中心" :to="{ name: 'Yunbei' }" />
      </div>
      <div>
        <van-cell title="创作者中心" :to="{ name: 'Chuangzuo' }" />
      </div>
    </div>
    <div class="three">
      <p>音乐服务</p>
      <van-cell title="演出" :to="{ name: 'Yanchu' }" />
      <van-cell title="商城" is-link url="/api/user/update" />
      <van-cell title="Beat专区" :to="{ name: 'Beat' }" />
      <van-cell title="口袋彩铃" :to="{ name: 'Koudai' }" />
      <van-cell title="游戏专区" :to="{ name: 'Youxi' }" />
    </div>
    <div class="four">
      <p>其他</p>
      <van-cell title="听歌" :to="{ name: 'Tingge' }" />
      <van-cell title="设置" is-link url="/vant/mobile.html" />
    </div>
  </div>
</template>

<script>
import { Popup, Uploader, Icon, Toast, NoticeBar, Button } from "vant";
import { Image as VanImage } from "vant";
import { Cell, CellGroup } from "vant";
export default {
  data() {
    return {
      show: true,
      // list: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    showPopup() {
      this.show = true;
    },
    goMsg() {
      // this.axios.
    },
  },
  created() {
    //调取消息中心
    //   this.$axios.get("/api/event").then((res) => {
    //     console.log(res);
    //   });
    // this.$store.state.user.userinfo;
  },
  mounted() {},
  components: {},
};
</script>
<style scoped>
/* .van-popup {
  width: 80px;
  height: 80px;
} */
.van-cell {
  border-radius: 50px;
  border: 1 solid;
  /* display: flex; */
  position: relative;

  /* background-color: rgb(241, 131, 131); */
}
.cc {
  /* opacity: 0.5; */
  position: absolute;
  left: 45px;
  top: 8px;
}
.one {
  width: 100%;
  height: 150px;
  border: 1 solid;
  background-color: rgb(228, 66, 66);
  border-radius: 30px;
  position: relative;
}
.pl {
  position: absolute;
  left: 20px;
  top: 20px;
}
.oo {
  position: absolute;
  right: 20px;
  top: 20px;
}
.tt {
  position: absolute;
  left: auto;
  top: 95px;
  width: 75%;
  height: 60px;
}
.van-image__img {
  /* justify-content: center; */
  /* display: flex; */
  /* flex: 1; */
  width: 15px !important;
  height: 15px;
}
.avater {
  display: inline-block;
  width: 35px;
  height: 35px;
  vertical-align: top;
  font-size: 0;
}
.ava {
  position: absolute;
  display: inline-block;
  width: 35px;
  height: 35px;
  vertical-align: top;
  font-size: 0;
  right: 20px;
  bottom: 10px;
}
.van-cell__value--alone {
  display: flex;
}
/* .van-image.p {
  display: flex;
} */
</style>
