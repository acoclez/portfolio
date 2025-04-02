<!-- src/views/HomeView.vue -->
<template>
  <div class="bg-black text-white">
    <!-- Hero Section -->
    <section ref="heroSection" class="relative min-h-screen flex items-center justify-center py-16 px-4 overflow-hidden">
      <div class="max-w-6xl mx-auto flex flex-col items-center z-10">
        <h1 ref="heroTitle" class="text-5xl md:text-7xl font-bold mb-6 text-center opacity-0">Antoine Coclez</h1>
        <p ref="heroSubtitle" class="text-2xl md:text-3xl text-gray-400 mb-10 text-center opacity-0">Développeur
          Informatique</p>

        <!-- Social Links -->
        <div ref="socialLinks" class="flex justify-center space-x-6 mb-12 opacity-0">
          <a href="https://github.com/" target="_blank" class="transform transition hover:scale-110">
            <img src="/assets/img/socials/github.svg" alt="GitHub" class="w-10 h-10 filter invert" />
          </a>
          <a href="https://gitlab.com/" target="_blank" class="transform transition hover:scale-110">
            <img src="/assets/img/socials/gitlab.svg" alt="GitLab" class="w-10 h-10 filter invert" />
          </a>
          <a href="https://twitter.com/" target="_blank" class="transform transition hover:scale-110">
            <img src="/assets/img/socials/twitter.svg" alt="Twitter" class="w-10 h-10 filter invert" />
          </a>
        </div>

        <!-- CTA Buttons -->
        <div ref="ctaButtons" class="flex flex-wrap justify-center gap-4 opacity-0">
          <router-link to="/projects"
            class="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-none transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Voir mes projets
          </router-link>
          <router-link to="/contact"
            class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-none border-2 border-yellow-500 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Me contacter
          </router-link>
        </div>
      </div>

      <!-- Geometric Background Elements -->
      <div ref="bgElements" class="absolute top-0 left-0 w-full h-full -z-10">
        <div class="absolute top-0 right-0 w-40 h-40 md:w-80 md:h-80 border-8 border-yellow-500 opacity-20"></div>
        <div class="absolute bottom-0 left-0 w-60 h-60 md:w-96 md:h-96 border-8 border-yellow-500 opacity-10"></div>
        <div class="absolute top-1/4 left-1/4 w-20 h-20 bg-yellow-500 opacity-5"></div>
        <div class="absolute bottom-1/3 right-1/3 w-32 h-32 bg-yellow-500 opacity-5"></div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section ref="techSection" class="py-24 px-4 bg-gray-900">
      <div class="max-w-6xl mx-auto">
        <h2 ref="techTitle" class="text-3xl font-bold text-center mb-6 transform translate-y-10 opacity-0">Compétences
        </h2>
        <p ref="techDesc"
          class="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto transform translate-y-10 opacity-0">
          Les compétences que je possède et utilise régulièrement
        </p>

        <ul ref="techGrid"
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 transform translate-y-20 opacity-0">
          <li v-for="(tech) in technologies" :key="tech.name"
            class="tech-item bg-gray-800 rounded-none p-6 flex flex-col items-center transition border-l-4 border-transparent hover:border-yellow-500">
            <img :src="tech.icon" :alt="tech.name" class="w-16 h-16 mb-4 filter invert">
            <span class="font-bold">{{ tech.name }}</span>
          </li>
        </ul>

        <div ref="techCta" class="text-center mt-16 transform translate-y-10 opacity-0">
          <router-link to="/about"
            class="inline-flex items-center px-6 py-3 rounded-none bg-gray-800 hover:bg-gray-700 text-white font-bold transition border-b-4 border-yellow-500">
            <img class="w-5 h-5 mr-2 filter invert" src="/assets/img/icons/circle.svg" alt="See More Icon" />
            Voir le tableau
          </router-link>
        </div>
      </div>
    </section>

    <!-- Projects Preview Section -->
    <section ref="projectsSection" class="py-24 px-4 bg-black">
      <div class="max-w-6xl mx-auto">
        <h2 ref="projectsTitle" class="text-3xl font-bold text-center mb-6 transform translate-y-10 opacity-0">Projets
        </h2>
        <p ref="projectsDesc"
          class="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto transform translate-y-10 opacity-0">
          Projets sur lesquels j'ai pu collaborer
        </p>

        <div ref="projectCard" class="grid grid-cols-1 gap-10 transform translate-y-20 opacity-0">
          <div class="bg-gray-900 overflow-hidden shadow-2xl border-l-4 border-yellow-500">
            <div class="flex flex-col md:flex-row">
              <div class="md:w-2/5 h-64 overflow-hidden">
                <img src="/assets/img/projects/exemple.png" alt="Project Thumbnail"
                  class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div class="md:w-3/5 p-8">
                <h3 class="text-2xl font-bold mb-4">Gestionnaire de bibliothèque SIO</h3>
                <p class="text-gray-400 mb-6">Développement d'un site de gestion de bibliothèque avec Spring Boot et
                  Angular</p>

                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="px-3 py-1 text-sm bg-gray-800 text-yellow-500 border-l-2 border-yellow-500">Spring
                    Boot</span>
                  <span class="px-3 py-1 text-sm bg-gray-800 text-yellow-500 border-l-2 border-yellow-500">Angular</span>
                  <span class="px-3 py-1 text-sm bg-gray-800 text-yellow-500 border-l-2 border-yellow-500">MySQL</span>
                </div>

                <a href="#"
                  class="inline-block px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-none transition transform hover:-translate-y-1">
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        </div>

        <div ref="projectsCta" class="text-center mt-16 transform translate-y-10 opacity-0">
          <router-link to="/projects"
            class="inline-flex items-center px-6 py-3 rounded-none bg-gray-800 hover:bg-gray-700 text-white font-bold transition border-b-4 border-yellow-500">
            <img class="w-5 h-5 mr-2 filter invert" src="/assets/img/icons/circle.svg" alt="See More Icon" />
            Voir plus de projets
          </router-link>
        </div>
      </div>
    </section>

    <!-- Veille Preview Section -->
    <section ref="veilleSection" class="py-24 px-4 bg-gray-900">
      <div class="max-w-6xl mx-auto">
        <h2 ref="veilleTitle" class="text-3xl font-bold text-center mb-6 transform translate-y-10 opacity-0">Veille</h2>
        <p ref="veilleDesc"
          class="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto transform translate-y-10 opacity-0">
          Présentation de ma veille technologique sur Spring
        </p>

        <div ref="veilleGrid" class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 transform translate-y-20 opacity-0">
          <div class="bg-gray-800 rounded-none p-6 border-t-4 border-yellow-500">
            <h3 class="text-xl font-bold mb-4">Spring Blog</h3>
            <div class="space-y-3">
              <a href="https://spring.io/blog/2022/11/16/spring-framework-6-0-goes-ga" target="_blank"
                class="block p-3 bg-gray-900 hover:bg-gray-700 transition border-l-2 border-transparent hover:border-yellow-500">
                <div class="font-medium">Spring Framework 6.0 goes GA</div>
              </a>
              <a href="https://spring.io/blog/2022/11/24/spring-boot-3-0-is-now-ga" target="_blank"
                class="block p-3 bg-gray-900 hover:bg-gray-700 transition border-l-2 border-transparent hover:border-yellow-500">
                <div class="font-medium">Spring Boot 3.0 is now GA</div>
              </a>
            </div>
          </div>

          <div class="bg-gray-800 rounded-none p-6 border-t-4 border-yellow-500">
            <h3 class="text-xl font-bold mb-4">Spring Engineering</h3>
            <div class="space-y-3">
              <a href="https://spring.io/blog/2022/12/15/upgrading-to-spring-boot-3-0" target="_blank"
                class="block p-3 bg-gray-900 hover:bg-gray-700 transition border-l-2 border-transparent hover:border-yellow-500">
                <div class="font-medium">Upgrading to Spring Boot 3.0</div>
              </a>
              <a href="https://spring.io/blog/2023/01/10/spring-modulith-1-0-rc1-released" target="_blank"
                class="block p-3 bg-gray-900 hover:bg-gray-700 transition border-l-2 border-transparent hover:border-yellow-500">
                <div class="font-medium">Spring Modulith 1.0 RC1 released</div>
              </a>
            </div>
          </div>
        </div>

        <div ref="veilleCta" class="text-center transform translate-y-10 opacity-0">
          <router-link to="/veille"
            class="inline-flex items-center px-6 py-3 rounded-none bg-gray-800 hover:bg-gray-700 text-white font-bold transition border-b-4 border-yellow-500">
            <img class="w-5 h-5 mr-2 filter invert" src="/assets/img/icons/circle.svg" alt="See More Icon" />
            Voir toute ma veille
          </router-link>
        </div>
      </div>
    </section>

    <!-- Call To Action -->
    <section ref="ctaSection" class="py-24 px-4 bg-black">
      <div class="max-w-4xl mx-auto text-center transform translate-y-10 opacity-0">
        <h2 class="text-3xl font-bold mb-4">Prêt à me faire confiance pour votre projet ?</h2>
        <p class="text-xl text-gray-400 mb-8">
          Contactez moi dès maintenant pour discuter de vos objectifs.
        </p>
        <div class="w-24 h-1 mx-auto mb-8 bg-yellow-500"></div>
        <router-link to="/contact"
          class="inline-flex items-center px-8 py-4 rounded-none bg-yellow-500 hover:bg-yellow-400 text-black font-bold transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
          <img class="w-5 h-5 mr-2" src="/assets/img/icons/hand.svg" alt="Contact Me Icon" />
          Me Contacter
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

<style scoped>
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

.text-yellow-500 {
  color: #EAB308;
}

.bg-yellow-500 {
  background-color: #EAB308;
}

.border-yellow-500 {
  border-color: #EAB308;
}

/* Style pour les éléments techniques */
.tech-item {
  transition: transform 0.3s ease, border 0.3s ease;
}

.tech-item:hover {
  transform: translateY(-10px);
}

/* Animation pour les cards de projet */
@keyframes borderPulse {
  0% {
    border-color: #EAB308;
  }

  50% {
    border-color: #F59E0B;
  }

  100% {
    border-color: #EAB308;
  }
}

.border-l-4.border-yellow-500 {
  animation: borderPulse 4s infinite;
}
</style>