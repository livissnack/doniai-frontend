<template>
  <footer class="footer">
    <div class="content container has-text-centered">
      <div class="columns is-desktop">
        <div class="column">
          <h4 class="site-description">Doniai Artist</h4>
          <p class="footer-description">
            <em>Doniai</em>
            Technology And Art
            <em>ist</em>
            <br />
            <strong>为 Web 开发者而生</strong>,
            <strong> 的愿景是做最好的 NodeJs </strong>
            <a href=""> 中文视频教程和问答社区,有任何跟Nodejs </a>
            <a href=""> 相关的问题，都可以在这里得到解决。</a>
            <br />
            <strong>Happy Every Day !</strong>
          </p>
          <ul class="footer-connect">
            <li class="connect-icon githup">
              <a href="">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li class="connect-icon sina">
              <a href="">
                <i class="fab fa-weibo"></i>
              </a>
            </li>
            <li class="connect-icon wechat">
              <a href="">
                <i class="fab fa-weixin"></i>
              </a>
            </li>
            <li class="connect-icon qq">
              <a href="">
                <i class="fab fa-qq"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="column">
          <h4 class="mr30 site-description">学习资料</h4>
          <ul class="zeroed">
            <li>
              <router-link to="/docs">文章教程</router-link>
            </li>
            <li><a href="https://livissnack.com">个人博客</a></li>
            <li>
              <router-link to="/recommended_book" href="">推荐书目</router-link>
            </li>
            <li><a href="">QQ群 595928952</a></li>
          </ul>
        </div>
        <div class="column">
          <h4 class="mr30 site-description">知识讨论</h4>
          <ul class="zeroed">
            <li>
              <router-link to="/learn">学习路径</router-link>
            </li>
            <li><a href="">版权声明</a></li>
            <li><a href="">社区规则</a></li>
            <li><a href="https://easypay.com">EasyPay</a></li>
          </ul>
        </div>
        <div class="column">
          <h4 class="mr30 site-description">友情相关</h4>
          <ul class="zeroed">
            <li>
              <router-link to="/link">友情链接</router-link>
            </li>
            <li><a href="">个人商城</a></li>
            <li><a href="">付费内容购买</a></li>
            <li>
              <a href="https://githup.com/livissnack">LivisSnack Githup</a>
            </li>
          </ul>
        </div>
        <div class="column">
          <h4 class="mr30 site-description">服务提供商</h4>
          <ul class="zeroed">
            <li class="supplier-logo supplier-aliyun">
              <div>
                <a href="https://www.aliyun.com">
                  <img
                    class="company-logo"
                    :src="supplierLogos.aliyun"
                    alt="aliyun"
                  />
                </a>
              </div>
            </li>
            <li class="supplier-logo supplier-mailgun">
              <a href="https://www.mailgun.com">
                <img
                  class="company-logo"
                  :src="supplierLogos.mailgun"
                  alt="mailgun"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="pull-left">
          <a :href="links.doniaiUrl">Doniai</a> by
          <a :href="links.githupUrl">Livis Snack</a>. Powered by
          <a :href="links.vueUrl">Vue</a> and
          <a :href="links.adonisjsUrl">AdonisJs</a>.
        </p>
        <p class="pull-right">
          <span
            >© Doniai <em>{{ year }}</em
            >. All rights reserved.</span
          >
          <a :href="links.miitbeianUrl">粤ICP备18045314号</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
      links: {
        doniaiUrl: "https://doniai.com",
        githupUrl: "https://githup.com/livissnack",
        vueUrl: "https://vuejs.org/",
        adonisjsUrl: "https://adonisjs.com/",
        miitbeianUrl: "http://www.miitbeian.gov.cn"
      },
      supplierLogos: {
        aliyun: require("../assets/aliyun.svg"),
        mailgun: require("../assets/mailgun.svg")
      }
    };
  }
};
</script>

<style lang="less" scoped>
.footer {
  padding-bottom: 4rem !important;
}
.footer-bottom {
  padding-top: 40px;
  border-top: 1px solid #ddd;
  color: #111;

  .pull-left {
    float: left;
    font-size: 1rem;

    a {
      color: #111;
      font-weight: 700;
    }
  }

  .pull-right {
    float: right;
    font-size: 1rem;

    a {
      color: #111;
    }
  }
}

.site-description {
  color: #464646;
  text-align: left;
  font-size: 1.7rem;
  letter-spacing: -0.5px;
}

.footer-description {
  em {
    font-style: normal;
    font-weight: bolder;
    color: #00adb5;
  }
  a {
    color: #8e8e8e;
  }
  strong {
    font-weight: 700;
  }
  color: #8e8e8e;
  font-size: 13px;
  line-height: 1.5;
  text-align: left;
  letter-spacing: -0.2px;
}

.footer-connect {
  margin-left: -3px;
  list-style: none;
  display: flex;
  justify-content: flex-start;
}

.connect-icon {
  margin-top: 5px;
  display: inline-block;
  font-size: 18px;
  margin-right: 8px;
  width: 40px;
  text-align: center;
  border-radius: 4px;
  line-height: 1.9em;
  box-sizing: border-box;
  a {
    padding: 0.2em 0 0;
    display: block;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    i {
      color: #fff;
      position: relative;
      top: 2px;
    }
  }
}

.githup {
  background: #333;
}

.sina {
  background: #f75b5b;
}

.wechat {
  background: linear-gradient(90deg, #15b982, #01d18b);
}

.qq {
  background: #24bdff;
}

.zeroed {
  list-style: none;
  text-align: left;
  margin-top: -25px;
  li {
    a {
      color: #8e8e8e;
      letter-spacing: -0.2px;
      font-size: 0.85rem;
      font-weight: 500;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.mr30 {
  margin-left: 30px;
  color: #343434;
  margin-bottom: 35px;
  font-size: 1.1rem;
  margin-top: 20px;
}

.supplier-logo {
  text-align: left;
  height: 30px;
  width: 80%;
}

.supplier-aliyun {
  margin-top: -60px;
  margin-left: -10px;
}

.supplier-mailgun {
  margin-top: 40px;
}

.company-logo {
  max-width: 60%;
}
</style>
