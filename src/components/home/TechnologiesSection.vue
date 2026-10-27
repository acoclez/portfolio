<!-- src/components/home/TechnologiesSection.vue -->
<template>
    <section ref="techSection" class="section-glow py-24 px-4 relative">
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

            <div ref="techGrid" class="transform translate-y-20 opacity-0 max-w-4xl mx-auto">
                <SkillsGrid />
            </div>

            <div ref="techCta" class="text-center mt-16 transform translate-y-10 opacity-0">
                <router-link to="/about"
                    class="inline-flex items-center px-6 py-3 rounded-none bg-gray-800 hover:bg-gray-700 text-white font-bold transition border-b-2 border-yellow-400 relative">
                    <Icon icon="mdi:circle-outline" class="w-5 h-5 mr-2 text-yellow-400" />
                    En savoir plus sur moi
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
import { Icon } from '@iconify/vue';
import SkillsGrid from '@/components/shared/SkillsGrid.vue';
import { useAnimations } from '@/composables/useAnimations';

export default {
    name: 'TechnologiesSection',
    components: {
        Icon,
        SkillsGrid
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
            stagger: 0.05,
            duration: 0.5,
            ease: 'power1.out'
        });
    }
}
</script>
