<!-- src/views/ProjectsView.vue -->
<template>
  <div class="min-h-screen text-white relative">
    <PageHero :eyebrow="$t('projects.eyebrow')" :title="$t('projects.title')" :description="$t('projects.description')" />

    <!-- Projects Section -->
    <section ref="projectsSection" class="max-w-6xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.slug"
          :ref="el => { if (el) projectCards[index] = el }"
          :project="project"
          class="opacity-0 transform translate-y-20"
        />
      </div>
    </section>

    <!-- Call To Action -->
    <CallToActionSection />
  </div>
</template>

<script>
import { useAnimations } from '@/composables/useAnimations';
import PageHero from '@/components/shared/PageHero.vue';
import ProjectCard from '@/components/projects/ProjectCard.vue';
import CallToActionSection from '@/components/home/CallToActionSection.vue';
import { getProjects } from '@/data/projects';

export default {
  name: 'ProjectsView',
  components: {
    PageHero,
    ProjectCard,
    CallToActionSection
  },
  data() {
    return {
      projectCards: []
    }
  },
  computed: {
    projects() {
      return getProjects(this.$i18n.locale);
    }
  },
  mounted() {
    const { animateOnScroll } = useAnimations();

    this.$nextTick(() => {
      const cardElements = this.projectCards.map(card => card.$el);

      animateOnScroll(cardElements, this.$refs.projectsSection, { stagger: 0.15 });
    });
  }
}
</script>
