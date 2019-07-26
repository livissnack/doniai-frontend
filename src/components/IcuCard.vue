<template>
  <div class="card">
    <div class="card-content">
      <div class="company-info">
        <figure class="image is-48x48">
          <img class="is-rounded" :src="companyLogo" />
        </figure>
        <h4 class="company-name">
          <router-link :to="{ name: 'icuDetail', params: { id: 12 } }">{{
            compnayName
          }}</router-link>
        </h4>
      </div>

      <div class="text-right">
        <h2>
          <i class="fas fa-arrow-up text-success"></i>
          {{ supportQuantity }}
          <i> ~ </i>
          <i class="fas fa-arrow-down text-danger"></i>
          {{ againstQuantity }}
        </h2>
      </div>
      <span class="text-left text-remark-font">{{ companyRemark }}</span>
      <br />
      <span class="text-left text-remark-font"
        >支持率 {{ supportPercent }}%</span
      >
      <progress :class="progressStyle" :value="supportPercent" max="100">{{
        supportPercent
      }}</progress>
      <div class="icu-btn-group">
        <a
          class="button is-danger is-small"
          @click="minusAgainstNums(againstQuantity, companyId)"
        >
          <span class="icon">
            <i class="fas fa-minus"></i>
          </span>
          <span>反对</span>
        </a>
        <a
          class="button is-primary is-small"
          @click="plusSupportNums(supportQuantity, companyId)"
        >
          <span class="icon">
            <i class="fas fa-plus"></i>
          </span>
          <span>支持</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    companyId: {
      type: Number,
      default: 0
    },
    compnayName: {
      type: String,
      default: ""
    },
    companyLogo: {
      type: String,
      default: require("../assets/companylogs/ala.jpg")
    },
    supportQuantity: {
      type: String,
      default: ""
    },
    againstQuantity: {
      type: String,
      default: ""
    },
    companyRemark: {
      type: String,
      default: ""
    }
  },
  computed: {
    supportPercent() {
      return Math.round(
        (parseInt(this.supportQuantity) /
          (parseInt(this.supportQuantity) + parseInt(this.againstQuantity))) *
          100
      );
    },
    progressStyle() {
      let progressColor = "is-success";
      if (this.supportPercent > 0 && this.supportPercent < 30) {
        progressColor = "is-info";
      }
      if (this.supportPercent >= 30 && this.supportPercent < 60) {
        progressColor = "is-warning";
      }
      if (this.supportPercent >= 60 && this.supportPercent < 90) {
        progressColor = "is-danger";
      }
      if (this.supportPercent >= 90 && this.supportPercent <= 100) {
        progressColor = "is-black";
      }
      let obj = {
        progress: true,
        [progressColor]: true
      };
      return obj;
    }
  },
  methods: {
    plusSupportNums(supportQuantity, companyId) {
      this.$emit("supportQuantity", {
        title: "支持一下",
        support_quantity: supportQuantity,
        company_id: companyId
      });
    },
    minusAgainstNums(againstQuantity, companyId) {
      this.$emit("againstQuantity", {
        title: "反对一下",
        against_quantity: againstQuantity,
        company_id: companyId
      });
    }
  }
};
</script>
<style lang="less" scoped>
.card {
  border: 0;
  border-radius: 0.25rem;
}

.company-info {
  display: flex;
  justify-content: flex-start;
}

.company-name {
  text-align: left;
  line-height: 45px;
  margin-left: 10px;
  font-size: 14px;
  color: #2c2b2e;
  font-weight: 600;
  a {
    color: #363636;
    &:hover {
      text-decoration: underline;
    }
  }
}

.text-muted {
  color: #90a4ae;
}

.text-remark-font {
  font-size: 12px;
  color: #90a4ae;
}

.text-right {
  text-align: right;
}

.text-left {
  text-align: left;
}

.text-success {
  color: #23d160;
}

.text-info {
  color: #209cee;
}

.text-warning {
  color: #ffdc57;
}

.text-danger {
  color: #ff3760;
}

.text-primary {
  color: #01d1b2;
}

.icu-btn-group {
  display: flex;
  justify-content: space-between;
}
</style>
