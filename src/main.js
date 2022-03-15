import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vant from "vant";
import "vant/lib/index.css";
import axios from "./util";
Vue.use(vant);
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
Vue.prototype.$axios = axios;
