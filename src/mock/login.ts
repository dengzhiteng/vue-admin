import Mock from "mockjs"

// 用户信息
const userInfo = Mock.mock({
  name: "@cname",
  "id|+1": 1,
  "age|0-120": 1,
  brithday: "@date",
  avatarUrl: "@image",
  address: "@county(true)"
})

// 路由
const routerList = Mock.mock({})
export default [
  {
    url: "/api/userInfo",
    response: () => {
      return {
        code: "000000",
        msg: "success",
        data: userInfo
      }
    }
  }
]
