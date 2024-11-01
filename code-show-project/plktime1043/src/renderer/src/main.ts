import router from '@renderer/route'
import { createApp } from 'vue'
import App from './App.vue'
// import './assets/css/main.css'

createApp(App).use(router).mount('#app')
