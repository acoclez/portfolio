import { createApp } from 'vue'
import { addCollection } from '@iconify/vue'
import './assets/css/main.css'
import App from './App.vue'
import router from './router'
import icons from './data/icons.json'

// Icons ship with the site (see scripts/build-icons.mjs) instead of being fetched from the Iconify API
for (const collection of Object.values(icons)) {
  addCollection(collection)
}

const app = createApp(App)

// Global error handler
app.config.errorHandler = (err, instance, info) => {
  console.error('Global error:', err)
  console.error('Component:', instance)
  console.error('Info:', info)
}

app.use(router)
app.mount('#app')

// Once the first page is up, fetch the other pages' code in the background so navigation is instant
router.isReady().then(() => {
  const prefetch = () => router.getRoutes()
    .filter(route => typeof route.components?.default === 'function')
    .forEach(route => route.components.default())

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(prefetch, { timeout: 3000 })
  } else {
    setTimeout(prefetch, 2000)
  }
})
