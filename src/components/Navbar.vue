<template>
  <div class="box-navbar-bg">
    <div class="container">
      <nav class="navbar">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img :src="websiteLogo" class="navbar-logo" alt="Doniai" />
          </a>

          <div
            id="navbarBurger"
            class="navbar-burger burger"
            data-target="navMenuDocumentation"
            @click="handleMobileDeviceNavbar"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navMenuDocumentation" class="navbar-menu" :class="isActive">
          <div class="navbar-start">
            <router-link to="/lessons" class="navbar-menu-font navbar-item">全部视频</router-link>

            <router-link to="/discuss" class="navbar-menu-font navbar-item">问答社区</router-link>

            <router-link to="/docs" class="navbar-menu-font navbar-item">文章教程</router-link>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-menu-font navbar-link">其它</a>

              <div class="navbar-dropdown">
                <router-link to="/learn" class="navbar-menu-font navbar-item">
                  <span class="icon is-small is-right">
                    <i class="graduation fas fa-graduation-cap"></i>
                  </span>
                  <span>学习路径</span>
                </router-link>
                <router-link to="/donate" class="navbar-menu-font navbar-item">
                  <span class="icon is-small is-right">
                    <i class="donate fas fa-donate"></i>
                  </span>
                  <span>捐赠本站</span>
                </router-link>
                <router-link to="/remark" class="navbar-menu-font navbar-item">
                  <span class="icon is-small is-right">
                    <i class="hotjar fab fa-hotjar"></i>
                  </span>
                  <span>签到优惠</span>
                </router-link>
                <router-link to="/icu" class="navbar-menu-font navbar-item">
                  <span class="icon is-small is-right">
                    <i class="blind fas fa-blind"></i>
                  </span>
                  <span>996</span>
                </router-link>
              </div>
            </div>

            <a class="navbar-search navbar-item">
              <div class="control has-icons-left has-icons-right">
                <input
                  type="text"
                  class="search-input input is-small is-rounded"
                  id="search_input"
                  placeholder="搜索你想要的"
                />
              </div>
            </a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <router-link to="/register" v-if="!isLogin" class="button is-success is-small">注册</router-link>
                <router-link to="/login" v-if="!isLogin" class="button is-primary is-small">
                  <strong>登录</strong>
                </router-link>

                <a v-if="isLogin" href="#" class="notify-msg-count">
                  <span class="badge" data-badge="8">
                    <i class="fas fa-bell"></i>
                  </span>
                </a>

                <div v-if="isLogin" class="dropdown is-right is-hoverable">
                  <div class="dropdown-trigger">
                    <button class="clear-btn-border button">
                      <img v-lazy="userAvatar" class="avatar-logo is-48x48 is-rounded" />
                      <span>{{ username }}</span>
                      <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </button>
                  </div>
                  <div class="hover-dropdown dropdown-menu" role="menu">
                    <div class="clear-padding dropdown-content">
                      <div class="hover-dropdown-item dropdown-item">
                        <a class="item-icon-menu">
                          <i class="fas fa-blog"></i>
                          <span>我的博客</span>
                        </a>
                      </div>
                      <div class="hover-dropdown-item dropdown-item">
                        <a class="item-icon-menu">
                          <i class="fas fa-heart"></i>
                          <span>我的收藏</span>
                        </a>
                      </div>
                      <div class="hover-dropdown-item dropdown-item">
                        <a class="item-icon-menu">
                          <i class="fas fa-user"></i>
                          <span>个人中心</span>
                        </a>
                      </div>
                      <div class="hover-dropdown-item dropdown-item">
                        <a class="item-icon-menu">
                          <i class="fas fa-credit-card"></i>
                          <span>卡卷中心</span>
                        </a>
                      </div>
                      <div class="hover-dropdown-item dropdown-item">
                        <a class="item-icon-menu">
                          <i class="fas fa-edit"></i>
                          <span>编辑资料</span>
                        </a>
                      </div>
                      <div class="hover-dropdown-item dropdown-item">
                        <a class="item-icon-menu" @click="logout">
                          <i class="fas fa-sign-out-alt"></i>
                          <span>系统退出</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" href="#">中文</a>

              <div id="moreDropdown" class="navbar-dropdown">
                <a class="navbar-item" href="#" @click="changeLocale('zh-CN')">
                  <span>
                    <span class="icon">
                      <i class="fas fa-rocket"></i>
                    </span>
                    <strong>zh-CN</strong>
                  </span>
                </a>
                <a class="navbar-item" href="#" @click="changeLocale('ar-SA')">
                  <span>
                    <span class="icon">
                      <i class="fas fa-certificate"></i>
                    </span>
                    <strong>ar-SA</strong>
                  </span>
                </a>
                <a class="navbar-item" href="#" @click="changeLocale('en-US')">
                  <span>
                    <span class="icon">
                      <i class="fas fa-certificate"></i>
                    </span>
                    <strong>en-US</strong>
                  </span>
                </a>
                <a class="navbar-item" href="#" @click="changeLocale('ja-JP')">
                  <span>
                    <span class="icon">
                      <i class="fas fa-certificate"></i>
                    </span>
                    <strong>ja-JP</strong>
                  </span>
                </a>
                <a class="navbar-item" href="#" @click="changeLocale('ko-KR')">
                  <span>
                    <span class="icon">
                      <i class="fas fa-certificate"></i>
                    </span>
                    <strong>ko-KR</strong>
                  </span>
                </a>
                <a class="navbar-item" href="#" @click="changeLocale('tr-TR')">
                  <span>
                    <span class="icon">
                      <i class="fas fa-certificate"></i>
                    </span>
                    <strong>tr-TR</strong>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import "docsearch.js/dist/cdn/docsearch.min.css";
