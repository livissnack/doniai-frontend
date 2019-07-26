<template>
  <div class="content-box container is-fullhd">
    <div class="container">
      <h1 class="jump-head">{{ linkTitle }}</h1>
      <div class="warpper-box">
        <div class="cloums">
          <div class="column">
            <h3 class="link-name"><a href="">Laravel学院</a></h3>
            <h3 class="link-name"><a href="">Drupal猎人学校</a></h3>
            <h3 class="link-name"><a href="">Pj Blog(推荐)</a></h3>
            <h3 class="link-name"><a href="">Laravel学院</a></h3>
            <h3 class="link-name"><a href="">Drupal猎人学校</a></h3>
            <h3 class="link-name"><a href="">Pj Blog(推荐)</a></h3>
            <h3 class="link-name"><a href="">Laravel学院</a></h3>
            <h3 class="link-name"><a href="">Drupal猎人学校</a></h3>
            <h3 class="link-name"><a href="">Pj Blog(推荐)</a></h3>
          </div>
          <div class="column">
            <h3 class="link-name"><a href="">Drupal猎人学校</a></h3>
          </div>
          <div class="column">
            <h3 class="link-name"><a href="">Pj Blog(推荐)</a></h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkTitle: "感谢以下友情链接"
    };
  }
};
</script>

<style lang="less" scoped>
.content-box {
  background-color: #f5f5f1;
}

.jump-head {
  text-align: center;
  font-weight: 700;
  padding-top: 60px;
  padding-bottom: 60px;
  line-height: 1.2em;
  color: #111;
  letter-spacing: -1px;
  font-size: 1.3em;
}

.warpper-box {
  padding-bottom: 10px;
  font-size: 1.15rem;
  line-height: 1.5;
  color: #333;
  .cloums {
    display: flex;
    justify-content: flex-start;
  }
}

.link-name {
  padding: 5px 0;
  a {
    font-size: 0.95rem;
    color: #15b982;
    font-weight: 400;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
