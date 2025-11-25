<!-- src/views/AboutView.vue - PHASE 2 REFACTORED -->
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
          <div ref="aboutContent" class="transform translate-y-20 opacity-0">
            <BaseCard 
              border="none"
              :show-decoration="true"
              :decorations="['bottom-right']"
              decoration-size="small"
              variant="transparent"
              padding="p-0"
            >
              <AboutIntro />
            </BaseCard>
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
      </div>
    </section>

    <!-- Call To Action -->
    <CallToActionSection />
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import { useAnimations } from '@/composables/useAnimations';
import BaseCard from '@/components/shared/BaseCard.vue';
import AboutIntro from '@/components/about/AboutIntro.vue';
import SocialLinks from '@/components/contact/SocialLinks.vue';
import CallToActionSection from '@/components/home/CallToActionSection.vue';

export default {
  name: 'AboutView',
  components: {
    Icon,
    BaseCard,
    AboutIntro,
    SocialLinks,
    CallToActionSection
  },
  setup() {
    // Use animations composable
    const {
      animateHero,
      animateOnScroll,
      animateCards,
      createTimeline
    } = useAnimations();

    return {
      animateHero,
      animateOnScroll,
      animateCards,
      createTimeline
    };
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
    // Hero animations using composable
    this.animateHero(this.$refs.pageTitle, this.$refs.pageDesc);

    // About section animations
    this.animateOnScroll(
      this.$refs.aboutContent,
      this.$refs.aboutSection,
      { duration: 0.8 }
    );

    // Social links animation
    this.animateOnScroll(
      this.$refs.socialContent,
      this.$refs.aboutSection,
      { duration: 0.8, delay: 0.2 }
    );

    // Tech section animations using timeline
    this.createTimeline([
      {
        targets: this.$refs.techTitle,
        props: { opacity: 1, y: 0, duration: 0.6 },
        label: 'title'
      },
      {
        targets: this.$refs.techDesc,
        props: { opacity: 1, y: 0, duration: 0.6 },
        position: '-=0.4'
      },
      {
        targets: this.$refs.techGrid,
        props: { opacity: 1, y: 0, duration: 0.8 },
        position: '-=0.4'
      }
    ], {
      scrollTrigger: {
        trigger: this.$refs.techSection,
        start: 'top 80%'
      }
    });

    // Tech items staggered animation
    this.animateCards(
      '.tech-item',
      this.$refs.techGrid
    );
  }
}
</script>

<style scoped>
/* Import home styles for shared definitions */
@import '@/assets/css/home-styles.css';

/* Component-specific styles only */
.tech-item {
  transition: transform 0.3s ease, border 0.3s ease, box-shadow 0.3s ease;
}

.tech-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(247, 222, 61, 0.1);
}
</style>