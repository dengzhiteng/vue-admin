import App from "./App.vue"
import { createApp } from "vue"
import { createPinia } from "pinia"
import { router } from "./router"
import "reset-css"
import "./assets/style/main.scss"
import "./assets/style/elment.scss"
import "./mock/index.js"

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount("#app")
