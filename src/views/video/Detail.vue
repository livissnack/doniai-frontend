<template>
  <div>
    <div class="video-box container is-fullhd">
      <div class="container">
        <div class="columns">
          <div class="clear-padding column is-four-fifths">
            <div class="play-content">
              <video-player
                style="width: 760px;"
                class="video-player-box vjs-big-play-centered"
                ref="videoPlayer"
                :options="playerOptions"
                :playsinline="true"
                customEventName="customstatechangedeventname"
                @play="onPlayerPlay($event)"
                @pause="onPlayerPause($event)"
                @ended="onPlayerEnded($event)"
                @waiting="onPlayerWaiting($event)"
                @playing="onPlayerPlaying($event)"
                @loadeddata="onPlayerLoadeddata($event)"
                @timeupdate="onPlayerTimeupdate($event)"
                @canplay="onPlayerCanplay($event)"
                @canplaythrough="onPlayerCanplaythrough($event)"
                @statechanged="playerStateChanged($event)"
                @ready="playerReadied"
              >
              </video-player>
            </div>
          </div>
          <div class="column">
            <h5 class="support-author text-center">打赏作者</h5>
            <p class="text-center">
              <img v-lazy="collectMoney.alipayRedpackImg" width="150" />
              <img v-lazy="collectMoney.alipayCollectImg" width="150" />
              <img v-lazy="collectMoney.wechatpayCollectImg" width="150" />
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="video-remark container is-fullhd">
      <div class="container">
        <div class="columns">
          <div class="column is-four-fifths">
            <h1 class="video-title">理论知识简介</h1>
            <div
              class="breadcrumb has-succeeds-separator"
              aria-label="breadcrumbs"
            >
              <ul>
                <li><a href="#">高可用服务架构</a></li>
                <li><a href="#">理论知识简介</a></li>
                <li class="is-active">
                  <span href="#" aria-current="page"
                    >视频发布于 2018-08-16</span
                  >
                </li>
              </ul>
            </div>
            <div class="lesson-body">
              从一张简单的架构图出发，从理论上阐述负载均衡和 MySQL
              主从数据库的设计理念和图示。
            </div>

            <ul class="social-share-box">
              <li class="handle-share-facebook-error">
                <a href="#"> <Facebook scale="2" url=""/></a>
              </li>
              <li>
                <a href="#"> <Twitter scale="2" url=""/></a>
              </li>
              <li>
                <a href="#"> <Linkedin scale="2" url=""/></a>
              </li>
              <li>
                <a href="#"> <WhatsApp scale="2" url=""/></a>
              </li>
              <li>
                <a href="#"> <Google scale="2" url=""/></a>
              </li>
              <li>
                <a href="#"> <Email scale="2" url=""/></a>
              </li>
            </ul>

            <div class="question-toolbox">
              <div class="link-support">
                <a class="button is-small is-danger is-fullwidth"
                  >认证看看评论也可以学到很多东西</a
                >
              </div>
            </div>

            <article class="media">
              <figure class="media-left">
                <p class="image is-32x32">
                  <img
                    class="is-rounded"
                    src="https://bulma.io/images/placeholders/32x32.png"
                  />
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Barbara Middleton</strong>
                    <br />
                    性能优化没有穷尽啊
                    <br />
                    <small
                      ><a
                        ><i class="far fa-thumbs-up"
                          >赞 <i class="like-count">+1</i></i
                        ></a
                      >
                      · <a>回复</a> · 14 小时前</small
                    >
                  </p>
                </div>

                <article class="media">
                  <figure class="media-left">
                    <p class="image is-32x32">
                      <img
                        class="is-rounded"
                        src="https://bulma.io/images/placeholders/32x32.png"
                      />
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>Sean Brown</strong>
                        <br />
                        努力每天都是新的开始！
                        <br />
                        <small
                          ><a><i class="far fa-thumbs-up">赞</i></a> ·
                          <a>回复</a> · 14 小时前</small
                        >
                      </p>
                    </div>
                  </div>
                </article>

                <article class="media">
                  <figure class="media-left">
                    <p class="image is-32x48">
                      <img
                        class="is-rounded"
                        src="https://bulma.io/images/placeholders/32x32.png"
                      />
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>jifengg</strong>
                        <br />
                        图像压缩确实是
                        一个非常值得学习的方向。至少在项目中也要学会使用，现在流量最贵，能省则省
                        <br />
                        <small
                          ><a><i class="far fa-thumbs-up">赞</i></a> ·
                          <a>回复</a> · 14 小时前</small
                        >
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </article>
            <article class="media">
              <figure class="media-left">
                <p class="image is-32x32">
                  <img
                    class="is-rounded"
                    src="https://bulma.io/images/placeholders/32x32.png"
                  />
                </p>
              </figure>
              <div class="media-content">
                <div class="field">
                  <p class="control">
                    <textarea
                      class="textarea"
                      placeholder="文明社会，理性评论"
                    ></textarea>
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <button class="button is-success">发表评论</button>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "video.js/dist/video-js.css";
import { videoPlayer } from "vue-video-player";
import {
  Facebook,
  Twitter,
  Linkedin,
  WhatsApp,
  Google,
  Email
} from "vue-socialmedia-share";

