<!-- src/components/layout/TheHeader.vue -->
<template>
  <nav ref="navIsland" class="fixed left-1/2 transform -translate-x-1/2 top-4 z-50">
    <div class="bg-black px-8 py-4 rounded-none border-l-2 border-black shadow-xl flex items-center gap-6 relative">
      <!-- L decoration top left -->
      <div class="absolute top-0 left-0 l-decoration-small"></div>

      <!-- L decoration bottom right -->
      <div class="absolute bottom-0 right-0 l-decoration-small-reversed"></div>

      <router-link v-for="item in navItems" :key="item.path" :to="item.path"
        class="text-gray-400 hover:text-yellow-400 transition-standard relative py-2 px-3 font-medium"
        :class="{ 'text-yellow-400': isActive(item.path) }">
        {{ item.name }}
        <!-- Yellow square highlight for active page -->
        <div v-if="isActive(item.path)" class="absolute inset-0 border-2 border-yellow-400 -z-10 nav-highlight"></div>
      </router-link>
    </div>
  </nav>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'TheHeader',
  data() {
    return {
      navItems: [
        { name: 'Accueil', path: '/' },
        { name: 'A propos', path: '/about' },
        { name: 'Projets', path: '/projects' },
        { name: 'Veille', path: '/veille' }
      ]
    }
  },
  methods: {
    isActive(path) {
      return this.$route.path === path
    }
  },
  mounted() {
  gsap.from(this.$refs.navIsland, {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

    gsap.fromTo('.nav-highlight',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out" }
    );
  }
}
</script>

<style scoped>
.nav-highlight {
  animation: borderPulse 4s infinite;
}
</style>