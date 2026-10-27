<!-- src/components/layout/TheHeader.vue -->
<template>
  <nav ref="navIsland" class="fixed left-1/2 transform -translate-x-1/2 top-4 z-50 max-w-[calc(100vw-2rem)]">
    <div
      class="bg-black/80 backdrop-blur-md px-3 py-2 md:px-8 md:py-4 rounded-none shadow-xl flex items-center gap-1 md:gap-6 relative">
      <!-- L decoration top left -->
      <div class="absolute top-0 left-0 l-decoration-small"></div>

      <!-- L decoration bottom right -->
      <div class="absolute bottom-0 right-0 l-decoration-small-reversed"></div>

      <!-- Corner marker that slides (and spins) to the active page -->
      <div ref="marker" class="nav-marker" aria-hidden="true">
        <span class="nav-marker-corner nav-marker-corner--top-left"></span>
        <span class="nav-marker-corner nav-marker-corner--bottom-right"></span>
      </div>

      <router-link v-for="item in navItems" :key="item.path" :to="item.path" :data-path="item.path"
        class="text-gray-400 hover:text-yellow-400 transition-standard relative py-2 px-2 md:px-3 text-sm md:text-base font-medium whitespace-nowrap"
        :class="{ 'text-yellow-400': isActive(item.path) }">
        {{ item.name }}
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
        { name: 'Projets', path: '/projects' }
      ]
    }
  },
  watch: {
    '$route.path'() {
      this.moveMarker(true);
    }
  },
  methods: {
    isActive(path) {
      return this.$route.path === path
    },
    activeLink() {
      return this.$el.querySelector(`a[data-path="${this.$route.path}"]`);
    },
    // Place the marker over the active link; animated when switching pages, instant otherwise
    moveMarker(animate) {
      const link = this.activeLink();
      const marker = this.$refs.marker;

      if (!link) {
        gsap.to(marker, { opacity: 0, duration: 0.2 });
        return;
      }

      const target = {
        x: link.offsetLeft,
        y: link.offsetTop,
        width: link.offsetWidth,
        height: link.offsetHeight,
        opacity: 1
      };

      if (!animate) {
        gsap.set(marker, target);
        return;
      }

      // A half turn maps the two opposite corners onto each other, so the marker lands looking the same
      gsap.to(marker, {
        ...target,
        rotation: '+=180',
        duration: 0.6,
        ease: 'power3.inOut'
      });
    }
  },
  mounted() {
    gsap.from(this.$refs.navIsland, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      clearProps: "all"
    });

    this.moveMarker(false);
    gsap.from(this.$refs.marker, { scale: 0, duration: 0.5, delay: 0.4, ease: "back.out(1.7)" });

    this.onResize = () => this.moveMarker(false);
    window.addEventListener('resize', this.onResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  }
}
</script>

<style scoped>
.nav-marker {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  opacity: 0;
  pointer-events: none;
}

.nav-marker-corner {
  position: absolute;
  width: 12px;
  height: 12px;
  border: 0 solid var(--color-accent, #F7DE3D);
}

.nav-marker-corner--top-left {
  top: 0;
  left: 0;
  border-top-width: 2px;
  border-left-width: 2px;
}

.nav-marker-corner--bottom-right {
  bottom: 0;
  right: 0;
  border-bottom-width: 2px;
  border-right-width: 2px;
}
</style>
