import axios from "@/utils/axios"

// 首页轮播
export function getBanner() {
  return axios.get("/home/banner")
}

// 个人信息
export function getUserInfo() {
  return axios.get("/api/userInfo")
}

// 商品列表
export function getGoodsList() {
  return axios.get("/api/goodsList")
}
