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
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :ref="el => { if (el) projectCards[index] = el }"
          :project="project"
          class="opacity-0 transform translate-y-20"
        />
      </div>
    </section>
    <div class="h-24 bg-gradient-to-b from-black to-gray-900"></div>

    <!-- Call To Action -->
    <CallToActionSection />
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from '@/components/projects/ProjectCard.vue';
import CallToActionSection from '@/components/home/CallToActionSection.vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'ProjectsView',
  components: {
    ProjectCard,
    CallToActionSection
  },
  data() {
    return {
      projectCards: [],
      projects: [
        {
          title: 'VLIB',
          description: 'Développement pour une entreprise de VLIB d\'une application mobile pour la gestion de leur parc',
          thumbnail: '/assets/img/VLIB.png',
          technologies: ['Android Studio', 'Java', 'PHP', 'MySQL'],
          github: 'https://github.com/acoclez/VLIB'
        },
        {
          title: 'M2L',
          description: 'Développement d\'un site pour la maison des ligues de Lorraine',
          thumbnail: '/assets/img/M2L.png',
          technologies: ['PHP', 'MySQL'],
          github: 'https://github.com/acoclez/AP-2.5-M2L'
        },
        {
          title: 'Agri+',
          description: 'Outil de gestion poussé pour les agriculteurs',
          thumbnail: '/assets/img/AGRIPLUS.png',
          technologies: ['Laravel', 'Vue', 'MySQL', 'Ionic'],
        },
        {
          title: 'Portfolio',
          description: 'Portfolio pour exposer mon profil',
          thumbnail: '/assets/img/portfolio.png',
          technologies: ['Vue', 'Tailwind'],
          github:'https://github.com/acoclez/portfolio',
          demo: '/'
        },
        {
          title: 'XoDrip',
          description: 'Outil de preview de customisation de profil pour le jeu Crossout',
          thumbnail: '/assets/img/xodrip.png',
          technologies: ['Svelte', 'Tailwind'],
          github: 'https://github.com/acoclez/XoDrip',
          demo: 'https://xodrip.netlify.app'
        },
                {
          title: 'XoTranslate',
          description: 'Application pour la traduction automatique de discussion pour le jeu Crossout',
          thumbnail: '/assets/img/XoTranslate.png',
          technologies: ['Javascript', 'Electron'],
          github: 'https://github.com/acoclez/XoTranslate',
        }
      ]
    }
  },
  mounted() {
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

    this.$nextTick(() => {
      const cardElements = this.projectCards.map(card => card.$el);
      
      gsap.to(cardElements, {
        scrollTrigger: {
          trigger: this.$refs.projectsSection,
          start: "top 80%"
        },
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8
      });
    });
  }
}
</script>