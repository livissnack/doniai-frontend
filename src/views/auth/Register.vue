<template>
  <div id="particles" class="is-fullhd bg-color">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.3"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>

    <div class="dev-sign-main card">
      <div class="dev-sign-authorize-title">
        <img class="company-logo" :src="companyLogo" />
        <h3 class="system-name">{{ registerText }}</h3>
      </div>
      <form :model="form" label-position="left">
        <div class="field">
          <label class="label is-small">电子邮件</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input is-small"
              type="email"
              v-model="form.email"
              @change="handleEmailRule(form.email)"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
            <p class="help is-danger" v-show="mailMsg">邮箱地址格式不正确</p>
          </div>
        </div>
        <div class="field">
          <label class="label is-small">密码</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input is-small"
              type="password"
              v-model="form.password"
              @change="handlePasswordRule(form.password)"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-key"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
            <p class="help is-danger" v-show="passwordMsg">
              密码最少6位，包括(大写字母、小写字母、数字、特殊字符）
            </p>
          </div>
        </div>
        <div class="field">
          <label class="label is-small">确认密码</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input is-small"
              type="password"
              v-model="form.confirm_password"
              @change="handleConfirmPasswordRule(form.confirm_password)"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-key"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
            <p class="help is-danger" v-show="confirmPasswordMsg">
              两次密码输入不一致
            </p>
          </div>
        </div>
      </form>

      <div id="vaptcha_container">
        <Captcha
          id="Captcha"
          scene="Login"
          type="Geetest"
          :parm="captchaOption"
          @callback="captchaNotice"
          :url="requestUrl"
        >
          <input
            class="button is-small is-info is-fullwidth"
            id="Captcha"
            type="button"
            value="单击进行人机验证"
          />
        </Captcha>
      </div>

      <div class="dev-sign-main-aside">
        <a
          class="button is-small is-primary is-fullwidth"
          @click="handleSubmit('form')"
        >
          <i class="el-icon-alilogin"></i>
          注册 DoniAi
        </a>
        <div class="dev-sign-main-aside-tip">
          <p>
            已拥有账户？
            <router-link to="/login" class>登录</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixins from "../../utils/mixins";
export default {
  mixins: [Mixins],
  name: "register"
};
</script>

<style lang="less" scoped>
.bg-color {
  font-size: 14px;
  padding: 20px 0 60px 0;
  overflow: hidden;
  height: 100vh;
  background-image: url("../../assets/overlay.png"),
    linear-gradient(45deg, #6e436c 25%, #2a4584 75%);
  background-size: 256px, cover;
  background-position: 50%, 50%;
  background-repeat: repeat, no-repeat;
  background-color: #5e86bc;
}

#particles-js {
  position: absolute;
  width: 100%;
  .particles-js-canvas-el {
    height: 100% !important;
  }
}

.dev-sign-main {
  width: 400px;
  margin: 120px auto;
  padding: 10px 16px;
  border: 1px solid #e8eaec;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);

  .dev-sign-authorize-title {
    text-align: center;
    border-bottom: 1px solid #e8eaec;
    padding-bottom: 16px;
    margin-bottom: 32px;

    .company-logo {
      display: inline-block;
      width: 140px;
      height: 50px;
      vertical-align: middle;
    }

    .system-name {
      font-size: 26px;
      color: #515a6e;
      font-style: italic;
      font-weight: lighter;
    }

    .dev-sign-authorize-title-swap {
      display: inline-block;
      margin: 0 16px;
      vertical-align: middle;
    }
  }
}

.dev-sign-main-aside {
  margin-top: 20px;
}

.dev-sign-main-aside-tip {
  text-align: center;
  margin: 32px 0 16px;
  p {
    a {
      color: #303133;
      text-decoration: underline;
    }
  }
}

#vaptcha_container {
  margin-top: 20px;
}
</style>
