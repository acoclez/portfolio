<!-- src/components/about/CurrentlySection.vue -->
<template>
  <div class="bg-gray-900 border-l-4 border-yellow-400 shadow-2xl p-6 md:p-8 relative">
    <!-- L top right decoration -->
    <div class="absolute top-0 right-0 l-decoration-small-reversed top-right"></div>

    <h2 class="flex items-center gap-3 text-sm font-semibold tracking-[0.2em] uppercase text-yellow-400 mb-6">
      <Icon icon="mdi:flask-outline" width="18" height="18" />
      {{ $t('about.currently.title') }}
    </h2>

    <ul class="space-y-5">
      <li v-for="(item, index) in $t('about.currently.items')" :key="index" class="flex gap-4">
        <Icon :icon="icons[index]" width="28" height="28" class="shrink-0 text-yellow-400 mt-0.5" />
        <div>
          <h3 class="text-lg font-bold mb-1">{{ item.title }}</h3>
          <p class="text-gray-400">{{ item.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  name: 'CurrentlySection',
  components: {
    Icon
  },
  data() {
    return {
      // One icon per item of about.currently.items (src/i18n), in the same order.
      // What I'm learning or experimenting with right now. Keep it short and true.
      icons: ['simple-icons:tauri', 'mdi:robot-outline']
    }
  }
}
</script>
