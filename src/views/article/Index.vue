<template>
  <div class="content-box container is-fullhd">
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds">
          <nav class="breadcrumb-modify breadcrumb has-bullet-separator">
            <ul>
              <li class="knowledge">
                <a href="#">知识</a>
              </li>
              <li class="prose">
                <a href="#">散文</a>
              </li>
              <li class="technology">
                <a href="#">技术</a>
              </li>
              <li class="intelligent">
                <a href="#">智能</a>
              </li>
              <li class="horizon is-active">
                <a href="#" aria-current="page">眼界</a>
              </li>
            </ul>
          </nav>
          <article
            class="article-content mr-top10 media"
            v-for="item in listData"
            :key="item.id"
            @click="jumpArticleDetail(item.id)"
            v-cloak
          >
            <div class="media-content">
              <div class="content">
                <p>
                  <a class="article-title">{{ item.title }}</a>
                  <span class="comment-content">{{ item.content }}</span>
                </p>
              </div>
              <nav class="level is-mobile">
                <div class="level-left">
                  <a class="level-item">
                    <span class="author-font is-small">{{ item.user ? item.user.username : '' }}</span>
                  </a>
                  <a class="level-item">
                    <time class="time-font">{{ item.updated_at|relateTime }}</time>
                  </a>
                  <a class="icon-comment">
                    <span class="icon is-small">
                      <i class="fas fa-comment">18</i>
                    </span>
                  </a>
                  <a class="icon-heart">
                    <span class="icon is-small">
                      <i class="fas fa-heart">122</i>
                    </span>
                  </a>
                </div>
              </nav>
            </div>
            <div class="media-right">
              <p class="image is-128x128">
                <img class="article-image" v-lazy="item.image" />
              </p>
            </div>
          </article>
        </div>
        <div class="column">
          <div class="ads-box columns">
            <div class="column is-three-quarters">
              <a
                class="write-question-btn button is-normal is-danger is-fullwidth"
                @click="handleWriteArticle"
              >
                <i class="fab fa-telegram-plane">撰写文章</i>
              </a>

              <article class="ads-content">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img v-lazy="upunLogo" alt="Placeholder image" />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <a>又拍云，推荐的CDN和云储存服务商</a>
                  </div>
                </div>
              </article>

              <article class="ads-content">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img v-lazy="vyprVpn" alt="Placeholder image" />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <a>
                      科学上网服务,使用此链接你可获得 $20
                      优惠,支持支付宝付款！！！
                    </a>
                  </div>
                </div>
              </article>

              <article class="ads-content">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img v-lazy="digitalOcean" alt="Placeholder image" />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <a>
                      DigitalOcean $100 优惠链接，使用此链接你可以获取 $100
                      美元优惠
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <Pagiation />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticles } from "../../services/api";
import { timeToDate } from "../../utils/helpers";
import Pagiation from "@/components/Pagiation";
import { SnackbarProgrammatic as Snackbar } from 'buefy'
import { ToastProgrammatic as Toast } from "buefy";
export default {
  data() {
    return {
      digitalOcean:
        "https://cdn.doniai.com/uploads/images/adverts/digital-ocean.png",
      upunLogo: "https://cdn.doniai.com/uploads/images/adverts/upun-logo.jpg",
      vyprVpn: "https://cdn.doniai.com/uploads/images/adverts/vypr-vpn.png",
      filters: {
        pageSize: 40,
        page: 1
      },
      pagination: {
        current: 1,
        pageSize: 40,
        total: 0
      },
      listData: []
    };
  },
  components: {
    Pagiation
  },
  filters: {
    relateTime(str) {
      return timeToDate(str);
    }
  },
  created() {
    this.getArticles();
  },
  methods: {
    jumpArticleDetail(nums) {
      this.$router.push({ name: "articleDetail", params: { id: nums } });
    },
    handleWriteArticle() {
      Snackbar.open({
        message: "文章撰写功能暂未对外开放",
        type: "is-warning",
        actionText: "No"
      });
    },
    async getArticles() {
      try {
        const { data } = await getArticles(this.filters);
        this.listData = data.data.data;
      } catch ({ response }) {
        Toast.open({
          message: `文章接口数据请求失败`,
          position: "is-bottom-right",
          type: "is-danger"
        });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.content-box {
  background-color: #f5f5f1;
  background: linear-gradient(135deg, #f5f5f1, #f5f5f1 30%, #ffffff) fixed;
  padding-top: 60px;
  padding-bottom: 60px;
}

.author-font {
  font-size: 0.75rem;
  color: #7089a9;
}

.time-font {
  font-size: 0.75rem;
  color: #7089a9;
}

.some-content {
  margin-bottom: 0;
}

.comment-content {
  font-size: 0.55rem;
  font-weight: 500;
  margin: 8px 0 8px;
  color: #999;
  line-height: 1.25rem;
  display: block;
}

.article-content {
  padding: 10px 40px 10px 10px;

  &:hover {
    background-color: #ffffff;
    cursor: pointer;
  }
}

.ads-box {
  justify-content: flex-end;
}

.write-question-btn {
  padding: 23px 0;
}

.ads-content {
  margin-top: 20px;
}

.card-content {
  padding: 0.15rem;
  .content {
    a {
      cursor: pointer;
      color: #15b982;
      text-decoration: none;
      font-size: 14.5px;
      font-weight: bold;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.tag-collect {
  margin-left: 5px;
}

.icon-comment {
  margin-right: 10px;
  color: #b4b4b4;
  span {
    i {
      font-size: 12px;
    }
  }
}

.icon-heart {
  color: #b4b4b4;
  margin-left: 10px;
  span {
    i {
      font-size: 12px;
    }
  }
}

.mr-top10 {
  margin-top: 10px;
}

.article-title {
  font-size: 1rem;
  font-weight: 800;
  color: #333;
  line-height: 1.25rem;
  display: block;
  &:hover {
    text-decoration: underline;
  }
}

.breadcrumb-modify {
  margin-left: 10px;
  font-size: 1.65rem;
  .knowledge {
    a {
      color: #f56858;
    }
  }
  .prose {
    a {
      color: #bb824e;
    }
  }
  .technology {
    a {
      color: #08d7c1;
    }
  }
  .intelligent {
    a {
      color: #2c415d;
    }
  }
  .horizon {
    a {
      color: #3ab982;
    }
  }
}
</style>
