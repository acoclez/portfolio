<!-- src/components/about/CurrentlySection.vue -->
<template>
  <div class="bg-gray-900 border-l-4 border-yellow-400 shadow-2xl p-6 md:p-8 relative">
    <!-- L top right decoration -->
    <div class="absolute top-0 right-0 l-decoration-small-reversed top-right"></div>

    <h2 class="flex items-center gap-3 text-sm font-semibold tracking-[0.2em] uppercase text-yellow-400 mb-6">
      <Icon icon="mdi:flask-outline" width="18" height="18" />
      En ce moment
    </h2>

    <ul class="space-y-5">
      <li v-for="item in items" :key="item.title" class="flex gap-4">
        <Icon :icon="item.icon" width="28" height="28" class="shrink-0 text-yellow-400 mt-0.5" />
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
      // What I'm learning or experimenting with right now. Keep it short and true.
      items: [
        {
          title: 'Applications desktop avec Rust et Tauri',
          description: 'Expérimentations autour d\'applications natives légères, avec un backend Rust et une interface Svelte.',
          icon: 'simple-icons:tauri'
        },
        {
          title: 'Automatisation avec des agents IA',
          description: 'Mise en place d\'agents autonomes et de workflows automatisés avec OpenClaw et Claude Code.',
          icon: 'mdi:robot-outline'
        }
      ]
    }
  }
}
</script>
