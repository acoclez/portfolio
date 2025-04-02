<!-- src/views/HomeView.vue -->
<template>
  <div class="bg-black text-white">
    <!-- Background Grid - maintenant en position fixed pour couvrir toute la page -->
    <div class="fixed inset-0 z-0 dot-grid opacity-20 pointer-events-none"></div>

    <!-- Hero Section -->
    <section ref="heroSection" class="relative min-h-screen flex items-center justify-center py-16 px-4 overflow-hidden">
      <div class="max-w-6xl mx-auto flex flex-col items-center z-10 relative">
        <!-- L top left -->
        <div class="absolute top-20 left-20 md:top-24 md:left-24 l-decoration"></div>
        
        <!-- L bottom right reversed -->
        <div class="absolute bottom-20 right-20 md:bottom-24 md:right-24 l-decoration-reversed"></div>

        <h1 ref="heroTitle" class="text-5xl md:text-7xl font-bold mb-6 text-center opacity-0">Antoine Coclez</h1>
        <p ref="heroSubtitle" class="text-2xl md:text-3xl text-gray-400 mb-10 text-center opacity-0">Développeur
          Informatique</p>

        <!-- Social Links -->
        <div ref="socialLinks" class="flex justify-center space-x-6 mb-12 opacity-0">
          <a href="https://github.com/" target="_blank" class="transform transition hover:scale-110 text-yellow-400">
            <Icon icon="mdi:github" width="40" height="40" />
          </a>
          <a href="https://gitlab.com/" target="_blank" class="transform transition hover:scale-110 text-yellow-400">
            <Icon icon="mdi:gitlab" width="40" height="40" />
          </a>
          <a href="https://twitter.com/" target="_blank" class="transform transition hover:scale-110 text-yellow-400">
            <Icon icon="mdi:twitter" width="40" height="40" />
          </a>
        </div>

        <!-- CTA Buttons -->
        <div ref="ctaButtons" class="flex flex-wrap justify-center gap-4 opacity-0">
          <router-link to="/projects"
            class="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-none transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Voir mes projets
          </router-link>
          <router-link to="/contact"
            class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-none border-2 border-yellow-400 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Me contacter
          </router-link>
        </div>
      </div>

      <!-- Geometric Background Elements -->
      <div ref="bgElements" class="absolute top-0 left-0 w-full h-full -z-5">
        <div class="absolute top-0 right-0 w-40 h-40 md:w-80 md:h-80 border-8 border-yellow-400 opacity-20"></div>
        <div class="absolute bottom-0 left-0 w-60 h-60 md:w-96 md:h-96 border-8 border-yellow-400 opacity-10"></div>
        <div class="absolute top-1/4 left-1/4 w-20 h-20 bg-yellow-400 opacity-5"></div>
        <div class="absolute bottom-1/3 right-1/3 w-32 h-32 bg-yellow-400 opacity-5"></div>
        <!-- Gradient circles -->
        <div class="absolute left-1/3 top-1/2 w-96 h-96 bg-yellow-400 opacity-5 rounded-full filter blur-3xl"></div>
        <div class="absolute right-1/4 bottom-1/4 w-96 h-96 bg-gray-700 opacity-10 rounded-full filter blur-3xl"></div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section ref="techSection" class="py-24 px-4 bg-gradient-to-b from-gray-900 to-black relative">
      <!-- Decorative element -->
      <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>
      <div class="max-w-6xl mx-auto">
        <div class="relative flex flex-col items-center mb-14">
          <h2 ref="techTitle" class="text-3xl font-bold text-center mb-6 transform translate-y-10 opacity-0">Compétences
          </h2>
          <!-- Section Title Decoration -->
          <div class="section-title-bar"></div>
        </div>
        <p ref="techDesc"
          class="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto transform translate-y-10 opacity-0">
          Les compétences que je possède et utilise régulièrement
        </p>

        <!-- Compétences grille optimisée -->
        <div ref="techGrid" 
          class="grid grid-cols-2 md:grid-cols-3 gap-4 transform translate-y-20 opacity-0 max-w-3xl mx-auto">
          <div v-for="tech in technologies" :key="tech.name"
            class="tech-item bg-gray-800 py-2 px-3 flex items-center transition-all duration-300 border-l-2 border-transparent hover:border-yellow-400 transform hover:-translate-y-1 hover:shadow-lg">
            <Icon :icon="tech.icon" width="24" height="24" class="mr-3 flex-shrink-0 text-yellow-400" />
            <span class="font-medium text-sm whitespace-nowrap">{{ tech.name }}</span>
          </div>
        </div>

        <div ref="techCta" class="text-center mt-16 transform translate-y-10 opacity-0">
          <router-link to="/about"
            class="inline-flex items-center px-6 py-3 rounded-none bg-gray-800 hover:bg-gray-700 text-white font-bold transition border-b-2 border-yellow-400 relative">
            <Icon icon="mdi:circle-outline" class="w-5 h-5 mr-2 text-yellow-400" />
            Voir le tableau
          </router-link>
        </div>
      </div>
    </section>

    <!-- Projects Preview Section -->
    <section ref="projectsSection" class="py-24 px-4 bg-black relative">
      <div class="max-w-6xl mx-auto">
        <div class="relative flex flex-col items-center mb-14">
          <h2 ref="projectsTitle" class="text-3xl font-bold text-center mb-6 transform translate-y-10 opacity-0">Projets</h2>
          <div class="section-title-bar"></div>
        </div>
        
        <p ref="projectsDesc"
          class="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto transform translate-y-10 opacity-0">
          Projets sur lesquels j'ai pu collaborer
        </p>

        <div ref="projectCard" class="grid grid-cols-1 gap-10 transform translate-y-20 opacity-0">
          <div class="bg-gray-900 overflow-hidden shadow-2xl border-l-4 border-yellow-400 transition-all duration-300 hover:shadow-yellow-900/20 hover:shadow-2xl">
            <div class="flex flex-col md:flex-row relative">
              <!-- L top left -->
              <div class="absolute top-0 left-0 l-decoration-small"></div>
              
              <!-- L bottom right reversed -->
              <div class="absolute bottom-0 right-0 l-decoration-small-reversed"></div>
              
              <div class="md:w-2/5 h-64 overflow-hidden">
                <img src="/assets/img/projects/exemple.png" alt="Project Thumbnail"
                  class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div class="md:w-3/5 p-8">
                <h3 class="text-2xl font-bold mb-4">Gestionnaire de bibliothèque SIO</h3>
                <p class="text-gray-400 mb-6">Développement d'un site de gestion de bibliothèque avec Spring Boot et
                  Angular</p>

                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="px-3 py-1 text-sm bg-gray-800 text-yellow-400 border-l-2 border-yellow-400">
                    <Icon icon="mdi:language-java" class="inline-block mr-1 text-yellow-400" width="16" />
                    Spring Boot
                  </span>
                  <span class="px-3 py-1 text-sm bg-gray-800 text-yellow-400 border-l-2 border-yellow-400">
                    <Icon icon="mdi:angular" class="inline-block mr-1 text-yellow-400" width="16" />
                    Angular
                  </span>
                  <span class="px-3 py-1 text-sm bg-gray-800 text-yellow-400 border-l-2 border-yellow-400">
                    <Icon icon="mdi:database" class="inline-block mr-1 text-yellow-400" width="16" />
                    MySQL
                  </span>
                </div>

                <a href="#"
                  class="inline-block px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-none transition transform hover:-translate-y-1">
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        </div>

        <div ref="projectsCta" class="text-center mt-16 transform translate-y-10 opacity-0">
          <router-link to="/projects"
            class="inline-flex items-center px-6 py-3 rounded-none bg-gray-800 hover:bg-gray-700 text-white font-bold transition border-b-2 border-yellow-400">
            <Icon icon="mdi:circle-outline" class="w-5 h-5 mr-2 text-yellow-400" />
            Voir plus de projets
          </router-link>
        </div>
      </div>
    </section>

    <!-- Veille Preview Section -->
    <section ref="veilleSection" class="py-24 px-4 bg-gradient-to-b from-black to-gray-900 relative">
      <div class="max-w-6xl mx-auto">
        <div class="relative flex flex-col items-center mb-14">
          <h2 ref="veilleTitle" class="text-3xl font-bold text-center mb-6 transform translate-y-10 opacity-0">Veille</h2>
          <div class="section-title-bar"></div>
        </div>
        
        <p ref="veilleDesc"
          class="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto transform translate-y-10 opacity-0">
          Présentation de ma veille technologique sur Spring
        </p>

        <div ref="veilleGrid" class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 transform translate-y-20 opacity-0">
          <div class="bg-gray-800 rounded-none p-6 border-t-4 border-yellow-400 transition-all duration-300 hover:shadow-yellow-900/20 hover:shadow-xl relative">
            <h3 class="text-xl font-bold mb-4 flex items-center">
              <Icon icon="mdi:leaf" class="mr-2 text-yellow-400" width="24" />
              Spring Blog
            </h3>
            <div class="space-y-3">
              <a href="https://spring.io/blog/2022/11/16/spring-framework-6-0-goes-ga" target="_blank"
                class="block p-3 bg-gray-900 hover:bg-gray-700 transition border-l-2 border-transparent hover:border-yellow-400">
                <div class="font-medium">Spring Framework 6.0 goes GA</div>
              </a>
              <a href="https://spring.io/blog/2022/11/24/spring-boot-3-0-is-now-ga" target="_blank"
                class="block p-3 bg-gray-900 hover:bg-gray-700 transition border-l-2 border-transparent hover:border-yellow-400">
                <div class="font-medium">Spring Boot 3.0 is now GA</div>
              </a>
            </div>
            <!-- L top right reversed -->
            <div class="absolute top-0 right-0 l-decoration-small-reversed top-right"></div>
          </div>

          <div class="bg-gray-800 rounded-none p-6 border-t-4 border-yellow-400 transition-all duration-300 hover:shadow-yellow-900/20 hover:shadow-xl relative">
            <h3 class="text-xl font-bold mb-4 flex items-center">
              <Icon icon="mdi:code-braces" class="mr-2 text-yellow-400" width="24" />
              Spring Engineering
            </h3>
            <div class="space-y-3">
              <a href="https://spring.io/blog/2022/12/15/upgrading-to-spring-boot-3-0" target="_blank"
                class="block p-3 bg-gray-900 hover:bg-gray-700 transition border-l-2 border-transparent hover:border-yellow-400">
                <div class="font-medium">Upgrading to Spring Boot 3.0</div>
              </a>
              <a href="https://spring.io/blog/2023/01/10/spring-modulith-1-0-rc1-released" target="_blank"
                class="block p-3 bg-gray-900 hover:bg-gray-700 transition border-l-2 border-transparent hover:border-yellow-400">
                <div class="font-medium">Spring Modulith 1.0 RC1 released</div>
              </a>
            </div>
            <!-- L top right reversed -->
            <div class="absolute top-0 right-0 l-decoration-small-reversed top-right"></div>
          </div>
        </div>

        <div ref="veilleCta" class="text-center transform translate-y-10 opacity-0">
          <router-link to="/veille"
            class="inline-flex items-center px-6 py-3 rounded-none bg-gray-800 hover:bg-gray-700 text-white font-bold transition border-b-2 border-yellow-400">
            <Icon icon="mdi:circle-outline" class="w-5 h-5 mr-2 text-yellow-400" />
            Voir toute ma veille
          </router-link>
        </div>
      </div>
    </section>

    <!-- Call To Action -->
    <section ref="ctaSection" class="py-24 px-4 bg-gradient-to-b from-gray-900 to-black relative">
      <div class="max-w-4xl mx-auto text-center transform translate-y-10 opacity-0 relative">
        <!-- L top left -->
        <div class="absolute top-0 left-0 l-decoration"></div>
        
        <!-- L bottom right reversed -->
        <div class="absolute bottom-0 right-0 l-decoration-reversed"></div>
        
        <h2 class="text-3xl font-bold mb-4">Prêt à me faire confiance pour votre projet ?</h2>
        <p class="text-xl text-gray-400 mb-8">
          Contactez moi dès maintenant pour discuter de vos objectifs.
        </p>
        <div class="w-24 h-1 mx-auto mb-8 bg-yellow-400"></div>
        <router-link to="/contact"
          class="inline-flex items-center px-8 py-4 rounded-none bg-yellow-400 hover:bg-yellow-300 text-black font-bold transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
          <Icon icon="mdi:hand-wave" class="w-5 h-5 mr-2" />
          Me Contacter
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'HomeView',
  components: {
    Icon
  },
  data() {
    return {
      technologies: [
        { name: 'PHP', icon: 'mdi:language-php' },
        { name: 'HTML', icon: 'mdi:language-html5' },
        { name: 'CSS', icon: 'mdi:language-css3' },
        { name: 'JavaScript', icon: 'mdi:language-javascript' },
        { name: 'Java', icon: 'mdi:language-java' },
        { name: 'Git', icon: 'mdi:git' },
        { name: 'GitHub', icon: 'mdi:github' },
        { name: 'MySQL', icon: 'mdi:database' },
        { name: 'Vue.js', icon: 'mdi:vuejs' },
        { name: 'React', icon: 'mdi:react' },
        { name: 'Node.js', icon: 'mdi:nodejs' },
        { name: 'Docker', icon: 'mdi:docker' }
      ]
    }
  },
  mounted() {
    // Hero section animations
    gsap.to(this.$refs.heroTitle, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.2
    });

    gsap.to(this.$refs.heroSubtitle, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.4
    });

    gsap.to(this.$refs.socialLinks, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.6
    });

    gsap.to(this.$refs.ctaButtons, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.8
    });

    // Background geometric elements animation
    gsap.from(this.$refs.bgElements.children, {
      x: 'random(-100, 100)',
      y: 'random(-100, 100)',
      rotation: 'random(-45, 45)',
      opacity: 0,
      duration: 1.5,
      delay: 0.2,
      stagger: 0.2
    });

    // Tech section animations
    this.createSectionAnimation(this.$refs.techTitle, this.$refs.techDesc, this.$refs.techGrid, this.$refs.techCta);

    // Projects section animations
    this.createSectionAnimation(this.$refs.projectsTitle, this.$refs.projectsDesc, this.$refs.projectCard, this.$refs.projectsCta);

    // Veille section animations
    this.createSectionAnimation(this.$refs.veilleTitle, this.$refs.veilleDesc, this.$refs.veilleGrid, this.$refs.veilleCta);

    // CTA section animation
    gsap.from(this.$refs.ctaSection, {
      scrollTrigger: {
        trigger: this.$refs.ctaSection,
        start: 'top 80%'
      },
      y: 50,
      opacity: 0,
      duration: 1
    });

    // Tech items staggered animation
    gsap.to('.tech-item', {
      scrollTrigger: {
        trigger: this.$refs.techGrid,
        start: 'top 70%'
      },
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: 'power1.out'
    });
  },
  methods: {
    createSectionAnimation(title, desc, content, cta) {
      // Create a timeline for the section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: title,
          start: 'top 80%'
        }
      });

      tl.to(title, {
        opacity: 1,
        y: 0,
        duration: 0.6
      })
        .to(desc, {
          opacity: 1,
          y: 0,
          duration: 0.6
        }, '-=0.4')
        .to(content, {
          opacity: 1,
          y: 0,
          duration: 0.8
        }, '-=0.4')
        .to(cta, {
          opacity: 1,
          y: 0,
          duration: 0.6
        }, '-=0.4');
    }
  }
}
</script>

