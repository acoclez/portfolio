<!-- src/components/home/CallToActionSection.vue -->
<template>
    <section ref="ctaSection" class="section-glow py-24 px-4 bg-gray-900 border-t border-gray-800 relative">
        <div class="max-w-4xl mx-auto text-center transform translate-y-10 opacity-0 relative">
            <!-- L top left -->
            <div class="absolute top-0 left-0 l-decoration"></div>

            <!-- L bottom right reversed -->
            <div class="absolute bottom-0 right-0 l-decoration-reversed"></div>

            <h2 class="text-3xl font-bold mb-4">Prêt à me faire confiance pour votre projet ?</h2>
            <p class="text-xl text-gray-400 mb-8">
                Écrivez-moi, ou jetez un œil à mon code.
            </p>
            <div class="w-24 h-1 mx-auto mb-8 bg-yellow-400"></div>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="mailto:contact@acoclez.dev?subject=Contact%20depuis%20votre%20portfolio"
                    class="inline-flex items-center px-8 py-4 rounded-none bg-yellow-400 hover:bg-yellow-300 text-black font-bold transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    <Icon icon="mdi:email-outline" class="w-5 h-5 mr-2" />
                    Me contacter
                </a>
                <a href="https://www.linkedin.com/in/acoclez/" target="_blank"
                    class="inline-flex items-center px-8 py-4 rounded-none bg-gray-800 hover:bg-gray-700 text-white font-bold border-2 border-yellow-400 transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    <Icon icon="mdi:linkedin" class="w-5 h-5 mr-2" />
                    LinkedIn
                </a>
                <a href="https://github.com/acoclez" target="_blank"
                    class="inline-flex items-center px-8 py-4 rounded-none bg-gray-800 hover:bg-gray-700 text-white font-bold border-2 border-yellow-400 transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    <Icon icon="mdi:github" class="w-5 h-5 mr-2" />
                    GitHub
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import { Icon } from '@iconify/vue';
import { useAnimations } from '@/composables/useAnimations';

export default {
    name: 'CallToActionSection',
    components: {
        Icon
    },
    mounted() {
        const { animateOnScroll } = useAnimations();

        animateOnScroll(this.$refs.ctaSection.firstChild, this.$refs.ctaSection, { duration: 1 });
    }
}
</script>
