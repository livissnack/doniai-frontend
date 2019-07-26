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

    <div class="container is-fluid detail-content">
      <div class="columns">
        <div class="column question-box is-three-fifths">
          <div class="question-title">
            <h2>黄石品信进出口贸易有限公司</h2>
          </div>
          <div class="question-content">
            <h3>
              <strong>323</strong
              >人人为该公司存在996行为，这些人可能来自以下部门？
            </h3>
            <p>研发、产品、市场、零售</p>
          </div>
          <div class="question-content">
            <h3>这些人的岗位可能是？</h3>
            <p>产品经理、前端工程师、销售、运营专员</p>
          </div>
          <div class="question-content">
            <h3>是否有额外的工资补偿？</h3>
            <p><strong>80%</strong> 的人表示并没有</p>
          </div>
          <div class="question-content">
            <h3>996后是否可以调休？</h3>
            <p><strong>80%</strong> 的人表示并没有</p>
          </div>
          <div class="question-layer">
            <h2>附中华人民共和国劳动法：</h2>
            <p>
              <strong>《中华人民共和国劳动法》</strong>（下简称
              <strong>《劳动法》</strong>）
              <strong>第四章第三十六条</strong>
              规定：<br />
              国家实行劳动者每日工作时间不超过八小时、平均每周工作时间不超过四十四小时的工时制度。
              <br /><strong>《劳动法》第四章第三十九条</strong
              >规定：<br />企业因生产特点不能实行本法第三十六条、第三十八条规定的，
              经劳动行政部门批准，可以实行其他工作和休息办法。 <br /><strong
                >《劳动法》第四章第四十一条</strong
              >规定：<br />用人单位由于生产经营需要，经与工会和劳动者协商后可以延长工作时间，
              一般每日不得超过一小时；因特殊原因需要延长工作时间的，
              在保障劳动者身体健康的条件下延长工作时间每日不得超过三小时，
              但是每月不得超过三十六小时。<br /><strong
                >《劳动法》第四章第四十三条</strong
              >规定：<br />用人单位不得违反本法规定延长劳动者的工作时间。
              <strong>《劳动法》第四章第四十四条</strong
              >规定:<br />有下列情形之一的，用人单位应当按照下列标准支付高于劳动者正常工作时间工资的工资报酬：<br />
              （一）安排劳动者延长工作时间的，支付不低于工资的百分之一百五十的工资报酬；<br />
              （二）休息日安排劳动者工作又不能安排补休的，支付不低于工资的百分之二百的工资报酬；<br />
              （三）法定休假日安排劳动者工作的，支付不低于工资的百分之三百的工资报酬。<br /><strong
                >《劳动法》第十二章第九十条</strong
              >规定：<br />用人单位违反本法规定，延长劳动者工作时间的，由劳动行政部门给予警告，责令改正，并可以处以罚款。<br /><strong
                >《劳动法》第十二章第九十一条</strong
              >规定:<br />用人单位有下列侵害劳动者合法权益情形之一的，由劳动行政部门责令支付劳动者的工资报酬、经济补偿，并可以责令支付赔偿金：<br />
              （一）略<br />
              （二）<strong>拒不支付劳动者延长工作时间工资报酬的</strong><br />
              （三）略<br />
              （四）略
            </p>

            <p>
              附上法律链接：
              <a
                href="http://www.npc.gov.cn/npc/xinwen/2019-01/07/content_2070261.htm"
              >
                中华人民共和国劳动法（2018年修订版）
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "Jack"
    };
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
  background-color: #28c76f;
  background: linear-gradient(135deg, #28c76f, #28c76f 30%, #fa742b) fixed;
}

.hero-btn {
  a {
    background-color: #bc78ec;
    color: #ffffff;

    &:hover {
      background-color: #bc78ec;
      padding: 0 40px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      transition: all 0.25s;
    }
  }
}

.detail-content {
  margin-left: 0;
  margin-right: 0;
  padding: 60px 20px;
  background-color: #dd335e;
}

.question-box {
  margin: 0 auto;

  .question-title {
    h2 {
      color: #ffffff;
      font-size: 20px;
    }
  }

  .question-layer {
    margin-top: 20px;
    h2 {
      color: #ffffff;
      font-size: 20px;
    }
    p {
      color: #ffffff;
      strong {
        color: #ffffff;
      }
      a {
        color: #ffffff;
      }
    }
  }

  .question-content {
    color: #ffffff;
    margin-top: 20px;

    h3 {
      font-weight: 600;

      strong {
        color: #ffffff;
      }
    }

    p {
      strong {
        color: #ffffff;
      }
    }
  }
}
</style>
