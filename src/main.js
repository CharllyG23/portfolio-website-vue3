import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import './assets/css/global.scss'

import i18n from './i18n/index'

const app = createApp(App)
app.use(i18n)
app.mount('#app')