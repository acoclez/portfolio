<template>
  <div v-if="hasError" class="min-h-screen bg-black text-white flex items-center justify-center px-4">
    <div class="max-w-2xl text-center">
      <div class="mb-8">
        <Icon icon="mdi:alert-circle" class="text-red-500 mx-auto" width="80" height="80" />
      </div>
      
      <h1 class="text-4xl font-bold mb-4">Oups! Quelque chose s'est mal passé</h1>
      
      <p class="text-gray-400 mb-8">
        Une erreur inattendue s'est produite. Ne vous inquiétez pas, vos données sont en sécurité.
      </p>
      
      <div v-if="isDev" class="bg-gray-900 p-4 rounded-lg mb-8 text-left">
        <p class="text-sm text-red-400 font-mono">{{ errorMessage }}</p>
        <pre v-if="errorStack" class="text-xs text-gray-500 mt-2 overflow-auto">{{ errorStack }}</pre>
      </div>
      
      <div class="flex gap-4 justify-center">
        <button 
          @click="reload" 
          class="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-none transition"
        >
          <Icon icon="mdi:refresh" class="inline mr-2" width="20" />
          Recharger la page
        </button>
        
        <button 
          @click="goHome" 
          class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-none transition border-2 border-yellow-400"
        >
          <Icon icon="mdi:home" class="inline mr-2" width="20" />
          Retour à l'accueil
        </button>
      </div>
    </div>
  </div>
  
  <slot v-else />
</template>

<script>
import { Icon } from '@iconify/vue'

export default {
  name: 'ErrorBoundary',
  components: { Icon },
  data() {
    return {
      hasError: false,
      errorMessage: '',
      errorStack: '',
      isDev: process.env.NODE_ENV === 'development'
    }
  },
  errorCaptured(err, instance, info) {
    this.hasError = true
    this.errorMessage = err.message
    this.errorStack = err.stack
    
    // Log to console in development
    if (this.isDev) {
      console.error('Error captured:', err)
      console.error('Component:', instance)
      console.error('Info:', info)
    }
    
    // TODO: Send to error tracking service (Sentry, etc.)
    // this.sendToErrorTracking(err, instance, info)
    
    return false
  },
  methods: {
    reload() {
      window.location.reload()
    },
    goHome() {
      this.hasError = false
      this.$router.push('/')
    }
  }
}
</script>