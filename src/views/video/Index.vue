<template>
  <div class="content-box container is-fullhd">
    <div class="container">
      <h1 class="jump-head">{{ videoTitle }}</h1>
      <div class="video-box">
        <div class="cloums">
          <div class="play-list column is-two-thirds">
            <div class="panel">
              <router-link
                v-for="item in listData"
                :key="item.id"
                :to="{ path: `/lessons/${item.id}` }"
                class="panel-block"
                v-cloak
              >
                <div class="play-content-left">
                  <span class="panel-icon">
                    <i class="far fa-play-circle"></i>
                  </span>
                  <span class="panel-text">
                    {{ item.name }}
                  </span>
                </div>

                <div class="play-content-right">
                  <span class="long-time panel-text">
                    {{ item.duration|longtime }}
                  </span>
                  <span class="panel-text">
                    <time>{{ item.publish_at }}</time>
                  </span>
                </div>
              </router-link>
            </div>
          </div>
          <Pagiation />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getVideos } from "../../services/api";
import Pagiation from "@/components/Pagiation";
import { ToastProgrammatic as Toast } from "buefy";
export default {
  data() {
    return {
      filters: {
        pageSize: 40,
        page: 1
      },
      pagination: {
        current: 1,
        pageSize: 40,
        total: 0
      },
      videoTitle: "视频更新列表：NodeJs 开发视频，全在这里",
      listData: []
    };
  },
  components: {
    Pagiation
  },
  filters: {
    longtime(value) {
      return value ? value+'小时' : '';
    }
  },
  created() {
    this.getVideos();
  },
  methods: {
    async getVideos() {
      try {
        const { data } = await getVideos(this.filters);
        this.listData = data.data.data;
      } catch ({ response }) {
        Toast.open({
          message: `视频接口数据请求失败`,
          position: "is-bottom-right",
          type: "is-danger"
        });
      }
    },
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
.video-box {
  padding-bottom: 60px;
}

.play-list {
  margin: 0 auto;
}

.panel {
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.36) 0px 3px 6px;
  .panel-block {
    display: flex;
    justify-content: space-between;
    color: #3a3a3a;
    font-size: 0.75rem;
    font-weight: 700;
    .play-content-left {
      .panel-icon {
        margin-top: 3px;
        i {
          color: #333;
        }
      }
    }
    .play-content-right {
      .long-time {
        margin-right: 20px;
      }
    }
    &:hover {
      background-color: #eeeeee;
      text-decoration: underline;
      color: #41bf92;
    }
  }
}
</style>
