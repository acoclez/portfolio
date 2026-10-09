<!-- src/components/home/TechnologiesSection.vue -->
<template>
    <section ref="techSection" class="py-24 px-4 bg-linear-to-b from-gray-900 to-black relative">
        <div class="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-black to-transparent"></div>
        <div class="max-w-6xl mx-auto relative">
            <!-- L top left -->
            <div class="absolute top-0 left-0 l-decoration"></div>

            <!-- L bottom right reversed -->
            <div class="absolute bottom-0 right-0 l-decoration-reversed"></div>

            <div class="relative flex flex-col items-center mb-14">
                <h2 ref="techTitle" class="text-3xl font-bold text-center mb-6 transform translate-y-10 opacity-0">
                    Compétences
                </h2>
            </div>
            <p ref="techDesc"
                class="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto transform translate-y-10 opacity-0">
                Les compétences que je possède et utilise régulièrement
            </p>

            <div ref="techGrid"
                class="grid grid-cols-2 md:grid-cols-3 gap-4 transform translate-y-20 opacity-0 max-w-3xl mx-auto">
                <div v-for="tech in technologies" :key="tech.name"
                    class="tech-item bg-gray-800 py-2 px-3 flex items-center transition-all duration-300 border-l-2 border-transparent hover:border-yellow-400 transform hover:-translate-y-1 hover:shadow-lg">
                    <Icon :icon="tech.icon" width="24" height="24" class="mr-3 shrink-0 text-yellow-400" />
                    <span class="font-medium text-sm whitespace-nowrap">{{ tech.name }}</span>
                </div>
            </div>

            <div ref="techCta" class="text-center mt-16 transform translate-y-10 opacity-0">
                <router-link to="/about"
                    class="inline-flex items-center px-6 py-3 rounded-none bg-gray-800 hover:bg-gray-700 text-white font-bold transition border-b-2 border-yellow-400 relative">
                    <Icon icon="mdi:circle-outline" class="w-5 h-5 mr-2 text-yellow-400" />
                    Voir le tableau
                </router-link>
            </div>
        </div>
    </section>
</template>
  
<script>
import { Icon } from '@iconify/vue';
import { technologies } from '@/data/technologies';
import { useAnimations } from '@/composables/useAnimations';

export default {
    name: 'TechnologiesSection',
    components: {
        Icon
    },
    data() {
        return {
            technologies
        }
    },
    mounted() {
        const { animateSection, animateOnScroll } = useAnimations();

        animateSection(this.$refs.techSection, {
            title: this.$refs.techTitle,
            description: this.$refs.techDesc,
            content: this.$refs.techGrid,
            cta: this.$refs.techCta
        });

        animateOnScroll('.tech-item', this.$refs.techGrid, {
            start: 'top 70%',
            stagger: 0.1,
            duration: 0.5,
            ease: 'power1.out'
        });
    }
}
</script>
  
<style scoped>
.tech-item {
    transition: transform 0.3s ease, border 0.3s ease, box-shadow 0.3s ease;
    min-width: 0;
}

.tech-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(247, 222, 61, 0.1);
}
</style>