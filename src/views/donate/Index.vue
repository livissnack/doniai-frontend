<template>
  <div class="content-box container is-fullhd">
    <div class="container">
      <h1 class="jump-head">{{ videoTitle }}</h1>
      <div class="warpper-box">
        <div class="cloums">
          <div class="column">
            <div class="donate-content">
              <div class="donate-images">
                <figure class="donate-alipay image is-128x128">
                  <img v-lazy="collectMoney.alipayCollectImg" />
                </figure>
                <figure class="donate-wechatpay image is-128x128">
                  <img v-lazy="collectMoney.wechatpayCollectImg" />
                </figure>
              </div>
              <div class="donate-remark">
                <a href="https://www.doniai.com">DONIAI.COM</a>
                现在是由
                <a href="https://githup.com/livissnack">LivisSnack</a>
                个人维护和承担服务开销，比如腾讯云和又拍云存储的费用。
                如果你看完免费视频觉得不错的话，可以赞助一点水电费来减轻我的负担，我将万分感谢。
              </div>
              <div class="donate-text">Happy every day!</div>
            </div>
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
      videoTitle: "万水千山总是情，多给几分行不行！",
      collectMoney: {
        alipayCollectImg: "https://cdn.doniai.com/uploads/images/qrcodes/alipay-collect.jpeg",
        wechatpayCollectImg: "https://cdn.doniai.com/uploads/images/qrcodes/wechatpay-collect.jpeg"
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
  .donate-images {
    display: flex;
    justify-content: space-between;
    .donate-alipay {
      margin-left: 140px;
    }
    .donate-wechatpay {
      margin-right: 140px;
    }
    padding-bottom: 40px;
  }

  .donate-content {
    width: 60%;
    margin: 0 auto;
  }

  .donate-text {
    text-align: center;
    font-size: 1.15rem;
    font-weight: 600;
  }
  .donate-remark {
    letter-spacing: 0.01rem;
  }
}
</style>
