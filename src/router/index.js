import { createRouter, createWebHashHistory } from "vue-router"
import Login from "@/views/Login/index.vue"
import ErrorPage from "@/views/ErrorPage/index.vue"
import Home from "@/views/Home/index.vue"
import Detail from "@/views/Detail/index.vue"
import Layout from "@/views/Layout/index.vue"


const baseRoutes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/errorPage',
    component: ErrorPage,
  },
]

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home,
      },

      {
        path: '/detail',
        component: Detail,
      },
    ]
  },
  {
    path: "/:catchAll(.*)",
    redirect: '/errorPage'
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [...baseRoutes, ...routes]
})

