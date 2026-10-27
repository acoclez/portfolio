<!-- src/views/HomeView.vue -->
<template>
  <div class="text-white">
    <!-- Component Sections -->
    <HeroSection />
    <TechnologiesSection />
    <ProjectsPreviewSection />
    <CallToActionSection />
  </div>
</template>

<script>
// Import components
import HeroSection from '@/components/home/HeroSection.vue';
import TechnologiesSection from '@/components/home/TechnologiesSection.vue';
import ProjectsPreviewSection from '@/components/home/ProjectsPreviewSection.vue';
import CallToActionSection from '@/components/home/CallToActionSection.vue';

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    TechnologiesSection,
    ProjectsPreviewSection,
    CallToActionSection
  }
}
</script>
