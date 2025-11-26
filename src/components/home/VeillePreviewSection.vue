<!-- src/components/home/VeillePreviewSection.vue -->
<template>
    <section ref="veilleSection" class="py-24 px-4 bg-gradient-to-b from-black to-gray-900 relative">
        <div class="max-w-6xl mx-auto relative">
            <!-- L top left -->
            <div class="absolute top-0 left-0 l-decoration"></div>

            <!-- L bottom right reversed -->
            <div class="absolute bottom-0 right-0 l-decoration-reversed"></div>

            <div class="relative flex flex-col items-center mb-14">
                <h2 ref="veilleTitle" class="text-3xl font-bold text-center mb-6 transform translate-y-10 opacity-0">Veille
                </h2>
            </div>

            <p ref="veilleDesc"
                class="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto transform translate-y-10 opacity-0">
                Ma veille technologique sur Laravel et son écosystème
            </p>

            <div ref="veilleGrid" class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 transform translate-y-20 opacity-0">
                <div
                    class="bg-gray-800 rounded-none p-6 border-t-4 border-yellow-400 transition-all duration-300 hover:shadow-yellow-900/20 hover:shadow-xl relative">
                    <h3 class="text-xl font-bold mb-4 flex items-center">
                        <Icon icon="mdi:newspaper-variant" class="mr-2 text-yellow-400" width="24" />
                        Laravel News
                    </h3>
                    <div class="space-y-3">
                        <a href="https://laravel-news.com/php-8-5" target="_blank"
                            class="block p-3 bg-gray-900 hover:bg-gray-700 transition border-l-2 border-transparent hover:border-yellow-400">
                            <div class="font-medium">PHP 8.5 Released with Pipe Operator</div>
                        </a>
                        <a href="https://laravel-news.com/livewire-4-beta" target="_blank"
                            class="block p-3 bg-gray-900 hover:bg-gray-700 transition border-l-2 border-transparent hover:border-yellow-400">
                            <div class="font-medium">Livewire 4 Beta Announcement</div>
                        </a>
                    </div>
                </div>

                <div
                    class="bg-gray-800 rounded-none p-6 border-t-4 border-yellow-400 transition-all duration-300 hover:shadow-yellow-900/20 hover:shadow-xl relative">
                    <h3 class="text-xl font-bold mb-4 flex items-center">
                        <Icon icon="mdi:package-variant" class="mr-2 text-yellow-400" width="24" />
                        Laravel Releases
                    </h3>
                    <div class="space-y-3">
                        <a href="https://laravel.com/docs/12.x/releases" target="_blank"
                            class="block p-3 bg-gray-900 hover:bg-gray-700 transition border-l-2 border-transparent hover:border-yellow-400">
                            <div class="font-medium">Laravel 12 Starter Kits Released</div>
                        </a>
                        <a href="https://medium.com/@jha.ameet/laravel-12-x-updates" target="_blank"
                            class="block p-3 bg-gray-900 hover:bg-gray-700 transition border-l-2 border-transparent hover:border-yellow-400">
                            <div class="font-medium">Laravel 12.8 Auto Eager Loading</div>
                        </a>
                    </div>
                </div>
            </div>

            <div ref="veilleCta" class="text-center transform translate-y-10 opacity-0">
                <router-link to="/veille"
                    class="inline-flex items-center px-6 py-3 rounded-none bg-gray-800 hover:bg-gray-700 text-white font-bold transition border-b-2 border-yellow-400">
                    <Icon icon="mdi:circle-outline" class="w-5 h-5 mr-2 text-yellow-400" />
                    Voir toute ma veille
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
    name: 'VeillePreviewSection',
    components: {
        Icon
    },
    mounted() {
        // Create animation timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: this.$refs.veilleSection,
                start: 'top 80%'
            }
        });

        tl.to(this.$refs.veilleTitle, {
            opacity: 1,
            y: 0,
            duration: 0.6
        })
            .to(this.$refs.veilleDesc, {
                opacity: 1,
                y: 0,
                duration: 0.6
            }, '-=0.4')
            .to(this.$refs.veilleGrid, {
                opacity: 1,
                y: 0,
                duration: 0.8
            }, '-=0.4')
            .to(this.$refs.veilleCta, {
                opacity: 1,
                y: 0,
                duration: 0.6
            }, '-=0.4');
    }
}
</script>
  
<style scoped>
/* All styles from home-styles.css */
</style>