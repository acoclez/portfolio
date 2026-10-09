<!-- src/views/HomeView.vue -->
<template>
  <div class="bg-black text-white">
    <!-- Background Grid - fixed position to cover entire page -->
    <div class="fixed inset-0 z-0 dot-grid opacity-20 pointer-events-none"></div>

    <!-- Component Sections -->
    <HeroSection />
    <TechnologiesSection />
    <ProjectsPreviewSection />
    <VeillePreviewSection />
    <CallToActionSection />
  </div>
</template>

<script>
// Import components
import HeroSection from '@/components/home/HeroSection.vue';
import TechnologiesSection from '@/components/home/TechnologiesSection.vue';
import ProjectsPreviewSection from '@/components/home/ProjectsPreviewSection.vue';
import VeillePreviewSection from '@/components/home/VeillePreviewSection.vue';
import CallToActionSection from '@/components/home/CallToActionSection.vue';

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    TechnologiesSection,
    ProjectsPreviewSection,
    VeillePreviewSection,
    CallToActionSection
  }
}
</script>
