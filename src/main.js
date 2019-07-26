import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./stores";
import VueLazyload from "vue-lazyload";
import "buefy/dist/buefy.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bulma-badge/dist/css/bulma-badge.min.css";

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
