<!-- src/components/shared/LoadingSpinner.vue -->
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
    // Size of spinner
    size: {
      type: String,
      default: '48px'
    },
    // Optional loading message
    message: {
      type: String,
      default: ''
    },
    // Show as fullscreen overlay
    fullscreen: {
      type: Boolean,
      default: false
    },
    // Inline mode (no padding)
    inline: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    containerClass() {
      if (this.fullscreen) {
        return 'fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50';
      }
      if (this.inline) {
        return 'flex items-center justify-center';
      }
      return 'flex flex-col items-center justify-center py-8';
    }
  }
}
</script>

<style scoped>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>