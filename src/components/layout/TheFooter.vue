<template>
  <footer class="py-12 mt-16">
    <div class="container mx-auto px-4 relative">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Description -->
        <div class="md:col-span-1">
          <p class="text-gray-300 leading-relaxed">
            Bonjour, je suis Antoine Coclez, jeune développeur informatique
            de 20 ans basé à Bordeaux. Avec deux ans d'expérience en tant
            que développeur web, je suis motivé à travailler sur
            des solutions logicielles dynamiques et innovantes.
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
              <!-- <li><router-link class="text-gray-300 hover:text-yellow-400 transition-standard" to="/contact">Contact</router-link></li> -->
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

<style scoped>
/* L decorations for the corners */
.l-decoration {
  position: absolute;
  width: 60px;
  height: 60px;
}

.l-decoration::before {
  content: '';
  position: absolute;
  width: 3px;
  height: 100%;
  background-color: #F7DE3D;
  left: 0;
  top: 0;
}

.l-decoration::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #F7DE3D;
  left: 0;
  top: 0;
}

.l-decoration-reversed {
  position: absolute;
  width: 60px;
  height: 60px;
}

.l-decoration-reversed::before {
  content: '';
  position: absolute;
  width: 3px;
  height: 100%;
  background-color: #F7DE3D;
  right: 0;
  bottom: 0;
}

.l-decoration-reversed::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #F7DE3D;
  right: 0;
  bottom: 0;
}

/* Smooth transition for hover states */
.transition-standard {
  transition: all 0.3s ease-in-out;
}
</style>