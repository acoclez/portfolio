<!-- src/views/ContactView.vue (Refactored) -->
<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- Hero Section -->
    <section class="py-16 px-4 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Me Contacter</h1>
      <p class="text-xl text-gray-300">Faisons connaissance!</p>
    </section>

    <!-- Contact Section -->
    <section class="max-w-4xl mx-auto px-4 py-12">
      <div class="flex flex-col md:flex-row gap-12">
        <!-- Contact Form -->
        <div class="w-full md:w-3/5">
          <ContactForm />
        </div>

        <!-- Social Links -->
        <div class="w-full md:w-2/5">
          <SocialLinks />
        </div>
      </div>
    </section>

    <!-- Call To Action -->
    <CallToActionSection />
  </div>
</template>

<script>
import ContactForm from '@/components/contact/ContactForm.vue';
import SocialLinks from '@/components/contact/SocialLinks.vue';
import CallToActionSection from '@/components/shared/CallToActionSection.vue';

export default {
  name: 'ContactView',
  components: {
    ContactForm,
    SocialLinks,
    CallToActionSection
  }
}
</script>