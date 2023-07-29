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
    alias: ['/index', '/home'],
    children: [
      {
        path: '/',
        component: () => import("@/views/Home/index.vue")
      },
      {
        path: '/detail',
        component: () => import("@/views/Detail/index.vue")
      },
    ]
  },
  {
    path: "/:catchAll(.*)",
    redirect: '/errorPage/404'
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [...whiteRoutes, ...routes]
})

