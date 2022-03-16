import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {},
  mutations: {},
  modules: {
    user,//用户信息
  },
});
export default store;
