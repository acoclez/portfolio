<!-- src/components/home/ProjectsPreviewSection.vue - REFACTORED -->
<template>
    <section ref="projectsSection" class="py-24 px-4 bg-black relative">
        <div class="max-w-6xl mx-auto relative">
            <!-- L top left -->
            <div class="absolute top-0 left-0 l-decoration"></div>

            <!-- L bottom right reversed -->
            <div class="absolute bottom-0 right-0 l-decoration-reversed"></div>

            <div class="relative flex flex-col items-center mb-14">
                <h2 ref="projectsTitle" class="text-3xl font-bold text-center mb-6 transform translate-y-10 opacity-0">
                    Projets</h2>
            </div>

            <p ref="projectsDesc"
                class="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto transform translate-y-10 opacity-0">
                Projets sur lesquels j'ai pu collaborer
            </p>

            <div ref="projectCard" class="grid grid-cols-1 gap-10 transform translate-y-20 opacity-0">
                <div
                    class="bg-gray-900 overflow-hidden shadow-2xl border-l-4 border-yellow-400 transition-all duration-300 hover:shadow-yellow-900/20 hover:shadow-2xl">
                    <div class="flex flex-col md:flex-row relative">
                        <!-- L bottom right reversed -->
                        <div class="absolute bottom-0 right-0 l-decoration-small-reversed"></div>

                        <div class="md:w-2/5 h-64 overflow-hidden">
                            <img src="/assets/img/AGRIPLUS.png" alt="Project Thumbnail"
                                class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                        </div>
                        <div class="md:w-3/5 p-8">
                            <h3 class="text-2xl font-bold mb-4">Agri+</h3>
                            <p class="text-gray-400 mb-6">Outil de gestion poussé pour les agriculteurs</p>

                            <div class="flex flex-wrap gap-2 mb-6">
                                <span class="px-3 py-1 text-sm bg-gray-800 text-yellow-400 border-l-2 border-yellow-400">
                                    <Icon icon="mdi:laravel" class="inline-block mr-1 text-yellow-400" width="16" />
                                    Laravel
                                </span>
                                <span class="px-3 py-1 text-sm bg-gray-800 text-yellow-400 border-l-2 border-yellow-400">
                                    <Icon icon="mdi:vuejs" class="inline-block mr-1 text-yellow-400" width="16" />
                                    Vue
                                </span>
                                <span class="px-3 py-1 text-sm bg-gray-800 text-yellow-400 border-l-2 border-yellow-400">
                                    <Icon icon="mdi:database" class="inline-block mr-1 text-yellow-400" width="16" />
                                    MySQL
                                </span>
                                <span class="px-3 py-1 text-sm bg-gray-800 text-yellow-400 border-l-2 border-yellow-400">
                                    <Icon icon="mdi:circle-slice-8" class="inline-block mr-1 text-yellow-400" width="16" />
                                    Ionic
                                </span>
                            </div>

                            <a href="#"
                                class="inline-block px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-none transition transform hover:-translate-y-1">
                                En savoir plus
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-gray-900 overflow-hidden shadow-2xl border-l-4 border-yellow-400 transition-all duration-300 hover:shadow-yellow-900/20 hover:shadow-2xl">
                    <div class="flex flex-col md:flex-row relative">
                        <!-- L bottom right reversed -->
                        <div class="absolute bottom-0 right-0 l-decoration-small-reversed"></div>
                        <div class="md:w-2/5 h-64 overflow-hidden">
                            <img src="/assets/img/VLIB.png" alt="Project Thumbnail"
                                class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                        </div>
                        <div class="md:w-3/5 p-8">
                            <h3 class="text-2xl font-bold mb-4">VLIB</h3>
                            <p class="text-gray-400 mb-6">Application mobile pour la gestion de parc de VLIB</p>

                            <div class="flex flex-wrap gap-2 mb-6">
                                <span class="px-3 py-1 text-sm bg-gray-800 text-yellow-400 border-l-2 border-yellow-400">
                                    <Icon icon="mdi:android-studio" class="inline-block mr-1 text-yellow-400" width="16" />
                                    Android Studio
                                </span>
                                <span class="px-3 py-1 text-sm bg-gray-800 text-yellow-400 border-l-2 border-yellow-400">
                                    <Icon icon="mdi:language-java" class="inline-block mr-1 text-yellow-400" width="16" />
                                    Java
                                </span>
                                <span class="px-3 py-1 text-sm bg-gray-800 text-yellow-400 border-l-2 border-yellow-400">
                                    <Icon icon="mdi:language-php" class="inline-block mr-1 text-yellow-400" width="16" />
                                    PHP
                                </span>
                                <span class="px-3 py-1 text-sm bg-gray-800 text-yellow-400 border-l-2 border-yellow-400">
                                    <Icon icon="mdi:database" class="inline-block mr-1 text-yellow-400" width="16" />
                                    MySQL
                                </span>
                            </div>

                            <a href="#"
                                class="inline-block px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-none transition transform hover:-translate-y-1">
                                En savoir plus
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div ref="projectsCta" class="text-center mt-16 transform translate-y-10 opacity-0">
                <router-link to="/projects"
                    class="inline-flex items-center px-6 py-3 rounded-none bg-gray-800 hover:bg-gray-700 text-white font-bold transition border-b-2 border-yellow-400">
                    <Icon icon="mdi:circle-outline" class="w-5 h-5 mr-2 text-yellow-400" />
                    Voir plus de projets
                </router-link>
            </div>
        </div>
    </section>
</template>
  
<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/vue';

gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'ProjectsPreviewSection',
    components: {
        Icon
    },
    mounted() {
        // Create animation timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: this.$refs.projectsSection,
                start: 'top 80%'
            }
        });

        tl.to(this.$refs.projectsTitle, {
            opacity: 1,
            y: 0,
            duration: 0.6
        })
            .to(this.$refs.projectsDesc, {
                opacity: 1,
                y: 0,
                duration: 0.6
            }, '-=0.4')
            .to(this.$refs.projectCard, {
                opacity: 1,
                y: 0,
                duration: 0.8
            }, '-=0.4')
            .to(this.$refs.projectsCta, {
                opacity: 1,
                y: 0,
                duration: 0.6
            }, '-=0.4');
    }
}
</script>
  
<style scoped>
/* L-decoration styles now come from home-styles.css */
/* borderPulse animation now in home-styles.css */
</style>