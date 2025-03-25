<!-- src/views/ProjectsView.vue -->
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
          <div v-for="(project, index) in projects" :key="index" 
            class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-102 hover:shadow-xl">
            <div class="flex flex-col md:flex-row">
              <div class="md:w-2/5 h-64 overflow-hidden">
                <img 
                  :src="project.thumbnail" 
                  :alt="project.title" 
                  class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div class="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 class="text-2xl font-bold mb-4">{{ project.title }}</h3>
                  <p class="text-gray-300 mb-6">{{ project.description }}</p>
                  
                  <div v-if="project.technologies" class="flex flex-wrap gap-2 mb-4">
                    <span v-for="tech in project.technologies" :key="tech" 
                      class="px-3 py-1 text-sm rounded-full bg-blue-900 text-blue-100">
                      {{ tech }}
                    </span>
                  </div>
                </div>
                
                <div class="mt-4 flex gap-4">
                  <a v-if="project.demo" :href="project.demo" target="_blank" 
                    class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
                    Voir le site
                  </a>
                  <a v-if="project.github" :href="project.github" target="_blank" 
                    class="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition">
                    Voir le code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Call To Action -->
      <section class="py-16 px-4 bg-gray-800 mt-16">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4">Prêt à me faire confiance pour votre projet ?</h2>
          <p class="text-xl text-gray-300 mb-8">
            Contactez moi dès maintenant pour discuter de vos objectifs.
          </p>
          <img
            class="w-24 mx-auto mb-8"
            src="/assets/img/icons/wave.svg"
            alt="Wave Separator"
          />
          <router-link to="/contact" class="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition">
            <img
              class="w-5 h-5 mr-2"
              src="/assets/img/icons/hand.svg"
              alt="Contact Me Icon"
            />
            Me Contacter
          </router-link>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectsView',
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