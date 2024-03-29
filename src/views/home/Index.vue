<template>
  <div>
    <Hero />
    <div class="container pd20 is-fullhd series-all">
      <div class="series-message">{{ courseTitle }}</div>

      <div class="columns is-1 is-variable is-multiline is-desktop">
        <div class="column is-one-quarter" v-for="itemChild in listData" :key="itemChild.id">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <router-link
                    :to="`/lessons/${itemChild.id}`"
                    class="title is-6"
                  >{{ itemChild.title|omit_title }}</router-link>
                </div>
              </div>

              <div class="content">{{ itemChild.intro|omit_content }}</div>
            </div>
            <div class="card-image">
              <figure class="image is-16by9">
                <router-link :to="`/lessons/${itemChild.id}`">
                  <img v-lazy="`${itemChild.image}`" alt="Placeholder image" />
                </router-link>
              </figure>
            </div>

            <div class="toolbar">
              <p class="max60">
                <strong>{{ durationTitle }}</strong>
                <router-link
                  :to="`/lessons/${itemChild.id}`"
                  class="toolbar-tag"
                >{{ itemChild.duration|duration_text }}</router-link>
              </p>
              <div class="flex align-center">
                <time datetime="2017-06-27 06:42:48" class="m-r-1">
                  <strong>{{ itemChild.nums|nums_text }}</strong>
                </time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import querystring from "querystring";
import { getCourses } from "../../services/api";
import Hero from "@/components/Hero";
import { ToastProgrammatic as Toast } from "buefy";
export default {
  data () {
    return {
      filters: {
        pageSize: 30,
        page: 1
      },
      pagination: {
        current: 1,
        pageSize: 30,
        total: 0
      },
      durationTitle: '时长:',
      courseTitle: '投资在学习上的时间和金钱总有一天会回赠给你自己 ！',
      listData: []
    };
  },
  components: {
    Hero
  },
  filters: {
    omit_title (value, length = 80) {
      return value && value.length > 80
        ? value.substring(0, length) + "..."
        : value;
    },
    omit_content (value, length = 180) {
      return value && value.length > 180
        ? value.substring(0, length) + "..."
        : value;
    },
    duration_text (value) {
      return `${value} 分钟`;
    },
    nums_text (value) {
      return `${value} 个视频`;
    },
  },
  async created () {
    await this.getCourses();
  },
  methods: {
    async getCourses () {
      try {
        const { data } = await getCourses(this.filters);
        this.listData = data.data;
      } catch ({ response }) {
        Toast.open({
          message: `视频系列接口数据请求失败`,
          position: "is-bottom-right",
          type: "is-danger"
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.is-desktop {
  .column {
    .card {
      &:hover {
        box-shadow: 0 6px 6px rgba(0, 0, 0, 0.4);
      }
      .card-image {
        .image {
          img {
            cursor: pointer;
          }
        }
      }
    }
  }
}

.pd20 {
  padding: 20px;
}

.pd10 {
  padding: 10px !important;
}

.series-all {
  padding-bottom: 60px;
  background-color: #f5f5f1;

  .container {
    padding-top: 40px;
  }

  .series-message {
    margin-bottom: 30px;
    text-align: center;
    color: #111;
    font-size: 1.3em;
    line-height: 1.5em;
  }
}

.toolbar {
  font-size: 14px;
  background-color: #eee;
  padding: 0.5rem 1rem;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  .max60 {
    margin-top: 10px;
    .toolbar-tag {
      color: #15b982;
      font-weight: 700;
      overflow: hidden;
    }
  }
}

.card-content {
  .content {
    height: 100px;
    font-size: 0.75rem;
  }
  .media {
    height: 70px;
    .media-content {
      .title {
        cursor: pointer;
      }
    }
  }
}
</style>
