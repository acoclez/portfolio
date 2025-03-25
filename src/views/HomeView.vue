<!-- src/views/HomeView.vue -->
<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- Hero Section -->
    <section class="relative py-24 px-4 overflow-hidden">
      <div class="max-w-6xl mx-auto flex flex-col items-center">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 text-center">Antoine Coclez</h1>
        <p class="text-2xl md:text-3xl text-gray-300 mb-10 text-center">Développeur Informatique</p>
        
        <!-- Social Links -->
        <div class="flex justify-center space-x-6 mb-12">
          <a href="https://github.com/" target="_blank" class="transform transition hover:scale-110">
            <img
              src="/assets/img/socials/github.svg"
              alt="GitHub"
              class="w-10 h-10"
            />
          </a>
          <a href="https://gitlab.com/" target="_blank" class="transform transition hover:scale-110">
            <img
              src="/assets/img/socials/gitlab.svg"
              alt="GitLab"
              class="w-10 h-10"
            />
          </a>
          <a href="https://twitter.com/" target="_blank" class="transform transition hover:scale-110">
            <img
              src="/assets/img/socials/twitter.svg"
              alt="Twitter"
              class="w-10 h-10"
            />
          </a>
        </div>
        
        <!-- CTA Buttons -->
        <div class="flex flex-wrap justify-center gap-4">
          <router-link to="/projects" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition">
            Voir mes projets
          </router-link>
          <router-link to="/contact" class="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-full transition">
            Me contacter
          </router-link>
        </div>
        
        <!-- Background Effect (optional) -->
        <div class="absolute top-0 left-0 w-full h-full -z-10 opacity-10">
          <div class="absolute right-0 top-0 w-1/2 h-1/2 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div class="absolute left-0 bottom-0 w-1/2 h-1/2 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section class="py-16 px-4 bg-gray-800">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-6">Compétences</h2>
        <p class="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Les compétences que je possède et utilise régulièrement
        </p>
        
        <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <li v-for="tech in technologies" :key="tech.name" class="bg-gray-700 bg-opacity-40 rounded-lg p-6 flex flex-col items-center transform transition hover:scale-105 hover:bg-opacity-60">
            <img :src="tech.icon" :alt="tech.name" class="w-16 h-16 mb-4">
            <span class="font-medium">{{ tech.name }}</span>
          </li>
        </ul>
        
        <div class="text-center mt-12">
          <h3 class="text-xl font-medium mb-6">Tableau de synthèse de mes compétences</h3>
          <router-link to="/about" class="inline-flex items-center px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 text-white font-medium transition">
            <img
              class="w-5 h-5 mr-2"
              src="/assets/img/icons/circle.svg"
              alt="See More Icon"
            />
            Voir le tableau
          </router-link>
        </div>
      </div>
    </section>

    <!-- Projects Preview Section -->
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-6">Projets</h2>
        <p class="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Projets sur lesquels j'ai pu collaborer
        </p>
        
        <div class="grid grid-cols-1 gap-10">
          <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-102 hover:shadow-xl">
            <div class="flex flex-col md:flex-row">
              <div class="md:w-2/5 h-64 overflow-hidden">
                <img 
                  src="/assets/img/projects/exemple.png" 
                  alt="Project Thumbnail" 
                  class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div class="md:w-3/5 p-6 md:p-8">
                <h3 class="text-2xl font-bold mb-4">Gestionnaire de bibliothèque SIO</h3>
                <p class="text-gray-300 mb-6">Développement d'un site de gestion de bibliothèque avec Spring Boot et Angular</p>
                
                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="px-3 py-1 text-sm rounded-full bg-blue-900 text-blue-100">Spring Boot</span>
                  <span class="px-3 py-1 text-sm rounded-full bg-blue-900 text-blue-100">Angular</span>
                  <span class="px-3 py-1 text-sm rounded-full bg-blue-900 text-blue-100">MySQL</span>
                </div>
                
                <a href="#" class="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <router-link to="/projects" class="inline-flex items-center px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 text-white font-medium transition">
            <img
              class="w-5 h-5 mr-2"
              src="/assets/img/icons/circle.svg"
              alt="See More Icon"
            />
            Voir plus de projets
          </router-link>
        </div>
      </div>
    </section>

    <!-- Veille Preview Section -->
    <section class="py-16 px-4 bg-gray-800">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-6">Veille</h2>
        <p class="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Présentation de ma veille technologique sur Spring
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div class="bg-gray-700 bg-opacity-50 rounded-lg p-6">
            <h3 class="text-xl font-bold mb-4">Spring Blog</h3>
            <div class="space-y-3">
              <a href="https://spring.io/blog/2022/11/16/spring-framework-6-0-goes-ga" target="_blank" class="block p-3 bg-gray-800 bg-opacity-50 rounded hover:bg-opacity-70 transition">
                <div class="font-medium">Spring Framework 6.0 goes GA</div>
              </a>
              <a href="https://spring.io/blog/2022/11/24/spring-boot-3-0-is-now-ga" target="_blank" class="block p-3 bg-gray-800 bg-opacity-50 rounded hover:bg-opacity-70 transition">
                <div class="font-medium">Spring Boot 3.0 is now GA</div>
              </a>
            </div>
          </div>
          
          <div class="bg-gray-700 bg-opacity-50 rounded-lg p-6">
            <h3 class="text-xl font-bold mb-4">Spring Engineering</h3>
            <div class="space-y-3">
              <a href="https://spring.io/blog/2022/12/15/upgrading-to-spring-boot-3-0" target="_blank" class="block p-3 bg-gray-800 bg-opacity-50 rounded hover:bg-opacity-70 transition">
                <div class="font-medium">Upgrading to Spring Boot 3.0</div>
              </a>
              <a href="https://spring.io/blog/2023/01/10/spring-modulith-1-0-rc1-released" target="_blank" class="block p-3 bg-gray-800 bg-opacity-50 rounded hover:bg-opacity-70 transition">
                <div class="font-medium">Spring Modulith 1.0 RC1 released</div>
              </a>
            </div>
          </div>
        </div>
        
        <div class="text-center">
          <router-link to="/veille" class="inline-flex items-center px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 text-white font-medium transition">
            <img
              class="w-5 h-5 mr-2"
              src="/assets/img/icons/circle.svg"
              alt="See More Icon"
            />
            Voir toute ma veille
          </router-link>
        </div>
      </div>
    </section>

    <!-- Call To Action -->
    <section class="py-16 px-4 bg-gray-900">
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
  name: 'HomeView',
  data() {
    return {
      technologies: [
        { name: 'PHP', icon: '/assets/img/techs/php.svg' },
        { name: 'HTML', icon: '/assets/img/techs/html.svg' },
        { name: 'CSS', icon: '/assets/img/techs/css.svg' },
        { name: 'JavaScript', icon: '/assets/img/techs/javascript.svg' },
        { name: 'Java', icon: '/assets/img/techs/java.svg' },
        { name: 'Git', icon: '/assets/img/techs/git.svg' },
        { name: 'GitHub', icon: '/assets/img/techs/github.svg' },
        { name: 'MySQL', icon: '/assets/img/techs/mysql.svg' }
      ]
    }
  }
}
</script>