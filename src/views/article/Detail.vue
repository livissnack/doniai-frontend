<!-- 文章详情页 -->
<template>
  <div class="content-box container is-fullhd">
    <div class="container">
      <div class="columns is-desktop ml0 mr0">
        <div class="column comment-content-box is-two-thirds">
          <div class="question_top_info">
            <h1><a>{{ data.title }}</a></h1>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item">
                  <span class="tag is-warning">原创</span>
                </a>
                <ul class="question-type-tag level-item">
                  <li>
                    <a href=""
                      ><span class="tag is-success">javascript</span></a
                    >
                  </li>
                  <li>
                    <a href=""><span class="tag is-success">多线程</span></a>
                  </li>
                </ul>
                <span class="read-count">484次阅读</span>
                ·
                <span class="readed-needtime">读完需要20分钟</span>
              </div>
            </nav>
          </div>
          <div class="content article is-small">
            <div
              class="article fmt article__content"
              data-id="1190000018398599"
              data-license="cc"
            >
              {{ data.content }}
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
              <ul>
                <li class="link-style">
                  <a href="">
                    <button class="button is-success">
                      <span id="mainLikeText">赞</span>&nbsp;&nbsp;
                      <span class="seprator">|</span>&nbsp;&nbsp;
                      <span id="mainLikeNum">28 </span>
                    </button>
                  </a>
                </li>
                <li>
                  <a href="">
                    <button class="button is-warning">
                      <span id="mainBookmarkText">收藏</span>&nbsp;&nbsp;
                      <span class="seprator">|</span>&nbsp;&nbsp;
                      <span id="mainBookmarkNum">19</span>
                    </button>
                  </a>
                </li>
              </ul>
              <div class="link-support">
                <a class="button is-danger is-fullwidth">打赏支持</a>
              </div>
              <div class="remark-text">
                <span>如果觉得我的文章对你有用，请随意赞赏</span>
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
        <div class="sidebar-box column">
          <div class="columns">
            <div class="column sidebar is-three-quarters">
              <div class="card top-color responsive">
                <div class="content">
                  <div class="header">
                    <img
                      width="22"
                      height="22"
                      src="../../assets/companylogs/44x44.png"
                    />
                    <span class="ml-2">Laravel</span>
                    知识社区
                  </div>
                </div>

                <div class="sidebar-content">
                  <div class="middle aligned">
                    <div class="sidebar-content-desc">
                      Laravel 是一套简洁、优雅的 PHP Web
                      开发框架。具有高效、简洁、富于表达力等优点。
                      <a
                        href="https://learnku.com/laravel/wikis/7227"
                        class="sidebar-content-desc-decoration"
                        >社区指南</a
                      >
                    </div>
                  </div>
                </div>

                <div class="extra-content">
                  <div class="eight wide column pr-1 pt-0">
                    <a class="button is-small is-primary">
                      <i class="fas fa-plus"></i>
                      <span class="state">加入社区</span>
                    </a>
                  </div>
                  <div class="eight wide column pr-1 pt-0">
                    <a class="button is-small is-success">
                      <i class="fas fa-edit"></i>
                      <span class="state">撰写发帖</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { showArticle } from "../../services/api";
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
      data: {}
    };
  },
  components: {
    Facebook,
    Twitter,
    Linkedin,
    WhatsApp,
    Google,
    Email
  },
  created() {
    this.getArticle();
  },
  methods: {
     async getArticle() {
      try {
        const { data } = await showArticle(this.$route.params.id);
        this.data = (data.data)[0];
        console.log(this.data);
      } catch ({ response }) {
        console.log(response);
      }
    },
  }
};
</script>
<style lang="less" scoped>
.content-box {
  background-color: #f0f2f5;
  padding-top: 60px;
  padding-bottom: 60px;
}

.content {
  figure{
    margin-left: 0;
    margin-right: 0;
  }
}

.sidebar-box {
  margin-left: 20px;
}

.comment-content-box {
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(4, 36, 66, 0.08);
  margin-bottom: 20px;
}

.question_top_info {
  h1 {
    margin-bottom: 10px;
    a {
      font-size: 1.8rem;
      color: #333333;
      font-weight: 400;
    }
  }
}

.question-type-tag {
  li {
    margin-left: 5px;
  }
}

.read-count {
  margin-right: 5px;
  color: #999;
  font-size: 14px;
}

.readed-needtime {
  margin-left: 5px;
  color: #999;
  font-size: 14px;
}

.article {
  color: #333;
  font-size: 15px;
  margin-top: 60px;
  line-height: 1.8;
  word-wrap: break-word;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

.social-share-box {
  margin-left: -10px !important;
  margin-top: 0 !important;
  .handle-share-facebook-error {
    margin-top: 4px;
  }
  li {
    margin-left: 10px;
  }
  list-style: none;
  display: flex;
  justify-content: flex-start;
}

.question-toolbox {
  border-bottom: 1px solid #ccc;
  margin-top: 20px;
  margin-bottom: 20px;
  display: block;
  ul {
    margin-left: 180px;
    list-style: none;
    display: flex;
    justify-content: flex-start;
    .link-style {
      margin-top: 4px;
      margin-right: 20px;
    }
  }
}

.link-support {
  width: 180px;
  margin-left: 190px;
}

.remark-text {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 140px;
  span {
    color: #999999;
  }
}

.content {
  p {
    strong {
      color: #009a61;
      &:hover {
        color: #004f31;
        text-decoration: underline;
      }
    }
  }
  a {
    color: #999;
    &:hover {
      color: #666;
    }
  }
}

.like-count {
  color: #009a61;
}

.top-color {
  border-top: 2px solid #f4645f;
  border-radius: 5px;
  margin-top: -0.8rem;
  .content {
    .header {
      line-height: 18px;
      font-size: 14px;
      font-weight: 400;
      margin-top: 10px;
      margin-left: 20px;
      margin-bottom: -15px;
      color: #777;
      img {
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
      }
    }
  }
}

.sidebar-content {
  border-bottom: 1px solid rgba(34, 36, 38, 0.1);
  border-top: 1px solid rgba(34, 36, 38, 0.1);
  .middle {
    margin: 1rem 1rem;
    .sidebar-content-desc {
      line-height: 22px;
      color: #636b6f;
      font-size: 0.8rem;
      .sidebar-content-desc-decoration {
        transition: color 0.1s ease;
        cursor: pointer;
        text-decoration: underline;
        color: #a5a5a5 !important;
        font-size: 0.85714286rem !important;
        margin-left: 0.25rem !important;
        line-height: 22px;
        display: block;
      }
    }
  }
}

.extra-content {
  display: flex;
  justify-content: space-between;
}
</style>
