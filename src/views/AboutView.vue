<!-- src/views/AboutView.vue -->
<template>
  <div class="min-h-screen text-white relative">
    <PageHero eyebrow="01 — À propos" title="À propos de moi"
      description="Vous voulez en savoir plus sur moi? Vous êtes au bon endroit" />

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

          <!-- Currently -->
          <div ref="currentlyContent" class="mt-10 transform translate-y-20 opacity-0">
            <CurrentlySection />
          </div>
        </div>

        <!-- Social Links -->
        <div ref="socialContent" class="transform translate-y-20 opacity-0">
          <SocialLinks />
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section ref="techSection" class="section-glow py-16 px-4 relative">
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

        <div ref="techGrid" class="transform translate-y-20 opacity-0 max-w-4xl mx-auto">
          <SkillsGrid />
        </div>
      </div>
    </section>

    <!-- Call To Action -->
    <CallToActionSection />
  </div>
</template>

<script>
import { useAnimations } from '@/composables/useAnimations';
import PageHero from '@/components/shared/PageHero.vue';
import SkillsGrid from '@/components/shared/SkillsGrid.vue';
import BaseCard from '@/components/shared/BaseCard.vue';
import AboutIntro from '@/components/about/AboutIntro.vue';
import CurrentlySection from '@/components/about/CurrentlySection.vue';
import SocialLinks from '@/components/contact/SocialLinks.vue';
import CallToActionSection from '@/components/home/CallToActionSection.vue';

export default {
  name: 'AboutView',
  components: {
    PageHero,
    SkillsGrid,
    BaseCard,
    AboutIntro,
    CurrentlySection,
    SocialLinks,
    CallToActionSection
  },
  mounted() {
    const { animateOnScroll, animateSection } = useAnimations();

    // About section animations
    animateOnScroll(this.$refs.aboutContent, this.$refs.aboutSection, { ease: 'power2.out' });
    animateOnScroll(this.$refs.socialContent, this.$refs.aboutSection, { ease: 'power2.out', delay: 0.2 });
    animateOnScroll(this.$refs.currentlyContent, this.$refs.currentlyContent, { ease: 'power2.out' });

    // Tech section animations
    animateSection(this.$refs.techSection, {
      title: this.$refs.techTitle,
      description: this.$refs.techDesc,
      content: this.$refs.techGrid
    });

    // Tech items staggered animation
    animateOnScroll('.tech-item', this.$refs.techGrid, { stagger: 0.05, duration: 0.5 });
  }
}
</script>
