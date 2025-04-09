<!-- src/components/contact/ContactForm.vue -->
<template>
    <div class="w-full">
        <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <input v-model="form.firstName" type="text" placeholder="Prénom" required
                        class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" />
                </div>
                <div>
                    <input v-model="form.lastName" type="text" placeholder="Nom" required
                        class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" />
                </div>
            </div>

            <div>
                <input v-model="form.email" type="email" placeholder="Email" required
                    class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" />
            </div>

            <div>
                <textarea v-model="form.message" placeholder="Message" required rows="6"
                    class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-y"></textarea>
            </div>

            <button type="submit" :disabled="isSubmitting"
                class="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition disabled:opacity-70 disabled:cursor-not-allowed">
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
</template>
  
<script>
export default {
    name: 'ContactForm',
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