import { createRouter, createWebHashHistory } from "vue-router"
import basicRoutes from "./basicRoutes"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...basicRoutes,
    {
      path: "/:catchAll(.*)",
      redirect: "/errorPage/404",
      meta: {
        title: "404"
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition ? savedPosition : { top: 0 }
  }
})

export default router
