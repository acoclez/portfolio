<!-- src/components/home/CallToActionSection.vue -->
<template>
    <section ref="ctaSection" class="py-24 px-4 bg-gradient-to-b from-gray-900 to-black relative">
        <div class="max-w-4xl mx-auto text-center transform translate-y-10 opacity-0 relative">
            <!-- L top left -->
            <div class="absolute top-0 left-0 l-decoration"></div>

            <!-- L bottom right reversed -->
            <div class="absolute bottom-0 right-0 l-decoration-reversed"></div>

            <h2 class="text-3xl font-bold mb-4">Prêt à me faire confiance pour votre projet ?</h2>
            <p class="text-xl text-gray-400 mb-8">
                Retrouvez mes travaux et projets sur GitHub.
            </p>
            <div class="w-24 h-1 mx-auto mb-8 bg-yellow-400"></div>
            <a href="https://github.com/acoclez" target="_blank"
                class="inline-flex items-center px-8 py-4 rounded-none bg-yellow-400 hover:bg-yellow-300 text-black font-bold transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                <Icon icon="mdi:github" class="w-5 h-5 mr-2" />
                Voir sur GitHub
            </a>
        </div>
    </section>
</template>
  
<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/vue';

gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'CallToActionSection',
    components: {
        Icon
    },
    mounted() {
        gsap.to(this.$refs.ctaSection.firstChild, {
            scrollTrigger: {
                trigger: this.$refs.ctaSection,
                start: 'top 80%'
            },
            y: 0,
            opacity: 1,
            duration: 1
        });
    }
}
</script>