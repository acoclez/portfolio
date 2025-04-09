<!-- src/views/AboutView.vue (Refactored) -->
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
      <AboutIntro />
    </section>

    <!-- Technologies Section -->
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <TechnologiesGrid />

        <div class="mt-16">
          <SkillsSummary />
        </div>
      </div>
    </section>

    <!-- Call To Action -->
    <CallToActionSection />
  </div>
</template>

<script>
import AboutIntro from '@/components/about/AboutIntro.vue';
import TechnologiesGrid from '@/components/about/TechnologiesGrid.vue';
import SkillsSummary from '@/components/about/SkillsSummary.vue';
import CallToActionSection from '@/components/shared/CallToActionSection.vue';

export default {
  name: 'AboutView',
  components: {
    AboutIntro,
    TechnologiesGrid,
    SkillsSummary,
    CallToActionSection
  }
}
</script>