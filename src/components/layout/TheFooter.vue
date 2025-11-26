<!-- src/components/layout/TheFooter.vue -->
<template>
  <footer class="py-12 mt-16">
    <div class="container mx-auto px-4 relative">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Description -->
        <div class="md:col-span-1">
          <p class="text-gray-300 leading-relaxed">
            Bonjour, je suis Antoine Coclez, jeune développeur informatique
            de 21 ans. Avec trois ans d'expérience en tant que développeur 
            web full-stack, je suis motivé à travailler sur des solutions 
            web dynamiques et innovantes.
            Explorez mon portfolio pour mieux me connaître.
          </p>
        </div>

        <!-- Navigation links -->
        <div class="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <ul class="space-y-2">
              <li><router-link class="text-gray-300 hover:text-yellow-400 transition-standard"
                  to="/">Accueil</router-link></li>
              <li><router-link class="text-gray-300 hover:text-yellow-400 transition-standard"
                  to="/about">Compétences</router-link></li>
              <li><router-link class="text-gray-300 hover:text-yellow-400 transition-standard"
                  to="/projects">Projets</router-link></li>
            </ul>
          </div>
          <div>
            <ul class="space-y-2">
              <li><router-link class="text-gray-300 hover:text-yellow-400 transition-standard"
                  to="/veille">Veille</router-link></li>
              <li><router-link class="text-gray-300 hover:text-yellow-400 transition-standard" to="/about">A
                  propos</router-link></li>
            </ul>
          </div>
          <div>
            <ul class="space-y-2">
              <li><a class="text-gray-300 hover:text-yellow-400 transition-standard" href="/assets/CV_AC.pdf"
                  target="_blank">CV</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-12 pt-4 border-t border-gray-800 text-center text-gray-400 text-sm">
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