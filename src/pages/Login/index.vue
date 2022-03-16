<template>
  <div class="login">
    <div class="box">
      <div class="loginStyle">
        <div class="loginPhone">
          <a href="" @click.prevent="show = 1">手机号登录</a>
        </div>
        <div class="loginEmail">
          <a href="" @click.prevent="show = 2">邮箱登录</a>
        </div>
        <div class="loginErweima">
          <a href="" @click.prevent="show = 3" @click="qrKey">扫码登录</a>
        </div>
      </div>
      <div class="content">
        <div class="phone" v-if="show == 1">
          <van-form @submit="PhoneSubmit">
            <van-field
              v-model="phone"
              name="phone"
              label="手机号"
              placeholder="手机号"
              :rules="[{ required: true, message: '请填写手机号' }]"
            />
            <van-field
              v-model="password"
              type="password"
              name="password"
              label="密码"
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px">
              <van-button round block type="info" native-type="submit"
                >提交</van-button
              >
            </div>
          </van-form>
        </div>
        <div class="email" v-if="show == 2">
          <van-form @submit="emailSubmit">
            <van-field
              v-model="email"
              name="邮箱"
              label="邮箱"
              placeholder="邮箱"
              :rules="[{ required: true, message: '请填写邮箱' }]"
            />

            <van-field
              v-model="password"
              type="password"
              name="密码"
              label="密码"
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px">
              <van-button round block type="info" native-type="submit"
                >提交</van-button
              >
            </div>
          </van-form>
        </div>
        <div class="qrImg" v-if="show == 3">
          <img :src="imgUrl" alt="" /><br />
          <p>使用<a href="">网易云音乐app</a>扫码登录</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqPhoneReg, reqQrKey, reqQr, reqQrState } from "../../api/user";
import { Notify } from "vant";
import { setToken } from "../../util/auth";
export default {
  name: "Login",
  data() {
    return {
      phone: "",
      password: "",
      email: "",
      show: 1,
      imgUrl: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    async PhoneSubmit(values) {
      console.log("submit", values);
      const result = await reqPhoneReg(values);
      console.log("res", result);
      console.log("result.token", result.token);
      if (result.code == 200) {
        Notify({ type: "primary", message: "登陆成功" });
        setToken(result.token);
        this.$store.commit("changeToken", result.token);
        localStorage.setItem("token", result.token);
        this.$router.push("/");
      }
    },
    async emailSubmit(values) {
      // const result = await reqEmailreg(values);
      // console.log("result",result);
    },
    qrKey() {
      const result = reqQrKey().then((res) => {
        console.log("result", res);
        let xx = "";
        if (res.code == 200) {
          let key = res.data.unikey;
          console.log(key);
          /* reqQr({ key }).then((res2) => {
            console.log(res2);
          }); */
          this.$axios
            .get("/api/login/qr/create?key=" + key + "&qrimg=xx")
            .then((res) => {
              console.log(res);
              this.imgUrl = res.data.qrimg;
            });
          // reqQrState(key);
        }
      });
    },
  },
  created() {},
  mounted() {},
  components: {},
};
</script>
<style scoped>
.login {
  box-sizing: border-box;
  padding-top: 200px;
  width: 100%;
  height: 844px;
  background-image: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201711%2F29%2F20171129115720_JMX8s.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649988674&t=4abfdf5c7ebf66b454e17736fce32c68);
}
.box{
  padding-top: 50px;
  opacity: .6;
  width: 100%;
  height: 300px;
  background-color: #fff;
}
a {
  /* color: white; */
}
.loginStyle {
  font-size: 20px;
  display: flex;
  justify-content: space-around;
}
.content {
  margin-top: 60px;
  line-height: 3;
}
.content van-form {
  margin-top: 10px;
}
.qrImg {
  /* width: 300px; */
  /* height: 300px; */
  text-align: center;
}
.qrImg img {
  width: 200px;
  height: 200px;
}
</style>