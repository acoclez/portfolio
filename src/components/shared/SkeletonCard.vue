<!-- src/components/shared/SkeletonCard.vue -->
<template>
  <div class="bg-gray-900 rounded-none overflow-hidden shadow-xl border-l-4 border-gray-700 p-6 md:p-8">
    <div class="animate-pulse">
      <!-- Image skeleton (optional) -->
      <div v-if="showImage" class="h-48 bg-gray-800 rounded mb-6"></div>
      
      <!-- Title skeleton -->
      <div :class="['h-8 bg-gray-800 rounded mb-4', titleWidth]"></div>
      
      <!-- Description skeleton -->
      <div class="space-y-3 mb-6">
        <div v-for="i in descriptionLines" :key="i" class="h-4 bg-gray-800 rounded" :class="getLineWidth(i)"></div>
      </div>
      
      <!-- Tags skeleton -->
      <div v-if="showTags" class="flex gap-2 mb-6 flex-wrap">
        <div v-for="i in tagCount" :key="i" class="h-6 bg-gray-800 rounded" :style="{ width: getTagWidth() }"></div>
      </div>
      
      <!-- Button skeleton -->
      <div v-if="showButton" class="h-10 w-32 bg-gray-800 rounded"></div>
      
      <!-- Multiple buttons -->
      <div v-if="showButtons" class="flex gap-4">
        <div v-for="i in buttonCount" :key="i" class="h-10 w-32 bg-gray-800 rounded"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkeletonCard',
  props: {
    // Show image skeleton
    showImage: {
      type: Boolean,
      default: false
    },
    // Title width class
    titleWidth: {
      type: String,
      default: 'w-3/4'
    },
    // Number of description lines
    descriptionLines: {
      type: Number,
      default: 3
    },
    // Show tags skeleton
    showTags: {
      type: Boolean,
      default: true
    },
    // Number of tags
    tagCount: {
      type: Number,
      default: 3
    },
    // Show single button
    showButton: {
      type: Boolean,
      default: false
    },
    // Show multiple buttons
    showButtons: {
      type: Boolean,
      default: true
    },
    // Number of buttons when showButtons is true
    buttonCount: {
      type: Number,
      default: 2
    }
  },
  methods: {
    getLineWidth(lineIndex) {
      // Vary the width of description lines for more realistic look
      const widths = ['w-full', 'w-5/6', 'w-4/6'];
      return widths[lineIndex - 1] || 'w-full';
    },
    getTagWidth() {
      // Random tag widths for more realistic look
      const widths = ['60px', '80px', '70px', '90px'];
      return widths[Math.floor(Math.random() * widths.length)];
    }
  }
}
</script>

<style scoped>
/* Pulse animation */
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