<!--  -->
<template>
  <div class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">从高质量的视频中学习</h1>
        <h1 class="title">Web 开发技术</h1>
        <h2 class="subtitle">
          所有视频都是免费的，注册即可观看！
        </h2>
        <div class="hero-btn">
          <a
            class="button is-success is-medium"
            @click="handleJump(isLogin)"
            v-html="title"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../stores";
export default {
  data() {
    return {
      isLogin: store.state.isLogin,
      title: "马上加入 DoniAi"
    };
  },
  created() {
    let state = this.isLogin;
    this.handleHeroTitle(state);
  },
  methods: {
    handleHeroTitle(loginState) {
      if (loginState) {
        this.title = `<i class="fa fa-paper-plane">浏览所有课程</i>`;
      } else {
        this.title = "马上加入 DoniAi";
      }
    },
    handleJump(loginState) {
      if (loginState) {
        this.$router.push({ name: "video" });
      } else {
        this.$router.push({ name: "login" });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.hero {
  padding: 30px 0;
  text-align: center;
  background-image: url("../assets/overlay.png"),
    linear-gradient(45deg, #6e436c 25%, #2a4584 75%);
  background-size: 256px, cover;
  background-position: 50%, 50%;
  background-repeat: repeat, no-repeat;
  background-color: #5e86bc;
}

.hero-btn {
  a {
    background-color: #14b982;
    &:hover {
      background-color: #14b982;
      padding: 0 40px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      transition: all 0.25s;
    }
  }
}
</style>
