import Vue from "vue";
import VueParticles from "vue-particles";
import captcha from "vue-social-captcha";
import { Snackbar } from "buefy/dist/components/snackbar";
Vue.use(captcha);
Vue.use(VueParticles);

export default {
  data() {
    return {
      companyLogo: require("../assets/logo.png"),
      loginText: "doniai登录",
      registerText: "doniai注册",
      resetPasswordText: "doniai密码找回",
      logining: false,
      requestUrl: "/gt/register-click",
      // 表单数据
      form: {
        email: "",
        password: "",
        confirm_password: ""
      },
      rules: {
        email: [
          {
            required: true,
            message: "请输入邮箱",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      },
      mailMsg: false,
      passwordMsg: false,
      confirmPasswordMsg: false,
      validateCaptchaStatus: false,
      captchaOption: {
        // 各平台的参数，具体请参阅个平台文档
        // 以下为腾讯验证码的参数
        // appid: '091c9140671f5499033b3a2bbc562542',
        // 以下为极验验证码的参数
        product: "bind"
      }
    };
  },
  // created() {
  //   const reg = /^http(s)?:\/\/(.*?)\//
  //   const url = reg.exec(window.location.href)[2]
  //   this.requestUrl = `https://${url}`
  // },
  methods: {
    /**
     * 执行登录操作
     */
    handleSubmit(name) {
      if (
        this.form.email == "" ||
        this.form.email == null ||
        this.form.email == undefined
      ) {
        this.mailMsg = true;
      }
      if (
        this.form.password == "" ||
        this.form.password == null ||
        this.form.password == undefined
      ) {
        this.passwordMsg = true;
      }
      if (this.validateCaptchaStatus) {
        this.$store.commit("userStatus", { name: "isLogin" });
        this.$router.push({ name: "home" });
      } else {
        Snackbar.open({
          message: "验证码校验不通过",
          type: "is-danger",
          actionText: "No"
        });
      }
    },
    /**
     * 验证码回调通知
     */
    captchaNotice(status, res) {
      if (status == 1) {
        this.validateCaptchaStatus = true;
      }
    },
    /**
     * 处理邮箱验证
     */
    handleEmailRule(email) {
      const reg = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (reg.test(email)) {
        this.mailMsg = false;
      } else {
        this.mailMsg = true;
      }
    },
    /**
     * 处理密码验证
     */
    handlePasswordRule(password) {
      const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/;
      if (reg.test(password)) {
        this.passwordMsg = false;
      } else {
        this.passwordMsg = true;
      }
    },
    /**
     * 处理确认密码
     * @param {*} password
     */
    handleConfirmPasswordRule(password) {
      if (password == this.form.password) {
        this.passwordMsg = false;
      } else {
        this.passwordMsg = true;
      }
    }
  }
};
