import { createRouter, createWebHashHistory } from "vue-router"
import Layout from "@/views/Layout/index.vue"

const whiteRoutes = [
  {
    path: "/login",
    component: () => import("@/views/Login/index.vue")
  },
  {
    path: "/errorPage/:type",
    component: () => import("@/views/ErrorPage/index.vue")
  }
]

const routes = [
  {
    path: "/",
    component: Layout,
    alias: "/index",
    meta: {
      title: "首页"
    },
    children: [
      {
        path: "/",
        component: () => import("@/views/Home/index.vue"),
        meta: {
          title: "首页"
        }
      },
      {
        path: "/detail",
        component: () => import("@/views/Detail/index.vue"),
        alias: ["/xiangqing"],
        meta: {
          title: "商品详情"
        }
      },
      {
        path: "/goodsList",
        component: () => import("@/views/GoodsList/index.vue"),
        meta: {
          title: "商品列表"
        }
      }
    ]
  },
  {
    path: "/RouterDemo",
    component: () => import("@/views/RouterDemo/demo.vue"),
    meta: {
      title: "RouterDemo"
    }
  },
  {
    path: "/VueDemo",
    component: () => import("@/views/VueDemo/index.vue"),
    meta: {
      title: "VueDemo"
    }
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/errorPage/404",
    meta: {
      title: "404"
    }
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [...whiteRoutes, ...routes],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition ? savedPosition : { top: 0 }
  }
})
