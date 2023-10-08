import { defineStore } from "pinia"
import { ref } from "vue"
import { IuserInfo } from "@/type"
export const useUserInfoStore = defineStore(
  "userInfo",
  () => {
    const userInfo = ref<IuserInfo>({ age: 1, username: "张三", sex: "男" })
    return { userInfo }
  },
  {
    persist: true
  }
)
