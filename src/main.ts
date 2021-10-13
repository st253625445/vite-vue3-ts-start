import { createApp } from 'vue'
import router from '@/router/index'
import { key, store } from '@/store'
import App from './App.vue'

createApp(App).use(router).use(store, key).mount('#app')
