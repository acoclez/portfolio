<!-- src/components/projects/ProjectCard.vue -->
<template>
  <article
    class="h-full flex flex-col bg-gray-900 border-l-4 border-yellow-400 shadow-2xl transition-shadow duration-300 hover:shadow-yellow-900/20 relative">
    <!-- L bottom right decoration -->
    <div class="absolute bottom-0 right-0 l-decoration-small-reversed"></div>

    <!-- Project Image: fixed ratio and dark frame so every thumbnail sits the same way -->
    <router-link :to="detailRoute" class="block aspect-video bg-black border-b border-gray-800 overflow-hidden">
      <img
        :src="project.thumbnail"
        :alt="project.title"
        loading="lazy"
        class="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
      />
    </router-link>

    <!-- Project Info -->
    <div class="p-6 flex flex-col grow">
      <h3 class="text-2xl font-bold mb-3">
        <router-link :to="detailRoute" class="hover:text-yellow-400 transition-standard">{{ project.title }}</router-link>
      </h3>
      <p class="text-gray-400 mb-5">{{ project.summary }}</p>

      <!-- Technologies -->
      <div v-if="project.technologies" class="flex flex-wrap gap-2 mb-6">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="px-3 py-1 text-sm bg-gray-800 text-yellow-400 border-l-2 border-yellow-400">
          <Icon :icon="getTechIcon(tech)" class="inline-block mr-1 text-yellow-400" width="16" />
          {{ tech }}
        </span>
      </div>

      <!-- Action Buttons, pushed to the bottom so cards in a row line up -->
      <div class="mt-auto flex flex-wrap gap-3">
        <router-link
          :to="detailRoute"
          class="inline-block px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-none transition transform hover:-translate-y-1">
          <Icon icon="mdi:arrow-right" class="inline-block mr-1" width="18" />
          Voir le projet
        </router-link>
        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          class="inline-block px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-none transition border-b-2 border-yellow-400 transform hover:-translate-y-1">
          <Icon icon="mdi:web" class="inline-block mr-1" width="18" />
          Site
        </a>
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          class="inline-block px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-none transition border-b-2 border-yellow-400 transform hover:-translate-y-1">
          <Icon icon="mdi:github" class="inline-block mr-1" width="18" />
          Code
        </a>
      </div>
    </div>
  </article>
</template>

<script>
import { Icon } from '@iconify/vue';
import { getTechIcon } from '@/data/techIcons';

export default {
  name: 'ProjectCard',
  components: {
    Icon
  },
  props: {
    project: {
      type: Object,
      required: true,
      validator: (value) => {
        return value.title && value.summary && value.slug;
      }
    }
  },
  computed: {
    detailRoute() {
      return { name: 'project', params: { slug: this.project.slug } };
    }
  },
  methods: {
    getTechIcon
  }
}
</script>
