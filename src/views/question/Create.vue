<template>
  <div class="content-box container is-fullhd">
    <div class="container">
      <h1 class="jump-head">{{ remarkTitle }}</h1>
      <div class="warpper-box">
        <div class="cloums">
          <div class="markdown-box column">
            <h3 class="subtitle">快乐每一天</h3>
            <b-field>
              <b-input
                placeholder="帖子标题"
                type="search"
                v-model="submitData.title"
              >
              </b-input>
            </b-field>
            <b-field>
              <b-taginput
                v-model="submitData.tags"
                :data="filteredTags"
                autocomplete
                :allow-new="allowNew"
                placeholder="添加标签"
              >
              </b-taginput>
            </b-field>
            <b-field>
              <mavon-editor
                :ishljs="true"
                fontSize="12px"
                placeholder="请使用 Markdown 格式书写"
                class="markdown-zindex"
                :subfield="false"
                :toolbars="toolbarsConfig"
                v-model="submitData.markdown_content"
              />
            </b-field>
            <a
              class="button is-right is-success is-fullwidth"
              @click="handleSubmit"
              >发布新的帖子</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Snackbar } from "buefy/dist/components/snackbar";
import Field from "buefy/dist/components/field";
import Input from "buefy/dist/components/input";
import Taginput from "buefy/dist/components/taginput";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
Vue.use(Field);
Vue.use(Input);
Vue.use(Taginput);
Vue.use(mavonEditor);
export default {
  data() {
    return {
      submitting: 0,
      remarkTitle: "赶紧来发一贴吧！",
      filteredTags: ["php", "laravel", "vue", "weex"],
      isSelectOnly: false,
      submitData: {
        title: "",
        tags: [],
        markdown_content: ""
      },
      allowNew: false,
      toolbarsConfig: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: false, // 上角标
        subscript: false, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: false, // 全屏编辑
        readmodel: false, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: false, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: false, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      }
    };
  },
  methods: {
    /**
     * 处理签到操作
     */
    handleSubmit() {
      if (++this.submitting === 1) {
        Snackbar.open("发帖成功");
      } else {
        Snackbar.open({
          message: "已经发帖成功，不要重复",
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
  padding-top: 30px;
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
  .markdown-box {
    width: 80%;
    margin: 0 auto;
  }
  .markdown-zindex {
    z-index: 12;
    height: 400px;
  }
}
</style>
