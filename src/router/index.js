import { createRouter, createWebHashHistory } from "vue-router"
import Layout from "@/views/Layout/index.vue"

const whiteRoutes = [
  {
    path: '/login',
    component: () => import("@/views/Login/index.vue")
  },
  {
    path: '/errorPage/:type',
    component: () => import("@/views/ErrorPage/index.vue")
  },
]

const routes = [
  {
    path: '/',
    component: Layout,
    alias: '/index',
    children: [
      {
        path: '/',
        component: () => import("@/views/Home/index.vue")
      },
      {
        path: '/detail',
        component: () => import("@/views/Detail/index.vue"),
        alias: ['/xiangqing'],
      },
      {
        path: '/goodsList',
        component: () => import("@/views/GoodsList/index.vue"),
      },
    ]
  },
  {
    path: '/demo',
    component: () => import("@/views/RouterDemo/demo.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: '/errorPage/404'
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [...whiteRoutes, ...routes],
  scrollBehavior (to, from, savedPosition) {
    return savedPosition ? savedPosition : { top: 0 }
  }
})