<style>
/* Header et footer avec couleur plus claire */
header, footer {
  background-color: #1a1a1a !important; /* Gris légèrement plus clair */
  z-index: 10;
  position: relative;
  color: #ffffff !important; /* Texte en blanc */
}

/* Garantir que les liens dans le header sont visibles */
header a, footer a {
  color: #ffffff !important;
  transition: color 0.3s ease;
}

header a:hover, footer a:hover,
header a.router-link-active, footer a.router-link-active {
  color: #F7DE3D !important;
}
</style>

<style scoped>
/* Grille de points */
.dot-grid {
  background-image: radial-gradient(circle, #333 1px, transparent 1px);
  background-size: 30px 30px;
}

/* L décoration pour les coins - Nouvelle approche plus simple et plus visible */
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

/* Versions plus petites */
.l-decoration-small {
  position: absolute;
  width: 30px;
  height: 30px;
}

.l-decoration-small::before {
  content: '';
  position: absolute;
  width: 2px;
  height: 100%;
  background-color: #F7DE3D;
  left: 0;
  top: 0;
}

.l-decoration-small::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #F7DE3D;
  left: 0;
  top: 0;
}

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

.l-decoration-small-reversed.top-right::before {
  right: 0;
  top: 0;
}

.l-decoration-small-reversed.top-right::after {
  right: 0;
  top: 0;
}

