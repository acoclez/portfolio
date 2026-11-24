<!-- src/views/ProjectDetailView.vue -->
<template>
  <div v-if="project" class="min-h-screen text-white relative">
    <PageHero :eyebrow="$t(`projects.types.${project.type}`)" :title="project.title" :description="project.summary" />

    <div class="max-w-6xl mx-auto px-4 pb-16">
      <!-- Back link -->
      <router-link :to="$lp('/projects')"
        class="inline-flex items-center text-sm text-gray-400 hover:text-yellow-400 transition-standard mb-8">
        <Icon icon="mdi:arrow-left" class="mr-2" width="18" />
        {{ $t('projects.back') }}
      </router-link>

      <!-- Gallery -->
      <section ref="gallery" class="mb-16 transform translate-y-20 opacity-0">
        <div class="aspect-video bg-black border-l-4 border-yellow-400 shadow-2xl overflow-hidden relative">
          <div class="absolute bottom-0 right-0 l-decoration-small-reversed z-10"></div>
          <img :src="currentImage" :alt="project.title" class="w-full h-full object-contain" />
        </div>

        <!-- From md up, one row with a column per screenshot (at least 6 so a short gallery keeps small thumbnails) -->
        <div v-if="project.images.length > 1" class="thumbs grid grid-cols-4 gap-3 mt-3"
          :style="{ '--thumbs': Math.max(project.images.length, 6) }">
          <button v-for="image in project.images" :key="image" type="button" @click="currentImage = image"
            class="aspect-video bg-black overflow-hidden border-b-2 transition-standard"
            :class="image === currentImage ? 'border-yellow-400' : 'border-transparent opacity-60 hover:opacity-100'">
            <img :src="image" :alt="project.title" loading="lazy" class="w-full h-full object-cover object-top" />
          </button>
        </div>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Text sections -->
        <div ref="content" class="md:col-span-2 space-y-10 transform translate-y-20 opacity-0">
          <section v-for="section in project.sections" :key="section.title">
            <h2 class="flex items-center gap-3 text-sm font-semibold tracking-[0.2em] uppercase text-yellow-400 mb-4">
              {{ section.title }}
              <span class="grow h-px bg-gray-800"></span>
            </h2>
            <p class="text-gray-300 leading-relaxed">{{ section.body }}</p>
          </section>
        </div>

        <!-- Facts card -->
        <aside ref="facts" class="transform translate-y-20 opacity-0">
          <div class="bg-gray-900 border-t-4 border-yellow-400 shadow-2xl p-6 md:p-8 relative">
            <h2 class="text-sm font-semibold tracking-[0.2em] uppercase text-yellow-400 mb-4">{{ $t('projects.technologies') }}</h2>
            <div class="flex flex-wrap gap-2 mb-8">
              <span v-for="tech in project.technologies" :key="tech"
                class="px-3 py-1 text-sm bg-gray-800 text-yellow-400 border-l-2 border-yellow-400">
                <Icon :icon="getTechIcon(tech)" class="inline-block mr-1 text-yellow-400" width="16" />
                {{ tech }}
              </span>
            </div>

            <div v-if="project.demo || project.github" class="flex flex-col gap-3">
              <a v-if="project.demo" :href="project.demo" target="_blank"
                class="flex items-center justify-center px-4 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-none transition transform hover:-translate-y-1">
                <Icon icon="mdi:web" class="mr-2" width="18" />
                {{ $t('projects.visitSite') }}
              </a>
              <a v-if="project.github" :href="project.github" target="_blank"
                class="flex items-center justify-center px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-none border-b-2 border-yellow-400 transition transform hover:-translate-y-1">
                <Icon icon="mdi:github" class="mr-2" width="18" />
                {{ $t('projects.viewCode') }}
              </a>
            </div>
          </div>
        </aside>
      </div>

      <!-- Previous / next project -->
      <nav class="mt-16 pt-8 border-t border-gray-800 flex justify-between gap-4 text-sm">
        <router-link v-if="previous" :to="$lp(`/projects/${previous.slug}`)"
          class="inline-flex items-center text-gray-400 hover:text-yellow-400 transition-standard">
          <Icon icon="mdi:arrow-left" class="mr-2" width="18" />
          {{ previous.title }}
        </router-link>
        <span v-else></span>
        <router-link v-if="next" :to="$lp(`/projects/${next.slug}`)"
          class="inline-flex items-center text-gray-400 hover:text-yellow-400 transition-standard text-right">
          {{ next.title }}
          <Icon icon="mdi:arrow-right" class="ml-2" width="18" />
        </router-link>
      </nav>
    </div>

    <CallToActionSection />
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import { useAnimations } from '@/composables/useAnimations';
import PageHero from '@/components/shared/PageHero.vue';
import CallToActionSection from '@/components/home/CallToActionSection.vue';
import { projects, findProject } from '@/data/projects';
import { getTechIcon } from '@/data/techIcons';
import { applyPageMeta } from '@/i18n/meta';

export default {
  name: 'ProjectDetailView',
  components: {
    Icon,
    PageHero,
    CallToActionSection
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    const project = findProject(this.slug, this.$i18n.locale);

    return {
      currentImage: project ? project.images[0] : ''
    }
  },
  computed: {
    // Follows the language: the page stays in place when the visitor switches
    project() {
      return findProject(this.slug, this.$i18n.locale);
    },
    index() {
      // By slug: `project` is reactive, so a reference lookup would not match the plain data array
      return projects.findIndex(project => project.slug === this.slug);
    },
    previous() {
      return projects[this.index - 1] || null;
    },
    next() {
      return projects[this.index + 1] || null;
    }
  },
  created() {
    if (!this.project) {
      // Keep the URL, show the 404 page
      this.$router.replace({ name: 'not-found', params: { pathMatch: this.$route.path.substring(1).split('/') } });
    }
  },
  mounted() {
    if (!this.project) return;

    this.applyMeta();

    const { animateOnScroll } = useAnimations();

    animateOnScroll(this.$refs.gallery, this.$refs.gallery, { delay: 0.3 });
    animateOnScroll(this.$refs.content, this.$refs.content);
    animateOnScroll(this.$refs.facts, this.$refs.facts, { delay: 0.2 });
  },
  watch: {
    // Runs after the route has changed, so the path already carries the new language
    '$route.path': 'applyMeta'
  },
  methods: {
    getTechIcon,
    applyMeta() {
      // Also runs while this page is being left: only act when the route still shows this project
      if (!this.project || this.$route.meta.page !== 'project' || this.$route.params.slug !== this.slug) return;

      applyPageMeta(
        { title: `Antoine Coclez — ${this.project.title}`, description: this.project.summary },
        this.$route.path
      );
    }
  }
}
</script>

<style scoped>
@media (min-width: 768px) {
  .thumbs {
    grid-template-columns: repeat(var(--thumbs), minmax(0, 1fr));
  }
}
</style>
