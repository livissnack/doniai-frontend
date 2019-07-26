<template>
  <div class="icu">
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">提供一个自由平台</h1>
          <h1 class="title">论述业内公司欠妥当行为</h1>
          <h2 class="subtitle">
            客观、公正、事实说话！
          </h2>
          <div class="hero-btn">
            <router-link class="button is-medium" to="/createicu"
              >马上添加新的公司</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="columns icu-mr20 icu-box">
      <div class="column icu-flex-box">
        <div class="icu-tabs tabs">
          <ul>
            <li>
              <h4>排序方式:</h4>
            </li>
            <li class="is-active"><a>按确认人数</a></li>
            <li><a>按最新提交</a></li>
          </ul>
        </div>

        <div class="icu-add">
          <router-link class="button is-info is-small" to="/createicu">
            <span class="icon">
              <i class="fas fa-plus"></i>
            </span>
            <span>提交新公司</span>
          </router-link>
        </div>
      </div>
    </div>

    <div class="icu-box">
      <!-- 卡片展示 -->
      <div class="columns" v-for="(value, index) in computedData" :key="index">
        <div
          class="column"
          v-for="(itemValue, itemIndex) in value"
          :key="itemIndex"
        >
          <IcuCard
            :companyId="itemValue.id"
            :compnayName="itemValue.name"
            :companyLogo="itemValue.logo"
            :supportQuantity="itemValue.support_quantity"
            :againstQuantity="itemValue.against_quantity"
            :companyRemark="itemValue.remark"
            v-on:supportQuantity="changeSupportNums($event)"
            v-on:againstQuantity="changeAgainstNums($event)"
          />
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
import IcuCard from "../../components/IcuCard";
import Pagiation from "@/components/Pagiation";
import { Toast } from "buefy/dist/components/toast";
import { sliceThreeArray } from "../../utils/helpers";
export default {
  data() {
    return {
      alaLogo: require("../../assets/companylogs/ala.jpg"),
      jdLogo: require("../../assets/companylogs/jd.jpg"),
      didiLogo: require("../../assets/companylogs/didi.jpeg"),
      data: [
        {
          id: 1,
          name: "阿啦(深圳)网络有限公司",
          logo: this.alaLogo,
          support_quantity: "20",
          against_quantity: "316",
          remark: "正在实行绩效考核"
        },
        {
          id: 2,
          name: "天津京东智联科技发展有限公司",
          logo: this.jdLogo,
          support_quantity: "156",
          against_quantity: "367",
          remark: "正在实行996工作制"
        },
        {
          id: 3,
          name: "阿啦(深圳)网络有限公司",
          logo: this.didiLogo,
          support_quantity: "234",
          against_quantity: "12",
          remark: "正在实行无偿加班"
        },
        {
          id: 4,
          name: "阿啦(深圳)网络有限公司",
          logo: this.alaLogo,
          support_quantity: "234",
          against_quantity: "12",
          remark: "正在实行绩效考核"
        },
        {
          id: 5,
          name: "天津京东智联科技发展有限公司",
          logo: this.jdLogo,
          support_quantity: "134",
          against_quantity: "42",
          remark: "正在实行996工作制"
        },
        {
          id: 6,
          name: "阿啦(深圳)网络有限公司",
          logo: this.didiLogo,
          support_quantity: "234",
          against_quantity: "12",
          remark: "正在实行无偿加班"
        }
      ]
    };
  },
  components: {
    IcuCard,
    Pagiation
  },
  computed: {
    /**
     * 数据切割分组(分三个一组)
     */
    computedData() {
      return this.sliceThreeArray(this.data);
    }
  },
  methods: {
    changeSupportNums(value) {
      console.log(value);
      Toast.open({
        duration: 2000,
        message: JSON.stringify(value),
        position: "is-top",
        type: "is-success"
      });
    },
    changeAgainstNums(value) {
      console.log(value);
      Toast.open({
        duration: 2000,
        message: JSON.stringify(value),
        position: "is-top",
        type: "is-success"
      });
    },
    sliceThreeArray
  }
};
</script>
<style lang="less" scoped>
.hero {
  padding: 30px 0;
  text-align: center;
  background-size: 256px, cover;
  background-position: 50%, 50%;
  background-repeat: repeat, no-repeat;
  background-color: #f76b1d;
  background: linear-gradient(135deg, #f76b1d, #f76b1d 30%, #ffb631) fixed;
}

.hero-btn {
  a {
    background-color: #f067b4;
    color: #ffffff;

    &:hover {
      background-color: #f067b4;
      padding: 0 40px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      transition: all 0.25s;
    }
  }
}

.icu-mr20 {
  margin-top: 20px;
}

.icu-box {
  padding: 10px 20px;
}

.icu-flex-box {
  display: flex;
  justify-content: space-between;
}

.icu-tabs {
  ul {
    border: none;

    li {
      a {
        font-size: 12px;

        &:hover {
          text-decoration: underline;
        }
      }

      h4 {
        font-size: 12px;
        font-weight: 600;
      }
    }
  }
}
</style>
