<!-- 问答社区 -->
<template>
  <div class="content-box container is-fullhd">
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds">
          <article
            class="article-content media"
            v-for="item in listData"
            :key="item.id"
            @click="jumpQuestionDetail(item.id)"
            v-cloak
          >
            <figure class="media-left">
              <p class="image is-48x48">
                <img class="is-rounded" :src="item.user.avatar" />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <div>
                  <strong>{{ item.title }}</strong>
                  <nav class="some-content level is-mobile">
                    <div class="level-left">
                      <a class="level-item">
                        <span class="author-font is-small"
                          >{{ item.user.username }} 发表于</span
                        >
                      </a>
                      <a class="level-item">
                        <time class="time-font">{{ item.updated_at|relateTime }}</time>
                      </a>
                    </div>
                  </nav>
                  <span class="comment-content">
                    {{ item.content }}
                  </span>
                </div>
              </div>
            </div>
            <div class="media-right">
              <span class="tag-collect tag is-success">laravel</span>

              &nbsp;
              <span class="icon has-text-black">
                <i class="fas fa-comment">{{ item.replay_count }}</i>
              </span>
            </div>
          </article>
        </div>
        <div class="column">
          <div class="ads-box columns">
            <div class="column is-three-quarters">
              <router-link
                to="/discuss/create"
                class="write-question-btn button is-normal is-primary is-fullwidth"
                ><i class="fab fa-telegram-plane"> 撰写问题</i></router-link
              >

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
                    <a
                      >科学上网服务,使用此链接你可获得 $20
                      优惠,支持支付宝付款！！！</a
                    >
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
                    <a
                      >DigitalOcean $100 优惠链接，使用此链接你可以获取 $100
                      美元优惠</a
                    >
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
import { getQuestions } from "../../services/api";
import { timeToDate } from "../../utils/helpers";
import Pagiation from "@/components/Pagiation";
export default {
  data() {
    return {
      digitalOcean: require("../../assets/digital-ocean.png"),
      upunLogo: require("../../assets/upun-logo.jpg"),
      vyprVpn: require("../../assets/vypr-vpn.png"),
      filters: {
        pageSize: 20,
        page: 1
      },
      pagination: {
        current: 1,
        pageSize: 20,
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
    this.getQuestions();
  },
  methods: {
    jumpQuestionDetail(nums) {
      this.$router.push({ name: "questionDetail", params: { id: nums } });
    },
    async getQuestions() {
      try {
        const { data } = await getQuestions(this.filters);
        this.listData = data.data.data;
        console.log(data.data);
      } catch ({ response }) {
        console.log(response);
      }
    },
  }
};
</script>

<style lang="less" scoped>
.content-box {
  background-color: #f5f5f1;
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
  font-size: 0.85rem;
  font-weight: 600;
  font-style: italic;
  color: #9ba6b5;
  line-height: 0.75rem;
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
</style>
