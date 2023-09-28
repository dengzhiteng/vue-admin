import request from "@/utils/axios"

// 个人信息
export function getUserInfo() {
  return request.get("/api/userInfo")
}
