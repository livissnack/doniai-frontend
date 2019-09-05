<template>
  <div id="app">
    <div class="notification is-success" v-show="isShowNotify">
      <button class="delete" @click="closeNotify"></button>
      <strong>{{ notifyContent }}</strong>
    </div>
    <router-view />
    <back-top color="#7957D5" :size="1.1" :slow="10"> </back-top>
  </div>
</template>

<script>
import Vue from "vue";
import BackTop from "@mlqt/vue-back-top";
Vue.use(BackTop);
export default {
  data() {
    return {
      isShowNotify: false,
      notifyContent: "This container is centered on desktop."
    };
  },
  methods: {
    closeNotify() {
      this.isShowNotify = false;
    }
  }
};
</script>

<style lang="less">
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  border-top: 3px outset #6e9cc3;
}

.notification {
  margin-bottom: 0 !important;
}

.ml0 {
  margin-left: 0;
}

.mr0 {
  margin-right: 0;
}
</style>
