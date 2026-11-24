<template>
  <ErrorBoundary>
    <!-- One background for the whole site: the body is black, the dot grid sits behind every page -->
    <div class="fixed inset-0 -z-10 dot-grid pointer-events-none" aria-hidden="true"></div>

    <div class="min-h-screen flex flex-col">
      <TheHeader />
      <main class="grow pt-24">
        <router-view v-slot="{ Component }">
          <Transition name="page" mode="out-in">
            <!-- Keyed without the language prefix: switching language updates the page in place -->
            <component :is="Component" :key="pageKey" />
          </Transition>
        </router-view>
      </main>
      <TheFooter />
    </div>
  </ErrorBoundary>
</template>

<script>
import ErrorBoundary from '@/components/shared/ErrorBoundary.vue'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import { stripLocale } from '@/i18n'

export default {
  name: 'App',
  components: {
    ErrorBoundary,
    TheHeader,
    TheFooter
  },
  computed: {
    pageKey() {
      return stripLocale(this.$route.path)
    }
  }
}
</script>

<style>
/* Cross-fade between pages */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
