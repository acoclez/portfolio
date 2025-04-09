<template>
  <div class="min-h-screen flex flex-col bg-black">
    <TheHeader />
    <main class="flex-grow pt-24">
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
/* Remove any background color on body or html */
body,
html {
  background-color: black;
  margin: 0;
  padding: 0;
}

/* Override any background colors on the header */
header {
  background-color: transparent !important;
}
</style>