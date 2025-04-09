<!-- src/components/shared/CallToActionSection.vue -->
<template>
    <section class="py-16 px-4 bg-gray-800 mt-16">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-4">Prêt à me faire confiance pour votre projet ?</h2>
            <p class="text-xl text-gray-300 mb-8">
                Contactez moi dès maintenant pour discuter de vos objectifs.
            </p>
            <img class="w-24 mx-auto mb-8" src="/assets/img/icons/wave.svg" alt="Wave Separator" />
            <router-link to="/contact"
                class="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition">
                <img class="w-5 h-5 mr-2" src="/assets/img/icons/hand.svg" alt="Contact Me Icon" />
                Me Contacter
            </router-link>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'CallToActionSection'
}
</script>