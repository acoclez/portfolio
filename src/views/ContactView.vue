<!-- src/views/ContactView.vue - PROPERLY REFACTORED -->
<template>
  <div class="min-h-screen bg-black text-white relative">
    <!-- Background Grid - fixed position -->
    <div class="fixed inset-0 z-0 dot-grid opacity-20 pointer-events-none"></div>

    <!-- Hero Section -->
    <section ref="heroSection" class="py-24 px-4 text-center relative">
      <div class="max-w-4xl mx-auto">
        <!-- L top left -->
        <div class="absolute top-0 left-0 l-decoration"></div>

        <!-- L bottom right reversed -->
        <div class="absolute bottom-0 right-0 l-decoration-reversed"></div>

        <h1 ref="pageTitle" class="text-4xl md:text-5xl font-bold mb-4 transform translate-y-10 opacity-0">
          Me Contacter
        </h1>
        <p ref="pageDesc" class="text-xl text-gray-400 max-w-2xl mx-auto transform translate-y-10 opacity-0">
          Faisons connaissance!
        </p>
        <div class="section-title-bar mx-auto"></div>
      </div>
    </section>

    <!-- Contact Section - Using Components -->
    <section ref="contactSection" class="max-w-4xl mx-auto px-4 py-12">
      <div class="flex flex-col md:flex-row gap-12">
        <!-- Contact Form Component -->
        <div ref="formSection" class="w-full md:w-3/5 transform translate-y-20 opacity-0">
          <ContactForm />
        </div>

        <!-- Social Links Component -->
        <div ref="socialSection" class="w-full md:w-2/5 transform translate-y-20 opacity-0">
          <SocialLinks />
        </div>
      </div>
    </section>

    <!-- Call To Action -->
    <CallToActionSection />
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactForm from '@/components/contact/ContactForm.vue';
import SocialLinks from '@/components/contact/SocialLinks.vue';
import CallToActionSection from '@/components/home/CallToActionSection.vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'ContactView',
  components: {
    ContactForm,
    SocialLinks,
    CallToActionSection
  },
  mounted() {
    // Hero animations
    gsap.to(this.$refs.pageTitle, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.2
    });

    gsap.to(this.$refs.pageDesc, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.4
    });

    // Form section animation
    gsap.to(this.$refs.formSection, {
      scrollTrigger: {
        trigger: this.$refs.contactSection,
        start: "top 80%"
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.2
    });

    // Social section animation
    gsap.to(this.$refs.socialSection, {
      scrollTrigger: {
        trigger: this.$refs.contactSection,
        start: "top 80%"
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.4
    });
  }
}
</script>

<style scoped>
@import '@/assets/css/home-styles.css';

/* Section title bar */
.section-title-bar {
  width: 80px;
  height: 3px;
  background-color: #F7DE3D;
  position: relative;
  margin-top: 10px;
}

.section-title-bar::before {
  content: '';
  position: absolute;
  left: -10px;
  top: -10px;
  width: 20px;
  height: 20px;
  border-left: 3px solid #F7DE3D;
  border-top: 3px solid #F7DE3D;
}

.section-title-bar::after {
  content: '';
  position: absolute;
  right: -10px;
  top: -10px;
  width: 20px;
  height: 20px;
  border-right: 3px solid #F7DE3D;
  border-top: 3px solid #F7DE3D;
}
</style>