<!-- src/views/AboutView.vue -->
<template>
  <div class="min-h-screen bg-black text-white relative">
    <!-- Background Grid - fixed position -->
    <div class="fixed inset-0 z-0 dot-grid opacity-20 pointer-events-none"></div>

    <!-- Hero Section -->
    <section ref="heroSection" class="py-24 px-4 text-center relative">
      <div class="max-w-4xl mx-auto">
        <!-- L top left -->
        <div class="absolute top-20 left-20 md:top-25 md:left-24 l-decoration"></div>

        <!-- L bottom right reversed -->
        <div class="absolute bottom-20 right-20 md:bottom-24 md:right-24 l-decoration-reversed"></div>

        <h1 ref="pageTitle" class="text-4xl md:text-5xl font-bold mb-4 transform translate-y-10 opacity-0">
          À propos de moi
        </h1>
        <p ref="pageDesc" class="text-xl text-gray-400 max-w-2xl mx-auto transform translate-y-10 opacity-0">
          Vous voulez en savoir plus sur moi? Vous êtes au bon endroit
        </p>
      </div>
    </section>

    <!-- About Section -->
    <section ref="aboutSection" class="max-w-4xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- About Text -->
        <div class="md:col-span-2">
          <div ref="aboutContent" class="transform translate-y-20 opacity-0 relative">
            <h2 class="text-3xl font-bold mb-6">Antoine Coclez</h2>
            <div class="text-gray-300 space-y-4">
              <p>
                Bonjour, je suis Antoine Coclez, jeune développeur informatique
                de 20 ans basé à Bordeaux. Avec deux ans d'expérience en tant
                que développeur web, je suis motivé à travailler sur
                des solutions web dynamiques et innovantes.
              </p>
              <p>
                Explorez mon portfolio pour mieux me connaître et n'hésitez
                pas à me contacter afin de discuter ensemble d'éventuelles collaborations.
              </p>
            </div>
            <!-- L bottom right -->
            <div class="absolute bottom-0 right-0 l-decoration-small-reversed"></div>
          </div>
        </div>

        <!-- Social Links -->
        <div ref="socialContent" class="transform translate-y-20 opacity-0">
          <SocialLinks />
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section ref="techSection" class="py-16 px-4 bg-gradient-to-b from-black to-gray-900 relative">
      <div class="max-w-6xl mx-auto">
        <div class="relative flex flex-col items-center mb-14">
          <h2 ref="techTitle" class="text-3xl font-bold text-center mb-6 transform translate-y-10 opacity-0">
            Compétences
          </h2>
        </div>

        <p ref="techDesc"
          class="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto transform translate-y-10 opacity-0">
          Les compétences que je possède et utilise régulièrement
        </p>

        <div ref="techGrid"
          class="grid grid-cols-2 md:grid-cols-3 gap-4 transform translate-y-20 opacity-0 max-w-3xl mx-auto">
          <div v-for="tech in technologies" :key="tech.name"
            class="tech-item bg-gray-800 py-2 px-3 flex items-center transition-all duration-300 border-l-2 border-transparent hover:border-yellow-400 transform hover:-translate-y-1 hover:shadow-lg">
            <Icon :icon="tech.icon" width="24" height="24" class="mr-3 flex-shrink-0 text-yellow-400" />
            <span class="font-medium text-sm whitespace-nowrap">{{ tech.name }}</span>
          </div>
        </div>

        <!-- Skills Summary PDF viewer -->
        <div ref="skillsSummary" class="mt-16 transform translate-y-20 opacity-0">
          <h2 class="text-3xl font-bold text-center mb-10">Tableau de synthèse de mes compétences</h2>
          <div class="w-full h-screen bg-gray-800 overflow-hidden border-l-4 border-yellow-400 shadow-2xl">
            <object class="w-full h-full" data="/assets/tableau_synthese.pdf" type="application/pdf">
              <p class="p-8 text-center">
                Votre navigateur ne supporte pas l'affichage des PDF.
                <a href="/assets/tableau_synthese.pdf" class="text-blue-400 underline" target="_blank">
                  Cliquez ici pour télécharger
                </a>
              </p>
            </object>
          </div>
        </div>
      </div>
    </section>

    <!-- Call To Action -->
    <CallToActionSection />
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/vue';
import SocialLinks from '@/components/contact/SocialLinks.vue';
import CallToActionSection from '@/components/home/CallToActionSection.vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'AboutView',
  components: {
    Icon,
    SocialLinks,
    CallToActionSection
  },
  data() {
    return {
      technologies: [
        { name: 'PHP', icon: 'mdi:language-php' },
        { name: 'HTML', icon: 'mdi:language-html5' },
        { name: 'CSS', icon: 'mdi:language-css3' },
        { name: 'JavaScript', icon: 'mdi:language-javascript' },
        { name: 'TypeScript', icon: 'mdi:language-typescript' },
        { name: 'Java', icon: 'mdi:language-java' },
        { name: 'Git', icon: 'mdi:git' },
        { name: 'GitHub', icon: 'mdi:github' },
        { name: 'MySQL', icon: 'mdi:database' },
        { name: 'REST', icon: 'mdi:api' },
        { name: 'GraphQL', icon: 'mdi:graphql' },
        { name: 'Spring', icon: 'mdi:leaf-circle' },
        { name: 'Laravel', icon: 'mdi:laravel' },
        { name: 'Vue.js', icon: 'mdi:vuejs' },
        { name: 'Nuxt.js', icon: 'mdi:nuxt' },
        { name: 'Tailwind', icon: 'mdi:tailwind' },
        { name: 'Docker', icon: 'mdi:docker' },
        { name: 'Kubernetes', icon: 'mdi:kubernetes' },
      ]
    }
  },
  mounted() {
    // Hero animations
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

    // About section animation
    gsap.to(this.$refs.aboutContent, {
      scrollTrigger: {
        trigger: this.$refs.aboutSection,
        start: "top 80%"
      },
      opacity: 1,
      y: 0,
      duration: 0.8
    });

    // Social links animation
    gsap.to(this.$refs.socialContent, {
      scrollTrigger: {
        trigger: this.$refs.aboutSection,
        start: "top 80%"
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.2
    });

    // Tech section animations
    const techTl = gsap.timeline({
      scrollTrigger: {
        trigger: this.$refs.techSection,
        start: "top 80%"
      }
    });

    techTl.to(this.$refs.techTitle, {
      opacity: 1,
      y: 0,
      duration: 0.6
    })
      .to(this.$refs.techDesc, {
        opacity: 1,
        y: 0,
        duration: 0.6
      }, "-=0.4")
      .to(this.$refs.techGrid, {
        opacity: 1,
        y: 0,
        duration: 0.8
      }, "-=0.4");

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

    // Skills summary animation
    gsap.to(this.$refs.skillsSummary, {
      scrollTrigger: {
        trigger: this.$refs.skillsSummary,
        start: "top 80%"
      },
      opacity: 1,
      y: 0,
      duration: 0.8
    });
  }
}
</script>

<style scoped>
/* Import home styles for reusing definitions */
@import '@/assets/css/home-styles.css';

/* Animation for the tech items */
.tech-item {
  transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
}

/* Animation for the PDF container */
.border-l-4.border-yellow-400 {
  animation: borderPulse 4s infinite;
}

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
</style>