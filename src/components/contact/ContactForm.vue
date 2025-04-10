<!-- src/components/contact/ContactForm.vue -->
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
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-none focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white peer" />
                <label for="firstName" 
                  class="absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-4 z-10 origin-[0] peer-focus:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Prénom
                </label>
              </div>
            </div>
            <div class="input-group">
              <div class="relative">
                <input v-model="form.lastName" type="text" id="lastName" required
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-none focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white peer" />
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
                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-none focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white peer" />
              <label for="email" 
                class="absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-4 z-10 origin-[0] peer-focus:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email
              </label>
            </div>
          </div>
  
          <div class="input-group">
            <div class="relative">
              <textarea v-model="form.message" id="message" rows="6" required
                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-none focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white resize-y peer"></textarea>
              <label for="message" 
                class="absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-4 z-10 origin-[0] peer-focus:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Message
              </label>
            </div>
          </div>
  
          <button type="submit" :disabled="isSubmitting"
            class="w-full py-3 px-6 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-none transition disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-1 relative overflow-hidden group">
            <span class="relative z-10 flex items-center justify-center">
              <Icon icon="mdi:send" class="inline-block mr-2" width="18" />
              {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer' }}
            </span>
            <div class="absolute inset-0 h-full w-0 bg-black bg-opacity-20 transition-all duration-300 group-hover:w-full"></div>
          </button>
  
          <div v-if="formStatus.message" :class="[
            'p-4 rounded-none text-center',
            formStatus.type === 'success' ? 'bg-green-900 text-green-300 border-l-4 border-green-500' : 'bg-red-900 text-red-300 border-l-4 border-red-500'
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
  /* L decoration styles */
  .l-decoration-small {
    position: absolute;
    width: 30px;
    height: 30px;
  }
  
  .l-decoration-small::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: #F7DE3D;
    left: 0;
    top: 0;
  }
  
  .l-decoration-small::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #F7DE3D;
    left: 0;
    top: 0;
  }
  
  .l-decoration-small-reversed {
    position: absolute;
    width: 30px;
    height: 30px;
  }
  
  .l-decoration-small-reversed::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: #F7DE3D;
    right: 0;
    bottom: 0;
  }
  
  .l-decoration-small-reversed::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #F7DE3D;
    right: 0;
    bottom: 0;
  }
  
  /* Animation for the contact form */
  .border-l-4.border-yellow-400 {
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
  
  /* Form focus effects */
  input:focus, textarea:focus {
    box-shadow: 0 0 0 3px rgba(247, 222, 61, 0.3);
  }
  
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