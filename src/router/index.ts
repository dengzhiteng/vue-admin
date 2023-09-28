import { createRouter, createWebHashHistory } from "vue-router"
import Layout from "@/views/Layout/index.vue"

const whiteRoutes =
  [
    {
      path: "/login",
      component: () => import("@/views/Login/index.vue")
    },
    {
      path: "/errorPage/:type",
      component: () => import("@/views/ErrorPage/index.vue")
    }
  ] 
  // 仪表盘
  // dashboard / workbench
  // dashboard/analysis

// 组件
// 页面
// 权限控制
// 系统管理
// 编辑器
// 图标
// 多级菜单
// 示例
// 关于




const routes = [
  {
    component: Layout,
    path: "/",
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
      }
    ]
  },
  {
    component: Layout,
    path: "/dashboard",
    meta: {
      title: "仪表盘"
    },
    children: [
      {
        path: "/workbench",
        component: () => import("@/views/Home/index.vue"),
        meta: {
          title: "工作台"
        }
      },
      {
        path: "/analysis",
        component: () => import("@/views/Home/index.vue"),
        meta: {
          title: "分析"
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
