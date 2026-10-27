<template>
  <ErrorBoundary>
    <!-- One background for the whole site: the body is black, the dot grid sits behind every page -->
    <div class="fixed inset-0 -z-10 dot-grid pointer-events-none" aria-hidden="true"></div>

    <div class="min-h-screen flex flex-col">
      <TheHeader />
      <main class="grow pt-24">
        <router-view v-slot="{ Component }">
          <Transition name="page" mode="out-in">
            <component :is="Component" :key="$route.path" />
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

export default {
  name: 'App',
  components: {
    ErrorBoundary,
    TheHeader,
    TheFooter
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
