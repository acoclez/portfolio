<!-- src/components/projects/ProjectCard.vue - IMPROVED VERSION -->
<template>
  <div
    class="bg-gray-900 overflow-hidden shadow-2xl border-l-4 border-yellow-400 transition-all duration-300 hover:shadow-yellow-900/20 hover:shadow-2xl">
    <div class="flex flex-col md:flex-row relative">
      <!-- L bottom right decoration -->
      <div class="absolute bottom-0 right-0 l-decoration-small-reversed"></div>

      <!-- Project Image -->
      <div class="md:w-2/5 h-64 overflow-hidden">
        <img 
          :src="project.thumbnail" 
          :alt="project.title"
          class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
      </div>

      <!-- Project Info -->
      <div class="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
        <div>
          <h3 class="text-2xl font-bold mb-4">{{ project.title }}</h3>
          <p class="text-gray-300 mb-6">{{ project.description }}</p>

          <!-- Technologies -->
          <div v-if="project.technologies" class="flex flex-wrap gap-2 mb-4">
            <span 
              v-for="tech in project.technologies" 
              :key="tech"
              class="px-3 py-1 text-sm bg-gray-800 text-yellow-400 border-l-2 border-yellow-400">
              <Icon :icon="getTechIcon(tech)" class="inline-block mr-1 text-yellow-400" width="16" />
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="mt-4 flex gap-4">
          <a 
            v-if="project.demo" 
            :href="project.demo" 
            target="_blank"
            class="inline-block px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-none transition transform hover:-translate-y-1">
            <Icon icon="mdi:web" class="inline-block mr-1" width="18" />
            Voir le site
          </a>
          <a 
            v-if="project.github" 
            :href="project.github" 
            target="_blank"
            class="inline-block px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-none transition border-b-2 border-yellow-400 transform hover:-translate-y-1">
            <Icon icon="mdi:github" class="inline-block mr-1" width="18" />
            Voir le code
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { Icon } from '@iconify/vue';

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
        return value.title && value.description && value.thumbnail;
      }
    }
  },
  methods: {
    getTechIcon(tech) {
      // Normalize tech name for case-insensitive matching
      const techLower = tech.toLowerCase();
      
      const iconMap = {
        // Frontend Frameworks
        'vue': 'mdi:vuejs',
        'vue.js': 'mdi:vuejs',
        'react': 'mdi:react',
        'angular': 'mdi:angular',
        'nuxt': 'mdi:nuxt',
        'nuxt.js': 'mdi:nuxt',
        
        // Backend Frameworks
        'laravel': 'mdi:laravel',
        'spring': 'mdi:leaf-circle',
        'spring boot': 'mdi:leaf-circle',
        'node': 'mdi:nodejs',
        'node.js': 'mdi:nodejs',
        
        // Languages
        'javascript': 'mdi:language-javascript',
        'typescript': 'mdi:language-typescript',
        'java': 'mdi:language-java',
        'php': 'mdi:language-php',
        'python': 'mdi:language-python',
        
        // Styling
        'css': 'mdi:language-css3',
        'tailwind': 'mdi:tailwind',
        'tailwind css': 'mdi:tailwind',
        
        // Databases
        'mysql': 'mdi:database',
        'mongodb': 'mdi:database',
        'postgresql': 'mdi:database',
        'redis': 'mdi:database',
        
        // Mobile
        'android': 'mdi:android',
        'android studio': 'mdi:android-studio',
        'ionic': 'mdi:circle-slice-8',
        'react native': 'mdi:react',
        
        // Tools & Others
        'docker': 'mdi:docker',
        'kubernetes': 'mdi:kubernetes',
        'git': 'mdi:git',
        'github': 'mdi:github',
        'gitlab': 'mdi:gitlab',
        'websocket': 'mdi:websocket',
        'websockets': 'mdi:websocket',
        'gsap': 'mdi:animation-play',
        'api': 'mdi:api',
        'rest': 'mdi:api',
        'graphql': 'mdi:graphql'
      };
      
      return iconMap[techLower] || 'mdi:code-tags';
    }
  }
}
</script>

<style scoped>
/* L decoration styles */
.l-decoration-small-reversed {
  position: absolute;
  width: 30px;
  height: 30px;
}

.l-decoration-small-reversed::before {
  content: '';
  position: absolute;
  width: 2px;
  height: 100%;
  background-color: #F7DE3D;
  right: 0;
  bottom: 0;
}

.l-decoration-small-reversed::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #F7DE3D;
  right: 0;
  bottom: 0;
}

/* Animation for the border */
.border-l-4.border-yellow-400 {
  animation: borderPulse 4s infinite;
}

@keyframes borderPulse {
  0% {
    border-color: #F7DE3D;
  }
  50% {
    border-color: #FDE68A;
  }
  100% {
    border-color: #F7DE3D;
  }
}
</style>