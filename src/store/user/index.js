export default {
  //vuex----用户信息管理
  namespaced: true,
  state: {
    msg: "测试",
    userinfo: {},
  },
  mutations: {
    changeUser(state, payload) {
      // console.log("dwa",payload);
      payload = JSON.parse(JSON.stringify(payload));
      state.userinfo = payload;
    },
  },
  actions: {},
};
