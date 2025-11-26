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
                  class="input peer" placeholder=" " />
                <label for="firstName" 
                  class="absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-4 z-10 origin-left peer-focus:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Prénom
                </label>
              </div>
            </div>
            <div class="input-group">
              <div class="relative">
                <input v-model="form.lastName" type="text" id="lastName" required
                  class="input peer" placeholder=" " />
                <label for="lastName" 
                  class="absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-4 z-10 origin-left peer-focus:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Nom
                </label>
              </div>
            </div>
          </div>
  
          <div class="input-group">
            <div class="relative">
              <input v-model="form.email" type="email" id="email" required
                class="input peer" placeholder=" " />
              <label for="email" 
                class="absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-4 z-10 origin-left peer-focus:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email
              </label>
            </div>
          </div>
  
          <div class="input-group">
            <div class="relative">
              <textarea v-model="form.message" id="message" rows="6" required
                class="input resize-y peer" placeholder=" "></textarea>
              <label for="message" 
                class="absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-4 z-10 origin-left peer-focus:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Message
              </label>
            </div>
          </div>
  
          <button type="submit" :disabled="isSubmitting"
            class="btn btn-primary w-full relative overflow-hidden group">
            <span v-if="!isSubmitting" class="relative z-10 flex items-center justify-center">
              <Icon icon="mdi:send" class="inline-block mr-2" width="18" />
              Envoyer
            </span>
            <span v-else class="relative z-10 flex items-center justify-center">
              <LoadingSpinner size="20px" inline />
              <span class="ml-2">Envoi en cours...</span>
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
  import LoadingSpinner from '@/components/shared/LoadingSpinner.vue';
  
  export default {
    name: 'ContactForm',
    components: {
      Icon,
      LoadingSpinner
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
      gsap.from('.input-group', {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.3
      });
  
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
          await new Promise(resolve => setTimeout(resolve, 1500))
  
          this.formStatus = {
            message: 'Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.',
            type: 'success'
          }
  
          gsap.from('.alert-success', {
            y: 20,
            opacity: 0,
            duration: 0.5
          });
  
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
  /* Floating label styles */
  input:focus ~ label,
  input:not(:placeholder-shown) ~ label,
  textarea:focus ~ label,
  textarea:not(:placeholder-shown) ~ label {
    @apply transform -translate-y-6 scale-75 text-yellow-400;
  }
  </style>