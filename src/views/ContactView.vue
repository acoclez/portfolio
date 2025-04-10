<!-- src/views/ContactView.vue -->
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

        <h1 ref="pageTitle" class="text-4xl md:text-5xl font-bold mb-4 transform translate-y-10 opacity-0">Me Contacter
        </h1>
        <p ref="pageDesc" class="text-xl text-gray-400 max-w-2xl mx-auto transform translate-y-10 opacity-0">
          Faisons connaissance!
        </p>
        <div class="section-title-bar mx-auto"></div>
      </div>
    </section>

    <!-- Contact Section -->
    <section ref="contactSection" class="max-w-4xl mx-auto px-4 py-12">
      <div class="flex flex-col md:flex-row gap-12">
        <!-- Contact Form -->
        <div ref="formSection" class="w-full md:w-3/5 transform translate-y-20 opacity-0">
          <div class="bg-gray-900 p-8 rounded-none shadow-2xl overflow-hidden border-l-4 border-yellow-400 relative">
            <!-- L top left -->
            <div class="absolute top-0 left-0 l-decoration-small"></div>

            <!-- L bottom right reversed -->
            <div class="absolute bottom-0 right-0 l-decoration-small-reversed"></div>

            <h2 class="text-2xl font-bold mb-6">Envoyez-moi un message</h2>

            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input v-model="form.firstName" type="text" placeholder="Prénom" required
                    class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-none focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white" />
                </div>
                <div>
                  <input v-model="form.lastName" type="text" placeholder="Nom" required
                    class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-none focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white" />
                </div>
              </div>

              <div>
                <input v-model="form.email" type="email" placeholder="Email" required
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-none focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white" />
              </div>

              <div>
                <textarea v-model="form.message" placeholder="Message" required rows="6"
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-none focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white resize-y"></textarea>
              </div>

              <button type="submit" :disabled="isSubmitting"
                class="w-full py-3 px-6 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-none transition disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-1">
                <Icon icon="mdi:send" class="inline-block mr-2" width="18" />
                {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer' }}
              </button>

              <div v-if="formStatus.message" :class="[
                'p-4 rounded-none text-center',
                formStatus.type === 'success' ? 'bg-green-900 text-green-300 border-l-4 border-green-500' : 'bg-red-900 text-red-300 border-l-4 border-red-500'
              ]">
                {{ formStatus.message }}
              </div>
            </form>
          </div>
        </div>

        <!-- Social Links -->
        <div ref="socialSection" class="w-full md:w-2/5 transform translate-y-20 opacity-0">
          <div class="bg-gray-900 p-8 rounded-none shadow-2xl border-t-4 border-yellow-400 relative">
            <!-- L top right decoration -->
            <div class="absolute top-0 right-0 l-decoration-small-reversed top-right"></div>

            <h2 class="text-2xl font-bold mb-6">Retrouvez-moi aussi sur</h2>
            <div class="flex justify-center space-x-6 mb-8">
              <a v-for="(social, index) in socialLinks" :key="index" :href="social.url" target="_blank"
                class="transform transition hover:scale-110 bg-gray-800 p-4 rounded-full hover:bg-gray-700">
                <Icon :icon="social.icon" width="36" height="36" class="text-yellow-400" />
              </a>
            </div>
            <div class="mt-8">
              <p class="text-gray-300">
                N'hésitez pas à me contacter pour discuter de vos projets ou simplement pour échanger sur le développement
                web.
              </p>

              <div class="flex flex-col space-y-4 mt-8">
                <div class="flex items-center">
                  <Icon icon="mdi:email" class="text-yellow-400 mr-3" width="24" />
                  <a href="mailto:contact@antoine-coclez.fr" class="text-gray-300 hover:text-yellow-400 transition">
                    contact@antoine-coclez.fr
                  </a>
                </div>
                <div class="flex items-center">
                  <Icon icon="mdi:phone" class="text-yellow-400 mr-3" width="24" />
                  <a href="tel:+33600000000" class="text-gray-300 hover:text-yellow-400 transition">
                    +33 6 00 00 00 00
                  </a>
                </div>
                <div class="flex items-center">
                  <Icon icon="mdi:map-marker" class="text-yellow-400 mr-3" width="24" />
                  <span class="text-gray-300">Bordeaux, France</span>
                </div>
              </div>
            </div>
          </div>
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
import { Icon } from '@iconify/vue';
import CallToActionSection from '@/components/home/CallToActionSection.vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'ContactView',
  components: {
    Icon,
    CallToActionSection
  },
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      },
      isSubmitting: false,
      formStatus: {
        message: '',
        type: ''
      },
      socialLinks: [
        {
          name: 'GitHub',
          url: 'https://github.com/',
          icon: 'mdi:github'
        },
        {
          name: 'GitLab',
          url: 'https://gitlab.com/',
          icon: 'mdi:gitlab'
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/',
          icon: 'mdi:twitter'
        }
      ]
    }
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

    // Input fields animation
    gsap.from('input, textarea', {
      scrollTrigger: {
        trigger: this.$refs.formSection,
        start: "top 70%"
      },
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      delay: 0.8
    });

    // Social links staggered animation
    gsap.from('a.transform.transition', {
      scrollTrigger: {
        trigger: this.$refs.socialSection,
        start: "top 70%"
      },
      scale: 0,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      delay: 0.8,
      ease: "back.out(1.7)"
    });
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true
      this.formStatus = { message: '', type: '' }

      try {
        // Simulation d'envoi de formulaire
        // Dans un environnement réel, utiliser un service de backend ou Netlify Forms
        await new Promise(resolve => setTimeout(resolve, 1500))

        // Simuler une réponse de succès
        this.formStatus = {
          message: 'Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.',
          type: 'success'
        }

        // Animation success message
        gsap.from('.bg-green-900', {
          y: 20,
          opacity: 0,
          duration: 0.5
        });

        // Réinitialiser le formulaire
        this.form = {
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        }
      } catch (error) {
        this.formStatus = {
          message: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer ultérieurement.',
          type: 'error'
        }

        // Animation error message
        gsap.from('.bg-red-900', {
          y: 20,
          opacity: 0,
          duration: 0.5
        });
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style scoped>
/* Import home styles for reusing definitions */
@import '@/assets/css/home-styles.css';

/* Animation for the contact forms */
.border-l-4.border-yellow-400 {
  animation: borderPulse 4s infinite;
}

/* Animation for the social media section */
.border-t-4.border-yellow-400 {
  animation: borderPulse 4s infinite;
}

@keyframes borderPulse {
  0% {
    border-color: #F7DE3D;
  }

  50% {
    border-color: #FDE68A;
  }

  100% {
    border-color: #F7DE3D;
  }
}

/* L decoration for top right */
.l-decoration-small-reversed.top-right::before {
  right: 0;
  top: 0;
}

.l-decoration-small-reversed.top-right::after {
  right: 0;
  top: 0;
}

/* Form focus effects */
input:focus,
textarea:focus {
  box-shadow: 0 0 0 3px rgba(247, 222, 61, 0.3);
}
</style>