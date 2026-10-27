<!-- src/components/shared/SkillsGrid.vue -->
<template>
  <div class="space-y-10">
    <div v-for="group in skillGroups" :key="group.name">
      <h3 class="flex items-center gap-3 text-sm font-semibold tracking-[0.2em] uppercase text-yellow-400 mb-4">
        <Icon :icon="group.icon" width="18" height="18" />
        {{ group.name }}
        <span class="grow h-px bg-gray-800"></span>
      </h3>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div v-for="tech in group.items" :key="tech.name"
          class="tech-item bg-gray-800 py-2 px-3 flex items-center border-l-2 border-transparent hover:border-yellow-400 hover:shadow-lg">
          <Icon :icon="tech.icon" width="22" height="22" class="mr-3 shrink-0 text-yellow-400" />
          <span class="font-medium text-sm whitespace-nowrap">{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import { skillGroups } from '@/data/technologies';

export default {
  name: 'SkillsGrid',
  components: {
    Icon
  },
  data() {
    return {
      skillGroups
    }
  }
}
</script>

<style scoped>
.tech-item {
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  min-width: 0;
}

.tech-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px -5px rgba(247, 222, 61, 0.1);
}
</style>
