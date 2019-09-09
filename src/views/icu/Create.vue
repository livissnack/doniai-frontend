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
        <div class="icu-add">
          <a
            class="button is-primary is-small"
            :disabled="!regulationAddStatus"
            @click="promptDepartment"
          >
            <span class="icon">
              <i class="fas fa-plus"></i>
            </span>
            <span>扩充部门</span>
          </a>
        </div>
        <div class="icu-add">
          <a
            class="button is-warning is-small"
            :disabled="!departmentAddStatus"
            @click="promptRegulations"
          >
            <span class="icon">
              <i class="fas fa-plus"></i>
            </span>
            <span>扩充制度</span>
          </a>
        </div>
        <div class="icu-add">
          <router-link class="button is-info is-small" to="/icu">
            <span class="icon">
              <i class="fas fa-undo"></i>
            </span>
            <span>返回</span>
          </router-link>
        </div>
      </div>
    </div>

    <form class="columns icu-content-box">
      <div class="column question-box is-three-fifths">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label is-small">公司名称：</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input
                  class="input is-small"
                  type="email"
                  placeholder="请输入公司名称"
                />
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label is-small">部门：</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <div class="select is-fluidwidth is-small is-success">
                  <select class="is-fluidwidth">
                    <option>技术部</option>
                    <option>产品部</option>
                    <option>运营部</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label is-small">岗位：</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input
                  class="input is-small"
                  type="email"
                  placeholder="请输入你的岗位"
                />
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label is-small">实行制度：</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <div class="select is-fluidwidth is-small is-success">
                  <select class="is-fluidwidth">
                    <option>996工作制</option>
                    <option>无偿加班制</option>
                    <option>绩效考核制</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label is-small">额外补偿：</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <div class="block mr-top5">
                  <Radio v-model="radio" native-value="Flint">
                    2倍以上
                  </Radio>
                  <Radio v-model="radio" native-value="Silver">
                    少于2倍
                  </Radio>
                  <Radio v-model="radio" native-value="Jack">
                    没有
                  </Radio>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label is-small">可否调休：</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <div class="block mr-top5">
                  <Radio v-model="radio" native-value="Flint">
                    可以
                  </Radio>
                  <Radio v-model="radio" native-value="Silver">
                    原则上可以
                  </Radio>
                  <Radio v-model="radio" native-value="Jack">
                    不可以
                  </Radio>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="file is-horizontal">
          <div class="field-label is-normal">
            <label class="label is-small">公司LOGO：</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <div class="block mr-top5">
                  <label class="file-label">
                    <input class="file-input" type="file" name="resume" />
                    <span
                      class="is-fluidwidth upload-bg-color upload-border-color file-cta"
                    >
                      <span class="file-icon">
                        <i class="fas fa-upload"></i>
                      </span>
                      <span class="file-label">
                        上传公司LOGO
                      </span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal mrtop20">
          <div class="field-body">
            <div class="field">
              <div class="control">
                <div class="block is-fluidwidth mr-top5">
                  <div class="columns mrright">
                    <div class="column is-four-fifths">
                      <a
                        class="button is-fluidwidth is-small is-success"
                        @click="handleSubmit"
                        >提交</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ToastProgrammatic as Toast, DialogProgrammatic as Dialog, Radio } from "buefy";
export default {
  data() {
    return {
      radio: "Jack",
      regulationAddStatus: false,
      departmentAddStatus: true
    };
  },
  components: {
    Radio
  },
  methods: {
    handleSubmit() {
      Toast.open({
        duration: 2000,
        message: JSON.stringify({
          msg: "提交成功"
        }),
        position: "is-top",
        type: "is-success"
      });
    },
    promptRegulations() {
      if (!this.regulationAddStatus == true) {
        Dialog.prompt({
          title: "制度添加",
          size: "is-small",
          message: `添加一项选项表没有的公司制度！`,
          inputAttrs: {
            placeholder: "请输入新的公司制度内容",
            maxlength: 400
          },
          confirmText: "确定",
          cancelText: "取消",
          onConfirm: value => Toast.open(`Your name is: ${value}`),
          onCancel: value => Toast.open(`Your name is: ${value}`)
        });
      }
    },
    promptDepartment() {
      if (!this.departmentAddStatus == true) {
        Dialog.prompt({
          title: "部门添加",
          size: "is-small",
          message: `添加一项选项表没有的部门！`,
          inputAttrs: {
            placeholder: "请输入新的部门",
            maxlength: 400
          },
          confirmText: "确定",
          cancelText: "取消",
          onConfirm: value => Toast.open(`Your name is: ${value}`),
          onCancel: value => Toast.open(`Your name is: ${value}`)
        });
      }
    }
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
  background-color: #58cffb;
  background: linear-gradient(135deg, #58cffb, #58cffb 30%, #2a4584) fixed;
}

.hero-btn {
  a {
    background-color: #dd335e;
    color: #ffffff;

    &:hover {
      background-color: #dd335e;
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

.icu-content-box {
  margin-bottom: 40px;
  padding: 10px 20px;

  .question-box {
    margin: 0 auto;
  }
}

.mrright {
  display: flex;
  justify-content: flex-end;
}

.icu-flex-box {
  display: flex;
  justify-content: flex-end;
}

.is-fluidwidth {
  width: 100%;
}

.mr-top5 {
  margin-top: 5px;
}

.upload-border-color {
  border-color: #1fbc56;
}

.upload-bg-color {
  background-color: #ffffff;
}

.icu-add {
  margin-right: 10px;
}

.mrtop20 {
  margin-top: 20px;
}
</style>
