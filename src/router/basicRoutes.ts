const basicRoutes = [
  {
    path: "/login",
    component: () => import("@/views/Login/index.vue")
  },
  {
    path: "/errorPage/:type",
    component: () => import("@/views/ErrorPage/index.vue")
  },
  {
    path: "/",
    redirect: "/index"
  }
]
export default basicRoutes
