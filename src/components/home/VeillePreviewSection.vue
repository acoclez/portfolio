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
                Présentation de ma veille technologique sur Spring
            </p>

            <div ref="veilleGrid" class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 transform translate-y-20 opacity-0">
                <div
                    class="bg-gray-800 rounded-none p-6 border-t-4 border-yellow-400 transition-all duration-300 hover:shadow-yellow-900/20 hover:shadow-xl relative">
                    <h3 class="text-xl font-bold mb-4 flex items-center">
                        <Icon icon="mdi:leaf" class="mr-2 text-yellow-400" width="24" />
                        Spring Blog
                    </h3>
                    <div class="space-y-3">
                        <a href="https://spring.io/blog/2022/11/16/spring-framework-6-0-goes-ga" target="_blank"
                            class="block p-3 bg-gray-900 hover:bg-gray-700 transition border-l-2 border-transparent hover:border-yellow-400">
                            <div class="font-medium">Spring Framework 6.0 goes GA</div>
                        </a>
                        <a href="https://spring.io/blog/2022/11/24/spring-boot-3-0-is-now-ga" target="_blank"
                            class="block p-3 bg-gray-900 hover:bg-gray-700 transition border-l-2 border-transparent hover:border-yellow-400">
                            <div class="font-medium">Spring Boot 3.0 is now GA</div>
                        </a>
                    </div>
                </div>

                <div
                    class="bg-gray-800 rounded-none p-6 border-t-4 border-yellow-400 transition-all duration-300 hover:shadow-yellow-900/20 hover:shadow-xl relative">
                    <h3 class="text-xl font-bold mb-4 flex items-center">
                        <Icon icon="mdi:code-braces" class="mr-2 text-yellow-400" width="24" />
                        Spring Engineering
                    </h3>
                    <div class="space-y-3">
                        <a href="https://spring.io/blog/2022/12/15/upgrading-to-spring-boot-3-0" target="_blank"
                            class="block p-3 bg-gray-900 hover:bg-gray-700 transition border-l-2 border-transparent hover:border-yellow-400">
                            <div class="font-medium">Upgrading to Spring Boot 3.0</div>
                        </a>
                        <a href="https://spring.io/blog/2023/01/10/spring-modulith-1-0-rc1-released" target="_blank"
                            class="block p-3 bg-gray-900 hover:bg-gray-700 transition border-l-2 border-transparent hover:border-yellow-400">
                            <div class="font-medium">Spring Modulith 1.0 RC1 released</div>
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
/* L decoration styles */
.l-decoration-small-reversed {
    position: absolute;
    width: 30px;
    height: 30px;
}

.l-decoration-small-reversed::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: #F7DE3D;
    right: 0;
    bottom: 0;
}

.l-decoration-small-reversed::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #F7DE3D;
    right: 0;
    bottom: 0;
}

.l-decoration-small-reversed.top-right::before {
    right: 0;
    top: 0;
}

.l-decoration-small-reversed.top-right::after {
    right: 0;
    top: 0;
}

</style>