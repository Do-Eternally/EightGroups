import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vant from "vant";
import vuex from "vuex";
import "vant/lib/index.css";
import instance from "./util";
import { Toast } from "vant";

Vue.use(Toast);
import store from "./store";
Vue.use(vant);
Vue.use(vuex);
Vue.config.productionTip = false;
let vm=new Vue({
  render: (h) => h(App),
  router,
  store,
  created() {
    // console.log(this.$store);
  },
}).$mount("#app");
Vue.prototype.$axios = instance;
router.beforeEach(function(to, from, next){
  if (to.meta.needLogin == true) {
    if (vm.$store.state.user.userinfo) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

Vue.prototype.$axios = instance;
