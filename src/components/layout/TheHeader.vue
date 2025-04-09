<template>
  <!-- Remove the header element entirely and just use a nav -->
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
        { name: 'Veille', path: '/veille' },
        { name: 'Contact', path: '/contact' }
      ]
    }
  },
  methods: {
    isActive(path) {
      return this.$route.path === path
    }
  },
  mounted() {
    // Entrance animation for the island
    gsap.from(this.$refs.navIsland, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Animate the highlight square when it appears
    gsap.fromTo('.nav-highlight',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out" }
    );
  }
}
</script>

<style scoped>
/* L decorations for the corners */
.l-decoration-small {
  position: absolute;
  width: 30px;
  height: 30px;
}

.l-decoration-small::before {
  content: '';
  position: absolute;
  width: 2px;
  height: 100%;
  background-color: #F7DE3D;
  left: 0;
  top: 0;
}

.l-decoration-small::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #F7DE3D;
  left: 0;
  top: 0;
}

.l-decoration-small-reversed {
  position: absolute;
  width: 30px;
  height: 30px;
}

.l-decoration-small-reversed::before {
  content: '';
  position: absolute;
  width: 2px;
  height: 100%;
  background-color: #F7DE3D;
  right: 0;
  bottom: 0;
}

.l-decoration-small-reversed::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #F7DE3D;
  right: 0;
  bottom: 0;
}

/* Active link styles */
.nav-highlight {
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