<template>
    <header class="py-6 px-4">
      <nav class="container mx-auto flex justify-center md:justify-end">
        <div class="flex flex-col md:flex-row gap-6 items-center">
          <router-link 
            v-for="item in navItems" 
            :key="item.path" 
            :to="item.path" 
            class="text-text-secondary hover:text-primary transition-standard"
            :class="{ 'text-primary': isActive(item.path) }"
          >
            {{ item.name }}
          </router-link>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
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
    }
  }
  </script>