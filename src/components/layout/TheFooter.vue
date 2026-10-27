<!-- src/components/layout/TheFooter.vue -->
<template>
  <footer class="py-10 mt-16 border-t border-gray-800">
    <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
      <p class="font-semibold">
        Antoine Coclez
        <span class="text-gray-400 font-normal"> — Développeur Web</span>
      </p>

      <ul class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <li v-for="item in links" :key="item.path">
          <router-link class="text-gray-400 hover:text-yellow-400 transition-standard" :to="item.path">
            {{ item.name }}
          </router-link>
        </li>
        <li>
          <a class="text-gray-400 hover:text-yellow-400 transition-standard" href="/assets/CV_Antoine_COCLEZ.pdf" target="_blank">CV</a>
        </li>
      </ul>

      <p class="text-gray-400 flex flex-wrap justify-center gap-x-3 gap-y-1 text-center">
        <a class="hover:text-yellow-400 transition-standard" href="mailto:contact@acoclez.dev">contact@acoclez.dev</a>
        <span class="hidden md:inline">·</span>
        <span class="whitespace-nowrap">© {{ new Date().getFullYear() }} Antoine Coclez</span>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      links: [
        { name: 'Accueil', path: '/' },
        { name: 'A propos', path: '/about' },
        { name: 'Projets', path: '/projects' }
      ]
    }
  }
}
</script>
