import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./stores";
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false;
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require("./assets/logo.png"),
  loading: require("./assets/loading.gif"),
  attempt: 1
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
