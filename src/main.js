import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vant from "vant";
import vuex from "vuex";
import "vant/lib/index.css";
import instance from "./util";
import store from "./store";
Vue.use(vant);
Vue.use(vuex);
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  router,
  store,
  created() {
    // console.log(this.$store);
  },
}).$mount("#app");
Vue.prototype.$axios = instance;
