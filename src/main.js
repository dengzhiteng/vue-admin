import App from './App.vue'
import { createApp } from 'vue'
import { router } from './router'
import 'reset-css';
import './assets/style/main.scss'
import './assets/style/elment.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')
