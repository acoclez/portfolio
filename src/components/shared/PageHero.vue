<!-- src/components/shared/PageHero.vue -->
<template>
  <section class="relative pt-12 pb-10 md:pt-16 md:pb-14 px-4 text-center">
    <!-- L decorations, anchored to the section so they never overlap the text -->
    <div class="hidden md:block absolute top-4 left-8 lg:left-16 l-decoration"></div>
    <div class="hidden md:block absolute bottom-4 right-8 lg:right-16 l-decoration-reversed"></div>

    <div class="max-w-4xl mx-auto">
      <p v-if="eyebrow" ref="eyebrow"
        class="text-sm font-semibold tracking-[0.2em] uppercase text-yellow-400 mb-4 transform translate-y-6 opacity-0">
        {{ eyebrow }}
      </p>
      <h1 ref="title" class="text-4xl md:text-5xl font-bold mb-4 transform translate-y-10 opacity-0">
        {{ title }}
      </h1>
      <p ref="description" class="text-xl text-gray-400 max-w-2xl mx-auto transform translate-y-10 opacity-0">
        {{ description }}
      </p>
    </div>
  </section>
</template>

<script>
import { useAnimations } from '@/composables/useAnimations';

export default {
  name: 'PageHero',
  props: {
    eyebrow: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    }
  },
  mounted() {
    const { animateHero } = useAnimations();

    animateHero([this.$refs.eyebrow, this.$refs.title, this.$refs.description].filter(Boolean));
  }
}
</script>
