import { createApp } from 'vue'
import App from './components/Example4-9'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
