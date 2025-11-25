<template>
  <ErrorBoundary>
    <div class="min-h-screen flex flex-col bg-black">
      <TheHeader />
      <main class="flex-grow pt-24">
        <router-view />
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