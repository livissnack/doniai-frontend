<template>
  <div class="content-box container is-fullhd">
    <div class="container">
      <h1 class="jump-head">{{ recommendedBookTitle }}</h1>
      <div class="warpper-box">
        <div class="cloums">
          <div class="column">
            <h3 class="book-name"><a href="">深入理解Java虚拟机</a></h3>
            <a href=""><img v-lazy="bookMap.bookOneImg" alt=""/></a>
          </div>
          <div class="column">
            <h3 class="book-name"><a href="">Python编程从入门到实践</a></h3>
            <a href=""><img v-lazy="bookMap.bookTwoImg" alt=""/></a>
          </div>
          <div class="column">
            <h3 class="book-name"><a href="">C++ Primer Plus</a></h3>
            <a href=""><img v-lazy="bookMap.bookThreeImg" alt=""/></a>
          </div>
        </div>
        <div class="cloums">
          <div class="column">
            <h3 class="book-name"><a href="">深入理解Java虚拟机</a></h3>
            <a href=""><img v-lazy="bookMap.bookOneImg" alt=""/></a>
          </div>
          <div class="column">
            <h3 class="book-name"><a href="">Python编程从入门到实践</a></h3>
            <a href=""><img v-lazy="bookMap.bookTwoImg" alt=""/></a>
          </div>
          <div class="column">
            <h3 class="book-name"><a href="">C++ Primer Plus</a></h3>
            <a href=""><img v-lazy="bookMap.bookThreeImg" alt=""/></a>
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
      recommendedBookTitle: "个人觉得不错的书",
      bookMap: {
        bookOneImg: require("../../assets/books/592bf167Naf49f7f6.jpg"),
        bookTwoImg: require("../../assets/books/5acb3627N8191c867.jpg"),
        bookThreeImg: require("../../assets/books/5b0e07ffN4152350d.jpg")
      }
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

.book-name {
  text-align: center;
  a {
    font-size: 1.05rem;
    color: #313131;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
