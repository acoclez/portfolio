<template>
  <div class="min-h-screen text-white flex items-center justify-center px-4">
    <div class="max-w-2xl text-center">
      <div class="mb-8">
        <h1 class="text-9xl font-bold text-yellow-400 mb-4">404</h1>
        <div class="text-6xl mb-8">🔍</div>
      </div>

      <h2 class="text-4xl font-bold mb-4">{{ $t('notFound.title') }}</h2>

      <p class="text-gray-400 text-xl mb-8">
        {{ $t('notFound.text') }}
      </p>

      <div class="flex gap-4 justify-center flex-wrap">
        <router-link
          :to="$lp('/')"
          class="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-none transition"
        >
          <Icon icon="mdi:home" class="inline mr-2" width="20" />
          {{ $t('notFound.home') }}
        </router-link>

        <router-link
          :to="$lp('/projects')"
          class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-none transition border-2 border-yellow-400"
        >
          <Icon icon="mdi:folder-multiple" class="inline mr-2" width="20" />
          {{ $t('notFound.projects') }}
        </router-link>
      </div>

      <!-- Suggested pages -->
      <div class="mt-12 text-left">
        <h3 class="text-xl font-bold mb-4">{{ $t('notFound.popular') }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <router-link
            v-for="page in suggestedPages"
            :key="page.key"
            :to="$lp(page.path)"
            class="bg-gray-900 p-4 rounded-none hover:bg-gray-800 transition border-l-2 border-transparent hover:border-yellow-400"
          >
            <Icon :icon="page.icon" class="text-yellow-400 mb-2" width="24" />
            <h4 class="font-bold mb-1">{{ $t(`nav.${page.key}`) }}</h4>
            <p class="text-sm text-gray-400">{{ $t(`notFound.pages.${page.key}`) }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue'

export default {
  name: 'NotFoundView',
  components: { Icon },
  data() {
    return {
      suggestedPages: [
        { key: 'home', path: '/', icon: 'mdi:home' },
        { key: 'projects', path: '/projects', icon: 'mdi:folder-multiple' },
        { key: 'about', path: '/about', icon: 'mdi:account' }
      ]
    }
  }
}
</script>
