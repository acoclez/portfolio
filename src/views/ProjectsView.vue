<!-- src/views/ProjectsView.vue (Refactored) -->
<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- Hero Section -->
    <section class="py-16 px-4 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Projets</h1>
      <p class="text-xl text-gray-300">
        Projets sur lesquels j'ai pu collaborer
      </p>
    </section>

    <!-- Projects Section -->
    <section class="max-w-6xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 gap-10">
        <ProjectCard 
          v-for="(project, index) in projects" 
          :key="index" 
          :project="project" 
        />
      </div>
    </section>

    <!-- Call To Action -->
    <CallToActionSection />
  </div>
</template>

<script>
import ProjectCard from '@/components/projects/ProjectCard.vue';
import CallToActionSection from '@/components/shared/CallToActionSection.vue';

export default {
  name: 'ProjectsView',
  components: {
    ProjectCard,
    CallToActionSection
  },
  data() {
    return {
      projects: [
        {
          title: 'Portfolio',
          description: 'Création de mon portfolio où l\'on retrouve mes compétences, ma veille, mes projets...',
          thumbnail: '/assets/img/projects/portfo.png',
          technologies: ['Vue.js', 'Tailwind CSS', 'JavaScript'],
          demo: '/',
          github: 'https://github.com/username/portfolio'
        },
        {
          title: 'Gestionnaire de bibliothèque SIO',
          description: 'Développement d\'un site de gestion de bibliothèque avec Spring Boot et Angular',
          thumbnail: '/assets/img/projects/exemple.png',
          technologies: ['Spring Boot', 'Angular', 'MySQL', 'Java'],
          demo: 'https://example.com',
          github: 'https://github.com/username/library-manager'
        },
        // Vous pouvez ajouter d'autres projets ici
      ]
    }
  }
}
</script>