<template>
  <div class="bg-gray-900 rounded-none overflow-hidden shadow-xl border-l-4 border-gray-700 p-6 md:p-8">
    <div class="animate-pulse">
      <!-- Title skeleton -->
      <div class="h-8 bg-gray-800 rounded w-3/4 mb-4"></div>
      
      <!-- Description skeleton -->
      <div class="space-y-3 mb-6">
        <div class="h-4 bg-gray-800 rounded"></div>
        <div class="h-4 bg-gray-800 rounded w-5/6"></div>
        <div class="h-4 bg-gray-800 rounded w-4/6"></div>
      </div>
      
      <!-- Tags skeleton -->
      <div v-if="showTags" class="flex gap-2 mb-6">
        <div class="h-6 w-16 bg-gray-800 rounded"></div>
        <div class="h-6 w-20 bg-gray-800 rounded"></div>
        <div class="h-6 w-18 bg-gray-800 rounded"></div>
      </div>
      
      <!-- Button skeleton -->
      <div v-if="showButton" class="h-10 w-32 bg-gray-800 rounded"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkeletonCard',
  props: {
    showTags: {
      type: Boolean,
      default: true
    },
    showButton: {
      type: Boolean,
      default: true
    }
  }
}
</script>