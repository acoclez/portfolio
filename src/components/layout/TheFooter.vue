<template>
    <footer class="bg-background-light py-12 mt-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Description -->
          <div class="md:col-span-1">
            <p class="text-text-secondary leading-relaxed">
              Bonjour, je suis Antoine Coclez, jeune développeur informatique 
              de 20 ans basé à Bordeaux. Avec deux ans d'expérience en tant
              que développeur logiciel, je suis motivé à travailler sur
              des solutions logicielles dynamiques et innovantes.
              Explorez mon portfolio pour mieux me connaître et n'hésitez
              pas à me contacter afin de discuter ensemble d'éventuelles collaborations.
            </p>
          </div>
          
          <!-- Navigation links -->
          <div class="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <ul class="space-y-2">
                <li><router-link class="text-text-secondary hover:text-primary transition-standard" to="/">Accueil</router-link></li>
                <li><router-link class="text-text-secondary hover:text-primary transition-standard" to="/about">Compétences</router-link></li>
                <li><router-link class="text-text-secondary hover:text-primary transition-standard" to="/projects">Projets</router-link></li>
              </ul>
            </div>
            <div>
              <ul class="space-y-2">
                <li><router-link class="text-text-secondary hover:text-primary transition-standard" to="/veille">Veille</router-link></li>
                <li><router-link class="text-text-secondary hover:text-primary transition-standard" to="/about">A propos</router-link></li>
                <li><router-link class="text-text-secondary hover:text-primary transition-standard" to="/contact">Contact</router-link></li>
              </ul>
            </div>
            <div>
              <ul class="space-y-2">
                <li><a class="text-text-secondary hover:text-primary transition-standard" href="/assets/cv.pdf" target="_blank">CV</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Copyright -->
        <div class="mt-12 pt-4 border-t border-gray-800 text-center text-text-secondary text-sm">
          <p>© {{ new Date().getFullYear() }} Antoine Coclez. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'TheFooter'
  }
  </script>