export default {
  data() {
    return {
      playerOptions: {
        // videojs options
        muted: true,
        language: "zh-CN",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        fluid: true,
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试",
        sources: [
          {
            type: "video/mp4",
            src:
              "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }
        ],
        poster: require("../../assets/series/31fcda47-100b-42e1-a513-c6aa09c3b2dd.jpg")
      },
      collectMoney: {
        alipayRedpackImg: "https://cdn.doniai.com/uploads/images/qrcodes/alipay-redpack.png",
        alipayCollectImg: "https://cdn.doniai.com/uploads/images/qrcodes/alipay-collect.jpeg",
        wechatpayCollectImg: "https://cdn.doniai.com/uploads/images/qrcodes/wechatpay-collect.jpeg"
      }
    };
  },

  components: {
    videoPlayer,
    Facebook,
    Twitter,
    Linkedin,
    WhatsApp,
    Google,
    Email
  },
  mounted() {
    return "player play".toString(this.player);
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  methods: {
    // listen event
    onPlayerPlay(player) {
      return "player play";
    },
    onPlayerPause(player) {
      return "player pause";
    },
    // ...player event
    onPlayerLoadeddata(player) {
      return "player loaded data";
    },
    onPlayerCanplay(player) {
      return "player canplay";
    },
    onPlayerCanplaythrough(player) {
      return "player canplay through";
    },

    // or listen state event
    playerStateChanged(player) {
      return "player state changed";
    },

    // player is ready
    playerReadied(player) {
      return "player readied";
      // you can use it to do something...
      // player.[methods]
    },
    onPlayerTimeupdate(player) {
      return "player time update";
    },
    onPlayerPlaying(player) {
      return "player playing";
    },
    onPlayerWaiting(player) {
      return "player waiting";
    }
  }
};
</script>
<style lang="less" scoped>
.video-box {
  background-color: #000;
  min-height: 500px;
  margin-top: 12px;
}

.play-content {
  width: 100%;
  max-width: 100%;
  margin-top: 80px;
}

.video-player-box {
  width: 763px;
}

.vjs_video_3-dimensions {
  width: 0 !important;
}

// .clear-padding{
//   padding: 0;
// }

.video-js {
  position: relative !important;
  width: 100% !important;
  height: auto !important;
}

.vjs-poster {
  position: absolute !important;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.text-center {
  text-align: center;
}

.support-author {
  color: #ffffff;
  font-size: 14px;
  margin-bottom: 10px;
}

.social-share-box {
  margin-left: -10px !important;
  margin-top: 0 !important;
  margin-bottom: 10px;
  li {
    margin-left: 10px;
  }
  list-style: none;
  display: flex;
  justify-content: flex-start;
}

.video-remark {
  margin-top: 10px;
}

.video-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.breadcrumb {
  margin-top: 10px;
  margin-bottom: 0.6rem;
  ul {
    li {
      a {
        cursor: pointer;
        color: #15b982;
        text-decoration: none;
        font-size: 16px;
        line-height: 1.5;
        &:hover {
          color: #00adb5;
          text-decoration: underline;
        }
      }
      span {
        color: #999;
        margin-left: 10px;
      }
    }
  }
}

.lesson-body {
  padding-left: 0;
  line-height: 1.7em;
  font-size: 16px;
  color: #111;
}

.link-support {
  a {
    font-size: 16px;
    color: #ffffff;
  }
}

.question-toolbox {
  margin-bottom: 20px;
}
</style>
