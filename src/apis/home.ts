import axios from "@/utils/axios.ts"

// 首页轮播
export function getBannerAPI(params = {}) {
  const { distributionSite = "1" } = params
  return axios.get("/home/banner", {
    params: {
      distributionSite
    }
  })
}
// 个人信息
export function getUserInfo() {
  return axios.get("/api/userInfo")
}

// 商品列表
export function getGoodsList() {
  return axios.get("/api/goodsList")
}
