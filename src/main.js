import { createApp } from 'vue'
import './assets/css/main.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Global error handler
app.config.errorHandler = (err, instance, info) => {
  console.error('Global error:', err)
  console.error('Component:', instance)
  console.error('Info:', info)

}

app.use(router)
app.mount('#app')