import Vue from "vue";
import Router from "vue-router";
import { Store } from "vuex";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/auth/Login.vue"),
      meta: { title: "NodeJs 视频问答社区 - Doniai"}
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/auth/Register.vue"),
      meta: { title: "NodeJs 视频问答社区 - Doniai", isLogin: false }
    },
    {
      path: "/reset_password",
      name: "resetPassword",
      component: () => import("@/views/auth/ResetPassword.vue"),
      meta: { title: "NodeJs 视频问答社区 - Doniai", isLogin: false }
    },
    {
      path: "/",
      component: () => import("@/components/layouts/Index.vue"),
      children: [
        // 主页
        {
          path: "/",
          component: () => import("@/views/home/Index.vue"),
          name: "home",
          meta: { title: "NodeJs 视频问答社区 - Doniai", isLogin: false, keepAlive: true }
        },
        // 关于页
        {
          path: "/about",
          component: () => import("@/views/about/Index.vue"),
          name: "about",
          meta: { title: "NodeJs 视频问答社区 - Doniai", keepAlive: true }
        },
        // 视频页
        {
          path: "/lessons",
          component: () => import("@/views/video/Index.vue"),
          name: "video",
          meta: { title: "NodeJs 视频问答社区 - Doniai", keepAlive: true }
        },
        {
          path: "/lessons/:id",
          component: () => import("@/views/video/Detail.vue"),
          name: "videoDetail",
          meta: { title: "NodeJs 视频问答社区 - Doniai", isLogin: false, keepAlive: true }
        },
        // 问答页
        {
          path: "/discuss",
          component: () => import("@/views/question/Index.vue"),
          name: "question",
          meta: { title: "NodeJs 视频问答社区 - Doniai", keepAlive: true }
        },
        {
          path: "/discuss/create",
          component: () => import("@/views/question/Create.vue"),
          name: "questionCreate",
          meta: { title: "NodeJs 视频问答社区 - Doniai", keepAlive: true }
        },
        {
          path: "/discuss/:id",
          component: () => import("@/views/question/Detail.vue"),
          name: "questionDetail",
          meta: { title: "NodeJs 视频问答社区 - Doniai", keepAlive: true }
        },
        // 文章页
        {
          path: "/docs",
          component: () => import("@/views/article/Index.vue"),
          name: "article",
          meta: { title: "NodeJs 视频问答社区 - Doniai", keepAlive: true }
        },
        // 文章详情页
        {
          path: "/docs/:id",
          component: () => import("@/views/article/Detail.vue"),
          name: "articleDetail",
          meta: { title: "NodeJs 视频问答社区 - Doniai", keepAlive: true }
        },
        // 打赏页
        {
          path: "/donate",
          component: () => import("@/views/donate/Index.vue"),
          name: "donate",
          meta: { title: "NodeJs 视频问答社区 - Doniai", keepAlive: true }
        },
        // 签到页
        {
          path: "/remark",
          component: () => import("@/views/remark/Index.vue"),
          name: "remark",
          meta: { title: "NodeJs 视频问答社区 - Doniai", keepAlive: true }
        },
        // 学习路径页
        {
          path: "/learn",
          component: () => import("@/views/learn/Index.vue"),
          name: "learn",
          meta: { title: "NodeJs 视频问答社区 - Doniai", keepAlive: true }
        },
        // 推荐书籍页
        {
          path: "/recommended_book",
          component: () => import("@/views/book/Recommended.vue"),
          name: "recommendedBook",
          meta: { title: "NodeJs 视频问答社区 - Doniai", keepAlive: true }
        },
        // 友情链接页
        {
          path: "/link",
          component: () => import("@/views/link/Index.vue"),
          name: "link",
          meta: { title: "NodeJs 视频问答社区 - Doniai", keepAlive: true }
        },
        // 996icu
        {
          path: "/icu",
          component: () => import("@/views/icu/Index.vue"),
          name: "icu",
          meta: { title: "NodeJs 视频问答社区 - Doniai", keepAlive: true }
        },
        // 添加icu
        {
          path: "/createicu",
          component: () => import("@/views/icu/Create.vue"),
          name: "icuCreate",
          meta: { title: "NodeJs 视频问答社区 - Doniai", keepAlive: true }
        },
        // icu详情
        {
          path: "/detailicu/:id",
          component: () => import("@/views/icu/Detail.vue"),
          name: "icuDetail",
          meta: { title: "NodeJs 视频问答社区 - Doniai", keepAlive: true }
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  let getFlag = localStorage.getItem("flag");
  if (getFlag === "isLogin") {
    Store.state.isLogin = true;
    next();

    if (!to.meta.isLogin) {
      next({ path: "/" });
    }
  } else {
    if (to.meta.isLogin) {
      next({ path: "/login" });
    } else {
      next();
    }
  }
});

export default router;
