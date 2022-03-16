import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vant from "vant";
import vuex from "vuex";
import "vant/lib/index.css";
import instance from "./util";
<<<<<<< HEAD
import { Toast } from "vant";

Vue.use(Toast);
=======
import store from "./store";
>>>>>>> 3b27de4973d5231e1451cdc382c97a5854259074
Vue.use(vant);
Vue.use(vuex);
Vue.config.productionTip = false;
new Vue({
<<<<<<< HEAD
    render: (h) => h(App),
    router,
=======
  render: (h) => h(App),
  router,
  store,
  created() {
    // console.log(this.$store);
  },
>>>>>>> 3b27de4973d5231e1451cdc382c97a5854259074
}).$mount("#app");
Vue.prototype.$axios = instance;