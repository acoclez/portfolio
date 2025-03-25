<!-- src/views/ContactView.vue -->
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
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    v-model="form.firstName"
                    type="text"
                    placeholder="Prénom"
                    required
                    class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
                <div>
                  <input
                    v-model="form.lastName"
                    type="text"
                    placeholder="Nom"
                    required
                    class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
              </div>
              
              <div>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="Email"
                  required
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
              </div>
              
              <div>
                <textarea
                  v-model="form.message"
                  placeholder="Message"
                  required
                  rows="6"
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-y"
                ></textarea>
              </div>
              
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer' }}
              </button>
              
              <div v-if="formStatus.message" :class="[
                'p-4 rounded-lg text-center',
                formStatus.type === 'success' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
              ]">
                {{ formStatus.message }}
              </div>
            </form>
          </div>
          
          <!-- Social Links -->
          <div class="w-full md:w-2/5">
            <div class="p-8 bg-gray-800 rounded-lg">
              <h2 class="text-2xl font-bold mb-6">Retrouvez-moi aussi sur</h2>
              <div class="flex justify-center space-x-6">
                <a href="https://github.com/" target="_blank" class="transform transition hover:scale-110">
                  <img
                    src="/assets/img/socials/github.svg"
                    alt="GitHub"
                    class="w-12 h-12"
                  />
                </a>
                <a href="https://gitlab.com/" target="_blank" class="transform transition hover:scale-110">
                  <img
                    src="/assets/img/socials/gitlab.svg"
                    alt="GitLab"
                    class="w-12 h-12"
                  />
                </a>
                <a href="https://twitter.com/" target="_blank" class="transform transition hover:scale-110">
                  <img
                    src="/assets/img/socials/twitter.svg"
                    alt="Twitter"
                    class="w-12 h-12"
                  />
                </a>
              </div>
              <div class="mt-8">
                <p class="text-gray-300">
                  N'hésitez pas à me contacter pour discuter de vos projets ou simplement pour échanger sur le développement web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Call To Action -->
      <section class="py-16 px-4 bg-gray-800 mt-16">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4">Prêt à me faire confiance pour votre projet ?</h2>
          <p class="text-xl text-gray-300 mb-8">
            Contactez moi dès maintenant pour discuter de vos objectifs.
          </p>
          <img
            class="w-24 mx-auto mb-8"
            src="/assets/img/icons/wave.svg"
            alt="Wave Separator"
          />
          <router-link to="/contact" class="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition">
            <img
              class="w-5 h-5 mr-2"
              src="/assets/img/icons/hand.svg"
              alt="Contact Me Icon"
            />
            Me Contacter
          </router-link>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactView',
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
    methods: {
      async submitForm() {
        this.isSubmitting = true
        this.formStatus = { message: '', type: '' }
        
        try {
          // Simulation d'envoi de formulaire
          // Dans un environnement réel, vous utiliseriez un service de backend ou Netlify Forms
          await new Promise(resolve => setTimeout(resolve, 1500))
          
          // Simuler une réponse de succès
          this.formStatus = {
            message: 'Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.',
            type: 'success'
          }
          
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
        } finally {
          this.isSubmitting = false
        }
      }
    }
  }
  </script>