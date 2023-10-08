import { defineStore } from "pinia"
import { IuserInfo } from "@/type"
import { useRouter } from "vue-router"

export const useUserStore = defineStore(
  "userInfo",
  () => {
    const userInfo = ref<IuserInfo>({ age: 1, username: "张三", sex: "男" })
    return { userInfo }
  },
  {
    persist: true
  }
)

export const useLoginOutStore = defineStore(
  "loginOut",
  () => {
    const loginOut = () => {
      const router = useRouter()
      console.log(router)

      setTimeout(() => {
        // router.push("/login")
      }, 200)
    }
    return { loginOut }
  },
  {
    persist: true
  }
)