/* Barre de titre de section avec effet */
.section-title-bar {
  width: 80px;
  height: 3px;
  background-color: #F7DE3D;
  position: relative;
  margin-top: 10px;
}

.section-title-bar::before {
  content: '';
  position: absolute;
  left: -10px;
  top: -10px;
  width: 20px;
  height: 20px;
  border-left: 3px solid #F7DE3D;
  border-top: 3px solid #F7DE3D;
}

.section-title-bar::after {
  content: '';
  position: absolute;
  right: -10px;
  top: -10px;
  width: 20px;
  height: 20px;
  border-right: 3px solid #F7DE3D;
  border-top: 3px solid #F7DE3D;
}

/* Pour garantir que les arrière-plans noirs s'étendent correctement */
.bg-black {
  background-color: #000;
}

.bg-gray-900 {
  background-color: #111;
}

.bg-gray-800 {
  background-color: #222;
}

.text-yellow-400 {
  color: #F7DE3D; /* Jaune plus clair */
}

.bg-yellow-400 {
  background-color: #F7DE3D; /* Jaune plus clair */
}

.bg-yellow-300 {
  background-color: #FDE68A; /* Jaune encore plus clair pour hover */
}

.border-yellow-400 {
  border-color: #F7DE3D; /* Jaune plus clair */
}

/* Style pour les éléments techniques - encore plus compacts horizontalement */
.tech-item {
  transition: transform 0.3s ease, border 0.3s ease, box-shadow 0.3s ease;
  min-width: 0; /* Pour garantir que le texte peut être coupé si nécessaire */
}

.tech-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(247, 222, 61, 0.1);
}

/* Animation pour les cards de projet */
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

/* Transition entre sections */
section {
  position: relative;
  transition: background-color 0.8s ease;
}
</style>