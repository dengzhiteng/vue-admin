import router from "@/router"
// 路由白名单
import whiteList from "@/router/basicRoutes"
import { useUserStore } from "@/store/user"
import { addAsyncRoutes } from "@/utils/permission"

router.beforeEach(async (to, from) => {
  const useUser = useUserStore()
  const role = useUser.role
  if (role) {
    // 前端固定路由模式，如果没有权限，进入403页面
    if (to.meta.roles && !to.meta.roles.includes(role)) {
      return "/403"
    } else {
      // 动态挂载路由
      if (!to.redirectedFrom) {
        await addAsyncRoutes(router)
        return { ...to, replace: true }
      } else return true
    }
  }
  // 白名单，直接放行 非白名单，去登录
  const index = whiteList.findIndex(item => item.path === to.path)
  console.log(index, to.path)
  return index > -1 ? true : "/login"
})
