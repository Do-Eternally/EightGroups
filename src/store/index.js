import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    token: "",
  },
  mutations: {
    changeToken(state, payload) {
      state.token = payload;
    },
  },
});
export default store;
