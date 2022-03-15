<template>
  <div class="login">
    <div class="loginStyle">
      <div class="loginPhone">
        <a href="" @click.prevent="show = true">手机号登录</a>
      </div>
      <div class="loginEmail">
        <a href="" @click.prevent="show = false">邮箱登录</a>
      </div>
    </div>
    <div class="content">
      <div class="phone" v-if="show">
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
      <div class="email" v-if="!show">
        <van-form @submit="onSubmit">
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
    </div>
  </div>
</template>

<script>
import { reqPhoneReg } from "../../api/user";
import { Notify } from "vant";
import { setToken } from "../../util/auth";
export default {
  name: "Login",
  data() {
    return {
      phone: "",
      password: "",
      email: "",
      show: true,
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
      }
    },
  },
  created() {},
  mounted() {},
  components: {},
};
</script>
<style scoped>
.login {
  margin-top: 200px;
}
.loginStyle {
  display: flex;
  justify-content: space-around;
}
.content {
  margin-top: 50px;
}
</style>