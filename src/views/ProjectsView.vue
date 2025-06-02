<!-- src/views/ProjectsView.vue -->
<template>
  <div class="min-h-screen bg-black text-white relative">
    <!-- Background Grid - fixed position -->
    <div class="fixed inset-0 z-0 dot-grid opacity-20 pointer-events-none"></div>

    <!-- Hero Section -->
    <section ref="heroSection" class="py-24 px-4 text-center relative">
      <div class="max-w-4xl mx-auto">
        <!-- L top left -->
        <div class="absolute top-0 left-0 l-decoration"></div>

        <!-- L bottom right reversed -->
        <div class="absolute bottom-0 right-0 l-decoration-reversed"></div>

        <h1 ref="pageTitle" class="text-4xl md:text-5xl font-bold mb-4 transform translate-y-10 opacity-0">Projets</h1>
        <p ref="pageDesc" class="text-xl text-gray-400 max-w-2xl mx-auto transform translate-y-10 opacity-0">
          Projets sur lesquels j'ai pu collaborer
        </p>
      </div>
    </section>

    <!-- Projects Section -->
    <section ref="projectsSection" class="max-w-6xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 gap-10">
        <div v-for="(project, index) in projects" :key="index" ref="projectCards"
          class="opacity-0 transform translate-y-20 bg-gray-900 overflow-hidden shadow-2xl border-l-4 border-yellow-400 transition-all duration-300 hover:shadow-yellow-900/20 hover:shadow-2xl">
          <div class="flex flex-col md:flex-row relative">
            <!-- L bottom right reversed -->
            <div class="absolute bottom-0 right-0 l-decoration-small-reversed"></div>

            <div class="md:w-2/5 h-64 overflow-hidden">
              <img :src="project.thumbnail" :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div class="md:w-3/5 p-8">
              <h3 class="text-2xl font-bold mb-4">{{ project.title }}</h3>
              <p class="text-gray-400 mb-6">{{ project.description }}</p>

              <div class="flex flex-wrap gap-2 mb-6">
                <span v-for="tech in project.technologies" :key="tech"
                  class="px-3 py-1 text-sm bg-gray-800 text-yellow-400 border-l-2 border-yellow-400">
                  <Icon :icon="getTechIcon(tech)" class="inline-block mr-1 text-yellow-400" width="16" />
                  {{ tech }}
                </span>
              </div>

              <div class="flex gap-4">
                <!--
                  <a v-if="project.demo" :href="project.demo" target="_blank"
                    class="inline-block px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-none transition transform hover:-translate-y-1">
                    <Icon icon="mdi:web" class="inline-block mr-1" width="18" />
                    Voir le site
                  </a>
                -->
                <a v-if="project.github" :href="project.github" target="_blank"
                  class="inline-block px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-none transition border-b-2 border-yellow-400 transform hover:-translate-y-1">
                  <Icon icon="mdi:github" class="inline-block mr-1" width="18" />
                  Voir le code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call To Action -->
    <CallToActionSection />
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/vue';
import CallToActionSection from '@/components/home/CallToActionSection.vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'ProjectsView',
  components: {
    Icon,
    CallToActionSection
  },
  data() {
    return {
      projects: [
        {
          title: 'VLIB',
          description: 'Développement pour une entreprise de VLIB d\'une application mobile pour la gestion de leur parc',
          thumbnail: '/assets/img/VLIB.png',
          technologies: ['Android Studio', 'Java', 'PHP', 'MySQL'],
          demo: '/',
          github: 'https://github.com/acoclez/VLIB'
        },
        {
          title: 'M2L',
          description: 'Développement d\'un site pour la maison des ligues de Lorraine',
          thumbnail: '/assets/img/M2L.png',
          technologies: ['PHP', 'MySQL'],
          demo: '/',
          github: 'https://github.com/acoclez/AP-2.5-M2L'
        },
        {
          title: 'Agri+',
          description: 'Outil de gestion poussé pour les agriculteurs',
          thumbnail: '/assets/img/AGRIPLUS.png',
          technologies: ['Laravel' ,'Vue', 'MySQL', 'Ionic'],
          demo: '/',
        },
      ]
    }
  },
  mounted() {
    // Hero animations
    gsap.to(this.$refs.pageTitle, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.2
    });

    gsap.to(this.$refs.pageDesc, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.4
    });

    // Project cards animations
    if (this.$refs.projectCards) {
      gsap.to(this.$refs.projectCards, {
        scrollTrigger: {
          trigger: this.$refs.projectsSection,
          start: "top 80%"
        },
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8
      });
    }
  },
  methods: {
    getTechIcon(tech) {
      const icons = {
        'Vue.js': 'mdi:vuejs',
        'Tailwind CSS': 'mdi:tailwind',
        'JavaScript': 'mdi:language-javascript',
        'React': 'mdi:react',
        'Node.js': 'mdi:nodejs',
        'MongoDB': 'mdi:database',
        'WebSockets': 'mdi:websocket',
        'Spring Boot': 'mdi:leaf-circle',
        'Angular': 'mdi:angular',
        'MySQL': 'mdi:database',
        'Java': 'mdi:language-java',
        'GSAP': 'mdi:animation-play'
      };

      return icons[tech] || 'mdi:code-tags';
    }
  }
}
</script>

<style scoped>
/* Import home styles for reusing definitions */
@import '@/assets/css/home-styles.css';

/* Animation for the project cards */
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

.border-l-4.border-yellow-400 {
  animation: borderPulse 4s infinite;
}
</style>