<!-- src/views/AboutView.vue -->
<template>
    <div class="min-h-screen bg-gray-900 text-white">
      <!-- Hero Section -->
      <section class="py-16 px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">À propos de moi</h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">
          Vous voulez en savoir plus sur moi? Vous êtes au bon endroit
        </p>
      </section>
  
      <!-- About Section -->
      <section class="max-w-4xl mx-auto px-4 py-12">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <!-- Profile Image - Uncomment when you have an image -->
          <!-- <img class="w-64 h-64 rounded-full object-cover" src="/assets/img/avatars/your-photo.jpg" alt="Antoine Coclez" /> -->
          
          <div>
            <h2 class="text-3xl font-bold mb-6">Antoine Coclez</h2>
            <div class="text-gray-300 space-y-4">
              <p>
                Bonjour, je suis Antoine Coclez, jeune développeur informatique 
                de 20 ans basé à Bordeaux. Avec deux ans d'expérience en tant
                que développeur logiciel, je suis motivé à travailler sur
                des solutions logicielles dynamiques et innovantes.
              </p>
              <p>
                Explorez mon portfolio pour mieux me connaître et n'hésitez
                pas à me contacter afin de discuter ensemble d'éventuelles collaborations.
              </p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Technologies Section -->
      <section class="py-16 px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-6">Compétences</h2>
          <p class="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Les compétences que je possède et utilise régulièrement
          </p>
          
          <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <li v-for="tech in technologies" :key="tech.name" class="bg-gray-800 rounded-lg p-6 flex flex-col items-center transform transition hover:scale-105 hover:bg-gray-700">
              <img :src="tech.icon" :alt="tech.name" class="w-16 h-16 mb-4">
              <span class="font-medium">{{ tech.name }}</span>
            </li>
          </ul>
          
          <div class="mt-16">
            <h2 class="text-3xl font-bold text-center mb-10">Tableau de synthèse de mes compétences</h2>
            <div class="w-full h-screen bg-gray-800 rounded-lg overflow-hidden">
              <object
                class="w-full h-full"
                data="/assets/synthese_competences.pdf"
                type="application/pdf">
                <p class="p-8 text-center">
                  Votre navigateur ne supporte pas l'affichage des PDF. 
                  <a href="/assets/synthese_competences.pdf" class="text-blue-400 underline" target="_blank">Cliquez ici pour télécharger</a>
                </p>
              </object>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Call To Action -->
      <section class="py-16 px-4 bg-gray-800">
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
    name: 'AboutView',
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