import docsearch from "docsearch.js";
export default {
  name: "Navbar",
  data() {
    return {
      isActive: "",
      userAvatar:
        "https://iocaffcdn.phphub.org/uploads/avatars/8689_1486625751.jpg!/both/100x100",
      websiteLogo: require("../assets/logo.png"),
      username: "LivisSnack"
    };
  },
  mounted() {
    docsearch({
      apiKey: "feb33c2506cdece7f0267859a856767a",
      indexName: "wevue",
      inputSelector: "#search_input",
      algoliaOptions: { facetFilters: ["version:v2_0"] },
      debug: false // Set debug to true if you want to inspect the dropdown
    });
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    }
  },
  methods: {
    logout() {
      this.$store.commit("userStatus", { name: "isLogin" });
      this.$router.push({ name: "home" });
    },
    handleMobileDeviceNavbar() {
      this.isActive = (this.isActive === "" || null || undefined) ? "is-active" : "";
    },
    changeLocale(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem("locale", lang);
    }
  }
};
</script>

<style lang="less" scoped>
.box-navbar-bg {
  border-bottom: 1px solid #6e9cc3;
}
.navbar {
  margin: 0 20px;

  .navbar-logo {
    font-size: 25px;
    font-weight: 600;
    color: #14b982;
  }

  .navbar-menu-font {
    font-size: 0.79rem;
  }

  .hotjar {
    color: #f23920;
    margin-right: 5px;
  }

  .graduation {
    color: #339af0;
    margin-right: 5px;
  }

  .donate {
    color: #a5b6fa;
    margin-right: 5px;
  }

  .blind {
    color: #dd335e;
    margin-right: 5px;
  }

  .navbar-search {
    &:hover {
      background-color: #ffffff;
    }

    .control {
      input {
        padding-left: 1.25em;
      }

      .icon-search {
        cursor: pointer;
      }
    }
  }
}

.hover-dropdown {
  min-width: 8.6rem !important;
  padding-top: 0 !important;
}

.clear-btn-border {
  border: none;
}

.avatar-logo {
  border-radius: 50%;
  margin-right: 4px;
}

.item-icon-menu {
  color: #777;

  span {
    margin-left: 10px;
  }
}

.clear-padding {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.hover-dropdown-item {
  &:hover {
    background-color: #f2f2f2;
  }
}

.notify-msg-count {
  margin-right: 20px;
}
</style>
