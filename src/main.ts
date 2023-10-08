import App from "./App.vue"
import { createApp } from "vue"
import { createPinia } from "pinia"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
import { router } from "./router"
import "reset-css"
import "animate.css"
import "@/assets/style/tailwind.css"
import "@/assets/style/main.css"
import { useFocus, useDebounce, uesThrottle } from "./directives/index"
const app = createApp(App)
const directives: any = {
  focus: useFocus,
  debounce: useDebounce,
  throttle: uesThrottle
}
Object.keys(directives).forEach(key => {
  app.directive(key, directives[key])
})
const pinia = createPinia()
app.use(router)
app.use(pinia)
pinia.use(piniaPluginPersistedstate)
app.mount("#app")
