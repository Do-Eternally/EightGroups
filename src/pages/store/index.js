import Vue from "vue";

import Vuex from "vuex";


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
  modules: { address },
});

export default store;
