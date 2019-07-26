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
              >
                <div class="play-content-left">
                  <span class="panel-icon">
                    <i class="far fa-play-circle"></i>
                  </span>
                  <span class="panel-text">
                    {{ item.title }}
                  </span>
                </div>

                <div class="play-content-right">
                  <span class="long-time panel-text">
                    {{ item.longtime }}
                  </span>
                  <span class="panel-text">
                    <time>{{ item.publicAt }}</time>
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
import Pagiation from "@/components/Pagiation";
export default {
  data() {
    return {
      videoTitle: "视频更新列表：NodeJs 开发视频，全在这里",
      listData: [
        {
          id: 1,
          title: "MySQL 备份到云存储 AWS S3",
          longtime: "14分钟",
          publicAt: "Aug 20, 2018"
        },
        {
          id: 2,
          title: "MySQL 从属数据库配置",
          longtime: "10分钟",
          publicAt: "Aug 20, 2018"
        },
        {
          id: 3,
          title: "定时任务部署",
          longtime: "8分钟",
          publicAt: "Aug 10, 2019"
        },
        {
          id: 4,
          title: "MySQL 备份到云存储 AWS S3",
          longtime: "14分钟",
          publicAt: "Aug 20, 2018"
        },
        {
          id: 5,
          title: "MySQL 从属数据库配置",
          longtime: "10分钟",
          publicAt: "Aug 20, 2018"
        },
        {
          id: 6,
          title: "定时任务部署",
          longtime: "8分钟",
          publicAt: "Aug 10, 2019"
        },
        {
          id: 7,
          title: "MySQL 备份到云存储 AWS S3",
          longtime: "14分钟",
          publicAt: "Aug 20, 2018"
        },
        {
          id: 8,
          title: "MySQL 从属数据库配置",
          longtime: "10分钟",
          publicAt: "Aug 20, 2018"
        },
        {
          id: 9,
          title: "定时任务部署",
          longtime: "8分钟",
          publicAt: "Aug 10, 2019"
        },
        {
          id: 10,
          title: "MySQL 备份到云存储 AWS S3",
          longtime: "14分钟",
          publicAt: "Aug 20, 2018"
        },
        {
          id: 11,
          title: "MySQL 从属数据库配置",
          longtime: "10分钟",
          publicAt: "Aug 20, 2018"
        },
        {
          id: 12,
          title: "定时任务部署",
          longtime: "8分钟",
          publicAt: "Aug 10, 2019"
        }
      ]
    };
  },
  components: {
    Pagiation
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
