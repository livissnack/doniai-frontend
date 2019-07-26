<template>
  <div class="content-box container is-fullhd">
    <div class="container">
      <h1 class="jump-head">{{ remarkTitle }}</h1>
      <div class="warpper-box">
        <div class="cloums">
          <div class="column">
            <div class="card">
              <div class="card-content">
                <div class="remark-total-box media">
                  <div class="media-content">
                    <p class="title is-4">7</p>
                    <p class="title is-6">签到总天数</p>
                    <p class="subtitle is-6">记录所有签到总数</p>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">1</p>
                    <p class="title is-6">可兑换 1 元优惠</p>
                    <p class="subtitle is-6">连续签到最高天数</p>
                  </div>
                </div>

                <div class="remark-content-box content">
                  <a
                    class="button is-success is-large is-long"
                    @click="handleRemark"
                    >马上签到</a
                  >
                  <p class="remark-text">
                    签到优惠规则说明：<br />
                    连续签到天数在<strong>30-99天</strong>之间，签到天数可换取相应的优惠金额。
                    如连续签到35天，可优惠35元。<br />
                    若中途出现中断，连续签到重新记录，优惠金额按最高连续签到天数计算。
                    <br />
                    签到优惠只适用于订阅或者续订的时候使用。
                    <br />
                    签到优惠不适用于终生 VIP 订阅。
                    <br />
                    2017-03-06 修复签到 bug，之前的签到天数保留。
                    <br />
                    2017-03-07 修复签到日期判断
                    bug，之前的签到天数保留，有疑问可以联系 LivisSnack。
                    <br />
                    2017-03-09 显示签到日期。
                    <br />
                    本活动最终解释权归Doniai所有。
                  </p>
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
import { Snackbar } from "buefy/dist/components/snackbar";
export default {
  data() {
    return {
      submitting: 0,
      remarkTitle: "连续签到换优惠，签到多少天换多少元钱！"
    };
  },
  methods: {
    /**
     * 处理签到操作
     */
    handleRemark() {
      if (++this.submitting === 1) {
        Snackbar.open("签到成功");
      } else {
        Snackbar.open({
          message: "不要重复签到",
          type: "is-danger",
          actionText: "No"
        });
      }
    }
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
  .remark-total-box {
    width: 50%;
    margin: 0 auto;
    display: flex;
    margin-bottom: 60px;
    justify-content: space-between;
    .media-content {
      text-align: center;
    }
  }
  .remark-content-box {
    width: 50%;
    margin: 0 auto;
    .remark-text {
      padding-top: 20px;
      font-size: 0.95rem;
      color: #111;
      line-height: 1.5;
    }
  }
}

.is-long {
  width: 100%;
}
</style>
