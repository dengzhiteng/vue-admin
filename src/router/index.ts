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
    component: Layout,
    path: "/workbench",
    meta: {
      title: "仪表盘"
    },
    children: [
      {
        path: "workbench",
        component: () => import("@/views/Home/workbench/index.vue"),
        meta: {
          title: "工作台"
        }
      },
      {
        path: "analysis",
        component: () => import("@/views/Home/analysis/index.vue"),
        meta: {
          title: "分析"
        }
      }
    ]
  },
  {
    component: Layout,
    path: "/features",
    meta: {
      title: "功能"
    },
    children: [
      {
        path: "download",
        component: () => import("@/views/features/download/index.vue"),
        meta: {
          title: "下载"
        }
      },
      {
        path: "previewPdf",
        component: () => import("@/views/features/previewPdf/index.vue"),
        meta: {
          title: "预览PDF"
        }
      }
    ]
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
