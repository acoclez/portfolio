<!-- src/components/contact/ContactForm.vue - REFACTORED -->
<template>
    <div class="w-full">
      <div class="bg-gray-900 p-8 rounded-none shadow-2xl overflow-hidden border-l-4 border-yellow-400 relative">
        <!-- L top left -->
        <div class="absolute top-0 left-0 l-decoration-small"></div>
  
        <!-- L bottom right reversed -->
        <div class="absolute bottom-0 right-0 l-decoration-small-reversed"></div>
        
        <h2 class="text-2xl font-bold mb-6">Envoyez-moi un message</h2>
        
        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="input-group">
              <div class="relative">
                <input v-model="form.firstName" type="text" id="firstName" required
                  class="input peer" />
                <label for="firstName" 
                  class="absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-4 z-10 origin-[0] peer-focus:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Prénom
                </label>
              </div>
            </div>
            <div class="input-group">
              <div class="relative">
                <input v-model="form.lastName" type="text" id="lastName" required
                  class="input peer" />
                <label for="lastName" 
                  class="absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-4 z-10 origin-[0] peer-focus:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Nom
                </label>
              </div>
            </div>
          </div>
  
          <div class="input-group">
            <div class="relative">
              <input v-model="form.email" type="email" id="email" required
                class="input peer" />
              <label for="email" 
                class="absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-4 z-10 origin-[0] peer-focus:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email
              </label>
            </div>
          </div>
  
          <div class="input-group">
            <div class="relative">
              <textarea v-model="form.message" id="message" rows="6" required
                class="input resize-y peer"></textarea>
              <label for="message" 
                class="absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-4 z-10 origin-[0] peer-focus:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Message
              </label>
            </div>
          </div>
  
          <button type="submit" :disabled="isSubmitting"
            class="btn btn-primary w-full relative overflow-hidden group">
            <span class="relative z-10 flex items-center justify-center">
              <Icon icon="mdi:send" class="inline-block mr-2" width="18" />
              {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer' }}
            </span>
            <div class="absolute inset-0 h-full w-0 bg-black bg-opacity-20 transition-all duration-300 group-hover:w-full"></div>
          </button>
  
          <div v-if="formStatus.message" :class="[
            'alert',
            formStatus.type === 'success' ? 'alert-success' : 'alert-error'
          ]">
            <div class="flex items-center justify-center">
              <Icon 
                :icon="formStatus.type === 'success' ? 'mdi:check-circle' : 'mdi:alert-circle'" 
                class="mr-2" 
                width="20" 
              />
              {{ formStatus.message }}
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { gsap } from 'gsap';
  import { Icon } from '@iconify/vue';
  
  export default {
    name: 'ContactForm',
    components: {
      Icon
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
        }
      }
    },
    mounted() {
      // Input fields animation
      gsap.from('.input-group', {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.3
      });
  
      // Button animation
      gsap.from('button', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        delay: 0.7
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
          gsap.from('.alert-success', {
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
          gsap.from('.alert-error', {
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
  /* All L-decoration styles now come from home-styles.css */
  /* borderPulse animation now in home-styles.css */
  /* input and alert styles now in main.css */
  
  /* Floating label styles */
  input:focus ~ label,
  input:not(:placeholder-shown) ~ label,
  textarea:focus ~ label,
  textarea:not(:placeholder-shown) ~ label {
    @apply transform -translate-y-6 scale-75 text-yellow-400;
  }
  
  /* Add a placeholder to make the floating label work */
  input::placeholder,
  textarea::placeholder {
    color: transparent;
  }
  </style>