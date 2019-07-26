<template>
  <div class="content-box container is-fullhd">
    <div class="container">
      <h1 class="jump-head">{{ videoTitle }}</h1>
      <div class="warpper-box">
        <div class="cloums">
          <div class="column">
            <section>
              <b-collapse class="card" aria-id="contentIdForA11y3">
                <div
                  slot="trigger"
                  slot-scope="props"
                  class="card-header"
                  role="button"
                  aria-controls="contentIdForA11y3"
                >
                  <p class="card-header-title">
                    前端工程师
                  </p>
                  <a class="card-header-icon">
                    <i
                      :class="
                        props.open ? 'fas fa-angle-down' : 'fas fa-angle-up'
                      "
                    ></i>
                  </a>
                </div>
                <div class="card-content">
                  <div class="content">
                    <a class="content-item-text">1、啊大大大</a>
                    <a class="content-item-text">2、啊大大大</a>
                  </div>
                </div>
              </b-collapse>
              <b-collapse
                :open.sync="isOpen"
                class="card"
                aria-id="contentIdForA11y3"
              >
                <div
                  slot="trigger"
                  slot-scope="props"
                  class="card-header"
                  role="button"
                  aria-controls="contentIdForA11y3"
                >
                  <p class="card-header-title">
                    后端工程师
                  </p>
                  <a class="card-header-icon">
                    <i
                      :class="
                        props.open ? 'fas fa-angle-down' : 'fas fa-angle-up'
                      "
                    ></i>
                  </a>
                </div>
                <div class="card-content">
                  <div class="content">
                    <a class="content-item-text">1、啊大大大</a>
                    <a class="content-item-text">2、啊大大大</a>
                  </div>
                </div>
              </b-collapse>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Collapse from "buefy/dist/components/collapse";
import Icon from "buefy/dist/components/icon";
Vue.use(Icon);
Vue.use(Collapse);
export default {
  data() {
    return {
      videoTitle: "万水千山总是情，多给几分行不行！",
      isOpen: false
    };
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
}

.content-item-text {
  display: block;
  font-size: 0.85rem;
  color: #333;
  line-height: 1.5;
  font-weight: 400;
  &:hover {
    text-decoration: underline;
    color: #05cd8a;
  }
}
</style>
