import { ref } from "vue"
import { defineStore } from "pinia"
export const useSidebarStore = defineStore(
  "sidebar",
  () => {
    const collapse = ref(false)
    return { collapse }
  },
  {
    persist: true
  }
)
