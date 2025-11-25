<template>
  <div :class="containerClass">
    <div class="relative" :style="{ width: size, height: size }">
      <!-- Spinning border -->
      <div class="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
      <div 
        class="absolute inset-0 border-4 border-transparent border-t-yellow-400 rounded-full animate-spin"
      ></div>
      
      <!-- Center dot -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
      </div>
    </div>
    
    <p v-if="message" class="mt-4 text-gray-400 text-center">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  props: {
    size: {
      type: String,
      default: '48px'
    },
    message: {
      type: String,
      default: ''
    },
    fullscreen: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    containerClass() {
      return this.fullscreen 
        ? 'fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50'
        : 'flex flex-col items-center justify-center py-8'
    }
  }
}
</script>