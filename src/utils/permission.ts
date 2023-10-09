import { useUserStore } from "@/store/user"
import { RouteRecordRaw } from "vue-router"
import { asyncRoutes } from "@/router/asyncRoutes"

// 过滤没有角色权限的路由
function filterRoute(route: RouteRecordRaw): boolean {
  const useUser = useUserStore()
  if (!route.meta?.roles) return true
  else if (route.meta.roles.includes(useUser.role)) return true
  else return false
}

function filterFunc(routes: RouteRecordRaw[]) {
  routes = routes.filter(filterRoute)
  routes.forEach(element => {
    if (element.children) {
      element.children = filterFunc(element.children)
    }
  })
  return routes
}

export async function addAsyncRoutes(router) {
  const useUser = useUserStore()
  let filteredRoutes = <RouteRecordRaw[]>[]
  // 前端动态路由模式
  filteredRoutes = filterFunc(asyncRoutes)
  useUser.setAsyncRoutes(filteredRoutes)
  filteredRoutes.forEach(val => router.addRoute(val))
}
