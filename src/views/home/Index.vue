<template>
  <div>
    <Hero />
    <div class="container is-fullhd series-all">
      <div class="container">
        <div class="series-message">投资在学习上的时间和金钱总有一天会回赠给你自己 ！</div>
        <div class="columns is-desktop" v-for="item in listData" :key="item.id">
          <div class="column" v-for="itemChild in item" :key="itemChild.id">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <router-link
                      :to="`/lessons/${itemChild.id}`"
                      class="title is-6"
                    >{{ itemChild.title|omittitle }}</router-link>
                  </div>
                </div>

                <div class="content">{{ itemChild.intro|omitcontent }}</div>
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
                  <strong>时长:</strong>
                  <a href="/learn/laravel" class="toolbar-tag">{{ itemChild.duration }} 分钟</a>
                </p>
                <div class="flex align-center">
                  <time datetime="2017-06-27 06:42:48" class="m-r-1">
                    <strong>{{ itemChild.nums }} 个视频</strong>
                  </time>
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
import querystring from "querystring";
import { getCourses } from "../../services/api";
import Hero from "@/components/Hero";
export default {
  data() {
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
      listData: []
    };
  },
  components: {
    Hero
  },
  filters: {
    omittitle(value, length = 80) {
      return value && value.length > 80
        ? value.substring(0, length) + "..."
        : value;
    },
    omitcontent(value, length = 180) {
      return value && value.length > 180
        ? value.substring(0, length) + "..."
        : value;
    },
  },
  async created() {
    await this.getCourses();
  },
  methods: {
    async getCourses() {
      try {
        const { data } = await getCourses(this.filters);
        const resData = data.data.data;
        let arrTemp = [];
        let index = 0;
        let sectionCount = 3;
        for (let i = 0; i < resData.length; i++) {
          index = parseInt(i / sectionCount);
          if (arrTemp.length <= index) {
            arrTemp.push([]);
          }
          arrTemp[index].push(resData[i]);
        }
        this.listData = arrTemp;
      } catch ({ response }) {
        console.log(response);
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
    font-size: 0.75rem;
  }
  .media {
    .media-content {
      .title {
        cursor: pointer;
      }
    }
  }
}
</style>
